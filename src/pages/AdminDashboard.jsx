import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => navigate(path);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-2">One Life Hospital</h1>
      <p className="text-gray-500 text-sm sm:text-base mb-12">Admin Dashboard</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        <div
          onClick={() => handleNavigate('/doctors')}
          className="bg-white border-2 border-blue-200 hover:border-blue-600 rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-blue-700 mb-2">View All Doctors</h2>
          <p className="text-gray-600">Browse the complete list of doctors.</p>
        </div>

        <div
          onClick={() => handleNavigate('/patients')}
          className="bg-white border-2 border-green-200 hover:border-green-600 rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-green-700 mb-2">View All Patients</h2>
          <p className="text-gray-600">Browse the complete list of registered patients.</p>
        </div>

        <div
          onClick={() => handleNavigate('/nurse')}
          className="bg-white border-2 border-purple-200 hover:border-purple-600 rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-purple-700 mb-2">View All Nurses</h2>
          <p className="text-gray-600">Browse the complete list of nurses.</p>
        </div>

        <div
          onClick={() => handleNavigate('/create-user')}
          className="bg-white border-2 border-indigo-200 hover:border-indigo-600 rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">Add Doctor or Nurse</h2>
          <p className="text-gray-600">Create a new hospital staff account.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
