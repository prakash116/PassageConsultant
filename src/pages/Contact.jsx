import Achievements from "../components/Hero/Achievements";
import "../styles/contact.css";
import MapEmbed from "../components/Hero/MapEmbed"
import contact from "../assets/Contact.mp4";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = 'service_q1a8we6';
    const templateId = 'template_jimir7q';
    const publicKey = 'OgtfaEH7_6KMtMjbp';

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      to_name: 'Passage Consultants',
      message: message,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent Successfully ', response);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email', error);
        alert('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <>
      <section className="contact-section">
        {/* Header with video background */}
        <div className="contact-header">
          <video
            className="contact-header__video"
            src={contact}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="contact-header__overlay" />
          <h2 className="contact-header__title">Contact Us</h2>
        </div>

        {/* Main content */}
        <div className="contact-body">
          {/* Left: form */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  name="from_name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)} 
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your Email" 
                  name="from_email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Mobile No</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="Your Mobile Number" 
                  name="from_phone" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)} 
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  placeholder="Your Message" 
                  name="message" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)} 
                  required
                  disabled={isSubmitting}
                  rows="5"
                />
              </div>
              <button 
                type="submit" 
                className="contact-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Now'}
              </button>
            </form>
          </div>

          {/* Right: info */}
          <div className="contact-info-card">
            <h3>For further inquiries, feel free to reach out to us!</h3>
            <p className="contact-info-text">
              Connectivity and comfort are key to the ideal home office. Here we
              offer some tips to create the perfect study zone in your share
              house.
            </p>

            <h4 className="office-name">PASSAGE CONSULTANTS LLP.</h4>

            <ul className="contact-details">
              <li>
                <FaMapMarkerAlt className="detail-icon" />
                512B, Jyoti Shikar Building, District Center Janakpuri,
                <br />
                New Delhi-110058
              </li>
              <li>
                <a href="tel:01146021515">
                  <FaPhoneAlt className="detail-icon" />
                  01146021515
                </a>

              </li>
              <li>
                <a href="https://wa.me/919711161513">
                  <FaWhatsapp className="detail-icon" />
                  +91-9711161513
                </a>

              </li>
              <li>
                <a href="mailto:info@passageconsultants.in">
                <FaEnvelope className="detail-icon" />
                info@passageconsultants.in
                </a>
              </li>
              <li>
                <FaClock className="detail-icon" />
                Opening Day:
                <br />
                Mon–Fri: 10:00 AM to 6:30 PM
                <br />
                Sat: 10:00 PM to 2:00 PM
              </li>
            </ul>
          </div>
        </div>
      </section>

      <MapEmbed />
      <Achievements />
    </>
  );
}