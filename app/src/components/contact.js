import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './contact.module.css'; // Import the CSS module for styling
import ContactCard from '../common/contactCard';
import Heading from '../common/heading';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className={styles.skills}>
    <Heading text={"Contact Me"} color={"#000"} />

    <div className={styles.cardContainer}>
      <ContactCard
        icon="/gmail.svg"
        heading="Email"
        content="Let's get in touch"
      />
      <ContactCard
        icon="/linkedin.svg"
        heading="LinkedIn"
        content="Let's connect"
      />
      <ContactCard
        icon="/github.svg"
        heading="Github"
        content="Checkout my repos"
      />
      <ContactCard
        icon="/whatsapp.svg"
        heading="WhatsApp"
        content="Direct Message me"
      />
    </div>

    {/* Contact Form */}
    <div className={styles.contactFormDiv}>
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <Heading text={"Send Me a Message"} color={"#fff"} />

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName" className={styles.inputLabel}>
            First Name <span className={styles.required}>*</span>
          </label>
          <TextField
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            className={styles.inputField}
            variant="outlined"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName" className={styles.inputLabel}>
            Last Name <span className={styles.required}>*</span>
          </label>
          <TextField
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            className={styles.inputField}
            variant="outlined"
          />
        </div>
      </div>
      <div className={styles.fullWidthGroup}>
        <label htmlFor="email" className={styles.inputLabel}>
          Email <span className={styles.required}>*</span>
        </label>
        <TextField
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          className={styles.inputField}
          variant="outlined"
        />
      </div>
      <div className={styles.fullWidthGroup}>
        <label htmlFor="message" className={styles.inputLabel}>
          Message <span className={styles.required}>*</span>
        </label>
        <TextField
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          multiline
          rows={4}
          className={styles.inputField}
          variant="outlined"
        />
      </div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={styles.submitButton}
      >
        Submit
      </Button>
    </form>
  </div>
  </div>
  
  );
}
