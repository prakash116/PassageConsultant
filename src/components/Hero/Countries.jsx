import React from 'react';
import '../../styles/visacountries.css';
import { FlagIcon } from 'react-flag-kit';

const countries = [
  { name: 'Canada', code: 'CA', desc: 'Canada is the home of some of the world’s top research facilities and academic institutions where you will get supportive academic environments and a recognized and respected workforce.' },
  { name: 'New Zealand', code: 'NZ', desc: 'Start your Education in New Zealand with relevant knowledge on everything. We will let you know about studying abroad in New Zealand, regarding study permits and temporary resident visas.' },
  { name: 'Australia', code: 'AU', desc: 'A high-quality educational system helps you grow in your career; get benefits by learning a new language and making new friends.' },
  { name: 'United Kingdom', code: 'GB', desc: 'The UK as one of the best places– offers everything you could want from life, thanks to its education system, national income, and quality of life' },
  { name: 'United States (USA)', code: 'US', desc: 'The USA is the most desired destination for everyone who wishes to migrate for the betterment of life for himself, his family, and future generations as well.' },
  { name: 'Europe', code: 'EU', desc: 'To become a permanent resident within a short time, Settled in Europe is a good option as it offers several opportunities to entrepreneurs.' },
];

export default function CountriesForVisa() {
  return (
    <section className="countries-section">
      <h2 className="countries-title">Countries Visa</h2>
      <div className="countries-grid">
        {countries.map((c, i) => (
          <div key={i} className="country-card">
            <div className="country-icon">
              <FlagIcon code={c.code} size={48} />
            </div>
            <h3 className="country-name">{c.name}</h3>
            <p className="country-desc">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
