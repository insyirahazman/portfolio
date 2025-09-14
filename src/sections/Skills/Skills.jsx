import SkillCard from "./SkillCard";
import styles from './Skills.module.css';

function Skills({ skills = [] }) {
    return (
        <div className={styles['skill-list']}>
            {skills.map(skill => (
                <span className={styles['skill-tag']} key={skill}>{skill}</span>
            ))}
        </div>
    );
}

export default Skills;
