import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, header, text }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{header}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal; 