import * as React from 'react';
import styles from './projects.module.css';
import MediaCard from '../../common/ProjectCard/projectcards';
import Heading from '../../common/Heading/heading';
import { Container } from '@mui/material';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiSpringboot,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiMaterialdesign,
  SiGithub,
  SiNextdotjs,
  SiGraphql
} from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

import { FaJava } from 'react-icons/fa'; // ✅ Correct

// Tech icon component with label
const TechItem = ({ icon: Icon, name, color }) => (
  <div className={styles.techItem}>
    <Icon style={{ color, fontSize: '18px' }} />
    <span>{name}</span>
  </div>
);

// Link button component
const ProjectLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.projectLink}
  >
    <Icon className={styles.linkIcon} />
    {label}
  </a>
);

// Project data array
const projects = [
  {
    image: "/ntsc2.jpg",
    heading: "NTSC",
    subheading: "Fleet Management System",
    desc: "A technology driven company for Advanced Multi-Modal Mobility and a transformative force for the movement of people, goods and services",
    links: {
      live: "https://ntsc.sa/",
      code: "https://github.com/yourusername/ntsc-project"
    },
    tech: [
      { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
      { icon: SiCss3, name: "CSS3", color: "#1572B6" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiMaterialdesign, name: "Material", color: "#0081CB" },
      { icon: SiRedux, name: "Redux", color: "#764ABC" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: FaJava, name: "Java", color: "#007396" },
      { icon: SiSpringboot, name: "Spring", color: "#6DB33F" }
    ]
  },
  {
    image: "/flotilla2.jpg",
    heading: "Flotilla-IOT",
    subheading: "Fleet Management System",
    desc: "Flotilla IoT is a fully integrated and automated telematics platform, offering an efficient goal-driven Fleet Management System to facilitate business operations",
    links: {
      live: "https://flotillaiot.com/",
      code: "https://github.com/yourusername/flotilla-project"
    },
    tech: [
      { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
      { icon: SiCss3, name: "CSS3", color: "#1572B6" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiMaterialdesign, name: "Material", color: "#0081CB" },
      { icon: SiRedux, name: "Redux", color: "#764ABC" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: FaJava, name: "Java", color: "#007396" },
      { icon: SiSpringboot, name: "Spring", color: "#6DB33F" }
    ]
  },
  {
    image: "/sianty.png",
    heading: "Sianty",
    subheading: "Garage Software",
    desc: "Comprehensive garage management software for vehicle maintenance tracking and workshop operations",
    links: {
      live: "https://sianty.com/",
      code: "https://github.com/yourusername/sianty-project"
    },
    tech: [
      { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
      { icon: SiCss3, name: "CSS3", color: "#1572B6" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: SiRedux, name: "Redux", color: "#764ABC" },
      { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
      { icon: SiMaterialdesign, name: "Material", color: "#0081CB" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: FaJava, name: "Java", color: "#007396" },
      { icon: SiSpringboot, name: "Spring", color: "#6DB33F" }
    ]
  },
  {
    image: "/tabsera.jpg",
    heading: "Tabsera",
    subheading: "Educational Platform",
    desc: "An online mass educational platform that provides high quality, low cost, internationally accredited education to students in developing countries",
    links: {
      live: "https://www.tabsera.com/",
      code: "https://github.com/yourusername/tabsera-project"
    },
    tech: [
      { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
      { icon: SiCss3, name: "CSS3", color: "#1572B6" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiRedux, name: "Redux", color: "#764ABC" },
      { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
      { icon: SiMaterialdesign, name: "Material", color: "#0081CB" },
      { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" }
    ]
  },
  {
    image: "/fraudlens.png",
    heading: "Medical Lens",
    subheading: "Financial Frauds Detection",
    desc: "PAYMENT INTEGRITY SOLUTION to Prevent Fraud, Waste, & Abuse (FWA) in Healthcare",
    links: {
      // live: "https://medical-lens.com",
      code: "https://github.com/yourusername/medical-lens"
    },
    tech: [
      { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
      { icon: SiCss3, name: "CSS3", color: "#1572B6" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiRedux, name: "Redux", color: "#764ABC" },
      { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
      { icon: SiMaterialdesign, name: "Material", color: "#0081CB" },
      { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: SiGraphql, name: "GraphQL", color: "#E10098" }
    ]
  },
  {
    image: "/tijari.png",
    heading: "Tijari",
    subheading: "Ecommerce Platform",
    desc: "Digital service offering online shopping, food delivery, bill payments, live TV, movies, and various corporate and government services to customers",
    links: {
      // live: "https://tijari.com",
      code: "https://github.com/yourusername/tijari-project"
    },
    tech: [
      { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
      { icon: SiCss3, name: "CSS3", color: "#1572B6" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
      { icon: SiRedux, name: "Redux", color: "#764ABC" },
      { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
      { icon: SiMaterialdesign, name: "Material", color: "#0081CB" },
      { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" }
    ]
  }
];
export default function Projects() {
  return (
    <div className={styles.projectsMain}>
      <Container maxWidth="lg">
        <Heading text={"Projects"} color={"#fff"} />

        <div className={styles.cardContainer}>
          {projects.map((project, index) => (
            <MediaCard
              image={project.image}
              heading={project.heading}
              subheading={project.subheading}
              desc={project.desc}
              tech={
                <div className={styles.techStack}>
                  {project.tech.map((tech, i) => (
                    <TechItem key={i} icon={tech.icon} name={tech.name} color={tech.color} />
                  ))}
                </div>
              }
              demoLink={project.links.live}
              codeLink={project.links.code}
            />

          ))}
        </div>
      </Container>

      <div className={styles.projectSubMain}>
        <Container maxWidth="lg">
          <h3 className={styles.projectSubHead}>Elevate Your Web Presence</h3>
          <p className={styles.projectSubContent}>
            Unlock the Power of Web Development to Stand Out Online
          </p>
        </Container>
      </div>
    </div>
  );
}