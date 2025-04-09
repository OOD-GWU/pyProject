import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PatientBilling = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await fetch("http://localhost:5000/bill", {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();

        if (response.ok) {
          setBills(data.bills);
        } else {
          console.error("Failed to fetch bills:", data.error);
        }
      } catch (err) {
        console.error("Error fetching bills:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBills();
  }, []);

  return (
    <div className="p-10 min-h-screen bg-gray-50 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-green-700 mb-8">Your Billing History</h2>

      {loading ? (
        <p className="text-lg text-gray-600">Loading bills...</p>
      ) : bills.length === 0 ? (
        <p className="text-gray-500 text-lg">No bills available.</p>
      ) : (
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden mb-10">
          <table className="min-w-full table-auto">
            <thead className="bg-green-100 text-green-900 text-sm uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 text-left">Description</th>
                <th className="px-6 py-4 text-left">Amount</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {bills.map((bill) => (
                <tr key={bill._id} className="border-b hover:bg-gray-100 transition">
                  <td className="px-6 py-3">{bill.description}</td>
                  <td className="px-6 py-3">$ {bill.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <button
        onClick={() => navigate("/patientDashboard")}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        ← Back to Dashboard
      </button>
    </div>
  );
};

export default PatientBilling;
