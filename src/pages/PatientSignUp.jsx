import React from "react";

const PatientSignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-3/4">
        <h2 className="text-center text-2xl font-bold mb-8">Patient Sign up</h2>
        <form>
          <div className="grid grid-cols-2 gap-8">
            <input 
              type="text" 
              name="name" 
              placeholder="First Name" 
              required 
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input 
              type="text" 
              name="name" 
              placeholder="Last Name" 
              required 
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              required 
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input 
              type="tel" 
              name="phone" 
              placeholder="Phone Number" 
              required 
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input 
              type="date" 
              name="dob" 
              required 
              className="w-full p-3 border border-gray-300 rounded"
            />
            <select 
              name="gender" 
              required 
              className="w-full p-3 border border-gray-300 rounded"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              required 
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input 
              type="password" 
              name="confirmPassword" 
              placeholder="Confirm Password" 
              required 
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <button 
            type="submit" 
            className="w-full mt-8 p-3 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientSignUp;
