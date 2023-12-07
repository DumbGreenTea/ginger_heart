// WhatsAppButton.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const WhatsAppButton = () => {
  // Puedes configurar tu número y mensaje como variables de estado si necesitas cambiarlos dinámicamente
  const phoneNumber = "56945891146";
  const defaultMessage = "¡Hola! ¿Qué tal?";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="WhatsAppButton">
      {/* Cambia el enlace a tu enlace de WhatsApp */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} color="#ffffff" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
