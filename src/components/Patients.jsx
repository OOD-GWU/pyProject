import React, { useState, useEffect } from 'react';
import Modal from './Modal';

// Mock data for patients
const initialPatients = [
  { id: 1, name: 'John Doe', prescription: '', bill: '', billDate: '' },
  { id: 2, name: 'Jane Smith', prescription: '', bill: '', billDate: '' },
  { id: 3, name: 'Bob Johnson', prescription: '', bill: '', billDate: '' },
];

const PatientsList = () => {
  const [patients, setPatients] = useState(initialPatients);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [role, setRole] = useState('');

  useEffect(() => {
    // const storedRole = localStorage.getItem('role');
    const storedRole = 'doctor'
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  const handleAddPrescription = (patientId) => {
    setSelectedPatient(patients.find((p) => p.id === patientId));
    setShowModal(true);
  };

  const handleAddBill = (patientId) => {
    setSelectedPatient(patients.find((p) => p.id === patientId));
    setShowModal(true);
  };

  const handleSavePrescription = ({ prescription }) => {
    setPatients(patients.map(patient =>
      patient.id === selectedPatient.id
        ? { ...patient, prescription }
        : patient
    ));
    setShowModal(false);
  };

  const handleSaveBill = ({ bill, billDate }) => {
    setPatients(patients.map(patient =>
      patient.id === selectedPatient.id
        ? { ...patient, bill, billDate }
        : patient
    ));
    setShowModal(false);
  };

  if (!role) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Patient List</h2>
      <ul className="space-y-4">
        {patients.map(patient => (
          <li key={patient.id} className="flex justify-between items-center p-4 border rounded-lg shadow-md">
            <div>
              <span className="font-medium text-lg">{patient.name}</span>
              {patient.prescription && (
                <span className="block text-sm text-gray-500 mt-1">Prescription: {patient.prescription}</span>
              )}
              {patient.bill && (
                <span className="block text-sm text-gray-500 mt-1">Bill: {patient.bill}</span>
              )}
            </div>
            <button 
              onClick={() => role === 'doctor' ? handleAddPrescription(patient.id) : handleAddBill(patient.id)} 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {role === 'doctor' ? 'Add Prescription' : 'Add Bill'}
            </button>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {showModal && (
        <Modal
          role={role}
          selectedPatient={selectedPatient}
          onClose={() => setShowModal(false)}
          onSave={role === 'doctor' ? handleSavePrescription : handleSaveBill}
        />
      )}
    </div>
  );
};

export default PatientsList;
