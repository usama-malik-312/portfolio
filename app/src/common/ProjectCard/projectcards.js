import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import styles from './card.module.css';

const SkillsCard = ({ image, heading, desc, tech, subheading, demoLink, codeLink }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 670,
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        border: "1px solid #5A5A5A",
        overflow: "hidden",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ height: 180, borderBottom: "1px solid grey" }}>
        <img
          src={image}
          alt={heading}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div style={{ padding: 20, flex: 1, display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>{heading}</h1>

        {subheading && (
          <h3 style={{ fontSize: 16, fontWeight: 500, color: "#7A7A7A", margin: "10px 0 0" }}>
            {subheading}
          </h3>
        )}

        <p style={{
          fontSize: 13,
          color: "#7A7A7A",
          margin: "10px 0",
          minHeight: 70,
        }}>
          {desc}
        </p>

        <div style={{ marginTop: "10px" }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: "#333", marginBottom: 10 }}>
            Technologies
          </h2>

          <div style={{
            borderTop: "1px solid #5A5A5A",
            paddingTop: 15,
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            minHeight: 90,
          }}>
            {tech}
          </div>
        </div>

        {/* Buttons at bottom */}
        <div style={{ marginTop: "auto", display: "flex", gap: "10px", paddingTop: 20 }}>
          <Button
            component="a"
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttonAbout}
          >
            Visit Site
          </Button>
          {/* <Button
            component="a"
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttonResume}
          >
            Code
          </Button> */}
        </div>
      </div>
    </Card>
  );
};

export default SkillsCard;
