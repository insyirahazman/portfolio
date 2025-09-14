import { Routes, Route, useLocation } from 'react-router-dom';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import SubProjects from './sections/Projects/SubProjects/SubProjects.jsx';
import Footer from './sections/Footer/Footer';
import './App.css';

function App() {
  const location = useLocation();
  const showHero = location.pathname === '/' || location.pathname === '/projects';

  return (
    <>
      {showHero && <Hero />}
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/projects/:category" element={<SubProjects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;