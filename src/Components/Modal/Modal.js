import './Modal.css';

const Modal = ({ children, className }) => {
  const handleClick = function (e) {
    Array.from(e.target.parentElement.children).forEach(el =>
      el.classList.add('hidden')
    );
  };
  return (
    <div>
      <div className={`modal ${className}`}>{children}</div>
      <div onClick={handleClick} className={`overlay ${className}`}></div>
    </div>
  );
};

export default Modal;
