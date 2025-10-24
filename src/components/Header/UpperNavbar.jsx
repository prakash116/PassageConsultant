import React from 'react';
import '../../styles/uppernavbar.css';
import { FaWhatsapp, FaPhone, FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const UpperNavbar = () => {
  return (
    <div className="upper-navbar">
      <div className="contact-info">
        <p>Have any questions?</p>
        <a href="tel:01146021515">
          <FaPhone size={16} />
          01146021515
        </a>
        <a href="https://wa.me/919711161513">
          <FaWhatsapp size={16} />
          +91-9711161513
        </a>
        <a href="mailto:info@passageconsultants.in">
          <span className="email-icon">✉</span>
          info@passageconsultants.in
        </a>
      </div>
      <div className="social-icons">
        <a href="https://x.com/passageconsult"><span style={{ fontWeight: 'bold', fontSize: 17 }}>X</span></a>
        <a href="https://www.facebook.com/passageconsultantsllp"><FaFacebook size={16} /></a>
        <a href="https://www.linkedin.com/in/kamalpreet-singh-kohli-57451416/"><FaLinkedin size={16} /></a>
        <a href="https://www.instagram.com/passageconsultants/#"><FaInstagram size={16} /></a>
        <a href="https://www.youtube.com/@PassageConsultants"><FaYoutube size={16} /></a>
      </div>
    </div>
  );
};

export default UpperNavbar;