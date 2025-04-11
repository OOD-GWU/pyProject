import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CreateBill = () => {
  const [formData, setFormData] = useState({
    patient_email: '',
    amount: 0.0,
    description: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/bill/create', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
        })
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire('Success', 'Bill created successfully', 'success');
        navigate('/nursedashboard');
      } else {
        Swal.fire('Error', data.error || 'Failed to create bill', 'error');
      }
    } catch (err) {
      console.error('Bill creation failed:', err);
      Swal.fire('Error', 'Something went wrong', 'error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Create Bill</h2>

        <input
          type="email"
          name="patient_email"
          placeholder="Patient Email"
          value={formData.patient_email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded mb-4"
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded mb-4"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded mb-4"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBill;