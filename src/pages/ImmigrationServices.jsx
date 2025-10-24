// ImmigrationServices.jsx
import React from 'react';
import ServiceBg1 from "../assets/ServiceBg1.jpg";
import ServiceBg2 from "../assets/ServiceBg2.jpg";
import ServiceBg3 from "../assets/ServiceBg3.jpg";
import ServiceBg4 from "../assets/ServiceBg4.jpg";
import ServiceBg5 from "../assets/ServiceBg5.jpg";
import ServiceBg6 from "../assets/ServiceBg6.jpg";
import ServiceBg7 from "../assets/ServiceBg7.jpg";
import ServiceBg8 from "../assets/ServiceBg8.jpg";
import ServiceBg9 from "../assets/ServiceBg9.jpg";
import ServiceBg10 from "../assets/ServiceBg10.jpg";
import ServiceBg11 from "../assets/ServiceBg11.jpg";
import ServiceBg12 from "../assets/ServiceBg12.jpg";
import '../styles/ImmigrationServices.css';

const serviceCards = [
  {
    id: 1,
    country: "CANADA",
    countryCode: "CA",
    frontContent: "Passage Consultants help clients to provide Canada PR | LMIA | Work Permits | Rejected Visa | Company formation in Canada | Super Visa | Spouse Visa and other services.",
    backContent: "Our Canadian immigration experts have a 95% success rate with PR applications. We offer personalized consultation and complete documentation support for all Canadian immigration pathways.",
    frontBgImage: ServiceBg1,
    backBgImage: ServiceBg2,
  },
  {
    id: 2,
    country: "SCHENGEN COUNTRIES",
    countryCode: "EU",
    frontContent: "Passage Consultants serve Business Visa | Tourist Visa | BLU Card Services | Work Permits | Rejected Visa | EU Residency | Company Incorporation in EU.",
    backContent: "Navigate the complexities of European immigration with our specialized services. We offer expedited processing for Schengen visas and support for long-term residency options.",
    frontBgImage: ServiceBg3,
    backBgImage: ServiceBg4,
  },
  {
    id: 3,
    country: "UNITED STATES OF AMERICA",
    countryCode: "US",
    frontContent: "Passage Consultants serve clients to file Business Visa | Tourist Visa | H1B Visa | L-1 Visa | L-2 Visa | R-1 Visa | O-1 Visa | DS-160 filing etc.",
    backContent: "Our US immigration team includes former USCIS officers who provide insider guidance on complex cases. We specialize in employment-based visas and family reunification.",
    frontBgImage: ServiceBg5,
    backBgImage: ServiceBg6
  },
  {
    id: 4,
    country: "NEW ZEALAND",
    countryCode: "NZ",
    frontContent: "At Passage Consultants, we serve clients to file Student Admissions | Student Visa | Work Permits | Citizenship by Investments | Company Incorporation in New Zealand.",
    backContent: "With direct connections to New Zealand educational institutions, we offer streamlined student visa processing and post-study work pathways with high approval rates.",
    frontBgImage: ServiceBg7,
    backBgImage: ServiceBg8
  },
  {
    id: 5,
    country: "UNITED KINGDOM",
    countryCode: "GB",
    frontContent: "At Passage Consultants, we serve UK Business Visa | Tourist Visa | Long Term Visa | Tier-2 Visa | Work Permits | Rejected Visa | Company Incorporation | Spouse Visa etc.",
    backContent: "Our UK immigration specialists have extensive experience with the points-based system. We provide comprehensive support for all visa categories and appeal services.",
    frontBgImage: ServiceBg9,
    backBgImage: ServiceBg10
  },
  {
    id: 6,
    country: "AUSTRALIA",
    countryCode: "AU",
    frontContent: "At Passage Consultants, we serve Australia Business Visa | Tourist Visa | Subclass 482 | Subclass 189 | Super Visa | Spouse Visa | Student Visa | College Admissions etc.",
    backContent: "Our Australian migration experts specialize in skilled migration pathways and provide full support for points assessment, skills evaluation, and visa applications.",
    frontBgImage: ServiceBg11,
    backBgImage: ServiceBg12,
  }
];
  
// Helper function to get flag URL
const getFlagUrl = (countryCode) => {
  // Special case for EU since it's not a standard country code
  if (countryCode === 'EU') {
    return 'https://flagcdn.com/48x36/eu.png';
  }
  return `https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`;
};

const ImmigrationServices = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-description">
        Passage Consultants, serve clients with Immigration Services | Student Visa | Work Permits | Permanent Residency | Citizenship | Rejected 
        Visa Petition | Europe BLU Card Service | Abroad Company Incorporation and many other services.
      </p>
      
      <div className="services-grid">
        {serviceCards.map((card) => (
          <div className="card-container" key={card.id}>
            <div className="card">
              <div 
                className="card-front"
                style={{ backgroundImage: `url(${card.frontBgImage})` }}
              >
                <div className="country-code">{card.countryCode}</div>
                <div className="flag-icon">
                  <img 
                    src={getFlagUrl(card.countryCode)} 
                    alt={`${card.country} flag`}
                    width="60"
                    height="45"
                  />
                </div>
                <h2>{card.country}</h2>
                <p className="card-content">{card.frontContent}</p>
              </div>
              <div 
                className="card-back"
                style={{ backgroundImage: `url(${card.backBgImage})` }}
              >
                <h2>More About {card.country}</h2>
                <p className="card-content">{card.backContent}</p>
                <button className="learn-more-btn">Contact Us</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImmigrationServices;