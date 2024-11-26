import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import Home from "./pages/Home";
import OurCourses from "./pages/courses";
import ContactUs from "./pages/contact";
import OurService from "./pages/services";
import AboutUs from "./pages/aboutus";
import RefundCancelPolicy from "./pages/cancelandrefund";
import TermsConditions from "./pages/termsandconstion";
import Privacypolicy from "./pages/privacyPolicy";

// const Home = () => <h1 className="text-2xl font-bold text-center mt-10">Home Page</h1>;
const About = () => <h1 className="text-2xl font-bold text-center mt-10">About Page</h1>;
const Contact = () => <h1 className="text-2xl font-bold text-center mt-10">Contact Page</h1>;

function App() {
  return (
    <Router>
    <Navbar/>
      {/* <nav className="bg-gray-800 text-white p-4">
        <ul className="flex justify-center space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-courses" element={<OurCourses />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-services" element={<OurService />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/refund-cancel-policy" element={<RefundCancelPolicy />} />
        <Route path="/terms&conditions" element={<TermsConditions />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
