import React, { useState } from "react";
import logo from '../assets/logo.png'

const Name = () => {
    const [profile, setProfile] = useState({
        Name: "Delicious Bites",
        Role: "John Doe",
      });
  return (
    <div className="flex items-center pt-12 gap-5">
          <img
            src={logo}
            alt='logo'
            className="w-32 h-20 rounded-full object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{profile.Name}</h1>
            <p className="text-lg text-gray-600">{profile.Role}</p>
          </div>
    </div>
  )
}

export default Name