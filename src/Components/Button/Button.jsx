import './Button.css';
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children, handleClick = () => {}, className,
}) => (
  <button type="button" onClick={handleClick} className={`btn ${className}`}>
    {children}
  </button>
);

Button.prototype = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
