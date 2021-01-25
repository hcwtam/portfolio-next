import React, { ReactElement, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Rodal from 'rodal';

import 'rodal/lib/rodal.css';
import styles from './SubNavbar.module.css';
import cv from '../../../assets/Wesley_Tam_CV.pdf';

const INITIAL_POSITION = window.scrollY;

export default function SubNavbar(): ReactElement {
  const [position, setPosition] = useState(INITIAL_POSITION);
  const [show, setShow] = useState(true);
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
    if (show && currentPosition > prevPosition) setShow(false);
    if (!show && currentPosition < prevPosition) setShow(true);
    prevPosition = currentPosition;
    setPosition(prevPosition);
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
      <a href={cv} target="_blank" rel="noopener noreferrer">
        Resume
      </a>
    </button>
  );

  return (
    <nav className={`${styles.Navbar} ${!show && styles.Hide}`}>
      <Link to="/">
        <div className={styles.Logo}>WT</div>
      </Link>
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
          <div className={styles.RodalIcons}>{icons}</div>
          <div className={styles.RodalButton}>{resume}</div>
        </div>
      </Rodal>
    </nav>
  );
}
