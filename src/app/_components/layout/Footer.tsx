import React from 'react';
import styles from '@/styles/layout/footer.module.css';
import {
  faInstagram,
  faLinkedin,
  faGoogle,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className={`${styles.main_footer} ${styles.main_footer__bg}`}>
      <div className={`${styles.main_footer__top} `}>
        <div className='container'>
          <div className='row'>
            <div
              className={`${styles.footer_widget__col} ${styles.footer_widget__col__about}`}
            >
              <div className={`${styles.footer_widget__col__content}`}>
                <h5 className={`${styles.footer_widget__col__content__title}`}>
                  Showmates
                </h5>
                <p
                  className={`${styles.footer_widget__col__content__text}`}
                >{`Discover and book tickets for your favorite events effortlessly at our website. Explore a wide range of categories, with a user-friendly interface for easy browsing and ticket reservation. Don't miss out on exclusive deals and opportunities. Join us now!`}</p>
                <div className={`${styles.main_footer__social}`}>
                  <a
                    href='https://instagram.com/showmates.in?igshid=MzRlODBiNWFlZA=='
                    target='_blank'
                  >
                    <FontAwesomeIcon icon={faInstagram} aria-hidden='true' />
                    <span className='sr-only'>Instagram</span>
                  </a>
                  <a
                    href='https://www.linkedin.com/company/showmates.in'
                    target='_blank'
                  >
                    <FontAwesomeIcon icon={faLinkedin} aria-hidden='true' />
                    <span className='sr-only'>Linkedin</span>
                  </a>
                  <a href='mailto:showmates759@gmail.com'>
                    <FontAwesomeIcon icon={faGoogle} aria-hidden='true' />
                    <span className='sr-only'>Google</span>
                  </a>
                  <a href='https://facebook.com/showmates.in' target='_blank'>
                    <FontAwesomeIcon icon={faFacebook} aria-hidden='true' />
                    <span className='sr-only'>Facebook</span>
                  </a>
                  <a href='https://twitter.com/_showmates_' target='_blank'>
                    <FontAwesomeIcon icon={faTwitter} aria-hidden='true' />
                    <span className='sr-only'>Twitter</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${styles.footer_widget__col} ${styles.footer_widget__col__links}`}
            >
              <div className={`${styles.footer_widget__col__content}`}>
                <h5 className={`${styles.footer_widget__col__content__title}`}>
                  Categories
                </h5>
                <ul
                  className={`list-unstyled ${styles.footer_widget__col__content__links}`}
                >
                  <li>
                    <a href='#'>Stand up</a>
                  </li>
                  <li>
                    <a href='#'>Concert</a>
                  </li>
                  <li>
                    <a href='#'>Festival</a>
                  </li>
                  <li>
                    <a href='#'>Food and drinks</a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className={`${styles.footer_widget__col} ${styles.footer_widget__col__links}`}
            >
              <div className={`${styles.footer_widget__col__content}`}>
                <h5 className={`${styles.footer_widget__col__content__title}`}>
                  Explore
                </h5>
                <ul
                  className={`list-unstyled ${styles.footer_widget__col__content__links}`}
                >
                  <li>
                    <a href='#'>Blogs</a>
                  </li>
                  <li>
                    <a href='#'>Privacy Policy</a>
                  </li>
                  <li>
                    <a href='#'>Terms & Conditions</a>
                  </li>
                  <li>
                    <a href='#'>Help & Support</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`${styles.footer_widget__col} ${styles.footer_widget__col__news}`}
            >
              <div className={`${styles.footer_widget__col__content}`}>
                <h5 className={`${styles.footer_widget__col__content__title}`}>
                  Stay in the loop
                </h5>
                <h6
                  className={`${styles.footer_widget__col__content__subtitle}`}
                >
                  Join our whatsapp comunity to stay in the loop with our newest
                  Event and concert
                </h6>
              </div>
              <form
                action='#'
                className={`${styles.footer_widget__col__content__newsletter}`}
              >
                <div
                  className={`${styles.footer_widget__col__content__inpfield}`}
                >
                  <input
                    type='email'
                    name='email'
                    placeholder='Enter your mobile number..'
                  />
                  <button type='submit'>Subscribe</button>
                </div>
              </form>
            </div>
          </div>

          <p className={`${styles.main_footer__copyright}`}>
            {' '}
            &copy; <span className={`${styles.dynamic_year}`}></span>{' '}
            Showemates.in All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
