import React, { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Slider, { Settings } from 'react-slick';
import Image from 'next/image';

import styles from './Landing.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SLICK_SETTINGS: Settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: false,
  arrows: false,
  adaptiveHeight: true
};

const Reveal = require('react-reveal/Reveal');

export default function Landing(): ReactElement {
  const [nav1, setNav1] = useState<Slider | undefined>();
  const [nav2, setNav2] = useState<Slider | undefined>();
  const [nav3, setNav3] = useState<Slider | undefined>();
  let slider1: Slider = ([] as unknown) as Slider;
  let slider2: Slider = ([] as unknown) as Slider;
  let slider3: Slider = ([] as unknown) as Slider;

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
    setNav3(slider3);
  }, [slider1, slider2, slider3]);

  const leftCarousel = (
    <Slider
      asNavFor={nav2}
      ref={(slider) => (slider1 = slider as Slider)}
      {...SLICK_SETTINGS}
    >
      <div className={styles.ImageContainer}>
        <Image
          src="/assets/showcase1.png"
          alt="showcase"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.ImageContainer}>
        <Image
          src="/assets/showcase2.png"
          alt="showcase"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.ImageContainer}>
        <Image
          src="/assets/showcase6.png"
          alt="showcase"
          width={500}
          height={500}
        />
      </div>
    </Slider>
  );

  const middleCarousel = (
    <Slider
      asNavFor={nav3}
      ref={(slider) => (slider2 = slider as Slider)}
      {...SLICK_SETTINGS}
    >
      <div className={styles.ImageContainer}>
        <Image
          src="/assets/showcase3.png"
          alt="showcase"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.ImageContainer}>
        <Image
          src="/assets/showcase8.png"
          alt="showcase"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.ImageContainer}>
        <Image
          src="/assets/showcase7.png"
          alt="showcase"
          width={500}
          height={500}
        />
      </div>
    </Slider>
  );

  const rightCarousel = (
    <Slider
      asNavFor={nav1}
      ref={(slider) => (slider3 = slider as Slider)}
      {...SLICK_SETTINGS}
    >
      <div className={styles.ImageContainer}>
        <Image
          src="/assets/showcase9.png"
          alt="showcase"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.ImageContainer}>
        <Image
          src="/assets/showcase4.png"
          alt="showcase"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.ImageContainer}>
        <Image
          src="/assets/showcase5.png"
          alt="showcase"
          width={500}
          height={500}
        />
      </div>
    </Slider>
  );

  return (
    <section className={styles.Landing} id="landing">
      <Reveal bottom>
        <Slider className={styles.Main}>
          <div className={styles.Content}>
            <h6>Hello! My name is</h6>
            <h1 style={{ marginTop: 10 }}>Wesley Tam.</h1>
            <h2 style={{ fontSize: '2rem' }}>
              I'm a <strong>Front End Developer.</strong>
            </h2>
          </div>
          <div className={styles.Content}>
            <div className={styles.Carousel}>
              <div className={styles.Side}>{leftCarousel}</div>
              <div className={styles.Middle}>{middleCarousel}</div>
              <div className={styles.Side}>{rightCarousel}</div>
            </div>
          </div>
        </Slider>
        <div className={styles.Arrow}>
          <Link to="aboutme" spy={true} smooth={true} duration={500}>
            <i className="fa fa-arrow-down" aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
