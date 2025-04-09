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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-5xl">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-700">Prescriptions</h2>
        {loading ? (
          <p className="text-center">Loading prescriptions...</p>
        ) : prescriptions.length === 0 ? (
          <p className="text-center text-gray-500">No prescriptions available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="py-2 px-4">Patient Email</th>
                  <th className="py-2 px-4">Doctor Email</th>
                  <th className="py-2 px-4">Details</th>
                </tr>
              </thead>
              <tbody>
                {prescriptions.map((p, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{p.patient_email}</td>
                    <td className="py-2 px-4">{p.doctor_email}</td>
                    <td className="py-2 px-4">{p.details}</td>
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
