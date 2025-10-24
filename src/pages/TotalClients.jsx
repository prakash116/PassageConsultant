import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFileContract, faBroom } from '@fortawesome/free-solid-svg-icons';
import "../styles/about.css"
import CannadaFlag from "../assets/CannadaFlag.jpg"

export default function CanadianStatsCounter() {
    const [counts, setCounts] = useState({
      customers: 0,
      serviceGuarantee: 0,
      cleaners: 0
    });
    
    const targetCounts = {
      customers: 1500,
      serviceGuarantee: 100,
      cleaners: 30
    };
    
    const countersRef = useRef(null);
    const animationDuration = 2000; // 2 seconds for the animation
    const animationFrames = 60; // frames for smooth animation
    
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startCounterAnimation();
          observer.disconnect();
        }
      });
      
      if (countersRef.current) {
        observer.observe(countersRef.current);
      }
      
      return () => {
        observer.disconnect();
      };
    }, []);
    
    const startCounterAnimation = () => {
      const stepTime = animationDuration / animationFrames;
      let currentFrame = 0;
      
      const intervalId = setInterval(() => {
        currentFrame++;
        const progress = currentFrame / animationFrames;
        
        if (currentFrame <= animationFrames) {
          setCounts({
            customers: Math.round(targetCounts.customers * progress),
            serviceGuarantee: Math.round(targetCounts.serviceGuarantee * progress),
            cleaners: Math.round(targetCounts.cleaners * progress)
          });
        } else {
          setCounts(targetCounts);
          clearInterval(intervalId);
        }
      }, stepTime);
      
      return () => clearInterval(intervalId);
    };
    
    return (
      <div className="stats-container">
        {/* Background image */}
        <div 
          className="background-image"
          style={{ backgroundImage: `url(${CannadaFlag})` }}
        ></div>
        
        {/* Dark overlay for better text readability */}
        <div className="dark-overlay"></div>
        
        {/* Stats counters with equal spacing */}
        <div ref={countersRef} className="stats-grid">
          <div className="stat-item">
            <FontAwesomeIcon icon={faUsers} className="stat-icon" />
            <div className="stat-value">
              {counts.customers} <span className="stat-symbol">+</span>
            </div>
            <div className="stat-label">Happy Customers</div>
          </div>
          
          <div className="stat-item">
            <FontAwesomeIcon icon={faFileContract} className="stat-icon" />
            <div className="stat-value">
              {counts.serviceGuarantee} <span className="stat-symbol">%</span>
            </div>
            <div className="stat-label">Authentic Guidance</div>
          </div>
          
          <div className="stat-item">
            <FontAwesomeIcon icon={faBroom} className="stat-icon" />
            <div className="stat-value">
              {counts.cleaners} <span className="stat-symbol">+</span>
            </div>
            <div className="stat-label">Satisfied Corporates</div>
          </div>
        </div>
      </div>
    );
  }