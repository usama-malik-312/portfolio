import React from 'react';
import styles from './skills.module.css'; // Import the CSS module for styling
import MediaCard from '../common/skillscard'; // Assuming MediaCard is in the same directory
import Heading from '../common/heading';

export default function Skills() {
  return (
    <div className={styles.skills}>
      {/* <h2 className={styles.heading}>My Skills</h2> */}
      <Heading text={"My Skills"} color={"#fff"}></Heading>

      <div className={styles.cardContainer}>
        <MediaCard
          image="/frontend.svg"
          heading="Front-End"
          content={
            <div class="elementor-shortcode">
              <img decoding="async" style={{marginLeft:"5px"}} alt="HTML5" src="https://raulwebdev.com//wp-content/uploads/2024/03/HTML5.svg" height="20" width="auto"/>
              <img decoding="async" style={{marginLeft:"5px"}} alt="CSS3" src="https://raulwebdev.com//wp-content/uploads/2024/03/CSS3.svg" height="20" width="auto"/>
              <img decoding="async" style={{marginLeft:"5px"}} alt="JavaScript" src="https://raulwebdev.com//wp-content/uploads/2024/03/JavaScript.svg" height="20" width="auto"/>
              <img decoding="async" style={{marginLeft:"5px"}} alt="TypeScript" src="https://raulwebdev.com//wp-content/uploads/2024/03/TypeScript.svg" height="20" width="auto"/>
              <img decoding="async" style={{marginLeft:"5px"}} alt="React" src="https://raulwebdev.com//wp-content/uploads/2024/03/React.svg" height="20" width="auto"/>
              <img decoding="async" style={{marginLeft:"5px"}} alt="Redux" src="https://raulwebdev.com//wp-content/uploads/2024/03/Redux.svg" height="20" width="auto"/>
              <img decoding="async" style={{marginLeft:"5px"}} alt="Next.js" src="https://raulwebdev.com//wp-content/uploads/2024/03/Next.js.svg" height="20" width="auto"/>
              <img decoding="async" style={{marginLeft:"5px"}} alt="Tailwind CSS" src="https://raulwebdev.com//wp-content/uploads/2024/03/Tailwind20CSS.svg" height="20" width="auto"/>
              <img decoding="async" style={{marginLeft:"5px"}} alt="Bootstrap" src="https://raulwebdev.com//wp-content/uploads/2024/03/Bootstrap.svg" height="20" width="auto"/>
              {/* <img decoding="async" style={{marginLeft:"5px"}} alt="jQuery" src="https://raulwebdev.com//wp-content/uploads/2024/03/jQuery-1.svg" height="20" width="auto"/> */}
              <img decoding="async" style={{marginLeft:"5px"}} alt="Material Design" src="https://raulwebdev.com//wp-content/uploads/2024/03/Material20Design-1.svg" height="20" width="auto"/>
              <img decoding="async" style={{marginLeft:"5px"}} alt="Elementor" src="https://raulwebdev.com//wp-content/uploads/2024/03/Elementor.svg" height="20" width="auto"/>
              </div>
          }
        />
        <MediaCard
          image="/backend.svg"
          heading="Back-End"
          content={<div class="elementor-shortcode">
            <img decoding="async" style={{marginLeft:"5px"}} alt="Node.js"src="https://raulwebdev.com/wp-content/uploads/2024/03/Node.js.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="Express"src="https://raulwebdev.com/wp-content/uploads/2024/03/Express.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="MySQL"src="https://raulwebdev.com/wp-content/uploads/2024/03/MySQL.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="Sequelize"src="https://raulwebdev.com/wp-content/uploads/2024/03/Sequelize.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="MongoDB"src="https://raulwebdev.com/wp-content/uploads/2024/03/MongoDB.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="Mongoose"src="https://raulwebdev.com/wp-content/uploads/2024/03/Mongoose.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="GraphQL"src="https://raulwebdev.com/wp-content/uploads/2024/03/GraphQL.svg" height="20" width="auto"/>
            {/* <img decoding="async" style={{marginLeft:"5px"}} alt="Apollo GraphQL"src="https://raulwebdev.com/wp-content/uploads/2024/03/Apollo20GraphQL.svg" height="20" width="auto"/> */}
            {/* <img decoding="async" style={{marginLeft:"5px"}} alt="Python"src="https://raulwebdev.com/wp-content/uploads/2024/03/Python.svg" height="20" width="auto"/> */}
            {/* <img decoding="async" style={{marginLeft:"5px"}} alt="Spring Boot"src="https://raulwebdev.com/wp-content/uploads/2024/03/Spring20Boot.svg" height="20" width="auto"/> */}
            {/* <img decoding="async" style={{marginLeft:"5px"}} alt="Spring Security"src="https://raulwebdev.com/wp-content/uploads/2024/03/Spring20Security.svg" height="20" width="auto"/> */}
            {/* <img decoding="async" style={{marginLeft:"5px"}} alt="Django"src="https://raulwebdev.com/wp-content/uploads/2024/03/Django.svg" height="20" width="auto"/> */}
            <img decoding="async" style={{marginLeft:"5px"}} alt="WordPress"src="https://raulwebdev.com/wp-content/uploads/2024/03/WordPress.svg" height="20" width="auto"/>
            </div>}
        />
        <MediaCard
          image="/tools.svg"

          heading="Tools"
          content={
            <div class="elementor-shortcode">
              <img decoding="async" style={{marginLeft:"5px"}} alt="Git" src="https://raulwebdev.com/wp-content/uploads/2024/03/Git.svg" height="20" width="auto"/>
              <img decoding="async" style={{marginLeft:"5px"}} alt="GitHub" src="https://raulwebdev.com/wp-content/uploads/2024/03/GitHub.svg" height="20" width="auto"/>
              <img decoding="async" style={{marginLeft:"5px"}} alt="Heroku" src="https://raulwebdev.com/wp-content/uploads/2024/03/Heroku.svg" height="20" width="auto"/>
              {/* <img decoding="async" style={{marginLeft:"5px"}} alt="Netlify" src="https://raulwebdev.com/wp-content/uploads/2024/03/Netlify.svg" height="20" width="auto"/> */}
              <img decoding="async" style={{marginLeft:"5px"}} alt="Visual Studio Code" src="https://raulwebdev.com/wp-content/uploads/2024/03/Visual20Studio20Code.svg" height="20" width="auto"/>
              <img decoding="async" style={{marginLeft:"5px"}} alt="Postman" src="https://raulwebdev.com/wp-content/uploads/2024/03/Postman.svg" height="20" width="auto"/>
              {/* <img decoding="async" style={{marginLeft:"5px"}} alt="Webpack" src="https://raulwebdev.com/wp-content/uploads/2024/03/Webpack.svg" height="20" width="auto"/> */}
              {/* <img decoding="async" style={{marginLeft:"5px"}} alt="Jest" src="https://raulwebdev.com/wp-content/uploads/2024/03/Jest.svg" height="20" width="auto"/> */}
              {/* <img decoding="async" style={{marginLeft:"5px"}} alt="IntelliJ IDEA" src="https://raulwebdev.com/wp-content/uploads/2024/03/IntelliJ20IDEA.svg" height="20" width="auto"/> */}
              {/* <img decoding="async" style={{marginLeft:"5px"}} alt="Render" src="https://raulwebdev.com/wp-content/uploads/2024/03/Render.svg" height="20" width="auto"/> */}
              </div>
          }
        />
      </div>
    </div>
  );
}
