import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import { useGlobalContext } from '@/global-context'

const Navbar = (props) => {
  const { locale, locales } = useGlobalContext()
  return (
    <>
      <header className={`navbar-container1 ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="navbar-navbar-interactive">
          <div className="navbar-container2">
            <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
              <div className="navbar-container3">
                <img
                  alt={props.imageAlt2}
                  src={props.imageSrc2}
                  className="navbar-image1"
                />
              </div>
              <nav className="navbar-links1">
                <span className="navbar-home thq-body-small thq-link">
                  {props.link1}
                </span>
                <span className="navbar-articles thq-body-small thq-link">
                  {props.link2}
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="navbar-dropdown-arrow1"
                >
                  <svg viewBox="0 0 1024 1024" className="navbar-icon1">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
                <div className="navbar-container4">
                  <span className="navbar-researchs thq-body-small thq-link">
                    {props.link3}
                  </span>
                  <span className="navbar-about thq-body-small thq-link">
                    {props.link4}
                  </span>
                  <span className="navbar-contact-us thq-body-small thq-link">
                    {props.link5}
                  </span>
                </div>
              </nav>
              <div className="navbar-buttons1">
                <div
                  data-thq="thq-dropdown"
                  className="navbar-language-switcher list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-language-switcher-toggle"
                  >
                    <span className="navbar-language-name">
                      {locale?.['name']}
                    </span>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="navbar-dropdown-arrow2"
                    >
                      <svg viewBox="0 0 1024 1024" className="navbar-icon3">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="navbar-language-switcher-list"
                  >
                    <div>
                      {locales.map((all_languages, index) => (
                        <Fragment key={index}>
                          <div className="navbar-language-switcher-item">
                            <a href={props.languageLinkUrl}>
                              {all_languages?.name}
                            </a>
                          </div>
                        </Fragment>
                      ))}
                    </div>
                  </ul>
                </div>
                <div className="navbar-container6">
                  <button className="navbar-action11 thq-button-animated thq-button-filled">
                    <span className="thq-body-small">SIGN IN</span>
                  </button>
                  <button className="navbar-action21 thq-button-animated thq-button-outline">
                    <span className="thq-body-small">SIGN UP</span>
                  </button>
                </div>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="navbar-burger-menu">
              <svg viewBox="0 0 1024 1024" className="navbar-icon5">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
            <div className="navbar-nav">
              <div className="navbar-top">
                <div data-thq="thq-close-menu" className="navbar-close-menu">
                  <svg viewBox="0 0 1024 1024" className="navbar-icon7">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
                <img
                  alt={props.imageAlt11}
                  src={props.imageSrc11}
                  className="navbar-image2"
                />
              </div>
              <nav className="navbar-links2">
                <span className="thq-body-small thq-link navbar-link1">
                  {props.link1}
                </span>
                <span className="thq-body-small thq-link navbar-link2">
                  {props.link2}
                </span>
                <span className="thq-body-small thq-link navbar-link3">
                  {props.link3}
                </span>
                <span className="thq-body-small thq-link navbar-link4">
                  {props.link4}
                </span>
                <span className="thq-body-small thq-link navbar-link5">
                  {props.link5}
                </span>
              </nav>
            </div>
            <div className="navbar-buttons2">
              <button className="thq-button-filled">Login</button>
              <button className="thq-button-outline">Register</button>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .navbar-container1 {
            width: 100%;
            height: auto;
            display: flex;
            z-index: 10;
            position: absolute;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            justify-content: center;
            background-color: rgba(217, 217, 217, 0);
          }
          .navbar-navbar-interactive {
            width: 80%;
            height: 117px;
            display: flex;
            padding: var(--dl-layout-space-unit);
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .navbar-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .navbar-desktop-menu {
            flex: 1;
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .navbar-container3 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .navbar-image1 {
            width: 200px;
            object-fit: cover;
          }
          .navbar-links1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: auto;
            height: 73px;
            display: flex;
            align-items: center;
            align-content: space-between;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-home {
            text-transform: capitalize;
          }
          .navbar-articles {
            text-transform: capitalize;
          }
          .navbar-dropdown-arrow1 {
            display: none;
            transition: 0.3s;
          }
          .navbar-icon1 {
            width: 32px;
            height: 32px;
            transition: 0.3s;
          }
          .navbar-container4 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-researchs {
            text-transform: capitalize;
          }
          .navbar-about {
            text-transform: capitalize;
          }
          .navbar-contact-us {
            text-transform: capitalize;
          }
          .navbar-buttons1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-twounits);
          }
          .navbar-language-switcher {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar-language-switcher-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius2);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar-language-name {
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-right: 4px;
            vertical-align: middle;
          }
          .navbar-dropdown-arrow2 {
            transition: 0.3s;
          }
          .navbar-icon3 {
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .navbar-language-switcher-list {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            list-style-position: inside;
          }
          .navbar-language-switcher-item {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: #fff;
          }
          .navbar-container6 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .navbar-action11 {
            display: flex;
            flex-direction: row;
          }
          .navbar-action21 {
            display: flex;
            flex-direction: row;
          }
          .navbar-burger-menu {
            width: var(--dl-layout-size-medium);
            height: var(--dl-layout-size-medium);
            display: none;
            position: absolute;
          }
          .navbar-icon5 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            display: none;
          }
          .navbar-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            z-index: 100;
            position: absolute;
            transform: translateX(-100%);
            transition: 0.5s;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .navbar-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon7 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar-image2 {
            width: 272px;
            height: 77px;
            object-fit: cover;
          }
          .navbar-links2 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-buttons2 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            margin-top: var(--dl-layout-space-twounits);
            align-items: center;
          }

          .navbarroot-class-name1 {
            position: relative;
          }
          .navbarroot-class-name2 {
            position: relative;
          }
          @media (max-width: 1600px) {
            .navbar-dropdown-arrow1 {
              display: none;
            }
            .navbar-researchs {
              text-transform: capitalize;
            }
            .navbar-about {
              text-transform: capitalize;
            }
            .navbar-contact-us {
              text-transform: capitalize;
            }
            .navbar-container6 {
              gap: var(--dl-layout-space-unit);
            }
            .navbar-burger-menu {
              position: absolute;
            }
            .navbar-icon5 {
              display: none;
            }
          }
          @media (max-width: 1200px) {
            .navbar-navbar-interactive {
              width: 100%;
            }
            .navbar-desktop-menu {
              gap: var(--dl-layout-space-unit);
            }
            .navbar-links1 {
              width: auto;
              align-self: center;
              margin-left: 0px;
              align-content: space-between;
              justify-content: center;
            }
            .navbar-buttons1 {
              margin-left: var(--dl-layout-space-unit);
            }
            .navbarroot-class-name1 {
              position: relative;
            }
          }
          @media (max-width: 991px) {
            .navbar-navbar-interactive {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: 32px;
            }
            .navbar-desktop-menu {
              display: none;
            }
            .navbar-container3 {
              width: 243px;
            }
            .navbar-links1 {
              width: auto;
              height: 87px;
              display: flex;
              margin-left: 0px;
              flex-direction: row;
              justify-content: center;
            }
            .navbar-home {
              font-size: 16px;
            }
            .navbar-articles {
              font-size: 16px;
            }
            .navbar-dropdown-arrow1 {
              display: block;
            }
            .navbar-container4 {
              display: none;
            }
            .navbar-contact-us {
              font-size: 16px;
            }
            .navbar-buttons1 {
              width: auto;
              display: flex;
              margin-left: 0px;
              padding-left: 0px;
            }
            .navbar-container6 {
              display: flex;
              flex-direction: row;
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .navbar-container1 {
              align-items: center;
              flex-direction: row;
              justify-content: center;
            }
            .navbar-navbar-interactive {
              width: 557px;
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .navbar-container2 {
              align-items: center;
              flex-direction: row;
              justify-content: flex-start;
            }
            .navbar-links1 {
              display: none;
            }
            .navbar-buttons1 {
              display: none;
            }
            .navbar-burger-menu {
              top: 20px;
              position: relative;
              align-items: center;
              justify-content: center;
            }
            .navbar-icon5 {
              display: block;
            }
            .navbar-mobile-menu {
              height: 1hv;
            }
            .navbar-nav {
              align-self: center;
            }
            .navbar-close-menu {
              width: var(--dl-layout-size-medium);
              height: var(--dl-layout-size-medium);
              align-self: center;
              animation-name: tada;
              flex-direction: row;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .navbar-icon7 {
              width: var(--dl-layout-size-medium);
              height: auto;
              animation-name: none;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .navbar-links2 {
              align-self: center;
            }
            .navbar-link1 {
              font-size: 30px;
            }
            .navbar-link2 {
              font-size: 30px;
            }
            .navbar-link3 {
              font-size: 30px;
            }
            .navbar-link4 {
              font-size: 30px;
            }
            .navbar-link5 {
              font-size: 30px;
            }
            .navbar-buttons2 {
              align-self: center;
            }
            .navbarroot-class-name {
              position: relative;
            }
            .navbarroot-class-name1 {
              position: relative;
            }
          }
          @media (max-width: 479px) {
            .navbar-navbar-interactive {
              padding: var(--dl-layout-space-twounits);
            }
            .navbar-dropdown-arrow1 {
              display: none;
            }
            .navbar-mobile-menu {
              padding: var(--dl-layout-space-unit);
            }
            .navbar-icon7 {
              width: var(--dl-layout-size-medium);
              height: var(--dl-layout-size-medium);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  imageAlt2: 'image',
  languageLinkUrl: 'https://www.teleporthq.io',
  action1: 'Action 1',
  imageSrc2: '/logo_craft-1-removebg-preview-200h.png',
  link5: 'About',
  link4: 'Link4',
  rootClassName: '',
  link1: 'Home',
  imageSrc11: 'ece4ec48-1874-41d1-8bb8-d1c7b58b1c66',
  link2: 'ِArticals',
  link3: 'Link3',
  imageAlt11: 'image',
  action2: 'Action 2',
}

Navbar.propTypes = {
  imageAlt2: PropTypes.string,
  languageLinkUrl: PropTypes.string,
  action1: PropTypes.string,
  imageSrc2: PropTypes.string,
  link5: PropTypes.string,
  link4: PropTypes.string,
  rootClassName: PropTypes.string,
  link1: PropTypes.string,
  imageSrc11: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  imageAlt11: PropTypes.string,
  action2: PropTypes.string,
}

export default Navbar
