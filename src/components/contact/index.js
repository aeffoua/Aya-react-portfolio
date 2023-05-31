import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleBlur = (field) => {
    switch (field) {
      case 'name':
        setNameError(!name);
        break;
      case 'email':
        setEmailError(!email);
        break;
      case 'message':
        setMessageError(!message);
        break;
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      if (name !== '' && email !== '') {
        // Form submission logic
        alert('Form submitted!');
      } else {
        alert('Form validation failed!');
      }
    }
  }
  

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label>Name:</label>
          <input
            className="input"
            type="text"
            name="name"
            value={name}
            onBlur={() => handleBlur('name')}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {nameError && <span className="error-message">Name is required!</span>}
        </div>

        <div className="input-block">
          <label>Email Address:</label>
          <input
            className="input"
            type="email"
            name="email"
            value={email}
            onBlur={() => handleBlur('email')}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <span className="error-message">Email is required!</span>}
        </div>

        <div className="input-block">
          <label>Message:</label>
          <input
            className="input"
            id="msg-input"
            type="text"
            name="message"
            value={message}
            onBlur={() => handleBlur('message')}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          {messageError && <span className="error-message">Message is required!</span>}
        </div>

        <div className="input-block">
          <input className="submitBtn" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default Contact;
