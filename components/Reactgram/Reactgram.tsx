import React, { ReactElement, useEffect } from 'react';

import styles from './Reactgram.module.css';
import SubNavbar from '../Navbar/SubNavbar/SubNavbar';
import pic1 from '../../assets/1.jpg';
import pic2 from '../../assets/reactgram-profile.jpg';
import pic3 from '../../assets/reactgram-modal.jpg';
import pic4 from '../../assets/reactgram-settings.png';
import { HashLink as Link } from 'react-router-hash-link';

export default function Reactgram(): ReactElement {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SubNavbar />
      <div className={styles.Reactgram}>
        <h3>Reactgram</h3>
        <div className={styles.Icons}>
          <a
            href="https://github.com/hcwtam/projects/tree/master/037-reactgram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
            View Github
          </a>
          <a
            href="https://reactgram-ac3b0.web.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-external-link-alt" />
            Visit Project
          </a>
        </div>
        <p>
          Reactgram is a web application that includes functionalities of
          Instagram. I decided to create this project to solidify my abilities
          to create a functional web app for different users. Main features of
          this application include sharing photos, posting comments, liking and
          saving posts, viewing user profiles as well as setting user details.
        </p>
        <div className={styles.ImageContainer}>
          <img src={pic1} alt="Homepage of Reactgram" />
        </div>
        <h4>Project Description</h4>
        <p>
          <b>React</b> and <b>Typescript</b> are used for this project. Firebase
          is used for backend and database. For state management, I have taken
          the approach of separating states into three categories:{' '}
          <em>global</em>, <em>local</em> and <em>fetched data</em>.
        </p>

        <p>
          <b>React Context</b> is used for data that are shared across the
          application, such as authentication and user data. Context helps to
          avoid passing data through multiple levels of the tree. Whereas local
          data such as showing and hiding components are simply passed as props.
        </p>
        <div className={styles.ImageContainer}>
          <img src={pic3} alt="Modal of Reactgram" />
        </div>
        <p>
          I have used <b>SWR</b>, a React Hooks library for remote data fetching
          for fetched data states. It is a great solution for components such as
          posts that require requesting data asynchronously. SWR offers the
          benefits of fetching, caching and refetching, ensuring a constant
          stream of data updates.
        </p>

        <div className={styles.ImageContainer}>
          <img src={pic2} alt="Profile of Reactgram" />
        </div>

        <h4>Challenges encountered</h4>
        <p>
          During development of this project, I have had the problem of writing
          similar codes for similar scenarios. For example, liking posts in
          homepage happen to be very similar to liking specific post when opened
          in a modal. I realised that repeating code with similar logic in
          different places makes it hard to maintain, and requires more time to
          develop.
        </p>

        <div className={styles.ImageContainer}>
          <img src={pic4} alt="Settings of Reactgram" />
        </div>
        <h4>Solutions and Takeaways</h4>
        <p>
          To tackle the aforementioned problem, I have adopted the{' '}
          <em>"Don't Repeat Yourself"</em> principle by utilising{' '}
          <b>custom hooks</b> to ensure code reusability. Custom hooks allow me
          to customise inputs and outputs of the function. For instance, I could
          pass in user ID and post data of a specific post, then receive number
          of likes as state, as well as functions to control said state. I found
          success in writing much simpler, more maintainable code. I have also
          realised the importance and advantages of code refactoring.
        </p>
        <Link to="/#reactgram">Back to homepage</Link>
      </div>
    </>
  );
}
