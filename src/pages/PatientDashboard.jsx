import React, { useState } from 'react';
import { PopupButton } from "react-calendly";
import ShowAppointment from '../components/ShowAppoitment';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const PatientDashboard = () => {
  const url = import.meta.env.VITE_CALENDLY_URL;
  const [showAppointmentDetails, setShowAppointmentDetails] = useState(false);
  const navigate = useNavigate(); 

  const handleViewAppointmentClick = () => {
    setShowAppointmentDetails((prev) => !prev); 
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-2">One Life Hospital</h1>
      <p className="text-gray-500 text-sm sm:text-base">Welcome to your patient dashboard</p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-4 gap-8 w-full max-w-5xl">
        <PopupButton
          url={url}
          rootElement={document.getElementById("root")}
          className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg shadow hover:bg-blue-700 transition"
          text="Book Appointment"
        />

        <button 
          onClick={handleViewAppointmentClick}
          className="w-full bg-green-600 text-white py-4 px-6 rounded-lg shadow hover:bg-green-700 transition"
        >
          {showAppointmentDetails ? "Hide Appointments" : "View Appointments"}
        </button>

        <button 
          onClick={() => navigate("/patientbilling")} 
          className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg shadow hover:bg-purple-700 transition"
        >
          View Billing
        </button>

        <button 
          onClick={() => navigate("/viewprescriptions")}
          className="w-full bg-red-600 text-white py-4 px-6 rounded-lg shadow hover:bg-red-700 transition"
        >
          View Prescriptions
        </button>
      </div>

      <div className="w-full max-w-4xl mt-12">
        {showAppointmentDetails && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Your Appointments</h3>
            <ShowAppointment />
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientDashboard;
