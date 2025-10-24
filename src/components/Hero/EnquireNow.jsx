import React, { useState } from 'react';
import '../../styles/EnquireNow.css';
import enquiry from '../../assets/enquiry.png';
import emailjs from '@emailjs/browser';

const EnquireNow = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
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
      from_phone: mobile,
      to_name: 'Passage Consultants',
      message: message,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Enquiry sent successfully ', response);
        setName('');
        setEmail('');
        setMobile('');
        setMessage('');
        alert('Enquiry sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending enquiry', error);
        alert('Failed to send enquiry. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <section
      className="enquire-section"
      style={{ backgroundImage: `url(${enquiry})` }}
    >
      <div className="enquire-overlay" />

      <div className="enquire-container">
        <h2>ENQUIRE NOW</h2>
        <form className="enquire-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Your Name" 
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
              name="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="+91 98765 43210"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="How can we help you?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              disabled={isSubmitting}
              rows="5"
            />
          </div>

          <button 
            type="submit" 
            className="enquire-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EnquireNow;