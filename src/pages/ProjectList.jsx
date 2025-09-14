import React from "react";

function ProjectList({ title, projects }) {
  return (
    <section>
      <h1>{title}</h1>
      <div>
        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          projects.map(project => (
            <div key={project.id} style={{marginBottom: '2rem'}}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              {project.image && <img src={`/src/assets/project-asset/${project.image}`} alt={project.title} style={{maxWidth: '300px'}} />}
              {project.video && <video src={`/src/assets/project-asset/${project.video}`} controls style={{maxWidth: '300px'}} />}
              <p>Status: {project.status}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
              <div>Tags: {project.tags.join(', ')}</div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default ProjectList;
