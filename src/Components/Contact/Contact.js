import './Contact.css';
import { useRef, useState, useContext, useEffect } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import ThemeContext from '../../Context/ThemeContext';
import { validateEmail } from '../../utils/validation';
const Contact = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});
  const [classNameModal, setClassNameModal] = useState('hidden');
  const inputNameRef = useRef(null);

  const themeValues = useContext(ThemeContext);
  const handleChangeInputName = event => {
    setName(event.target.value);
  };
  const handleChangeInputEmail = event => {
    if (!validateEmail(event.target.value)) {
      errors.email = true;
    } else {
      errors.email = false;
    }
    setEmail(event.target.value);
  };
  const handleChangeInputSubject = event => {
    setSubject(event.target.value);
  };

  const handleChangeInputDescribtion = event => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    //console.log(name, subject, email, description);
    if (errors.email === false && name && subject && description) {
      setClassNameModal('');
    }
  };
  const handleCloseModal = () => {
    setClassNameModal('hidden');
  };
  useEffect(() => {
    inputNameRef.current.focus();
  }, []);

  return (
    <>
      <div className={`contact ${themeValues.theme.className}`}>
        <img class="contact-img" src="a.png" alt="" />
        <div class="contact-title">Send message For me😉</div>
        <div class="contact-group">
          <input
            ref={inputNameRef}
            class="contact-input"
            type="text"
            id="name"
            name="name"
            onChange={handleChangeInputName}
          />
          <label class="contact-label" for="name">
            Name
          </label>
        </div>
        <div class="contact-group">
          <input
            class="contact-input"
            type="text"
            id="subject"
            name="subject"
            onChange={handleChangeInputSubject}
          />
          <label class="contact-label" for="subject">
            Subject
          </label>
        </div>
        <div class="contact-group">
          <input
            class="contact-input"
            type="email"
            id="email"
            name="email"
            onChange={handleChangeInputEmail}
          />
          <label
            class={`contact-label ${
              errors.email
                ? 'error'
                : errors.email === undefined
                ? ''
                : 'correct'
            }`}
            for="email"
          >
            Email:
          </label>
        </div>
        <div class="contact-group">
          <textarea
            class="contact-input"
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            onChange={handleChangeInputDescribtion}
          ></textarea>
          <label class="contact-label" for="comment">
            Comment
          </label>
        </div>
        <div class="contact-group">
          <Button handleClick={handleSubmit}>Submit</Button>
        </div>
      </div>
      <Modal className={classNameModal}>
        <div className="modal-body">
          <div className="modal-title">
            Thank <span className>{name}</span> for send message.
          </div>
        </div>
        <Button handleClick={handleCloseModal}>Close!</Button>
      </Modal>
    </>
  );
};

export default Contact;
