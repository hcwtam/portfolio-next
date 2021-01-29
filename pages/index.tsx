import Navbar from '../components/Navbar/Navbar';
import Landing from '../components/Landing/Landing';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
