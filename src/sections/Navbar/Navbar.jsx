import { Link } from "react-router-dom";
import styles from "./NavbarStyles.module.css";
import { useTheme } from "../../common/ThemeContext";

function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <section id="navbar" className={styles.container}>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/projects">Projects</Link>
            </li>
        </ul>
        <span className={styles.title}>PORTFOLIO</span>
        </section>
    );
}

export default Navbar;