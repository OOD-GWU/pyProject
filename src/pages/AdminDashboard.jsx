import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => navigate(path);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700">One Life Hospital</h1>
        <p className="text-gray-600 text-lg mt-2">Admin Dashboard</p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <div
          onClick={() => handleNavigate('/doctors')}
          className="bg-white rounded-xl shadow-xl p-8 border-2 border-blue-200 hover:border-blue-600 cursor-pointer hover:shadow-2xl transition min-h-[200px]"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">View All Doctors</h2>
          <p className="text-gray-600">Browse the complete list of doctors.</p>
        </div>

        <div
          onClick={() => handleNavigate('/patients')}
          className="bg-white rounded-xl shadow-xl p-8 border-2 border-green-200 hover:border-green-600 cursor-pointer hover:shadow-2xl transition min-h-[200px]"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-3">View All Patients</h2>
          <p className="text-gray-600">Browse the complete list of registered patients.</p>
        </div>

        <div
          onClick={() => handleNavigate('/nurse')}
          className="bg-white rounded-xl shadow-xl p-8 border-2 border-purple-200 hover:border-purple-600 cursor-pointer hover:shadow-2xl transition min-h-[200px]"
        >
          <h2 className="text-2xl font-semibold text-purple-700 mb-3">View All Nurses</h2>
          <p className="text-gray-600">Browse the complete list of nurses.</p>
        </div>

        <div
          onClick={() => handleNavigate('/create-user')}
          className="bg-white rounded-xl shadow-xl p-8 border-2 border-indigo-200 hover:border-indigo-600 cursor-pointer hover:shadow-2xl transition min-h-[200px]"
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-3">Add Doctor or Nurse</h2>
          <p className="text-gray-600">Create a new hospital staff account.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
