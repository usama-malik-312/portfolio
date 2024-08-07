import * as React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js's Image component for optimization
import styles from './about.module.css'; // Import the CSS module for styling
import Heading from '../common/heading';

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
    degree: 'MSAI', 
    date: '2024 - Present', 
    university: 'CUST Islamabad' 
  },
  { 
    degree: 'BSCS',
    date: '2017 - 2021', 
    university: 'UET Taxila' 
  },
];

export default function About() {
  return (
    <div className={styles.aboutMain}>
      <Heading text={"About Me"} color={"#fff"}></Heading>
      <div className={styles.about}>
        <div className={styles.imageContainer}>
          <div className={styles.imagediv}>
            <Image
              src="/usamaAboutNew.JPG" // Update with the actual path to your image
              alt="About Image"
              layout="responsive"
              width={550}
              height={330}
              className={styles.aboutImg}
            />
            {/* <img src="/usamaAbout.JPG" 
            alt="About Image"
            className={styles.aboutImg}

             ></img> */}
          </div>
        </div>
        <div className={styles.description}>
          <p>
            Hello, I'm Usama Bin Tahir. I'm a software developer with a passion for creating innovative solutions.
            With expertise in various programming languages and frameworks, I strive to deliver high-quality software products.
          </p>
          <p>
          Beyond the world of code, I enjoy playing cricket and have a keen interest in cars.</p>
          <div>
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
          <div>
            <h3>Education</h3>
            <ul>
              {education.map((item, index) => (
                <li key={index} className={styles.expSection}>
                  <div className={styles.expDiv}>
                    <div><strong>{item.degree}</strong> - {item.university} </div>  
                     <div>{item.date}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
