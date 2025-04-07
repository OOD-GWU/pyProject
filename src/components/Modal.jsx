import React, { useState } from 'react';

const Modal = ({ role, selectedPatient, onClose, onSave }) => {
  const [prescription, setPrescription] = useState('');
  const [bill, setBill] = useState('');
  const [billDate, setBillDate] = useState('');

  const handleSave = () => {
    if (role === 'doctor') {
      onSave({ prescription });
    } else {
      onSave({ bill, billDate });
    }
  };

  const patientName = selectedPatient ? selectedPatient.name : 'Unknown Patient';

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-xl font-semibold mb-4">
          {role === 'doctor'
            ? `Add Prescription for ${patientName}`
            : `Add Bill for ${patientName}`}
        </h3>

        {/* Conditional Modal Content */}
        {role === 'doctor' ? (
          <>
            <textarea
              value={prescription}
              onChange={(e) => setPrescription(e.target.value)}
              placeholder="Enter Prescription"
              className="w-full p-2 border rounded-lg shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </>
        ) : (
          <>
            <input
              type="number"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              placeholder="Enter Bill Amount"
              className="w-full p-2 border rounded-lg shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              value={billDate}
              onChange={(e) => setBillDate(e.target.value)}
              className="w-full p-2 border rounded-lg shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </>
        )}

        <div className="flex justify-end space-x-4">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Save {role === 'doctor' ? 'Prescription' : 'Bill'}
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
