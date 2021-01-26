import React, { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';

import styles from './Landing.module.css';

const Reveal = require('react-reveal/Reveal');

export default function Landing(): ReactElement {
  const [slide, setSlide] = useState<number>(0);

  useEffect(() => {
    const change = setInterval(() => {
      if (slide < 9) setSlide((prev) => prev + 1);
    }, 400);

    return () => clearInterval(change);
  }, []);

  useEffect(() => {
    const lastChange = setTimeout(() => {
      if (slide === 9) setSlide((prev) => prev + 1);
    }, 10000);

    return () => clearTimeout(lastChange);
  }, []);

  let content = <></>;

  switch (slide) {
    case 0:
      content = (
        <Image src="/assets/showcase1.png" alt="showcase" layout="fill" />
      );
      break;
    case 1:
      content = (
        <Image src="/assets/showcase2.png" alt="showcase" layout="fill" />
      );
      break;
    case 2:
      content = (
        <Image src="/assets/showcase3.png" alt="showcase" layout="fill" />
      );
      break;
    case 3:
      content = (
        <Image src="/assets/showcase4.png" alt="showcase" layout="fill" />
      );
      break;
    case 4:
      content = (
        <Image src="/assets/showcase5.png" alt="showcase" layout="fill" />
      );
      break;
    case 5:
      content = (
        <Image src="/assets/showcase6.png" alt="showcase" layout="fill" />
      );
      break;
    case 6:
      content = (
        <Image src="/assets/showcase7.png" alt="showcase" layout="fill" />
      );
      break;
    case 7:
      content = (
        <Image src="/assets/showcase8.png" alt="showcase" layout="fill" />
      );
      break;
    case 8:
      content = (
        <Image src="/assets/showcase9.png" alt="showcase" layout="fill" />
      );
      break;
    case 9:
      content = <></>;
    default:
      content = (
        <Reveal bottom>
          <div className={styles.Content}>
            <h6>Hello! My name is</h6>
            <h1 style={{ marginTop: 10 }}>Wesley Tam.</h1>
            <h2 style={{ fontSize: '2rem' }}>
              I'm a <strong>Front End Developer.</strong>
            </h2>
          </div>
          <div className={styles.Arrow}>
            <Link to="aboutme" spy={true} smooth={true} duration={500}>
              <i className="fa fa-arrow-down" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      );
      break;
  }

  return (
    <section className={styles.Landing} id="landing">
      {content}
    </section>
  );
}
