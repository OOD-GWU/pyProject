import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CalendlyEvents from './CalendlyEvents';
import TableList from './TableList';

const DoctorDashboard = () => {
  const [view, setView] = useState('');
  const navigate = useNavigate();

  const handleToggle = (type) => {
    setView(prev => prev === type ? '' : type);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-2">One Life Hospital</h1>
      <p className="text-gray-500 text-sm sm:text-base">Doctor Dashboard</p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-5 gap-6 w-full max-w-6xl">
        <button
          onClick={() => handleToggle('appointments')}
          className={`w-full py-4 px-6 rounded-lg shadow transition ${
            view === 'appointments' ? 'bg-blue-700' : 'bg-blue-600'
          } text-white hover:bg-blue-700`}
        >
          {view === 'appointments' ? "Hide Appointments" : "View Appointments"}
        </button>

        <button
          onClick={() => handleToggle('patients')}
          className={`w-full py-4 px-6 rounded-lg shadow transition ${
            view === 'patients' ? 'bg-green-700' : 'bg-green-600'
          } text-white hover:bg-green-700`}
        >
          {view === 'patients' ? "Hide Patients" : "View Patients"}
        </button>

        <button
          onClick={() => handleToggle('nurses')}
          className={`w-full py-4 px-6 rounded-lg shadow transition ${
            view === 'nurses' ? 'bg-purple-700' : 'bg-purple-600'
          } text-white hover:bg-purple-700`}
        >
          {view === 'nurses' ? "Hide Nurses" : "View Nurses"}
        </button>

        <button
          onClick={() => navigate("/prescription")}
          className="w-full py-4 px-6 rounded-lg shadow bg-red-600 text-white hover:bg-red-700 transition"
        >
          Add Prescription
        </button>

        <button
          onClick={() => navigate("/viewprescriptions")}
          className="w-full py-4 px-6 rounded-lg shadow bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          View Prescriptions
        </button>
      </div>

      <div className="w-full max-w-5xl mt-12">
        {view === 'appointments' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Appointments</h3>
            <CalendlyEvents />
          </div>
        )}

        {view === 'patients' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Patients</h3>
            <TableList role="patient" />
          </div>
        )}

        {view === 'nurses' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Nurses</h3>
            <TableList role="nurse" />
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorDashboard;
