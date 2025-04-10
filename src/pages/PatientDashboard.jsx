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
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700">One Life Hospital</h1>
        <p className="text-gray-600 text-lg mt-2">Patient Dashboard</p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-blue-200 hover:border-blue-600 transition hover:shadow-2xl min-h-[200px]">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Book Appointment</h2>
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
          className="bg-white rounded-xl shadow-xl p-8 border-2 border-green-200 hover:border-green-600 transition hover:shadow-2xl cursor-pointer min-h-[200px]"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-3">View Appointments</h2>
          <p className="text-gray-600">{showAppointmentDetails ? "Hide your scheduled appointments." : "See your upcoming appointments."}</p>
        </div>

        <div
          onClick={() => navigate("/patientbilling")}
          className="bg-white rounded-xl shadow-xl p-8 border-2 border-purple-200 hover:border-purple-600 transition hover:shadow-2xl cursor-pointer min-h-[200px]"
        >
          <h2 className="text-2xl font-semibold text-purple-700 mb-3">Billing Information</h2>
          <p className="text-gray-600">Check your hospital billing and invoices.</p>
        </div>

        <div
          onClick={() => navigate("/viewprescriptions")}
          className="bg-white rounded-xl shadow-xl p-8 border-2 border-red-200 hover:border-red-600 transition hover:shadow-2xl cursor-pointer min-h-[200px]"
        >
          <h2 className="text-2xl font-semibold text-red-700 mb-3">Prescriptions</h2>
          <p className="text-gray-600">View your prescribed medicines and dosage.</p>
        </div>
      </div>

      {showAppointmentDetails && (
        <div className="w-full max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Your Appointments</h3>
            <ShowAppointment />
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientDashboard;
