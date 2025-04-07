import React, { useState } from 'react'
import Name from '../components/Name'
import { PopupButton } from "react-calendly";
import CalendlyEvents from './CalendlyEvents';
import PatientsList from '../components/Patients';

const Nurse = () => {
  const url = import.meta.env.VITE_CALENDLY_URL
  const [showAppointmentDetails, setShowAppointmentDetails] = useState(false);
  const [showPatients, setShowPatients] = useState(false);

  const handleShowPatients = () => {
    setShowAppointmentDetails(false); 
    setShowPatients((prev) => !prev); 
  };

  const handleViewAppointmentClick = () => {
    setShowPatients(false);
    setShowAppointmentDetails((prev) => !prev);
  };

  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <Name />
      <div className='pt-10 flex gap-32'>
        <PopupButton
          url={url}
          rootElement={document.getElementById("root")}
          className='border-2 p-4 rounded hover:cursor-pointer'
          text="Book Appointment"
        />
        <div 
          className='border-2 p-4 rounded hover:cursor-pointer' 
          onClick={handleViewAppointmentClick}
        >
          View Appointment
        </div>
        <div 
          className='border-2 p-4 rounded hover:cursor-pointer' 
          onClick={handleShowPatients}
        >
          View Patients
        </div>
      </div>
      <div> 
      </div>


      <div className='w-2/3 pt-20'>
        {showAppointmentDetails && <CalendlyEvents />}
        {showPatients && <PatientsList />}
      </div>
    </div>
  )
}

export default Nurse