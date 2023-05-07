import React, { useState } from 'react';
import './ContactMe.css';

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Contact data:', contact);
    // Add your API call or other logic to handle the contact data
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={contact.name}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={contact.email}
          onChange={handleInputChange}
        />

        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={contact.subject}
          onChange={handleInputChange}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={contact.message}
          onChange={handleInputChange}
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
