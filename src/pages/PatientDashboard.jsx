import React from 'react'
import Name from '../components/Name'
import { PopupButton } from "react-calendly";

const PatientDashboard = () => {
  const url = import.meta.env.VITE_CALENDLY_URL

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
        <div className='border-2 p-4 rounded hover:cursor-pointer'>View Appointment</div>
        <div className='border-2 p-4 rounded hover:cursor-pointer'>View Billing</div>
      </div>
      <div> 
      </div>
    </div>
  )
}

export default PatientDashboard