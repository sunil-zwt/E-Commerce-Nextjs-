import React from 'react';
import styles from '@/styles/layout/header.module.css';
const Header = () => {
  return (
    <header className={`${styles.main_header}`}>
      <div className='container'>
        <div className={`${styles.main_header__inner}`}>
          <div className={`${styles.main_header__logo}`}>
            <a href='#'>
              <svg
                data-name='Layer 1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 48.1 49'
              >
                <rect
                  fill='currentColor'
                  x='3'
                  y='21.7'
                  width='6.5'
                  height='.8'
                  rx='.4'
                  ry='.4'
                  transform='rotate(-6 6.3 22)'
                />
                <rect
                  fill='currentColor'
                  x='6.3'
                  y='19'
                  width='3'
                  height='.8'
                  rx='.4'
                  ry='.4'
                  transform='rotate(-6 7.8 19.4)'
                />
                <rect
                  fill='currentColor'
                  x='6.6'
                  y='26.4'
                  width='3.4'
                  height='.8'
                  rx='.4'
                  ry='.4'
                  transform='rotate(-6 8.4 26.8)'
                />
                <rect
                  fill='currentColor'
                  x='9.1'
                  y='31.4'
                  width='3.6'
                  height='.8'
                  rx='.4'
                  ry='.4'
                  transform='rotate(-6 10.9 31.9)'
                />
                <rect
                  fill='currentColor'
                  x='7.7'
                  y='23.9'
                  width='2.1'
                  height='.8'
                  rx='.4'
                  ry='.4'
                  transform='rotate(-6 8.8 24.3)'
                />
                <rect
                  fill='currentColor'
                  x='5.8'
                  y='29.3'
                  width='4.6'
                  height='.8'
                  rx='.4'
                  ry='.4'
                  transform='rotate(-6 8 29.7)'
                />
                <path
                  fill='currentColor'
                  d='M21.2 35.3a3 3 0 1 1-.6-6 3 3 0 0 1 .6 6Zm-.5-5c-1.1.2-2 1.1-1.8 2.2s1 2 2.2 1.8 1.9-1 1.8-2.2-1.1-1.9-2.2-1.8ZM36.8 33.7a3 3 0 1 1-.6-6 3 3 0 0 1 .6 6Zm-.6-5c-1 .1-1.9 1.1-1.8 2.2s1.2 2 2.3 1.8 1.9-1.1 1.7-2.2-1-2-2.2-1.8ZM22 23.3c-.2 0-.3.1-.2.3l.1 1.7c0 .2.1.3.3.2s.2 0 .2-.3l-.2-1.6c0-.2-.1-.3-.3-.3ZM30.7 24.2v.2c0 .3.2.3.3.3l.2-.1v-1c-.2.2-.5.2-.5.6Z'
                />
                <path
                  fill='currentColor'
                  d='m44.2 18-.3-2.7c-1.5.2-3-1-3.1-2.5l-1.2.1v.2h-.3V13l-26.4 2.8c.1 1.6-1 3-2.6 3.1l1.2 11c1.6-.1 3 1 3.1 2.5l2.8-.2a3.5 3.5 0 0 1 6.8-.8l8.8-.9a3.5 3.5 0 0 1 6.8-.7l1.2-.1v-.2h.3v.2l1.3-.2c-.2-1.5 1-3 2.5-3.1l-.3-2.7a2.8 2.8 0 0 1-.6-5.6Zm-12.7-.6.4-1 .6.9h1l-.7.8.3 1-1-.4-.8.6v-1l-.7-.7 1-.2Zm-4.9.4.4-1 .5 1h1l-.6.8.3 1-1-.4-.8.5v-1l-.8-.6 1-.3Zm-4.9.5.4-1 .5 1h1l-.6.8.3 1-1-.4-.8.6v-1l-.8-.7 1-.3Zm-3 7.2c0 1-.4 1.4-1 1.5-.8 0-1.2-.6-1.3-1.4V25l.8-.1v.5c0 .4.2.5.4.5s.3-.1.2-.5v-.2c0-.3 0-.4-.2-.5l-.8-.5c-.3-.3-.5-.5-.5-1v-.4c-.2-.7.1-1.2.8-1.3.9-.1 1.1.4 1.2 1.3v.4h-.7V23c0-.3-.2-.4-.3-.3-.2 0-.3 0-.3.4 0 .3.1.4.3.5l.9.6c.3.2.4.5.4 1v.4Zm2.3 1-.8.1-.2-2.8c0-.2-.1-.3-.3-.3s-.2.1-.2.2l.3 3h-.7l-.6-5.2h.8l.1 1.4c.1-.2.3-.3.6-.3.4 0 .6.2.7.9l.3 3Zm2.1-1.3c.1.8-.2 1.2-.8 1.3s-1-.3-1.1-1.1l-.2-1.7c0-.8.3-1.2.9-1.3s1 .3 1 1.1l.2 1.7Zm3 .8-.8.1-.6-2.3-.1 2.4h-.8l-.8-3.8.7-.1.4 2.4.1-2.5h.6l.6 2.4v-2.5h.7v4Zm3.8-.4-.8.1-.3-2.8c0-.2 0-.3-.2-.3s-.2 0-.2.2l.3 3h-.8l-.2-2.8c0-.2-.1-.3-.3-.3s-.2.1-.2.2l.3 3h-.7l-.4-3.9h.6v.2c.2-.2.3-.4.7-.4.2 0 .4 0 .5.3.1-.2.3-.4.6-.4.4 0 .7.2.7.8l.4 3.1Zm2.5-.4c0 .2-.2.2-.4.2a.5.5 0 0 1-.6-.3c0 .2-.2.4-.6.5-.4 0-.7-.3-.7-.8v-.4c-.1-.6 0-.8.2-1l.8-.4v-.4c-.1-.2-.2-.3-.4-.3-.1 0-.2.1-.1.4v.3H30l-.1-.3c0-.7 0-1.1.8-1.2.7 0 1 .3 1 1l.3 2c0 .2 0 .2.2.2s0 0 .1 0v.5Zm1 .1c-.6 0-.8-.3-.9-.9l-.2-2.4h-.4v-.6h.1c.2 0 .2 0 .2-.3v-.6h.6l.1.8h.6l.1.6H33l.3 2.5.1.2.1-.3v-.1h.3l.1.3c0 .5-.1.8-.5.8Zm2.4-2.8v.6l-1.1.1v.8c0 .2.2.2.3.2.3 0 .3-.2.2-.4v-.3h.7v.3c.1.6 0 1.2-.8 1.3-.5 0-1-.3-1-1l-.2-1.8c-.1-.8.2-1.2.8-1.2.7-.1 1 .3 1 1.1l.1.3Zm2.3 1.2c.1.7-.2 1.1-.8 1.2-.7 0-1-.4-1.1-1v-.3l.7-.1v.2c0 .3.1.4.3.4l.2-.4c0-.3-.1-.3-.2-.4l-.7-.3c-.3-.2-.4-.4-.4-.9V22c-.1-.7.1-1 .8-1.1.7-.1 1 .3 1 .8v.4h-.7V22c0-.2 0-.3-.2-.2-.2 0-.3 0-.2.3 0 .2 0 .2.2.3l.7.3c.2.2.3.4.4.9v.2Zm1.6-6.5h.3v.4h-.2v-.4Zm.1 1h.3v.5H40v-.4Zm.2 1.2h.2v.4H40v-.4Zm.4 1v.5h-.3v-.4h.3Zm-.2 1.2h.3v.4h-.3v-.4Zm1 7H41v-.4h.3v.4Zm-.1-1h-.3V27h.3v.4Zm-.1-1.2h-.3V26h.2v.4Zm-.1-1h-.3v-.5h.2v.4Zm-.1-1.2h-.3v-.4h.2v.4Zm-.2-1h-.3v-.5h.3v.4Zm-.7-6.8h-.3v-.3h.3v.3Zm0-1h-.4v-.5h.3v.4Zm-.2-1.2h-.3v-.4h.3v.4Z'
                />
                <path
                  fill='currentColor'
                  d='M34.8 22c-.2 0-.3 0-.2.3v.3h.5v-.3c0-.3-.1-.4-.3-.4ZM35.4 30.6c0-.4.3-.7.7-.9v-.5c-.7.2-1.2.7-1.2 1.4h.5ZM36.6 29.7c.4 0 .7.3.8.7l.5-.1c-.1-.6-.7-1.1-1.4-1.1l.1.5ZM36.3 31.7a1 1 0 0 1-.8-.7l-.6.1c.2.6.8 1.1 1.4 1.1v-.5ZM37.5 30.9c0 .3-.3.6-.7.8v.5c.7-.2 1.2-.7 1.2-1.4h-.5Z'
                />
                <circle
                  fill='currentColor'
                  cx='36.4'
                  cy='30.7'
                  r='.4'
                  transform='rotate(-6 36.5 30.7)'
                />
                <path
                  fill='currentColor'
                  d='M19.9 32.2c0-.4.3-.7.6-.8v-.6c-.7.2-1.1.8-1.2 1.4h.5ZM21 31.3c.4 0 .7.3.8.7h.6c-.2-.7-.8-1.2-1.4-1.2v.5ZM20.7 33.4a1 1 0 0 1-.8-.7h-.5c.2.7.7 1.1 1.4 1.2v-.5ZM21.9 32.5c0 .3-.3.7-.7.8v.5c.7-.1 1.2-.7 1.2-1.4H22Z'
                />
                <circle
                  fill='currentColor'
                  cx='20.9'
                  cy='32.3'
                  r='.4'
                  transform='rotate(-6 20.9 32.4)'
                />
                <rect
                  fill='currentColor'
                  x='4.2'
                  y='26.7'
                  width='1.8'
                  height='.8'
                  rx='.4'
                  ry='.4'
                  transform='rotate(-6 5 27.1)'
                />
                <rect
                  fill='currentColor'
                  x='3.7'
                  y='19.4'
                  width='2.1'
                  height='.8'
                  rx='.4'
                  ry='.4'
                  transform='rotate(-6 4.7 19.8)'
                />
              </svg>
            </a>
          </div>
          <nav className={`${styles.main_header__nav} ${styles.main_menu}`}>
            <ul className={`${styles.main_menu__list}`}>
              <li>
                <a href='index.html'>Home</a>
              </li>
              <li>
                <a href='event.html'>Event</a>
              </li>
              <li>
                <a href='#' className={`${styles.registration_toggler}`}>
                  List Your Event
                </a>
              </li>
              <li>
                <a href='festival.html'>Festival</a>
              </li>
              <li className={`${styles.search_link}`}>
                <a href='#' className={`${styles.search_toggler}`}>
                  <div className={`${styles.main_header__search}`}>
                    <i className='icon-search-1' aria-hidden='true'></i>
                    <span className='sr-only'>Search</span>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
          <div className={`${styles.main_header__right}`}>
            <a href='#' className={`${styles.search_toggler} mobile-only`}>
              <div className={`${styles.main_header__search}`}>
                <i className='icon-search-1' aria-hidden='true'></i>
                <span className='sr-only'>Search</span>
              </div>
            </a>
            <a href='#' className=''>
              Login
            </a>
            <a href='#' className='user-login'>
              <i className='icon-user1' aria-hidden='true'></i>
            </a>
            <div
              className={`${styles.mobile_nav__btn} ${styles.mobile_nav__toggler}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
