
import * as React from 'react';
import styles from './projects.module.css'; // Import the CSS module for styling
import MediaCard from '../common/projectcards';
import Heading from '../common/heading';

export default function Projects() {
  return (
    <div className={styles.projectsMain}>
      <Heading text={"Projects"} color={"#fff"}></Heading>
      <div className={styles.cardContainer}>
      <MediaCard
        image="/ntsc2.jpg"
        heading="NTSC"
        subheading="Fleet Management System"
        desc="A technology driven company for Advanced Multi-Modal Mobility and a transformative force for the movement of people, goods and services"
        tech={
          <div class="elementor-shortcode">
            <img decoding="async" style={{marginLeft:"5px"}} alt="HTML5" src="https://raulwebdev.com//wp-content/uploads/2024/03/HTML5.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="CSS3" src="https://raulwebdev.com//wp-content/uploads/2024/03/CSS3.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="JavaScript" src="https://raulwebdev.com//wp-content/uploads/2024/03/JavaScript.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="React" src="https://raulwebdev.com//wp-content/uploads/2024/03/React.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="Material Design" src="https://raulwebdev.com//wp-content/uploads/2024/03/Material20Design-1.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="Redux" src="https://raulwebdev.com//wp-content/uploads/2024/03/Redux.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="MySQL"src="https://raulwebdev.com/wp-content/uploads/2024/03/MySQL.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="Java" src="https://raulwebdev.com//wp-content/uploads/2024/03/Java.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="SpringBoot" src="https://raulwebdev.com//wp-content/uploads/2024/03/Spring20Boot.svg" height="20" width="auto"/>
            </div>}
     />
      <MediaCard
        image="/flotilla2.jpg"
        heading="Flotilla-IOT"
        subheading="Fleet Management System"
        desc="Flotilla IoT is a fully integrated and automated telematics platform, offering an efficient goal-driven Fleet Management System to facilitate business operations"
        tech={
          <div class="elementor-shortcode">
             <img decoding="async" style={{marginLeft:"5px"}} alt="HTML5" src="https://raulwebdev.com//wp-content/uploads/2024/03/HTML5.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="CSS3" src="https://raulwebdev.com//wp-content/uploads/2024/03/CSS3.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="JavaScript" src="https://raulwebdev.com//wp-content/uploads/2024/03/JavaScript.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="React" src="https://raulwebdev.com//wp-content/uploads/2024/03/React.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="Material Design" src="https://raulwebdev.com//wp-content/uploads/2024/03/Material20Design-1.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="Redux" src="https://raulwebdev.com//wp-content/uploads/2024/03/Redux.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="MySQL"src="https://raulwebdev.com/wp-content/uploads/2024/03/MySQL.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="Java" src="https://raulwebdev.com//wp-content/uploads/2024/03/Java.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="SpringBoot" src="https://raulwebdev.com//wp-content/uploads/2024/03/Spring20Boot.svg" height="20" width="auto"/>
            </div>}
     />
      <MediaCard
        image="/sianty.png"  
        heading="Sianty"
        subheading="Garage Software"
        desc="Description of Skill 3."
        tech={
          <div class="elementor-shortcode">
             <img decoding="async" style={{marginLeft:"5px"}} alt="HTML5" src="https://raulwebdev.com//wp-content/uploads/2024/03/HTML5.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="CSS3" src="https://raulwebdev.com//wp-content/uploads/2024/03/CSS3.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="JavaScript" src="https://raulwebdev.com//wp-content/uploads/2024/03/JavaScript.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="React" src="https://raulwebdev.com//wp-content/uploads/2024/03/React.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="TypeScript" src="https://raulwebdev.com//wp-content/uploads/2024/03/TypeScript.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="Redux" src="https://raulwebdev.com//wp-content/uploads/2024/03/Redux.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="Tailwind CSS" src="https://raulwebdev.com//wp-content/uploads/2024/03/Tailwind20CSS.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="Material Design" src="https://raulwebdev.com//wp-content/uploads/2024/03/Material20Design-1.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="MySQL"src="https://raulwebdev.com/wp-content/uploads/2024/03/MySQL.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="Java" src="https://raulwebdev.com//wp-content/uploads/2024/03/Java.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="SpringBoot" src="https://raulwebdev.com//wp-content/uploads/2024/03/Spring20Boot.svg" height="20" width="auto"/>
            </div>}
      />

<MediaCard
        image="/tabsera.jpg"  
        heading="Tabsera"
        subheading="Educational Platform"
        desc="an online mass educational platform that provides high quality, low cost, internationally accredited education to students in developing countries"
        tech={
          <div class="elementor-shortcode">
            <img decoding="async" style={{marginLeft:"5px"}} alt="HTML5" src="https://raulwebdev.com//wp-content/uploads/2024/03/HTML5.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="CSS3" src="https://raulwebdev.com//wp-content/uploads/2024/03/CSS3.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="JavaScript" src="https://raulwebdev.com//wp-content/uploads/2024/03/JavaScript.svg" height="20" width="auto"/>
            {/* <img decoding="async" style={{marginLeft:"5px"}} alt="TypeScript" src="https://raulwebdev.com//wp-content/uploads/2024/03/TypeScript.svg" height="20" width="auto"/> */}
            <img decoding="async" style={{marginLeft:"5px"}} alt="React" src="https://raulwebdev.com//wp-content/uploads/2024/03/React.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="Redux" src="https://raulwebdev.com//wp-content/uploads/2024/03/Redux.svg" height="20" width="auto"/>
            {/* <img decoding="async" style={{marginLeft:"5px"}} alt="Next.js" src="https://raulwebdev.com//wp-content/uploads/2024/03/Next.js.svg" height="20" width="auto"/> */}
            {/* <img decoding="async" style={{marginLeft:"5px"}} alt="Tailwind CSS" src="https://raulwebdev.com//wp-content/uploads/2024/03/Tailwind20CSS.svg" height="20" width="auto"/> */}
            <img decoding="async" style={{marginLeft:"5px"}} alt="Bootstrap" src="https://raulwebdev.com//wp-content/uploads/2024/03/Bootstrap.svg" height="20" width="auto"/>
            {/* <img decoding="async" style={{marginLeft:"5px"}} alt="jQuery" src="https://raulwebdev.com//wp-content/uploads/2024/03/jQuery-1.svg" height="20" width="auto"/> */}
            <img decoding="async" style={{marginLeft:"5px"}} alt="Material Design" src="https://raulwebdev.com//wp-content/uploads/2024/03/Material20Design-1.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="Node.js"src="https://raulwebdev.com/wp-content/uploads/2024/03/Node.js.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="MySQL"src="https://raulwebdev.com/wp-content/uploads/2024/03/MySQL.svg" height="20" width="auto"/>
           
            {/* <img decoding="async" style={{marginLeft:"5px"}} alt="Elementor" src="https://raulwebdev.com//wp-content/uploads/2024/03/Elementor.svg" height="20" width="auto"/> */}
            </div>}
     />

<MediaCard
        image="/fraudlens.png"  
        heading="Medical Lens"
        subheading="Financial Frauds"
        desc="PAYMENT INTEGRITY SOLUTION How to Prevent Fraud, Waste, & Abuse (FWA) in Healthcare "
        tech={
          <div class="elementor-shortcode">
            <img decoding="async" style={{marginLeft:"5px"}} alt="HTML5" src="https://raulwebdev.com//wp-content/uploads/2024/03/HTML5.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="CSS3" src="https://raulwebdev.com//wp-content/uploads/2024/03/CSS3.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="JavaScript" src="https://raulwebdev.com//wp-content/uploads/2024/03/JavaScript.svg" height="20" width="auto"/>
            {/* <img decoding="async" style={{marginLeft:"5px"}} alt="TypeScript" src="https://raulwebdev.com//wp-content/uploads/2024/03/TypeScript.svg" height="20" width="auto"/> */}
            <img decoding="async" style={{marginLeft:"5px"}} alt="React" src="https://raulwebdev.com//wp-content/uploads/2024/03/React.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="Redux" src="https://raulwebdev.com//wp-content/uploads/2024/03/Redux.svg" height="20" width="auto"/>
            {/* <img decoding="async" style={{marginLeft:"5px"}} alt="Next.js" src="https://raulwebdev.com//wp-content/uploads/2024/03/Next.js.svg" height="20" width="auto"/> */}
            {/* <img decoding="async" style={{marginLeft:"5px"}} alt="Tailwind CSS" src="https://raulwebdev.com//wp-content/uploads/2024/03/Tailwind20CSS.svg" height="20" width="auto"/> */}
            <img decoding="async" style={{marginLeft:"5px"}} alt="Bootstrap" src="https://raulwebdev.com//wp-content/uploads/2024/03/Bootstrap.svg" height="20" width="auto"/>
            {/* <img decoding="async" style={{marginLeft:"5px"}} alt="jQuery" src="https://raulwebdev.com//wp-content/uploads/2024/03/jQuery-1.svg" height="20" width="auto"/> */}
            <img decoding="async" style={{marginLeft:"5px"}} alt="Material Design" src="https://raulwebdev.com//wp-content/uploads/2024/03/Material20Design-1.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="Node.js"src="https://raulwebdev.com/wp-content/uploads/2024/03/Node.js.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="MySQL"src="https://raulwebdev.com/wp-content/uploads/2024/03/MySQL.svg" height="20" width="auto"/>
           </div>}
     />
      <MediaCard
        image="/tijari.png"  
        heading="Tijari"
        subheading="Ecommerce"

        desc="Tijari is a digital service offering online shopping, food delivery, bill payments, live TV, movies, and various corporate and government services to customers."
        tech={
          <div class="elementor-shortcode">
             <img decoding="async" style={{marginLeft:"5px"}} alt="HTML5" src="https://raulwebdev.com//wp-content/uploads/2024/03/HTML5.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="CSS3" src="https://raulwebdev.com//wp-content/uploads/2024/03/CSS3.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="JavaScript" src="https://raulwebdev.com//wp-content/uploads/2024/03/JavaScript.svg" height="20" width="auto"/>
            {/* <img decoding="async" style={{marginLeft:"5px"}} alt="TypeScript" src="https://raulwebdev.com//wp-content/uploads/2024/03/TypeScript.svg" height="20" width="auto"/> */}
            <img decoding="async" style={{marginLeft:"5px"}} alt="React" src="https://raulwebdev.com//wp-content/uploads/2024/03/React.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="Redux" src="https://raulwebdev.com//wp-content/uploads/2024/03/Redux.svg" height="20" width="auto"/>
            {/* <img decoding="async" style={{marginLeft:"5px"}} alt="Next.js" src="https://raulwebdev.com//wp-content/uploads/2024/03/Next.js.svg" height="20" width="auto"/> */}
            {/* <img decoding="async" style={{marginLeft:"5px"}} alt="Tailwind CSS" src="https://raulwebdev.com//wp-content/uploads/2024/03/Tailwind20CSS.svg" height="20" width="auto"/> */}
            <img decoding="async" style={{marginLeft:"5px"}} alt="Bootstrap" src="https://raulwebdev.com//wp-content/uploads/2024/03/Bootstrap.svg" height="20" width="auto"/>
            {/* <img decoding="async" style={{marginLeft:"5px"}} alt="jQuery" src="https://raulwebdev.com//wp-content/uploads/2024/03/jQuery-1.svg" height="20" width="auto"/> */}
            <img decoding="async" style={{marginLeft:"5px"}} alt="Material Design" src="https://raulwebdev.com//wp-content/uploads/2024/03/Material20Design-1.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="Node.js"src="https://raulwebdev.com/wp-content/uploads/2024/03/Node.js.svg" height="20" width="auto"/>
            <img decoding="async" style={{marginLeft:"5px"}} alt="MySQL"src="https://raulwebdev.com/wp-content/uploads/2024/03/MySQL.svg" height="20" width="auto"/>
            </div>}
     />


    </div>

    <div className={styles.projectSubMain}>
      <h3 className={styles.projectSubHead}>Elevate Your Web Present</h3>
      <p className={styles.projectSubContent}>Unlock the Power of Web Development to Stand Out Online</p>
    </div>
    </div>
  );
}
