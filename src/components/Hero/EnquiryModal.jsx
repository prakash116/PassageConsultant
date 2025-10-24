import { useState, useEffect } from 'react';
import "../../styles/EnquiryModal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faShieldAlt,
  faHeadset,
  faTag,
  faRobot,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import emailjs from "@emailjs/browser"; 

const EnquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    question: ''
  });

  // Handle clicking outside the modal to close it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, mobile, question } = formData;

    if (!fullName || !email || !mobile || !question) {
      alert("Please fill out all fields.");
      return;
    }

    const serviceId = 'service_q1a8we6';
    const templateId = 'template_jimir7q';
    const publicKey = 'OgtfaEH7_6KMtMjbp';

    // Fixed templateParams - using question instead of undefined message variable
    const templateParams = {
      from_name: fullName,
      from_email: email,
      from_phone: mobile,
      to_name: 'Passage Consultants',
      message: question, // Changed from 'message' to 'question'
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email Sent Successfully", response);
        setFormData({
          fullName: '',
          email: '',
          mobile: '',
          question: ''
        });
        onClose(); // Close the modal after submission
      })
      .catch((error) => {
        console.error('Error sending email', error);
        alert("There was an error sending your enquiry. Please try again later.");
      });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-header">
            <button className="close-button" onClick={onClose}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <div className="modal-body">
            <div className="modal-left">
              <h2>Welcome to Passage Consultants</h2>
              <div className="steps-container">
                <div className="step"><p><span>1.</span> Are you looking for immigrant or non-immigrant visa?</p></div>
                <div className="step"><p><span>2.</span> Get clarifications and multiple query answers from experts</p></div>
                <div className="step"><p><span>3.</span> Abroad company incorporation</p></div>
                <div className="step"><p><span>4.</span> Work permit inquiries</p></div>
                <div className="step"><p><span>5.</span> Permanent Residency (PR or Citizenship with or without investment)</p></div>
              </div>

              <div className="benefits-grid">
                <div className="benefit">
                  <div className="benefit-circle"><FontAwesomeIcon icon={faThumbsUp} /></div>
                  <div className="benefit-text"><p>Best Consultancy</p></div>
                </div>
                <div className="benefit">
                  <div className="benefit-circle"><FontAwesomeIcon icon={faShieldAlt} /></div>
                  <div className="benefit-text"><p>Secured and privacy of client data</p></div>
                </div>
                <div className="benefit">
                  <div className="benefit-circle"><FontAwesomeIcon icon={faHeadset} /></div>
                  <div className="benefit-text"><p>24/7 Support</p></div>
                </div>
                <div className="benefit">
                  <div className="benefit-circle"><FontAwesomeIcon icon={faTag} /></div>
                  <div className="benefit-text"><p>Enjoy Exciting Deals</p></div>
                </div>
              </div>

              <div className="call-section">
                <p>Call us for details</p>
                <a href="tel:+919818064278">+91-9711161513</a>
              </div>
            </div>

            <div className="modal-right">
              <div className="enquiry-form">
                <h3 className="form-title">Enquiry Now</h3>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Id"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Mobile No."
                      required
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      name="question"
                      value={formData.question}
                      onChange={handleChange}
                      placeholder="Ask Your Travel Consultant A Question"
                      rows="4"
                    ></textarea>
                  </div>

                  <div className="form-group recaptcha">
                    <div className="g-recaptcha">
                      <input type="checkbox" id="robot-check" />
                      <label htmlFor="robot-check">I'm not a robot</label>
                      <div className="recaptcha-logo">
                        <FontAwesomeIcon icon={faRobot} />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="submit-btn">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;