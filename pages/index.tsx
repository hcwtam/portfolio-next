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
        <title>Wesley Tam | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
        />
        <link rel="stylesheet" href="/assets/font/stylesheet.css" />
      </Head>

      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
