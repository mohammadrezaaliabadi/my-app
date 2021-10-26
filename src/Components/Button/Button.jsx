import './Button.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Button as Btn } from '@mui/material';

const Button = ({ children, handleClick = () => {}, className }) => (
  <Btn variant="contained" className={className} onClick={handleClick}>
    {children}
  </Btn>
);

Button.prototype = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
