"use client";

// import styles from '../styles/page.module.css';

import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from 'react';
import ButtonAppBar from './src/common/Header/header';
import Hero from './src/components/Hero/hero';
import About from './src/components/About/about';
import Skills from './src/components/Skills/skills';
import Projects from './src/components/Projects/projects';
import Contact from './src/components/Contact/contact';
import Footer from './src/common/Footer/footer';

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

