import React, { ReactElement } from 'react';
import styles from './About.module.css';
import Image from 'next/image';

export default function About(): ReactElement {
  return (
    <section className={styles.About} id="aboutme">
      <article className={styles.Article}>
        <h3>About Me</h3>
        <p>
          I am passionate in web development and design. Whether it's a website
          or an application, I strive to provide an intuitive and fluid user
          experience.
        </p>
        <p>
          I graduated from the{' '}
          <a href="https://www.bath.ac.uk/">University of Bath</a> with a
          master's degree in Mechanical Engineering. Having worked as an
          engineer in the robotics field, I discovered my interest in computer
          science and programming. I enjoy using my technical and analytical
          skills to solve challenges.
        </p>
      </article>
      <div className={styles.ImageContainer}>
        <Image src="/assets/portrait.jpg" alt="portrait" layout="fill" />
      </div>
      <div className={styles.Technologies}>
        <h4>Here are the technologies I use for development:</h4>
        <ul>
          <li>
            <div className={styles.Container}>
              <img src="/assets/javascript.png" alt="Javascript logo" />
            </div>
            Javascript ES6+
          </li>
          <li>
            <div className={styles.Container}>
              <img src="/assets/react.png" alt="React logo" />
            </div>
            React
          </li>
          <li>
            <div className={styles.Container}>
              <img src="/assets/typescript.png" alt="Typescript logo" />
            </div>
            Typescript
          </li>
          <li>
            <div className={styles.Container}>
              <img src="/assets/htmlcss.png" alt="HTML and CSS logos" />
            </div>
            HTML &amp; CSS
          </li>
          <li>
            <div className={styles.Container}>
              <img src="/assets/python.png" alt="Python logo" />
            </div>
            Python
          </li>
          <li>
            <div className={styles.Container}>
              <img src="/assets/flask.png" alt="Flask logo" />
            </div>
            Flask
          </li>
          <li>
            <div className={styles.Container}>
              <img src="/assets/git.png" alt="Git logo" />
            </div>
            Git
          </li>
        </ul>
      </div>
    </section>
  );
}
