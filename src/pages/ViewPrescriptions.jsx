import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ViewPrescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const res = await fetch("http://localhost:5000/prescriptions", {
          credentials: "include",
        });

        const data = await res.json();

        if (res.ok) {
          setPrescriptions(data.prescriptions || []);
        } else {
          Swal.fire("Error", data.error || "Failed to fetch prescriptions", "error");
        }
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "Something went wrong", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchPrescriptions();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-6">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Prescriptions</h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading prescriptions...</p>
        ) : prescriptions.length === 0 ? (
          <p className="text-center text-gray-500">No prescriptions available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-blue-100 text-blue-800">
                  <th className="py-3 px-6 text-left text-sm font-semibold">Patient Email</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold">Doctor Email</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold">Details</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                {prescriptions.map((p, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 even:bg-gray-50">
                    <td className="py-3 px-6">{p.patient_email}</td>
                    <td className="py-3 px-6">{p.doctor_email}</td>
                    <td className="py-3 px-6">{p.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewPrescriptions;
