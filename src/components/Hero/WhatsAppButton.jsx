import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../../styles/WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '919711161513';
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleWhatsAppClick}>
      <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
    </div>
  );
};

export default WhatsAppButton;