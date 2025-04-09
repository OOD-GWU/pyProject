import { Route, Routes, useLocation } from "react-router-dom";
import PatientSignin from "./pages/PatientSignIn";
import PatientSignUp from "./pages/PatientSignUp";
import Signin from "./pages/SignIn";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import PatientBilling from "./pages/PatientBilling";
import NurseDashboard from "./pages/NurseDashboard";
import CreateUser from "./pages/CreateUser";
import Nurse from "./pages/Nurse";
import Patients from "./pages/Patients";
import Doctors from "./pages/Doctors";
import Navbar from "./pages/Navbar";
import CreateBill from "./pages/CreateBill";
import ViewBill from "./pages/ViewBill";
import Prescription from "./pages/Prescription";
import ViewPrescriptions from "./pages/ViewPrescriptions";

function App() {
  const location = useLocation();
  const hideNavbarPaths = ["/", "/signUp", "/hospitalSignin"];
  const hideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signUp" element={<PatientSignUp />} />
        <Route path="/patientDashboard" element={<PatientDashboard />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/patientBilling" element={<PatientBilling />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/nurse" element={<Nurse />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/nursedashboard" element={<NurseDashboard />} />
        <Route path="/createBill" element={<CreateBill />} />
        <Route path="/viewbills" element={<ViewBill />} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/viewprescriptions" element={<ViewPrescriptions />} />
      </Routes>
    </>
  );
}

export default App;
