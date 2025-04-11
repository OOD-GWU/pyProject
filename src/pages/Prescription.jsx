import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddPrescription = () => {
  const [formData, setFormData] = useState({
    patient_email: '',
    details: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.patient_email || !formData.details) {
      return Swal.fire('Error', 'Please fill all fields', 'error');
    }

    try {
      const res = await fetch("http://localhost:5001/prescriptions", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire("Success", "Prescription added", "success").then(() => {
          navigate("/doctor");
        });
      } else {
        Swal.fire("Error", data.error || "Failed to add prescription", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-700">Add Prescription</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="patient_email"
            placeholder="Patient Email"
            value={formData.patient_email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="details"
            rows="5"
            placeholder="Prescription Details"
            value={formData.details}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPrescription;
