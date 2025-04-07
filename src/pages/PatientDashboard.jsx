import React, { useState } from 'react'
import Name from '../components/Name'
import { PopupButton } from "react-calendly";
import ShowAppointment from '../components/ShowAppoitment';

const PatientDashboard = () => {
  const url = import.meta.env.VITE_CALENDLY_URL
  const [showAppointmentDetails, setShowAppointmentDetails] = useState(false);

  const handleViewAppointmentClick = () => {
    setShowAppointmentDetails((prev) => !prev); // Toggle visibility
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
        <div className='border-2 p-4 rounded hover:cursor-pointer'>View Billing</div>
      </div>
      <div> 
      </div>


      <div className='w-2/3 pt-20'>
        {showAppointmentDetails && <ShowAppointment />}
      </div>
    </div>
  )
}

export default PatientDashboard