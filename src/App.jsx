import LandingPage from "./pages/landing.jsx";
import MembershipForm from "./pages/MembershipForm.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import { Routes, Route } from 'react-router-dom';

import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<MembershipForm />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
   </>
  )
}

export default App
