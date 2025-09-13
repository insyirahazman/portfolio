import styles from './ProjectsStyles.module.css'
import nvdia from '../../assets/project-asset/nvidia-prediction.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={nvdia} link="https://github.com/insyirahazman/Stock-Prediction-using-LSTM.git" h3={nvdia} />
      </div>
    </section>
  );
}

export default Projects;