import './Button.css';
const Button = ({ children, handleClick = () => {}, className, ...props }) => {
  return (
    <button onClick={handleClick} className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
