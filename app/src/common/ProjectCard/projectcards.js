import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Button from '@mui/material/Button';
import styles from './card.module.css'; // Import the CSS module for styling

const SkillsCard = ({ image, heading, desc, tech, subheading }) => {
  return (
    <Card
      sx={{
        width: "31%",
        maxWidth: 345,
        height: "670px",
        // padding: "10px",
        borderRadius: "10px",
        border: "1px  #5A5A5A",
      }}
    >
      {/* <Image
        src={image} 
        alt={heading} 
        layout="responsive"
        width={360}
        height={180}
      /> */}
      <div  style={{borderBottom:"1px solid grey" , height: "180px"}}>
      <img
        src={image}
        alt="Skill Image"
        style={{ width: "360px", height: "180px", objectFit: "fill" }}
      />
      </div>
      <div style={{ padding:20 }}>
        {/* <Typography style={{fontFamily:"Poppins", fontSize:"30px", fontWeight:"800px", }}> */}
        <h1
          style={{
            // fontFamily: "Poppins",
            fontSize: "30px",
            fontWeight: "800px",
            margin: "0px",
            lineHeight:1
          }}
        >
          {heading}
        </h1>
        <h3
          style={{
            // fontFamily: "Poppins",
            fontSize: "19px",
            fontWeight: "600px",
            margin: "0px",
            color: "#7A7A7A",
            marginTop:"10px"
          }}
        >
          {subheading}
        </h3>
        <p
          // variant="body2"
          // color="text.secondary"
          style={{
            // fontFamily: "Poppins",
            fontSize: "13px",
            margin: "0px",
            minHeight:"98px",
            color: "#7A7A7A",
            marginTop:"10px"
          }}
        >
          {desc}
        </p>
        <h2  
          style={{
            // fontFamily: "Poppins",
            fontSize: "22px",
            fontWeight: "600px",
            margin: "0px",
            color: "#7A7A7A",
            marginTop:"10px"
          }}>
            Technologies
            </h2>
      <div  style={{ height: "110px", }}>

        <Typography
          style={{ borderTop: "1px solid #5A5A5A", paddingTop: "20px" }}
          // variant="body2"
          // color="text.secondary"
        >
          {tech}
        </Typography>
      </div>
      <div  style={{marginTop:"40px" }}>
      {/* <ScrollLink to="about" smooth={true} duration={500} offset={-70}> */}
            <Button 
            disabled
            className={styles.buttonAbout}
            >View Demo</Button>
          {/* </ScrollLink> */}
          <Button 
          disabled
          // href="/Usama Bin Tahir.pdf" 
          //  download="Usama_Bin_Tahir_Resume.pdf"
          style={{marginLeft:"10px"}}
           className={styles.buttonResume}
           > Code</Button>
      </div>

      </div>
    </Card>
  );
};

export default SkillsCard;
