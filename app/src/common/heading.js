import React from 'react';

const Heading = ({ text, color }) => {
  return (
    <h1 
    style={{
        fontFamily:"Poppins",
        fontSize:"42px",
        fontWeight:"800px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:{color},
    }}>
      {text}
    </h1>
  );
}

export default Heading;
