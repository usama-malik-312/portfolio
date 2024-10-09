import * as React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js's Image component for optimization
import styles from './about.module.css'; // Import the CSS module for styling
import Heading from '../../common/Heading/heading';
import { Container } from '@mui/material';

const experience = [
  {
    name: 'Enroutech Technologies', 
    date: 'Nov 2022 - Present',
    role: 'FrontEnd Developer',
    city: "Rawalpindi"
  },
  { 
    name: 'Smart Fusion', 
    date: 'May 2022 - Oct 2022', 
    role: 'Full Stack Developer',
    city: "Islamabad"
  },
  { 
    name: 'Zigron',
    date: 'April 2021 - July 2021',
    role: 'Intern Full Stack',
    city: "Islamabad"
  },
];

const education = [
  { 
    degree: 'BSCS',
    date: '2017 - 2021', 
    university: 'UET Taxila' 
  },
];

export default function About() {
  return (
    <div className={styles.aboutMain}>
      <Container maxWidth="lg">
        <Heading text={"About Me"} color={"#fff"} />
        <div className={styles.about}>
          <div className={styles.imageContainer}>
            <div className={styles.imagediv}>
              <Image
                src="/usamaAboutNew.JPG" // Update with the actual path to your image
                // src="/usamacar.jpeg" // Update with the actual path to your image
                alt="About Image"
                layout="responsive"
                width={550}
                height={330}
                className={styles.aboutImg}
              />
            </div>
          </div>
          <div className={styles.description}>
            <p>
              Hi, I'm Usama Bin Tahir, a passionate software developer focused on delivering seamless and efficient solutions for the digital world. With experience in front-end and full-stack development, I specialize in building high-quality, user-friendly web applications. My journey in the tech industry includes working with reputable companies in Islamabad and Rawalpindi. I am always keen to learn new technologies and take on exciting challenges. Outside of work, I enjoy playing cricket and have a keen interest in cars.
            </p>

            <div className={styles.section}>
              <h3>Experience</h3>
              <ul>
                {experience.map((item, index) => (
                  <li key={index} className={styles.expSection}>
                    <div className={styles.expDiv}>
                      <div>{item.name}</div>  
                      <div>{item.date}</div>
                    </div>
                    <div className={styles.expDiv}>
                      <div>{item.role}</div>
                      <div>{item.city}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h3>Education</h3>
              <ul>
                {education.map((item, index) => (
                  <li key={index} className={styles.expSection}>
                    <div className={styles.expDiv}>
                      <div><strong>{item.degree}</strong> - {item.university}</div>  
                      <div>{item.date}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
