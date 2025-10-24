import React from 'react';
import '../../styles/Achievements.css';
import ICIB from '../../assets/ICIB.png';
import IIA from '../../assets/IIA.png';
import MICCIA from '../../assets/MICCIA.png';
import PMC from '../../assets/PMC.png';
import WORC from '../../assets/WORC.png';

export default function Achievements() {
  return (
    <section className="achievements">
      <h1 className="achievements__title">Proud Member Of</h1>
      <div className="achievements__logos">
        <img src={ICIB}   alt="Indian Chamber of International Business" className="achievements__logo" />
        <img src={IIA}    alt="Indian Industries Association" className="achievements__logo" />
        <img src={MICCIA} alt="Millennial India International Chamber of Commerce Industry & Agriculture" className="achievements__logo" />
        <img src={PMC}    alt="Punjabi Chamber of Commerce" className="achievements__logo" />
        <img src={WORC}   alt="World Sikh Chamber of Commerce" className="achievements__logo" />
      </div>
    </section>
  );
}
