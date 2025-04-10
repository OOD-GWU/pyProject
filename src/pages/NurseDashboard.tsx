import React from 'react';
import { useNavigate } from 'react-router-dom';

const NurseDashboard = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => navigate(path);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700">One Life Hospital</h1>
        <p className="text-gray-600 text-lg mt-2">Nurse Dashboard</p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <div
          onClick={() => handleNavigate('/patients')}
          className="bg-white rounded-xl shadow-xl p-8 border-2 border-green-200 hover:border-green-600 cursor-pointer hover:shadow-2xl transition min-h-[200px]"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-3">View Patients</h2>
          <p className="text-gray-600 text-base">Manage and monitor patient information.</p>
        </div>

        <div
          onClick={() => handleNavigate('/createbill')}
          className="bg-white rounded-xl shadow-xl p-8 border-2 border-yellow-200 hover:border-yellow-500 cursor-pointer hover:shadow-2xl transition min-h-[200px]"
        >
          <h2 className="text-2xl font-semibold text-yellow-700 mb-3">Create Bill</h2>
          <p className="text-gray-600 text-base">Generate billing records for treatments.</p>
        </div>

        <div
          onClick={() => handleNavigate('/viewbills')}
          className="bg-white rounded-xl shadow-xl p-8 border-2 border-purple-200 hover:border-purple-500 cursor-pointer hover:shadow-2xl transition min-h-[200px]"
        >
          <h2 className="text-2xl font-semibold text-purple-700 mb-3">View All Bills</h2>
          <p className="text-gray-600 text-base">Access and manage previous billing records.</p>
        </div>

        <div
          onClick={() => handleNavigate('/appointments')}
          className="bg-white rounded-xl shadow-xl p-8 border-2 border-blue-200 hover:border-blue-500 cursor-pointer hover:shadow-2xl transition min-h-[200px]"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">View Appointments</h2>
          <p className="text-gray-600 text-base">Check upcoming patient appointments.</p>
        </div>
      </div>
    </div>
  );
};

export default NurseDashboard;
