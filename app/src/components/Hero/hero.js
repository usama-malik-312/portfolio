import React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js's Image component for optimization
import styles from './hero.module.css'; // Import the CSS module for styling
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import { Container } from '@mui/material';

export default function Hero() {
  return (
    <Container maxWidth="lg" style={{marginTop:"59px"}}>

    <section className={styles.hero}>
      <div className={styles.intro}>
        <h1 className={styles.name}>Hi, I'm Usama!</h1>
        <p className={styles.description}>A web developer based in Kahuta, RWP, creating seamless digital experiences. Elevate Your Web Presence. Explore my work and let’s discuss your project!</p>
        <div className={styles.buttons}>
          <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
            <Button className={styles.buttonAbout}>About Me</Button>
          </ScrollLink>
          <Button startIcon={<DownloadIcon />}
          href="/Usama_bin_Tahir, Resume.pdf" 
           download="Usama_Bin_Tahir_Resume.pdf"
           className={styles.buttonResume}>Resume</Button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div 
        className={styles.diamond}
        >
          <Image
            src="/u3.jpg" // Update with the actual path to your image
            alt="Hero Image"
            layout="responsive"
            width={500}
            height={500}
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
    </Container>

  );
}
