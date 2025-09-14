import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './SubProjectsStyles.module.css';
import projects from '../../../common/ProjectList';
import stock from '../../../assets/project-asset/web-dev/project-1.mp4';
import portfolio from '../../../assets/project-asset/web-dev/project-2.mp4';
import nvdia from '../../../assets/project-asset/ml/project-3.png';

function SubProjects() {
  const { category } = useParams();
  const normalizedCategory = category.replace(/-/g, ' ');
  const filteredProjects = projects.filter(p => p.category.toLowerCase() === normalizedCategory.toLowerCase());

  return (
    <section id="subprojects" className={styles.container}>
      <h1>{normalizedCategory}</h1>
      {filteredProjects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        filteredProjects.map(project => (
          <div key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.image && (
              <img
                src={
                  project.image === 'project-3.png' ? nvdia :
                  ''
                }
                alt={project.title}
              />
            )}
            {project.video && (
              <video
                src={
                  project.video === 'project-1.mp4' ? stock :
                  project.video === 'project-2.mp4' ? portfolio :
                  ''
                }
                controls
              />
            )}
            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            <div className="skill-list">
              {project.tags.map(tag => (
                <span className="skill-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))
      )}
    </section>
  );
}

export default SubProjects;