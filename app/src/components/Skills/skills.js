import React from 'react';
import styles from './skills.module.css';
import MediaCard from '../../common/SkillCard/skillscard';
import Heading from '../../common/Heading/heading';
import { Container } from '@mui/material';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiElementor,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiSequelize,
  SiMongodb,
  SiMongoose,
  SiGraphql,
  SiWordpress,
  SiGit,
  SiGithub,
  SiHeroku,
  SiVscodium,
  SiPostman
} from 'react-icons/si';

// Create a reusable SkillItem component
const SkillItem = ({ icon: Icon, color, name }) => (
  <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
    <Icon style={{ fontSize: '20px', color, marginRight: '8px' }} />
    <span style={{ fontSize: '14px' }}>{name}</span>
  </div>
);

export default function Skills() {
  return (
    <Container maxWidth="lg">
      <div className={styles.skills}>
        <Heading text={"My Skills"} color={"#fff"}></Heading>

        <div className={styles.cardContainer}>
          <MediaCard
            image="/frontend.svg"
            heading="Front-End"
            content={
              <div className={styles.skillList}>
                <SkillItem icon={SiHtml5} color="#E34F26" name="HTML5" />
                <SkillItem icon={SiCss3} color="#1572B6" name="CSS3" />
                <SkillItem icon={SiJavascript} color="#F7DF1E" name="JavaScript" />
                <SkillItem icon={SiTypescript} color="#3178C6" name="TypeScript" />
                <SkillItem icon={SiReact} color="#61DAFB" name="React" />
                <SkillItem icon={SiRedux} color="#764ABC" name="Redux" />
                <SkillItem icon={SiNextdotjs} color="#000000" name="Next.js" />
                <SkillItem icon={SiTailwindcss} color="#06B6D4" name="Tailwind CSS" />
                <SkillItem icon={SiBootstrap} color="#7952B3" name="Bootstrap" />
                <SkillItem icon={SiMui} color="#0081CB" name="Material UI" />
                <SkillItem icon={SiElementor} color="#92003B" name="Elementor" />
              </div>
            }
          />
          <MediaCard
            image="/backend.svg"
            heading="Back-End"
            content={
              <div className={styles.skillList}>
                <SkillItem icon={SiNodedotjs} color="#339933" name="Node.js" />
                <SkillItem icon={SiExpress} color="#000000" name="Express" />
                <SkillItem icon={SiMysql} color="#4479A1" name="MySQL" />
                <SkillItem icon={SiSequelize} color="#52B0E7" name="Sequelize" />
                <SkillItem icon={SiMongodb} color="#47A248" name="MongoDB" />
                <SkillItem icon={SiMongoose} color="#880000" name="Mongoose" />
                <SkillItem icon={SiGraphql} color="#E10098" name="GraphQL" />
                <SkillItem icon={SiWordpress} color="#21759B" name="WordPress" />
              </div>
            }
          />
          <MediaCard
            image="/tools.svg"
            heading="Tools"
            content={
              <div className={styles.skillList}>
                <SkillItem icon={SiGit} color="#F05032" name="Git" />
                <SkillItem icon={SiGithub} color="#181717" name="GitHub" />
                <SkillItem icon={SiHeroku} color="#430098" name="Heroku" />
                <SkillItem icon={SiVscodium} color="#007ACC" name="VS Code" />
                <SkillItem icon={SiPostman} color="#FF6C37" name="Postman" />
              </div>
            }
          />
        </div>
      </div>
    </Container>
  );
}