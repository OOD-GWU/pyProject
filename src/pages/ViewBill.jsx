import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ViewBills = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await fetch('http://localhost:5001/bill/all', {
          method: 'GET',
          credentials: 'include'
        });

        const data = await response.json();

        if (response.ok) {
          setBills(data.bills);
        } else {
          Swal.fire('Error', data.error || 'Failed to fetch bills', 'error');
        }
      } catch (err) {
        console.error('Error fetching bills:', err);
        Swal.fire('Error', 'Something went wrong', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchBills();
  }, []);

  const markAsPaid = async (billId) => {
    try {
      const response = await fetch(`http://localhost:5001/bill/${billId}/status`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'paid' })
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire('Success', 'Bill marked as paid', 'success');
        setBills((prev) =>
          prev.map((bill) =>
            bill._id === billId ? { ...bill, status: 'paid' } : bill
          )
        );
      } else {
        Swal.fire('Error', data.error || 'Failed to update bill', 'error');
      }
    } catch (err) {
      console.error('Error updating bill:', err);
      Swal.fire('Error', 'Something went wrong', 'error');
    }
  };

  const filteredBills = filterStatus === "all"
    ? bills
    : bills.filter(bill => bill.status === filterStatus);

  return (
    <div className="p-8 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6 text-center">All Bills</h2>

      <div className="mb-6 flex gap-4">
        <button
          onClick={() => setFilterStatus("all")}
          className={`px-4 py-2 rounded ${filterStatus === "all" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          All
        </button>
        <button
          onClick={() => setFilterStatus("paid")}
          className={`px-4 py-2 rounded ${filterStatus === "paid" ? "bg-green-600 text-white" : "bg-gray-200"}`}
        >
          Paid
        </button>
        <button
          onClick={() => setFilterStatus("unpaid")}
          className={`px-4 py-2 rounded ${filterStatus === "unpaid" ? "bg-red-600 text-white" : "bg-gray-200"}`}
        >
          Unpaid
        </button>
      </div>

      {loading ? (
        <p className="text-center">Loading bills...</p>
      ) : filteredBills.length === 0 ? (
        <p className="text-center text-gray-500">No bills available.</p>
      ) : (
        <div className="overflow-x-auto w-full max-w-5xl">
          <table className="min-w-full bg-white shadow rounded">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="py-3 px-6">Patient</th>
                <th className="py-3 px-6">Description</th>
                <th className="py-3 px-6">Amount</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredBills.map((bill) => (
                <tr key={bill._id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-6">{bill.patient_email}</td>
                  <td className="py-2 px-6">{bill.description}</td>
                  <td className="py-2 px-6">$ {bill.amount}</td>
                  <td className="py-2 px-6 capitalize">{bill.status || 'unpaid'}</td>
                  <td className="py-2 px-6">
                    {bill.status !== 'paid' && (
                      <button
                        onClick={() => markAsPaid(bill._id)}
                        className="bg-green-600 text-white py-1 px-4 rounded hover:bg-green-700"
                      >
                        Mark as Paid
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewBills;
