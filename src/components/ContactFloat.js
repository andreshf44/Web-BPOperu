import React, { useState, useEffect } from 'react';
import './Components.css';  // Importamos los estilos de Header

const WhatsappFloatingButton = () => {
  const phoneNumber = '1234567890'; // Número de WhatsApp (reemplaza con el número real)

  return (
    <div className="whatsapp-floating-button">
      <a 
        href={`https://wa.me/${phoneNumber}`} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <img src="/whatsapp-icon.png" alt="WhatsApp" />
      </a>
    </div>
  );
};

export default WhatsappFloatingButton;
