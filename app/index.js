"use client";

// import styles from '../styles/page.module.css';
import ButtonAppBar from './src/common/header';
import Hero from './src/components/hero';
import About from './src/components/about';
import Skills from './src/components/skills';
import Certificates from './src/components/certificates';
import Projects from './src/components/projects';
import Contact from './src/components/contact';
import Footer from './src/common/footer';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from 'react';

export default function AppFile() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <ButtonAppBar />
      {/* <Container> */}
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        {/* <section id="certificates">
          <Certificates />
        </section> */}
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      {/* </Container> */}
      <Footer />
      {showButton && (
        <Fab
          color="primary"
          aria-label="scroll back to top"
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '16px',
            right: '16px',
          }}
        >
          <ArrowUpwardIcon />
        </Fab>
      )}
    </div>
  );
}

