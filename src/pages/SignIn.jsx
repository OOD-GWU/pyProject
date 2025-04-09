import React, { useState } from "react";
import img from "../assets/image.jpg";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Signin = () => {
  const [role, setRole] = useState("patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        credentials: "include", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          role,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          showConfirmButton: false,
          timer: 1500
        });

        if (role === "patient") navigate("/patientDashboard");
        else if (role === "admin") navigate("/admin");
        else if (role === "nurse") navigate("/nursedashboard");
        else if (role === "doctor") navigate("/doctor");
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: data.error || 'Invalid credentials',
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong',
        text: 'Please try again later.',
      });
    }
  };

  return (
    <div className="flex h-screen w-screen bg-gray-100 relative">  
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
            <option value="patient">Patient</option>
            <option value="admin">Admin</option>
            <option value="nurse">Nurse</option>
            <option value="doctor">Doctor</option>
          </select>

          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <button 
              type="submit" 
              className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Sign In
            </button>
          </form>

          {role === "patient" && (
            <div className="text-center mt-6">
              <p className="text-gray-600">Don't have an account?</p>
              <Link
                to="/signUp"
                className="mt-2 inline-block px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
              >
                Create Account
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;
