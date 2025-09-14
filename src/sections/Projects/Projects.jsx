import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import datavisDark from '../../assets/project-asset/datavisDark.svg';
import datavisLight from '../../assets/project-asset/datavisLight.svg';
import mlDark from '../../assets/project-asset/mlDark.svg';
import mlLight from '../../assets/project-asset/mlLight.svg';
import webDark from '../../assets/project-asset/webDark.svg';
import webLight from '../../assets/project-asset/webLight.svg';
import certDark from '../../assets/project-asset/certDark.svg';
import certLight from '../../assets/project-asset/certLight.svg';
import { useTheme } from '../../common/ThemeContext';
import projects from '../../common/ProjectList';

function Projects() {
  const {theme, toggleTheme} = useTheme();
  const datavisIcon = theme === 'light' ? datavisLight : datavisDark;
  const mlIcon = theme === 'light' ? mlLight : mlDark;
  const webIcon = theme === 'light' ? webLight : webDark;
  const certIcon = theme === 'light' ? certLight : certDark;

  const categories = [
    { key: 'Data Visualization', icon: datavisIcon, desc: 'Interactive Dashboards', route: 'Data-Visualization' },
    { key: 'Machine Learning', icon: mlIcon, desc: 'Predictive Models and Analytics', route: 'Machine-Learning' },
    { key: 'Web Development', icon: webIcon, desc: 'Modern Web Apps and Dashboards', route: 'Web-Development' },
    { key: 'Certifications', icon: certIcon, desc: 'Courses and Credentials', route: 'Certifications' }
  ];

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {categories.map(cat => (
          <Link to={`/projects/${cat.route}`} key={cat.key} style={{ textDecoration: 'none' }}>
            <ProjectCard src={cat.icon} h3={cat.key} p={cat.desc} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;