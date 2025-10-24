import React, { useEffect, useState } from 'react';
import '../styles/carousel.css';
// import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.png';

import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  // {
  //   image: slide1,
  //   caption: 'Unmatched Experience, Quality Advice since 2019. We offer Visa assistance for Tourist Visa | Business Visa | Student Visa | Work Visa | Spouse Visa | Dependent Visa etc',
  // },
  {
    image: slide2,
    caption: 'Experts at Passage Consultants are always available to answer your questions about immigration and the application process',
  },
  {
    image: slide3,
    caption: 'As the maple tree stands strong and resilient, so does the pursuit of knowledge in Canada',
  },
  {
    image: slide4,
    caption: 'Let Passage Consultants guide your immigration journey.',
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((idx) => (idx + 1) % slides.length);

  const prev = () =>
    setCurrent((idx) => (idx - 1 + slides.length) % slides.length);

  useEffect(()=>{
    const interval = setInterval(next, 3000);
    return ()=> clearInterval(interval)
  },[]);

  // // Debug: Log the image paths to console
  // useEffect(() => {
  //   console.log('Slide images:', slides.map((slide, idx) => ({ 
  //     index: idx, 
  //     image: slide.image 
  //   })));
  // }, []);

  return (
    <div className="carousel">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`carousel-slide ${idx === current ? 'active' : ''}`}
          style={{ 
            backgroundImage: `url(${slide.image})`,
            // Add fallback background color to see if the div is rendering
            backgroundColor: idx === 0 ? '#f0f0f0' : 'transparent'
          }}
          // Debug: Add data attribute to identify slides
          data-slide={`slide-${idx + 1}`}
        >
          {idx === current && (
            <div className="carousel-content">
              <p>{slide.caption}</p>
            </div>
          )}
        </div>
      ))}

      <button
        className="carousel-arrow prev"
        onClick={prev}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="carousel-arrow next"
        onClick={next}
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;