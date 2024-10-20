import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar"; // Import Snackbar
import MuiAlert from "@mui/material/Alert"; // Import Alert for Snackbar
import styles from "./contact.module.css"; // Import the CSS module for styling
import ContactCard from "../../common/ContactCard/contactCard";
import Heading from "../../common/Heading/heading";
import { Container } from "@mui/material";
import emailjs from "emailjs-com"; // Import EmailJS

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an object to send all data
    const templateParams = {
      from_name: formData.firstName,
      from_last_name: formData.lastName,
      from_email: formData.email,
      message: formData.message,
    };
  
    console.log("templateParams=====",templateParams);
    

    emailjs
  .send(
    "service_tdb56sl", // Your service ID
    "template_chchivs", // Your template ID
    templateParams, // Data to be sent
    "1PqmWfWlxZxVOAS-z" // Your public key
  )
  .then(
    (result) => {
      // console.log("Email sent successfully:", result.text);
      // console.log("Data sent:", templateParams); // Log the data being sent
      setSnackbarMessage("Email sent successfully!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    },
    (error) => {
      // console.log("Failed to send email:", error.text);
      // console.log("Data sent:", templateParams); // Log the data being sent
      setSnackbarMessage("Failed to send email. Please try again.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  );

  };

  const [snackbarOpen, setSnackbarOpen] = useState(false); // Snackbar open state
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Snackbar message
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // Snackbar severity

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_tdb56sl', 'template_chchivs', e.target, '1PqmWfWlxZxVOAS-z')
  //     .then((result) => {
  //         console.log('Email sent successfully:', result.text);
  //         setSnackbarMessage("Email sent successfully!");
  //         setSnackbarSeverity("success");
  //         setSnackbarOpen(true);
  //     }, (error) => {
  //         console.log('Failed to send email:', error.text);
  //         setSnackbarMessage("Failed to send email. Please try again.");
  //         setSnackbarSeverity("error");
  //         setSnackbarOpen(true);
  //     });
  // };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };


  const handleGmailClick = () => {
    window.location.href = "mailto:usamabintahir312@gmail.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/usama-bin-tahir-615aa4202", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/usama-malik-312", "_blank");
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/923405254664", "_blank");
  };

  return (
    <div className={styles.skills}>
      <Container maxWidth="lg">
        <Heading text={"Contact Me"} color={"#000"} />

        <div className={styles.cardContainer}>
        <ContactCard
          icon="/gmail.svg"
          heading="Email"
          content="Let's get in touch"
          onClick={handleGmailClick}
        />
        <ContactCard
          icon="/linkedin.svg"
          heading="LinkedIn"
          content="Let's connect"
          onClick={handleLinkedInClick}
        />
        <ContactCard
          icon="/github.svg"
          heading="Github"
          content="Check out my repos"
          onClick={handleGitHubClick}
        />
        <ContactCard
          icon="/whatsapp.svg"
          heading="WhatsApp"
          content="Direct Message me"
          onClick={handleWhatsAppClick}
        />
      </div>
      </Container>

      {/* Contact Form */}
      <div className={styles.contactFormDiv}>
        {/* <Container maxWidth="lg" > */}

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <Container maxWidth="lg">
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
          </Container>
        </form>
        {/* </Container> */}
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
