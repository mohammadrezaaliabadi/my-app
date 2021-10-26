/* eslint-disable arrow-parens */
/* eslint-disable indent */
/* eslint-disable object-curly-newline */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import './Contact.css';
import React, { useRef, useState, useContext, useEffect } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import ThemeContext from '../../Context/ThemeContext';
import { validateEmail } from '../../utils/validation';
import { PRODUCTS_RELATIVE_PATH_IMAGE } from '../../configs/general';

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
        <img
          className="contact-img"
          src={`${PRODUCTS_RELATIVE_PATH_IMAGE}a.png`}
          alt="prof"
        />
        <div className="contact-title">Send message For me😉</div>
        <div className="contact-group">
          <input
            ref={inputNameRef}
            className="contact-input"
            type="text"
            id="name"
            name="name"
            onChange={handleChangeInputName}
          />
          <label className="contact-label" htmlFor="name">
            Name
          </label>
        </div>
        <div className="contact-group">
          <input
            className="contact-input"
            type="text"
            id="subject"
            name="subject"
            onChange={handleChangeInputSubject}
          />
          <label className="contact-label" htmlFor="subject">
            Subject
          </label>
        </div>
        <div className="contact-group">
          <input
            className="contact-input"
            type="email"
            id="email"
            name="email"
            onChange={handleChangeInputEmail}
          />
          <label
            className={`contact-label ${
              errors.email
                ? 'error'
                : errors.email === undefined
                ? ''
                : 'correct'
            }`}
            htmlFor="email"
          >
            Email:
          </label>
        </div>
        <div className="contact-group">
          <textarea
            className="contact-input"
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            onChange={handleChangeInputDescribtion}
          />
          <label className="contact-label" htmlFor="comment">
            Comment
          </label>
        </div>
        <div className="contact-group">
          <Button handleClick={handleSubmit}>Submit</Button>
        </div>
      </div>
      <Modal className={classNameModal}>
        <div className="modal-body">
          <div className="modal-title">
            Thank
            <span>{name}</span>
            for send message.
          </div>
        </div>
        <Button handleClick={handleCloseModal}>Close!</Button>
      </Modal>
    </>
  );
};

export default Contact;
