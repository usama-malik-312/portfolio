import React from "react";
import styles from "./common.module.css"; // Import the CSS module for styling

const ContactCard = ({ icon, heading, content, onClick }) => {
  return (
    <div className={styles.contactCard} onClick={onClick} style={{ cursor: "pointer" }}>
      <img
        src={icon}
        alt="Contact"
        style={{
          width: "36px",
          height: "36px",
          objectFit: "contain",
          marginRight: "10px",
        }} // Adjust margin to create space between the image and text
      />
      <div>
        <h1 className={styles.contactCardHead}>{heading}</h1>
        <p className={styles.contactCardContent}>{content}</p>
      </div>
    </div>
  );
};

export default ContactCard;
