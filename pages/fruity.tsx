import React, { ReactElement, useEffect } from 'react';
import Link from 'next/link';

import styles from '../styles/Fruity.module.css';
import SubNavbar from '../components/Navbar/SubNavbar/SubNavbar';

export default function Fruity(): ReactElement {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SubNavbar />
      <div className={styles.Fruity}>
        <h3>Fruity</h3>
        <div className={styles.Icons}>
          <a
            href="https://github.com/hcwtam/projects/tree/master/035-ecommerce"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
            View Github
          </a>
          <a
            href="https://fruity-store.web.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-external-link-alt" />
            Visit Project
          </a>
        </div>
        <p>
          Fruity is an e-commerce application built with <b>React</b> and{' '}
          <b>Typescript</b>. I challenged myself to create this app that
          emphasises on providing a user-friendly and smooth shopping
          experience. Fruity offers essential e-commerce features such as
          shopping cart, product detail, products filter, checkout and purchase
          history.
        </p>
        <div className={styles.ImageContainer}>
          <img src="/assets/fruity-homepage.jpg" alt="Homepage of Fruity" />
        </div>
        <h4>Project Description</h4>
        <p>
          Creating responsive pages is crucial for e-commerce, or even any web
          app nowadays. To ensure the application is suitable for any screen
          size and mobile-friendly, media queries are used to cater for
          different viewports. <b>CSS Modules</b> is used for styling. It
          guarantees that specific styles only apply to that component and
          nothing else.
        </p>
        <div className={styles.ImageContainer}>
          <img src="/assets/4.jpg" alt="Landing page of Fruity" />
        </div>
        <p>
          <b>Redux</b> is used for state management for this app. It encourages
          a clean way to maintain states by providing a central store. By
          combining reducers that serve different purposes, such as updating
          authentication or order data, results could be gathered to a single,
          easily manageable state object. I found dispatching actions to be a
          clear way to trigger state changes.
        </p>
        <p>For backend and database, Firebase is used.</p>
        <h4>Challenges encountered</h4>
        <p>
          Throughout the development process, things went smoothly as I built
          components from scratch. As I have completed the basic layout of the
          application, I tried to improve the structure of various components.
          For example, I decided to change the display of products, so that they
          can be added directly into cart. Unfortunately, it did not work as
          expected and I had a hard time figuring out the cause of the problem.
        </p>

        <h4>Solutions and Takeaways</h4>
        <p>
          For me, the first thing that came into mind when something went wrong
          was to log variables in the console. I used <code>console.log</code>{' '}
          frantically for multiple suspicious variables, but to no avail. I
          decided to use a different approach by inspecting{' '}
          <em>Redux DevTools</em>, an extension used specifically for inspecting
          Redux states and action payload. It allowed me to go back in time to
          examine the exact state at different moments. I quickly noticed that
          an expecting action was missing and figured I have missed a crucial
          part in the code. From this experience, I have learnt to use different
          methods and DevTools for debugging, instead of solely relying on{' '}
          <code>console.log</code>.
        </p>
        <div className={styles.ImageContainer}>
          <img src="/assets/2.jpg" alt="Checkout page of Fruity" />
        </div>
        <p>
          Afterwards, I wrote unit tests using <b>Jest</b> and{' '}
          <b>React Testing Library</b>. Unit tests give me confidence that each
          component will perform as intended. This is particularly useful when I
          have made changes to the component. I focused on making sure to test
          functionalities instead of implementation details like whether a
          function of a third party package will work or not. Unit tests allow
          me to know which particular component is causing error, saving much
          time and hassle from manual testing and wild guessing. Writing tests
          also forced me to better understand the design requirements, which
          encouraged me to design components in the end user's perspective.
        </p>
        <Link href="/#fruity">Back to homepage</Link>
      </div>
    </>
  );
}
