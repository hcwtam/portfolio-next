import React, { ReactElement } from 'react';

import styles from './Contact.module.css';
import Footer from '../Footer/Footer';

interface Props {}

export default function Contact(): ReactElement {
  return (
    <section className={styles.Contact} id="contact">
      <h3>Get in Touch</h3>
      <p>
        Please do not hesitate to contact me if you are looking for a developer,
        or just want to connect!
      </p>
      <a
        href="mailto:hcwtam@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: 24 }}
      >
        hcwtam@gmail.com
      </a>
      <Footer />
    </section>
  );
}
