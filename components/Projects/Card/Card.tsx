import React, { ReactElement } from 'react';

import styles from './Card.module.css';

interface Props {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  link: string;
  image: string;
}

export default function Card({
  title,
  description,
  technologies,
  github,
  link,
  image
}: Props): ReactElement {
  return (
    <div className={styles.Card}>
      <div>
        <div className={styles.ImageContainer}>
          <a href={link || github} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={title} />
          </a>
        </div>
        <div>
          <h5>
            <a href={link || github} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h5>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <ul>
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className={styles.Icons}>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" />
          </a>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
