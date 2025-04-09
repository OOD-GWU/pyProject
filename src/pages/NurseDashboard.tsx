import React, { useState } from 'react';
import TableList from './TableList';
import { useNavigate } from 'react-router-dom';
import CalendlyEvents from './CalendlyEvents';

const NurseDashboard = () => {
  const [view, setView] = useState('');
  const navigate = useNavigate();

  const handleToggle = (section) => {
    setView(prev => prev === section ? '' : section);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-2">One Life Hospital</h1>
      <p className="text-gray-500 text-sm sm:text-base">Nurse Dashboard</p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        <button
          onClick={() => handleToggle('patients')}
          className={`w-full py-4 px-6 rounded-lg shadow transition ${
            view === 'patients' ? 'bg-green-700' : 'bg-green-600'
          } text-white hover:bg-green-700`}
        >
          {view === 'patients' ? 'Hide Patients' : 'View Patients'}
        </button>

        <button
          onClick={() => navigate('/createbill')}
          className="w-full py-4 px-6 rounded-lg shadow bg-yellow-600 text-white hover:bg-yellow-700 transition"
        >
          Create Bill
        </button>

        <button
          onClick={() => navigate('/viewbills')}
          className="w-full py-4 px-6 rounded-lg shadow bg-purple-600 text-white hover:bg-purple-700 transition"
        >
          View All Bills
        </button>
      </div>

      <div className="mt-6 w-full max-w-4xl">
        <button
          onClick={() => handleToggle('appointments')}
          className={`w-full py-4 px-6 rounded-lg shadow transition ${
            view === 'appointments' ? 'bg-blue-700' : 'bg-blue-600'
          } text-white hover:bg-blue-700 mt-4`}
        >
          {view === 'appointments' ? 'Hide Appointments' : 'View Appointments'}
        </button>
      </div>

      <div className="w-full max-w-5xl mt-12">
        {view === 'patients' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Patients</h3>
            <TableList role="patient" />
          </div>
        )}

        {view === 'appointments' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Appointments</h3>
            <CalendlyEvents />
          </div>
        )}
      </div>
    </div>
  );
};

export default NurseDashboard;
