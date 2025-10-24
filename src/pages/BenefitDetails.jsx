import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHandshake, 
  faFile,
  faUserCog, 
  faTools, 
  faClock, 
  faAward 

} from '@fortawesome/free-solid-svg-icons';


const PassageConsultantsPage = () => {
  return (
    <div className="passage-container">
      <section className="passage-info">
        <p className="passage-belief">
          Passage Consultants believe every client is different, has different Visa Category requirements/policies with different travel objectives. passage Consultants provides clients a complete interpretive information checks to determine a tailored management solutions:
        </p>
        
        <div className="services-list">
          <a href="#" className="service-link">Study Abroad</a> | 
          <a href="#" className="service-link">Student Visa</a> | 
          <a href="#" className="service-link">Student Insurance</a> | 
          <a href="#" className="service-link">School and College International Exchange Programs</a> | 
          <a href="#" className="service-link">NASA Study Tour</a> | 
          <a href="#" className="service-link">USA F-1 Visa</a> | 
          <a href="#" className="service-link">USA J-1 Visa</a>
        </div>
        
        <div className="services-list secondary-services">
          | <a href="#" className="service-link">Secondary Schooling from USA & Canada</a> | 
          <a href="#" className="service-link">Rejected Visa ?</a> | 
          <a href="#" className="service-link">Visa Appointments etc....</a>
        </div>
        
        <p className="passage-locations">
          Passage Consultants presents in these locations: Delhi | Mumbai | Bangalore | Hyderabad | Pune | Kolkata.
        </p>
      </section>
      
      <section className="mission-section">
        <h1 className="mission-title">Our Mission</h1>
        <p className="mission-statement">To build the leading reputed counseling services provider in terms of</p>
      </section>
      
      <section className="features-grid">
        <div className="feature-card blue">
          <FontAwesomeIcon icon={faHandshake} className="feature-icon" />
          <h3 className="feature-title">Reputation and Reliability</h3>
        </div>
        
        <div className="feature-card orange">
          <FontAwesomeIcon icon={faFile } className="feature-icon" />
          <h3 className="feature-title">Knowledge Management</h3>
        </div>
        
        <div className="feature-card blue">
          <FontAwesomeIcon icon={faUserCog} className="feature-icon" />
          <h3 className="feature-title">Customer service</h3>
        </div>
        
        <div className="feature-card orange">
          <FontAwesomeIcon icon={faTools} className="feature-icon" />
          <h3 className="feature-title">Innovation</h3>
        </div>
        
        <div className="feature-card blue">
          <FontAwesomeIcon icon={faClock} className="feature-icon" />
          <h3 className="feature-title">Turnaround time (TAT)</h3>
        </div>
        
        <div className="feature-card orange">
          <FontAwesomeIcon icon={faAward} className="feature-icon" />
          <h3 className="feature-title">Operational Excellence</h3>
        </div>
      </section>
    </div>
  );
};

export default PassageConsultantsPage;