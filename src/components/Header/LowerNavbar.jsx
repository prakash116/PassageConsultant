import React, { useState, useEffect, useRef } from 'react';
import '../../styles/lowernavbar.css';
import logo from "../../assets/logo.png"
import { ChevronDown, Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const LowerNavbar = () => {
  const location = useLocation();

  // helper → true if current pathname matches one or more paths
  const isActive = (paths) => {
    const match = (p) => (p === '/' ? location.pathname === '/' : location.pathname.startsWith(p));
    return Array.isArray(paths) ? paths.some(match) : match(paths);
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  /* ---------------- dropdown (desktop hover) ---------------- */
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownVisible(false), 300);
  };

  /* ------------------- mobile menu toggle ------------------- */
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        !event.target.closest('.navigation') &&
        !event.target.closest('.mobile-menu-toggle')
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [menuOpen]);

  /* --------------------- dropdown data ---------------------- */
  const servicesData = {
    USA: [
      'USA H-1B Visa for Specialty Occupations',
      'Student Visa – F1 Visa',
      'The US B1/B2 Business Visa',
      'USA J-1 Visa',
      'USA O-1 VISA',
      'USA Tourist Visa',
      'USA Work Visa – H1B',
      'USA Study Visa',
    ],
    CANADA: [
      'Canada Business Visa',
      'Canada Caregiver VISA',
      'Canada Dependant Visa',
      'Canada Digital Nomad VISA',
      'Canada Express Entry',
      'Canada GSS VISA',
      'CANADA IEC VISA',
      'Canada Provincial Nominee Program',
      'Canada Student VISA',
      'Canada Super Visa',
      'Canada Temporary Work VISA',
      'Canada Tourist VISA',
      "CANADA WORK PERMIT VISA",
      "ICT Program",
      "Invest Visa In Canada",
      "Parent Migration Visa",
      "Spousal Open Work Permit"
    ],
    AUSTRALIA: [
      'Work In Australia',
      'Distinguished Talent Visa Subclass 858',
      'Skilled Independent Subclass 189 Visa',
      'Study, Work & Settle In Australia',
      'Temporary Visa Subclass 400',
      'Australia ROI',
      'Australia Skilled Migration Program Details',
      'Australia Student Visa',
      'Australia Subclass 887',
      'Australia Temporary Skills Shortage (TSS) Visa (Subclass 482)',
    ],
    UK: ['UK Student Visa', 'UK Tourist Visa', 'Work In UK'],
    GERMANY: [
      'German Job Seeker Visa',
      'Germany Business Visa',
      'Germany Dependant Visa',
      'Germany Self-Employment Visa',
      'Germany Student Visa',
      'Germany Tourist Visa',
      'Work In Germany',
    ],
    OTHERS: [
      'Medical Professionals',
      'Vist Visa',
      'Travel Insurance',
      "FRRO Services",
      "OCI Card"
    ],
  };

  /* -------------- mobile‑only dropdown toggles --------------- */
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const toggleBlogDropdown = (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setBlogDropdownOpen((prev) => !prev);
    }
  };

  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const toggleServicesDropdown = (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setServicesDropdownOpen((prev) => !prev);
    }
  };

  /* ------------------------- JSX ---------------------------- */
  return (
    <div className="lower-navbar">
      {/* ------------ logo / brand ------------ */}
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Passage Consultants LLP" className="logo" />
        </Link>
        <div className="brand-text">
          <h1>PASSAGE</h1>
          <h2>CONSULTANTS LLP.</h2>
        </div>
      </div>

      {/* ---------- mobile hamburger ---------- */}
      <button className="mobile-menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* ---------------- navigation --------------- */}
      <nav className={`navigation ${menuOpen ? 'active' : ''}`}>
        <ul>
          {/* Home */}
          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              style={isActive('/') ? { color: '#f8a11c' } : undefined}
            >
              Home
            </Link>
          </li>

          {/* About */}
          <li>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              style={isActive('/about') ? { color: '#f8a11c' } : undefined}
            >
              About
            </Link>
          </li>

          {/* Services (mega dropdown) */}
          <li
            className={`dropdown services-dropdown ${servicesDropdownOpen ? 'active' : ''}`}
            onMouseEnter={window.innerWidth > 768 ? handleMouseEnter : undefined}
            onMouseLeave={window.innerWidth > 768 ? handleMouseLeave : undefined}
          >
            <span
              onClick={toggleServicesDropdown}
              style={isActive('/visa') ? { color: '#f8a11c' } : undefined}
            >
              Services <ChevronDown size={14} />
            </span>

            <div
              ref={dropdownRef}
              className={`mega-dropdown-container ${dropdownVisible || servicesDropdownOpen ? 'active' : ''
                }`}
            >
              <div className="mega-dropdown">
                <div className="mega-dropdown-content">
                  {Object.entries(servicesData).map(([country, visas]) => (
                    <div key={country} className="dropdown-column">
                      <h3>{country}</h3>
                      <ul>
                        {visas.map((visa, index) => (
                          <li key={index}>
                            <Link
                              to={`/visa/${encodeURIComponent(country)}/${encodeURIComponent(visa)}`}
                              onClick={() => {
                                setDropdownVisible(false);
                                setServicesDropdownOpen(false);
                                setMenuOpen(false);
                              }}
                            >
                              {visa}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </li>

          {/* Blog */}
          <li className={`dropdown blog-dropdown ${blogDropdownOpen ? 'active' : ''}`}>
            <span
              className="dropdown-toggle"
              onClick={toggleBlogDropdown}
              style={isActive(['/guide', '/blog']) ? { color: '#f8a11c' } : undefined}
            >
              Blog <ChevronDown size={14} />
            </span>
            <div className={`dropdown-menu ${blogDropdownOpen ? 'active' : ''}`}>
              <li>
                <Link
                  to="/guide"
                  onClick={() => {
                    setBlogDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  How to Apply for Canada PR Visa 2024
                </Link>
              </li>
              {/* add more as needed */}
            </div>
          </li>

          {/* Contact */}
          <li>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              style={isActive('/contact') ? { color: '#f8a11c' } : undefined}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* --------------- search / call buttons --------------- */}
      <div className="search-call">
        <button className="search-btn">
          <Search size={20} />
        </button>
        <button className="call-btn">
          <a href="tel:01146021515">
            Call Us
          </a>

        </button>
      </div>
    </div>
  );
};

export default LowerNavbar;