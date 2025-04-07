import React, { useState } from "react";
import { Link } from 'react-router-dom';
import img from "../assets/image.jpg";

const Signin = () => {
  const [role, setRole] = useState("patient");

  return (
    <div className="flex h-screen w-screen bg-gray-100 relative">  
    <div className="absolute top-8 right-8">
            <Link 
              to="/" 
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Patient Sign In
            </Link>
          </div>    
      <div className="w-1/2">
        <img 
          src={img} 
          alt="Healthcare" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="w-1/2 flex justify-center items-center p-6">
        <div className="p-6 w-3/4">
          <h2 className="text-center text-4xl font-semibold mb-8">Hospital Sign In</h2>
          <select 
           value={role} 
           onChange={(e) => setRole(e.target.value)} 
           className="w-full p-3 mb-4 border border-gray-300 rounded"
         >
           <option value="">Select Role</option>
           <option value="admin">Admin</option>
           <option value="nurse">Nurse</option>
           <option value="doctor">Doctor</option>
         </select>
          <form>
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              required 
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              required 
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <button 
              type="submit" 
              className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Signin;