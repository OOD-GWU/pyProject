import { Route, Routes } from "react-router-dom"
import PatientSignin from "./pages/PatientSignIn"
import PatientSignUp from "./pages/PatientSignUp"
import Signin from "./pages/SignIn"

function App() {

  return (
    <Routes>
      <Route path="/" element={<PatientSignin />} />
      <Route path="/signUp" element={<PatientSignUp />} />
      <Route path="/hospitalSignin" element={<Signin />} />
    </Routes>
  )
}

export default App
