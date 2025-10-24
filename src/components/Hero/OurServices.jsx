import React from 'react';
import '../../styles/ourservices.css';
import success from '../../assets/success.png';  
import Achievements from "../Hero/Achievements"
import MapEmbed from '../Hero/MapEmbed';
import { FaCircle } from 'react-icons/fa';

const services = [
  'Permanent resedency for Australia, Europe, Canada and many more',
  'Citizenship by Investment',
  'Start-UP Visa',
  'Intra-Company Transfer (ICT)',
  'Rejected Visa Petition',
  'Spouse Visa',
  'Super Parent Visa',
  'Models | Actors Visa | Production House Visa',
  'Immigration clearence for movie makers',
  'OCI Cards Process',
  'Work Permit porcess for MNCs',
  'Work Permits | LMIA',
  'Dubai & Middle East Visa',
  'Sports and Athletes Visa',
  'Study Abroad',
  'Indian eVisa Tourist And Business',
  'Family Visa',
  'Group Visa',
  'FRRO Services',
  'Document Attestation',
  'Students & Travel Insurance',
  'I.E.L.T.S and PTE Online Classes',
];

export default function OurServices() {
  // Calculate the optimal split point based on screen size
  const [columnSplit, setColumnSplit] = React.useState(Math.ceil(services.length / 2));
  
  React.useEffect(() => {
    // Function to handle column redistribution on resize
    const handleResize = () => {
      // For mobile, use a single column
      if (window.innerWidth <= 576) {
        setColumnSplit(services.length); // All items in first column
      } else {
        setColumnSplit(Math.ceil(services.length / 2));
      }
    };
    
    // Initial call and event listener
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const leftCol = services.slice(0, columnSplit);
  const rightCol = services.slice(columnSplit);

  return (
    <>
      <section className="services-list-section">
        <h2 className="services-list-title">
          Passage Consultants LLP offer below Services:
        </h2>
        <div className="services-list-grid">
          <ul className="services-column">
            {leftCol.map((s, i) => (
              <li key={i}>
                <FaCircle className="bullet-icon" /> {s}
              </li>
            ))}
          </ul>
          {rightCol.length > 0 && (
            <ul className="services-column">
              {rightCol.map((s, i) => (
                <li key={i}>
                  <FaCircle className="bullet-icon" /> {s}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section
        className="helping-section"
        style={{ backgroundImage: `url(${success})` }}
      >
        <div className="helping-overlay" />
        <div className="helping-content">
          <h2>HELPING AND GUIDING</h2>
          <h3>OUR CLIENTS IS OUR PASSION</h3>
          <p>
            Our approach in dealing with cases of our patrons is very professional
            that makes the immigration process as smooth as possible for our
            clients with the assistance of Consultants and Professionals
            associated with us.
          </p>
        </div>
      </section>
      <Achievements/>
      <MapEmbed/>
    </>
  );
}