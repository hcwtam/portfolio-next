import React, { ReactElement } from 'react';

import styles from './Projects.module.css';
import other from './other.json';
import Card from './Card/Card';
import Link from 'next/link';

export default function Projects(): ReactElement {
  const cards = other.map(
    ({ title, description, technologies, github, link, image }) => (
      <Card
        title={title}
        description={description}
        technologies={technologies}
        github={github}
        link={link}
        key={title}
        image={image}
      />
    )
  );

  return (
    <section className={styles.Projects} id="projects">
      <h3>My Projects</h3>
      <div className={styles.Project} id="vetbooking">
        <div className={styles.Description}>
          <h4>
            <Link href="/vetbooking">Vet Booking</Link>
          </h4>
          <p>
            A booking system for making vet appointments. User may search for
            available vets by providing appointment date and animal type of the
            pet, then make appointments effortlessly.
          </p>
          <ul>
            <li>React</li>
            <li>Typescript</li>
            <li>Flask</li>
            <li>PostgreSQL</li>
          </ul>
          <Link href="/vetbooking">
            <a>
              <h5>Learn More</h5>
            </a>
          </Link>
        </div>
        <div className={styles.ImageContainer}>
          <Link href="/vetbooking">
            <a>
              <img src="/assets/vet-booking.jpg" alt="project 1" />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.Project} id="reactgram">
        <div className={styles.ImageContainer}>
          <Link href="/reactgram">
            <a>
              <img src="/assets/reactgram.jpg" alt="project 2" />
            </a>
          </Link>
        </div>
        <div className={styles.Description}>
          <h4>
            <Link href="/reactgram">Reactgram</Link>
          </h4>
          <p>
            A clone of instagram built with React. You may share photos, add
            captions, follow friends, post comments and more.
          </p>
          <ul>
            <li>React</li>
            <li>Context</li>
            <li>SWR</li>
            <li>Typescript</li>
          </ul>
          <Link href="/reactgram">
            <a>
              <h5>Learn More</h5>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.Project} id="fruity">
        <div className={styles.Description}>
          <h4>
            <Link href="/fruity">Fruity</Link>
          </h4>
          <p>
            An e-commerce application for online grocery shopping. Includes an
            easy-to-use checkout, detail page for your favourite products, and
            own purchase history for your reference.
          </p>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Typescript</li>
          </ul>
          <Link href="/fruity">
            <a>
              <h5>Learn More</h5>
            </a>
          </Link>
        </div>
        <div className={styles.ImageContainer}>
          <Link href="/fruity">
            <a>
              <img src="/assets/fruity.jpg" alt="project 3" />
            </a>
          </Link>
        </div>
      </div>
      <h4 className={styles.Other}>Other noteworthy projects:</h4>
      <div className={styles.Others}>{cards}</div>
    </section>
  );
}
