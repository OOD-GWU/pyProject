import React, { useState } from 'react';
import { PopupButton } from "react-calendly";
import ShowAppointment from '../components/ShowAppoitment';
import { useNavigate } from "react-router-dom";

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
      <p className="text-gray-500 text-sm sm:text-base mb-12">Patient Dashboard</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-4xl">
        <div
          className="bg-white border-2 border-blue-200 hover:border-blue-600 rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Book Appointment</h2>
          <p className="text-gray-600 mb-4">Schedule a new consultation with a doctor.</p>
          <PopupButton
            url={url}
            rootElement={document.getElementById("root")}
            text="Book Now"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          />
        </div>

        <div
          onClick={handleViewAppointmentClick}
          className="bg-white border-2 border-green-200 hover:border-green-600 rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-green-700 mb-2">View Appointments</h2>
          <p className="text-gray-600">{showAppointmentDetails ? "Hide your scheduled appointments." : "See your upcoming appointments."}</p>
        </div>

        <div
          onClick={() => navigate("/patientbilling")}
          className="bg-white border-2 border-purple-200 hover:border-purple-600 rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-purple-700 mb-2">Billing Information</h2>
          <p className="text-gray-600">Check your hospital billing and invoices.</p>
        </div>

        <div
          onClick={() => navigate("/viewprescriptions")}
          className="bg-white border-2 border-red-200 hover:border-red-600 rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-red-700 mb-2">Prescriptions</h2>
          <p className="text-gray-600">View your prescribed medicines and dosage.</p>
        </div>
      </div>

      {showAppointmentDetails && (
        <div className="w-full max-w-4xl mt-12">
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Your Appointments</h3>
            <ShowAppointment />
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientDashboard;
