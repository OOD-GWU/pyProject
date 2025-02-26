import React, { useState } from "react";

const Signin = () => {
  const [role, setRole] = useState("patient");

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
        <h2 className="text-center text-2xl font-bold mb-4">Sign In</h2>
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
            className="w-full p-3 mb-3 border border-gray-300 rounded"
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            required 
            className="w-full p-3 mb-3 border border-gray-300 rounded"
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
  );
};

export default Signin;