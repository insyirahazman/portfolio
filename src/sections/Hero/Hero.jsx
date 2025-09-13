import styles from './HeroStyles.module.css'
import heroImg from '../../assets/profile.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import mailLight from '../../assets/mailLight.svg'
import mailDark from '../../assets/mailDark.svg'
import linkedinLight from '../../assets/linkedinLight.svg'
import linkedinDark from '../../assets/linkedinDark.svg'
import githubLight from '../../assets/githubLight.svg'
import githubDark from '../../assets/githubDark.svg'
import CV from '../../assets/Resume.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const mailIcon = theme === 'light' ? mailLight : mailDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt="Profile Picture" />
                <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme} />
            </div>
            <div className={styles.info}>
                <h1>Hi! I'm Insyirah Azman</h1>
                <h2>Artificial Intelligence Student</h2>
                <br />
                <span>
                    <a href="mailto:insyirazman@gmail.com" target="_blank" style={{ marginRight: "16px" }}>
                        <img src={mailIcon} alt="Mail Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/insyirah-azman-022849213/" target="_blank" style={{ marginRight: "16px" }}>
                        <img src={linkedinIcon} alt="LinkedIn Icon" />
                    </a>
                    <a href="https://github.com/insyirahazman" target="_blank" style={{ marginRight: "16px" }}>
                        <img src={githubIcon} alt="GitHub Icon" />
                    </a>
                </span>
                <p className={styles.description}>
                    I love exploring data, experimenting with ML and DL models, and learning new technologies. This portfolio is where I share my journey, projects, and skills as I grow in the field of tech.
                </p>
                <a href={CV} download>
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section>
  );
}

export default Hero;