import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Landing from '../components/Landing/Landing';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wesley Tam | Front End Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
