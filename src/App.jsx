import React, { useState, useEffect } from "react";
import UpperNavbar from "./components/Header/UpperNavbar";
import LowerNavbar from "./components/Header/LowerNavbar";
import Carousel from "./pages/Carousel";
import "./App.css";
import VisaCategoryHeader from "./pages/VisaCategoryHeader";
import VisaInfo from "./pages/VisaInfo";
import Footer from "./components/Footer/Footer";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import Student from "./pages/Student";
import Benefits from "./components/Hero/Benefits";
import Countries from "./components/Hero/Countries";
import EnquireNow from "./components/Hero/EnquireNow";
import OurServices from "./components/Hero/OurServices";
import GuideForVisa from "./pages/GuideForVisa";
import ContactUs from "./pages/Contact";
import About from "./pages/About";
import EnquiryModal from "./components/Hero/EnquiryModal";
import WhatsAppButton from "./components/Hero/WhatsAppButton";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Show modal after a delay when the page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 30000); // Show after 30 seconds

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <HashRouter>
      <div className="App">
        <UpperNavbar />
        <LowerNavbar openEnquiryModal={openModal} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <Student />
                <Benefits />
                <Countries />
                <EnquireNow openEnquiryModal={openModal} />
                <OurServices />
              </>
            }
          />
          <Route
            path="/visa/:country/:visaTitle"
            element={
              <>
                <VisaCategoryHeader />
                <VisaInfo />
              </>
            }
          />
          <Route path="/guide" element={<GuideForVisa />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Enquiry Modal */}
        <EnquiryModal isOpen={isModalOpen} onClose={closeModal} />

        {/* WhatsApp Floating Button */}
        <WhatsAppButton />
      </div>

      <Footer openEnquiryModal={openModal} />
    </HashRouter>
  );
}

export default App;
