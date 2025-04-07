import React from 'react'
import Name from '../components/Name'


const DoctorDashboard = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <Name />
      <div className='pt-10 flex gap-32'>
        <div className='border-2 p-4 rounded hover:cursor-pointer'>View Appointment</div>
        <div className='border-2 p-4 rounded hover:cursor-pointer'>Add Prescription</div>
        <div className='border-2 p-4 rounded hover:cursor-pointer'>View Billing</div>
      </div>
    </div>
  )
}

export default DoctorDashboard