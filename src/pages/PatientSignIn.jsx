import React from "react";
import { Link } from 'react-router-dom';
import img from "../assets/image.jpg";

const PatientSignin = () => {
  return (
    <div className="flex h-screen w-screen bg-gray-100 relative">
      {/* Hospital Sign In Button */}
      <div className="absolute top-8 right-8">
        <Link 
          to="/hospitalSignin" 
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Hospital Sign In
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
          <h2 className="text-center text-4xl font-semibold mb-8">Patient Sign In</h2>
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
          <div className="text-center mt-4">
            <p>Don't have an account?</p>
            <Link 
                to='/signUp'
                className="block mt-4 p-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white text-center"
                >
                    Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientSignin;