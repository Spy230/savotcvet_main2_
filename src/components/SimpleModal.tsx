import React from 'react';
import { createPortal } from 'react-dom';

interface SimpleModalProps {
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
}

const SimpleModal: React.FC<SimpleModalProps> = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null;

  const modalContent = (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          backgroundColor: '#ff0000',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          fontSize: '24px',
          cursor: 'pointer',
          zIndex: 1000000
        }}
      >
        ✕
      </button>
      
      <img
        src={imageSrc}
        alt="Сертификат"
        style={{
          maxWidth: '95vw',
          maxHeight: '95vh',
          objectFit: 'contain'
        }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default SimpleModal;