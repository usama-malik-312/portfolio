import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image'; // Import Image from Next.js for optimization
import { BorderTop } from '@mui/icons-material';

const SkillsCard = ({ image, heading, content }) => {
  return (
    <Card 
    sx={{ 
       maxWidth: 345,
       display: 'flex',
       flexDirection: 'column', 
      //  justifyContent: 'center',
       alignItems: 'center',
      //  height: '100%' ,
       boxShadow:"none"
         }}>
      <img 
        src={image}  
        alt="Skill Image"
        style={{ width: '90px', height: '90px', margin: '20px 0 0 0' }} 
      />
      <CardContent sx={{ textAlign: 'center' , }}>
        <h3 style={{ fontWeight: '700', fontSize: '25px', fontFamily: 'Poppins' }}>
          {heading}
        </h3>
        <Typography style={{borderTop:"1px solid black", paddingTop:"20px"}} variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SkillsCard;
