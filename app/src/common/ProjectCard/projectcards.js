import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const SkillsCard = ({ image, heading, desc,tech , subheading}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <Image
        src={image} 
        alt={heading} 
        layout="responsive"
        width={360}
        height={180}
      /> */}
      <img 
        src={image}  
        alt="Skill Image"
        style={{ width: '360px', height: '180px', objectFit:"fill"}} 
      />
      <div  style={{marginLeft:"10px" }}>
        {/* <Typography style={{fontFamily:"Poppins", fontSize:"30px", fontWeight:"800px", }}> */}
        <h1 
          style={{
              fontFamily:"Poppins",
              fontSize:"24px",
              fontWeight:"800px",
              margin:"0px"
          }}>
                {heading}
        </h1>
        <h2  style={{
              fontFamily:"Poppins",
              fontSize:"20px",
              fontWeight:"700px",
              margin:"0px", color:"grey"
          }}>{subheading}</h2>
        <Typography variant="body2" color="text.secondary"  
         style={{
              fontFamily:"Poppins",
              height:"70px",marginBottom:"20px"
          }}>
          {desc}
        </Typography>
          <h3 style={{margin:"0px"}}>Technologies</h3>
        <Typography style={{borderTop:"1px solid black", paddingTop:"20px"}} variant="body2" color="text.secondary">
          {tech}
        </Typography>
      </div>
      
    </Card>
  );
}

export default SkillsCard;
