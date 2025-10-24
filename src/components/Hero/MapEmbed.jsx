import React from 'react';

const MapEmbed = () => (
  <div style={{ width: '100%', height: '450px' }}>
    <iframe
      title="Jyoti Shikhar Building Location"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5!2d77.0818428!3d28.628909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04bf181475f3%3A0x27f3d6226e57b9d4!2sJyoti+Shikhar+Building!5e0!3m2!1sen!2sin!4v1714483200"
    />
  </div>
);

export default MapEmbed;