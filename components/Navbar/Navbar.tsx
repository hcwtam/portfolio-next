import React, { ReactElement, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';
import Rodal from 'rodal';

import 'rodal/lib/rodal.css';
import styles from './Navbar.module.css';

const INITIAL_POSITION = this === 'window' ? window.scrollY : 0;

export default function Navbar(): ReactElement {
  const [position, setPosition] = useState(INITIAL_POSITION);
  const [show, setShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const modalStyles = {
    height: '100vh',
    width: 350,
    top: 0,
    right: 0,
    margin: 0,
    padding: 0,
    inset: '0 calc(100% - 300px)',
    borderRadius: 0,
    textAlign: 'left'
  };

  let prevPosition = position;

  const checkScrollDirection = useCallback(() => {
    const currentPosition = window.scrollY;
    if (show && currentPosition > prevPosition) setShow((prev) => false);
    if (!show && currentPosition < prevPosition) setShow((prev) => true);
    prevPosition = currentPosition;
    setPosition(currentPosition);
  }, [show, position]);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollDirection);
    return () => {
      window.removeEventListener('scroll', checkScrollDirection);
    };
  }, [checkScrollDirection]);

  const showModal = () => {
    setOpenModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setOpenModal(false);
    document.body.style.overflow = 'auto';
  };

  const listItems = (
    <>
      <li>
        <Link
          to="aboutme"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeModal}
        >
          About Me
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={40}
          duration={500}
          onClick={closeModal}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeModal}
        >
          Contact
        </Link>
      </li>
    </>
  );

  const icons = (
    <>
      <a
        href="https://www.linkedin.com/in/wesleyhctam"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin" />
      </a>
      <a
        href="https://github.com/hcwtam"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github" />
      </a>
    </>
  );

  const resume = (
    <button className={styles.Resume}>
      <a
        href="../../assets/Wesley_Tam_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </button>
  );

  return (
    <nav className={`${styles.Navbar} ${!show && styles.Hide}`}>
      <Link to="landing" spy={true} smooth={true} offset={-30} duration={500}>
        <div className={styles.Logo}>WT</div>
      </Link>
      <ul className={styles.Links}>{listItems}</ul>
      <div className={styles.Icons}>
        {icons}
        {resume}
      </div>
      <div className={styles.Sidebar} onClick={showModal}>
        <div className={styles.Hamburger}></div>
      </div>
      <Rodal
        visible={openModal}
        onClose={closeModal}
        customStyles={modalStyles}
        animation="slideRight"
      >
        <div className={styles.Rodal}>
          <ul className={styles.RodalLinks}>{listItems}</ul>
          <div className={styles.RodalIcons}>{icons}</div>
          <div className={styles.RodalButton}>{resume}</div>
        </div>
      </Rodal>
    </nav>
  );
}
