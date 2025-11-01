import React from 'react';
import '../../styles/footer.css';
import logo from "../../assets/logo.png";
import { FaPhoneAlt, FaWhatsapp, FaCheckCircle, FaClock, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Tagline Section */}
        <div className="company-section">
          <div className="logo">
            <img src={logo} alt="logo" style={{ width: 200, height: 120 }} />
          </div>
          <p className="tagline">
            Passage Consultants LLP is One Of<br />
            The Highly Recognized Immigration<br />
            And All type of Visa Related Services
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="links-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Open Time Section */}
        <div className="time-section">
          <h3>Open Time</h3>
          <div className="time-item">
            <FaClock className="icon" />
            <span className="time-label">Opening Day:</span>
            <span className="time-value">Monday - Friday: 10:00 AM To 6:30 PM</span>
          </div>
          <div className="time-item">
            <span className="time-value">Saturday : 10:00 AM To 02:00 PM</span>
          </div>
          <div className="time-item vacation">
            <FaPaperPlane className="icon" />
            <span className="time-label">Vacation:</span>
            <span className="time-value">Sunday, though always available on phone</span>
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <h3>Contact us</h3>
          <address>
            <FaMapMarkerAlt className="icon" />
            512A, Jyoti Shikar Building, District<br />
            Center Janakpuri, New Delhi-110058,<br />
            India.
          </address>
          <div className="contact-details">
            <div className="contact-item">
              <a href="tel:01146021515">
                <FaPhoneAlt className="icon" /> 01146021515
              </a>
            </div>
            <div className="contact-item">
              <a href="https://wa.me/919711161513">
                <FaWhatsapp className="icon" /> +91-9711161513
              </a>
            </div>
            <div className="contact-item">
              <a href="tel:919873433413">
                <FaCheckCircle className="icon" /> +91-8595761513 
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;