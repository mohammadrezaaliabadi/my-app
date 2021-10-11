import './Button.css';
import PropTypes from 'prop-types';
const Button = ({ children, handleClick = () => {}, className, ...props }) => {
  return (
    <button onClick={handleClick} className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
};

Button.prototype = {
  children: PropTypes.node,
  handleClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
