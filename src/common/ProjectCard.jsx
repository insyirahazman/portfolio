import React from 'react'

function ProjectCard({src, link, h3}) {
  return (
    <a href={link} target="_blank">
        <img className="hover" src={src} alt={`${h3} logo`} />
        <h3>{h3}</h3>
        <p>An LSTM model to predict NVDIA stock prices</p>
    </a>
  )
}

export default ProjectCard