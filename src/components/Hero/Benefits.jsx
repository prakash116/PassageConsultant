import React from 'react';
import "../../styles/ServicesCards.css";
import business from "../../assets/doc.mp4";
import study from "../../assets/study.mp4";
import immigration from "../../assets/immigration.mp4";
import work from "../../assets/work.mp4";

const cards = [
  {
    icon: business,
    title: 'Business & Tourist Visa',
    desc: 'Traveling abroad on short trips for entertainment or business is usually required by those who love the fun.',
  },
  {
    icon: study,
    title: 'Study Visa',
    desc: 'Study overseas with Passage Consultants LLP to boost your career prospects and gain global exposure.',
  },
  {
    icon: immigration,
    title: 'Immigration Visa',
    desc: 'Passage Consultants LLP offers comprehensive assistance and personalized guidance for immigration visa applications worldwide.',
  },
  {
    icon: work,
    title: 'Work Permit & Citizenship',
    desc: 'We help in processing your work permit visa application by the country’s latest regulations.',
  },
];

export default function ServicesCards() {
  return (
    <section className="services-section">
      <div className="services-row-container">
        {cards.map((card, i) => (
          <div key={i} className="service-card">
            <div className="service-icon">
              <video
                src={card.icon}
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
            </div>
            <h3 className="service-title">{card.title}</h3>
            <p className="service-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
