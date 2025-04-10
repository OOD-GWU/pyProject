import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorDashboard = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => navigate(path);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700">One Life Hospital</h1>
        <p className="text-gray-600 text-lg mt-2">Doctor Dashboard</p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div
          onClick={() => handleNavigate('/appointments')}
          className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-200 hover:border-blue-600 cursor-pointer hover:shadow-xl transition"
        >
          <h2 className="text-xl font-semibold text-blue-700 mb-2">View Appointments</h2>
          <p className="text-gray-600">Check scheduled appointments via Calendly integration.</p>
        </div>

        <div
          onClick={() => handleNavigate('/patients')}
          className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200 hover:border-green-600 cursor-pointer hover:shadow-xl transition"
        >
          <h2 className="text-xl font-semibold text-green-700 mb-2">View Patients</h2>
          <p className="text-gray-600">Access the list of assigned or admitted patients.</p>
        </div>

        <div
          onClick={() => handleNavigate('/nurse')}
          className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-200 hover:border-purple-600 cursor-pointer hover:shadow-xl transition"
        >
          <h2 className="text-xl font-semibold text-purple-700 mb-2">View Nurses</h2>
          <p className="text-gray-600">View all nurses working under your department.</p>
        </div>

        <div
          onClick={() => handleNavigate('/prescription')}
          className="bg-white rounded-xl shadow-lg p-6 border-2 border-red-200 hover:border-red-600 cursor-pointer hover:shadow-xl transition"
        >
          <h2 className="text-xl font-semibold text-red-600 mb-2">Add Prescription</h2>
          <p className="text-gray-600">Write and submit new prescriptions for patients.</p>
        </div>

        <div
          onClick={() => handleNavigate('/viewprescriptions')}
          className="bg-white rounded-xl shadow-lg p-6 border-2 border-indigo-200 hover:border-indigo-600 cursor-pointer hover:shadow-xl transition"
        >
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">View Prescriptions</h2>
          <p className="text-gray-600">Review all submitted prescriptions.</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
