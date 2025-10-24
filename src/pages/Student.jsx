import React from 'react';
import '../styles/student.css';
import students from '../assets/students.png';

const Student = () => (
  <section
    className="student-hero"
    style={{ backgroundImage: `url(${students})` }}
  >
    {/* dark overlay */}
    <div className="student-hero__overlay" />

    {/* headline + copy */}
    <div className="student-hero__content">
      <h1>Welcome to Passage Consultants LLP</h1>
      <h2>
        Fulfil your dreams with our specialist team in every area of immigration
      </h2>
      <p>
        In this era of globalisation and a fast-changing corporate world,
        international education has become essential. Choosing the perfect
        qualification at the perfect institute requires expert guidance.
      </p>
      <p>
        Passage Consultants LLP delivers customised immigration solutions
        worldwide. Our dedicated team handles the complexities of visas and
        immigration for the USA, UK, Canada, Australia, New Zealand, Europe and
        more.
      </p>
    </div>
  </section>
);

export default Student;
