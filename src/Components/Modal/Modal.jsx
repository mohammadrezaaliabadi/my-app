/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import './Modal.css';
import React from 'react';

const Modal = ({ children, className = '' }) => {
  const handleClick = (e) => {
    Array.from(e.target.parentElement.children).forEach((el) => el.classList.add('hidden'));
  };
  return (
    <div>
      <div className={`modal ${className}`}>{children}</div>
      <div onClick={handleClick} className={`overlay ${className}`} />
    </div>
  );
};

export default Modal;
