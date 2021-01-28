import React, { ReactElement } from 'react';
import { Link } from 'react-scroll';

import styles from './Landing.module.css';
import Fade from 'react-reveal/Fade';

export default function Landing(): ReactElement {
  let content = (
    <Fade top duration={2000}>
      <div className={styles.Main}>
        <div className={styles.Content}>
          <h6>Hello! My name is</h6>
          <h1 style={{ margin: `30px 0` }}>Wesley Tam.</h1>
          <h2 style={{ fontSize: '2rem' }}>
            I'm a <strong>Web Developer.</strong>
          </h2>
        </div>
        <div className={styles.Arrow}>
          <Link to="aboutme" spy={true} smooth={true} duration={500}>
            <i className="fa fa-arrow-down" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Fade>
  );

  return (
    <>
      <section className={styles.Landing} id="landing">
        {content}
      </section>
      {/* <div className={styles.Infinite} /> */}
    </>
  );
}
