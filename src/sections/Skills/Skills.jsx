import styles from './SkillsStyles.module.css';

function Skills({ skills = [] }) {
    return (
        <section id="skills" className={styles.container}>
            <div className={styles['skill-list']}>
                {skills.map(skill => (
                    <div className={styles['skill-container']} key={skill.name || skill}>
                        <span className={styles['skill-tag']}>{skill.name || skill}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;