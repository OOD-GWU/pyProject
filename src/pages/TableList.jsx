import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const TableList = ({ role }) => {
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({ name: '', gender: '', age: '', email: '' });
  const [loggedInRole, setLoggedInRole] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const res = await fetch(`http://localhost:5000/auth/all/${role}`, {
      credentials: 'include',
    });
    const data = await res.json();
    if (res.ok) setUsers(data.users);
  };

  const fetchLoggedInUserRole = async () => {
    try {
      const res = await fetch('http://localhost:5000/auth/me', {
        credentials: 'include',
      });
      const data = await res.json();
      if (res.ok && data?.user?.role) {
        setLoggedInRole(data.user.role);
      }
    } catch (error) {
      console.error('Error fetching user role:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchLoggedInUserRole();
  }, [role]);

  const handleDelete = async (email) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    });

    if (confirm.isConfirmed) {
      const res = await fetch('http://localhost:5000/auth/delete-user', {
        method: 'DELETE',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (res.ok) {
        Swal.fire('Deleted!', '', 'success');
        fetchUsers();
      }
    }
  };

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(filters.name.toLowerCase()) &&
    u.email.toLowerCase().includes(filters.email.toLowerCase()) &&
    (filters.gender ? u.gender === filters.gender : true) &&
    (filters.age ? u.age.toString() === filters.age : true)
  );

  if (loading) {
    return <div className="text-center py-10 text-gray-600">Loading...</div>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{role.charAt(0).toUpperCase() + role.slice(1)}s</h2>

      <div className="grid grid-cols-4 gap-4 mb-4">
        <input
          placeholder="Filter by Name"
          value={filters.name}
          onChange={e => setFilters({ ...filters, name: e.target.value })}
          className="p-2 border rounded"
        />
        <input
          placeholder="Filter by Email"
          value={filters.email}
          onChange={e => setFilters({ ...filters, email: e.target.value })}
          className="p-2 border rounded"
        />
        <select
          value={filters.gender}
          onChange={e => setFilters({ ...filters, gender: e.target.value })}
          className="p-2 border rounded"
        >
          <option value="">Gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="O">Other</option>
        </select>
        <input
          placeholder="Filter by Age"
          value={filters.age}
          onChange={e => setFilters({ ...filters, age: e.target.value })}
          className="p-2 border rounded"
        />
      </div>

      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Gender</th>
            <th className="p-2 border">Age</th>
            {loggedInRole.toLowerCase() === 'admin' && <th className="p-2 border">Action</th>}
          </tr>
        </thead>
        <tbody>
          {filtered.map((u, i) => (
            <tr key={i} className="text-center">
              <td className="p-2 border">{u.name}</td>
              <td className="p-2 border">{u.email}</td>
              <td className="p-2 border">{u.gender}</td>
              <td className="p-2 border">{u.age}</td>
              {loggedInRole.toLowerCase() === 'admin' && (
                <td className="p-2 border">
                  <button
                    onClick={() => handleDelete(u.email)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
