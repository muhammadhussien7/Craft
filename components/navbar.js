import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import { useGlobalContext } from '@/global-context'

const Navbar = (props) => {
  const { locale, locales } = useGlobalContext()
  return (
    <>
      <header className={`navbar-container1 ${props.rootClassName} `}>
        <header data-thq="navbar" className="navbar-navbar-interactive">
          <div className="navbar-container2">
            <div data-thq="navbar-nav" className="navbar-desktop-menu">
              
              <Link legacyBehavior href="/" onClick={props.home}>
                  <a className="navbar-link6 body-small link">
                  <div className="navbar-container3">
                <img
                  alt={props.imageAlt2}
                  src={props.imageSrc2}
                  className="navbar-image1"
                />
              </div>                   </a>
                </Link>
              <nav className="navbar-links1">
                <Link legacyBehavior href="/" onClick={props.home}>
                  <a className="navbar-link6 body-small link">
                    {props.link1}
                  </a>
                </Link>
                <Link legacyBehavior href="/shop">
                  <a className="navbar-link7 body-small link">
                    {props.link2}
                  </a>
                </Link>
                <div
                  data-thq="dropdown-arrow"
                  className="navbar-dropdown-arrow1"
                >
                  <svg viewBox="0 0 1024 1024" className="navbar-icon1">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
                <div className="navbar-container4">
                  <Link legacyBehavior href="/blog">
                    <a className="navbar-link8 body-small link">
                      {props.link3}
                    </a>
                  </Link>
                  <Link legacyBehavior href="/about">
                    <a className="navbar-link9 body-small link">
                      {props.link4}
                    </a>
                  </Link>
                  <Link legacyBehavior href="/contact-us">
                    <a className="navbar-link10 body-small link">
                      {props.link5}
                    </a>
                  </Link>
                </div>
              </nav>
              <div className="navbar-buttons1">
                <div
                  data-thq="dropdown"
                  className="navbar-language-switcher list-item"
                >
                  <div
                    data-thq="dropdown-toggle"
                    className="navbar-language-switcher-toggle"
                  >
                    <span className="navbar-language-name">
                      {locale?.['name']}
                    </span>
                    <div
                      data-thq="dropdown-arrow"
                      className="navbar-dropdown-arrow2"
                    >
                      <svg viewBox="0 0 1024 1024" className="navbar-icon3">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="dropdown-list"
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
                  
                  <button className="navbar-action11 button-animated button-filled">
                    <span className="body-small">SIGN IN</span>

                  </button>
                  <button className="navbar-action21 button-animated button-outline">
                    <span className="body-small">SIGN UP</span>
                  </button>
                </div>
              </div>
            </div>
            <img
              alt={props.imageAlt5}
              src={props.imageSrc5}
              className="navbar-image2"
            />
            <div data-thq="burger-menu" className="navbar-burger-menu">
              <svg viewBox="0 0 1024 1024" className="navbar-icon5">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div data-thq="mobile-menu" className="navbar-mobile-menu">
            <div className="navbar-nav">
              <div className="navbar-top">
                <div data-thq="close-menu" className="navbar-close-menu">
                  <img
                    alt={props.imageAlt6}
                    src={props.imageSrc6}
                    className="navbar-image3"
                  />
                </div>
              </div>
              <nav className="navbar-links2">
                <span className="body-small link navbar-link1">
                  {props.link1}
                </span>
                <span className="body-small link navbar-link2">
                  {props.link2}
                </span>
                <span className="body-small link navbar-link3">
                  {props.link3}
                </span>
                <span className="body-small link navbar-link4">
                  {props.link4}
                </span>
                <span className="body-small link navbar-link5">
                  {props.link5}
                </span>
              </nav>
            </div>
            <div className="navbar-buttons2">
              <button className="button-filled">Login</button>
              <button className="button-outline">Register</button>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .navbar-container1 {
            top: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            padding: 12px 0px;
            z-index: 10;
            position: relative;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            justify-content: center;
            background-color: #fbf9ef;
          }
          .navbar-navbar-interactive {
            width: 80%;
            height: 117px;
            display: flex;
            padding: var(--dl-layout-space-unit);
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            justify-content: space-around;
          }
          .navbar-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
            justify-content: space-between;
          }
          .navbar-desktop-menu {
            flex: 1;
            width: 100%;
            margin: auto;
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
          .navbar-link6 {
            text-transform: capitalize;
            text-decoration: none;
          }
          .navbar-link7 {
            text-transform: capitalize;
            text-decoration: none;
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
          .navbar-link8 {
            text-transform: capitalize;
            text-decoration: none;
          }
          .navbar-link9 {
            text-transform: capitalize;
            text-decoration: none;
          }
          .navbar-link10 {
            text-transform: capitalize;
            text-decoration: none;
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
          .navbar-image2 {
            width: 200px;
            display: none;
            object-fit: cover;
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
            transform: translateX(100%);
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
          .navbar-image3 {
            width: 200px;
            object-fit: cover;
          }
          .navbar-links2 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            margin: auto;
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

          @media (max-width: 1600px) {

            .navbar-container2 {
              height: auto;
            }
            .navbar-link6 {
              text-transform: capitalize;
            }
            .navbar-link7 {
              text-transform: capitalize;
            }
            .navbar-dropdown-arrow1 {
              display: none;
            }
            .navbar-link8 {
              text-transform: capitalize;
            }
            .navbar-link9 {
              text-transform: capitalize;
            }
            .navbar-link10 {
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
            .navbar-top {
              align-self: flex-start;
              justify-content: center;
            }
            .navbar-links2 {
              align-self: flex-start;
              align-items: center;
            }
            .navbar-buttons2 {
              justify-content: center;
            }
          }
          @media (max-width: 1200px) {
             .navbar-navbar-interactive {
              width: auto;
              padding: 0px var(--dl-layout-space-twounits);
              
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
          }
          @media (max-width: 991px) {
            .navbar-navbar-interactive {
              width: auto;
              padding: 0px var(--dl-layout-space-twounits);
              
            }
            .navbar-container2 {
              flex-direction: row;
            }
            .navbar-desktop-menu {
              flex: 1;
              align-self: flex-start;
            }
            .navbar-links1 {
              width: auto;
              height: 87px;
              display: flex;
              margin-left: 0px;
              flex-direction: row;
              justify-content: center;
            }
            .navbar-link6 {
              font-size: 16px;
            }
            .navbar-link7 {
              font-size: 16px;
            }
            .navbar-dropdown-arrow1 {
              display: block;
            }
            .navbar-container4 {
              display: none;
            }
            .navbar-link10 {
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
              display: flex;
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              justify-content: space-around;
            }
            .navbar-container2 {
              display: flex;
              align-items: center;
              align-content: center;
              flex-direction: row;
              justify-content: space-between;
            }
            .navbar-desktop-menu {
              display: none;
            }
            .navbar-links1 {
              display: none;
            }
            .navbar-buttons1 {
              display: none;
            }
            .navbar-image2 {
              display: block;
            }
            .navbar-burger-menu {
              display: flex;
              position: relative;
              align-items: center;
              justify-content: center;
            }
            .navbar-icon5 {
              display: block;
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
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  home: () => {},
  link2: 'Products',
  imageAlt6: 'image',
  action2: 'Action 2',
  imageSrc2: '/logo_craft-1-removebg-preview-200h.png',
  link5: 'ContactUs',
  imageSrc5: '/logo_craft-1-removebg-preview-200h.png',
  imageAlt2: 'image',
  link4: 'About',
  link3: 'Blog',
  link1: 'Home',
  imageSrc6: '/external/logo_craft-1-removebg-preview-200h-200h.png',
  action1: 'Action 1',
  imageAlt5: 'image',
  rootClassName: '',
  languageLinkUrl: 'https://www.teleporthq.io',
}

Navbar.propTypes = {
  home: PropTypes.func,
  link2: PropTypes.string,
  imageAlt6: PropTypes.string,
  action2: PropTypes.string,
  imageSrc2: PropTypes.string,
  link5: PropTypes.string,
  imageSrc5: PropTypes.string,
  imageAlt2: PropTypes.string,
  link4: PropTypes.string,
  link3: PropTypes.string,
  link1: PropTypes.string,
  imageSrc6: PropTypes.string,
  action1: PropTypes.string,
  imageAlt5: PropTypes.string,
  rootClassName: PropTypes.string,
  languageLinkUrl: PropTypes.string,
}

export default Navbar
