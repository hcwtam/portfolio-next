import React, { ReactElement } from 'react';
import Image from 'next/image';
import styles from './About.module.css';

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
        <Image
          src="/assets/portrait.jpg"
          alt="portrait"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.Technologies}>
        <h4>Here are the technologies I use for development:</h4>
        <ul>
          <li>
            <div className={styles.Container}>
              <Image
                src="/assets/javascript.png"
                alt="Javascript logo"
                width={500}
                height={500}
              />
            </div>
            Javascript ES6+
          </li>
          <li>
            <div className={styles.Container}>
              <Image
                src="/assets/react.png"
                alt="React logo"
                width={500}
                height={500}
              />
            </div>
            React
          </li>
          <li>
            <div className={styles.Container}>
              <Image
                src="/assets/typescript.png"
                alt="Typescript logo"
                width={500}
                height={500}
              />
            </div>
            Typescript
          </li>
          <li>
            <div className={styles.Container}>
              <Image
                src="/assets/htmlcss.png"
                alt="HTML and CSS logos"
                width={500}
                height={500}
              />
            </div>
            HTML &amp; CSS
          </li>
          <li>
            <div className={styles.Container}>
              <Image
                src="/assets/python.png"
                alt="Python logo"
                width={500}
                height={500}
              />
            </div>
            Python
          </li>
          <li>
            <div className={styles.Container}>
              <Image
                src="/assets/flask.png"
                alt="Flask logo"
                width={500}
                height={500}
              />
            </div>
            Flask
          </li>
          <li>
            <div className={styles.Container}>
              <Image
                src="/assets/git.png"
                alt="Git logo"
                width={500}
                height={500}
              />
            </div>
            Git
          </li>
        </ul>
      </div>
    </section>
  );
}
