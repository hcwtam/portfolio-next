import React, { ReactElement, useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Link from 'next/link';

import styles from '../styles/YouVet.module.css';
import SubNavbar from '../components/Navbar/SubNavbar/SubNavbar';
import useWindowDimensions from '../hooks/useWindowDimensions';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function YouVet(): ReactElement {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const { width } = useWindowDimensions();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SubNavbar />
      <div className={styles.YouVet}>
        <h3>Vet Booking System</h3>
        <div className={styles.Icons}>
          <a
            href="https://github.com/hcwtam/vet-booking"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
            View Github
          </a>
          <a
            href="https://vet-booking.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-external-link-alt" />
            Visit Project
          </a>
        </div>
        <p>
          Whilst working as a volunteer in an animal welfare organisation, I was
          aware that the method of vet appointment is outdated and can be
          improved. Hence, I was inspired to create an online solution and
          created the vet booking system. Pet owners may search for available
          vets by providing an appointment date and animal type of the pet, then
          make appointments effortlessly.
        </p>
        <div className={styles.ImageContainer}>
          <img
            src="/assets/vet-booking1.jpg"
            alt="Homepage of Vet Booking system"
          />
        </div>
        <h4>Project Description</h4>
        <p>
          The front end application is written in <b>React</b> using{' '}
          <b>Typescript</b>. React is appopriate because the architecture of
          this project is suitable to be a single-page application, which has
          the advantage to be fast and responsive. React also offers the benefit
          to help manage states efficiently.
        </p>

        <p>
          I have been enjoy using Typescript. Unlike Javascript which is
          dynamically typed, static types have helped me catch errors many times
          when I have accidentally pass in incorrect intputs. I also find
          autocompletions and suggestions from VSCode with Typescript very
          handly, and my developer experience is improved significantly.
        </p>

        <p>
          The back end of this project is a RESTful API written using{' '}
          <b>Flask</b>, connected to a <b>PostgreSQL</b> database. This provided
          the opportunity to learn about Python and back end development in
          general. I have gained a much deeper understanding on different
          aspects of web development, and acquired a holistic view through both
          client-side and server-side development.
        </p>

        <div className={styles.ImageContainer}>
          <img src="/assets/vet-booking5.jpg" alt="Guest booking page" />
        </div>

        <h4>Development Process</h4>
        <p>
          A <b>requirements document</b> is created to outline the project goals
          and to explore requirements. I have adopted the <b>MoSCoW method</b>{' '}
          for the main features, which is used to rate the importance of each
          requirement. Each requirement is outlined as a user story, where a
          hypothetical user case is created to facilitate brainstorming of
          system behaviours.
        </p>
        {width > 595 ? (
          <div className={styles.pdfContainer}>
            <div style={{ height: 673, margin: '0 auto', textAlign: 'center' }}>
              <Document
                file="/assets/vet-req-doc.pdf"
                options={{ workerSrc: '/pdf.worker.js' }}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} scale={0.8} />
              </Document>
            </div>
            <div className={styles.pdfButtons}>
              <button
                type="button"
                disabled={pageNumber <= 1}
                onClick={() =>
                  setPageNumber((prevPageNumber) => prevPageNumber - 1)
                }
              >
                &#60;
              </button>
              <div>
                Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
              </div>
              <button
                type="button"
                disabled={pageNumber >= (numPages as number)}
                onClick={() =>
                  setPageNumber((prevPageNumber) => prevPageNumber + 1)
                }
              >
                &#62;
              </button>
            </div>
          </div>
        ) : null}

        <p>
          Next, I have used the <b>entity relationship diagram</b> approach to
          represent relationships between key business entities. Again, this is
          only for me to have a better understanding of the object model. I was
          aware that the development process would be{' '}
          <b>
            <em>"agile"</em>
          </b>
          , which I would discover and fine-tune requirements during coding.
        </p>
        <div className={styles.ImageContainer}>
          <img src="/assets/vet-ERD.png" alt="ER Diagram" />
        </div>

        <p>
          After that, I could not wait to finally start coding! I began by
          prototyping the database model, and reshaping it when building
          different routes for the API. I have used the tool <b>Postman</b> to
          send requests without a front end, which simplified the API building
          process and made developing it easier. Once the API supports user
          authentication and key features such as creating, getting, changing
          and deleting bookings, I then worked on the front end web app. It is a
          process of switching between front and back end, as I could make
          adjustments from one end to cater for the need of the other end. It
          was very enjoyable, because often times there are many solutions to a
          problem, and I had to face to challenge to evaluate the best possible
          option. I am confident to say my problem solving skills and critical
          thinking have improved.
        </p>

        <h4>Application Overview</h4>
        <h5 style={{ textDecoration: 'underline' }}>Guest Booking</h5>
        <p>
          1) On the front page, user is invited to make an appointment. After
          choosing "pet type" and appointment time, user may search for
          available vets.
        </p>
        <div className={styles.ImageContainer}>
          <img src="/assets/vet-guest1.jpg" alt="Guest booking step 1" />
        </div>
        <p>
          2) List of filtered vets displayed as cards. PO clicks on one of the
          cards to learn more about the vet.
        </p>
        <div className={styles.ImageContainer}>
          <img src="/assets/vet-guest2.png" alt="Guest booking step 2" />
        </div>
        <p>
          3) Directed to the vet's detail page. PO clicks on the "Book now"
          button.
        </p>
        <div className={styles.ImageContainer}>
          <img src="/assets/vet-guest3.png" alt="Guest booking step 3" />
        </div>
        <p>4) Modal pops up, PO inserts email and phone number.</p>
        <div className={styles.ImageContainer}>
          <img src="/assets/vet-guest4.png" alt="Guest booking step 4" />
        </div>
        <p>5) Clicks on confirm and voila!</p>
        <div className={styles.ImageContainer}>
          <img src="/assets/vet-guest5.png" alt="Guest booking step 5" />
        </div>
        <p>
          5) After closing the success modal, user is invited to a signup page.
        </p>
        <div className={styles.ImageContainer}>
          <img src="/assets/vet-guest6.png" alt="Guest booking step 6" />
        </div>
        <h5 style={{ textDecoration: 'underline' }}>User Features</h5>
        <p>
          User may view summary of upcoming and past appointments. Clicking on
          specific booking card opens up appointment detail, as well as options
          to change booking time or delete booking.
        </p>
        <div className={styles.ImageContainer}>
          <img src="/assets/vet-booking3.jpg" alt="Appointment panel" />
        </div>
        <div className={styles.ImageContainer}>
          <img src="/assets/vet-booking6.jpg" alt="Booking detail" />
        </div>
        <p>
          User may create, view, change and delete pet profiles at the pets
          page.
        </p>
        <div className={styles.ImageContainer}>
          <img src="/assets/vet-booking7.jpg" alt="Pets page" />
        </div>
        <div className={styles.ImageContainer}>
          <img src="/assets/vet-booking8.jpg" alt="Booking detail" />
        </div>

        <Link href="/#vetbooking" scroll={false}>
          Back to homepage
        </Link>
      </div>
    </>
  );
}
