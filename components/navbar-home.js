import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import { useGlobalContext } from '@/global-context'

const NavbarHome = (props) => {
  const { locale, locales } = useGlobalContext()
  return (
    <>
      <header className={`navbar-home-container1 ${props.rootClassName} `}>
        <header
          data-thq="navbar"
          className="navbar-home-navbar-interactive"
        >
          <div className="navbar-home-container2">
            <div data-thq="navbar-nav" className="navbar-home-desktop-menu">
              <div className="navbar-home-container3">
                <Link legacyBehavior href="/">
                  <a className="navbar-home-link6">
                    <img
                      alt={props.imageAlt2}
                      src={props.imageSrc2}
                      className="navbar-home-image1"
                    />
                  </a>
                </Link>
              </div>
              <nav className="navbar-home-links1">
                <Link legacyBehavior href="/">
                  <a className="navbar-home-link7 body-small link">
                    {props.link1}
                  </a>
                </Link>
                <Link legacyBehavior href="/shop">
                  <a className="navbar-home-link8 body-small link">
                    {props.link2}
                  </a>
                </Link>
                <div
                  data-thq="dropdown-arrow"
                  className="navbar-home-dropdown-arrow1"
                >
                  <svg viewBox="0 0 1024 1024" className="navbar-home-icon1">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
                <div className="navbar-home-container4">
                  <Link legacyBehavior href="/blog">
                    <a className="navbar-home-link9 body-small link">
                      {props.link3}
                    </a>
                  </Link>
                  <Link legacyBehavior href="/about">
                    <a className="navbar-link4 body-small link">
                      {props.link4}
                    </a>
                  </Link>
                  <Link legacyBehavior href="/contact-us">
                    <a className="navbar-link5 body-small link">
                      {props.link5}
                    </a>
                    </Link>
                </div>
              </nav>
              <div className="navbar-home-buttons1">
                <div
                  data-thq="dropdown"
                  className="navbar-home-language-switcher list-item"
                >
                  <div
                    data-thq="dropdown-toggle"
                    className="navbar-home-language-switcher-toggle"
                  >
                    <span className="navbar-home-language-name">
                      {locale?.['name']}
                    </span>
                    <div
                      data-thq="dropdown-arrow"
                      className="navbar-home-dropdown-arrow2"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="navbar-home-icon3"
                      >
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="dropdown-list"
                    className="navbar-home-language-switcher-list"
                  >
                    <div>
                      {locales.map((all_languages, index) => (
                        <Fragment key={index}>
                          <div className="navbar-home-language-switcher-item">
                            <a href={props.languageLinkUrl}>
                              {all_languages?.name}
                            </a>
                          </div>
                        </Fragment>
                      ))}
                    </div>
                  </ul>
                </div>
                <div className="navbar-home-container6">
                  <button className="navbar-home-action11 button-animated button-filled">
                    <span className="body-small">SIGN IN</span>
                  </button>
                  <button className="navbar-home-action21 button-animated button-outline">
                    <span className="body-small">SIGN UP</span>
                  </button>
                </div>
              </div>
            </div>
            <img
              alt={props.imageAlt5}
              src={props.imageSrc5}
              className="navbar-home-image2"
            />
            <div data-thq="burger-menu" className="navbar-home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="navbar-home-icon5">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div data-thq="mobile-menu" className="navbar-home-mobile-menu">
            <div className="navbar-home-nav">
              <div className="navbar-home-top">
                <div
                  data-thq="close-menu"
                  className="navbar-home-close-menu"
                >
                  <img
                    alt={props.imageAlt6}
                    src={props.imageSrc6}
                    className="navbar-home-image3"
                  />
                </div>
              </div>
              <nav className="navbar-home-links2">
               
                <Link legacyBehavior href="/">
                  <a className="navbar-home-link1 body-small link">
                    {props.link1}
                  </a>
                </Link>
                <Link legacyBehavior href="/shop">
                  <a className="navbar-home-link2 body-small link">
                    {props.link2}
                  </a>
                </Link>
                <Link legacyBehavior href="/blog">
                    <a className="navbar-home-link3 body-small link">
                      {props.link3}
                    </a>
                  </Link>
                  <Link legacyBehavior href="/about">
                    <a className="navbar-home-link4 body-small link">
                      {props.link4}
                    </a>
                  </Link>
                  <Link legacyBehavior href="/contact-us">
                    <a className="navbar-home-link5 body-small link">
                      {props.link5}
                    </a>
                    </Link>
              </nav>
            </div>
            <div className="navbar-home-buttons2">
              <button className="button-filled">SIGN IN</button>
              <button className="button-outline">SIGN UP</button>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .navbar-home-container1 {
            width: 100%;
            height: auto;
            display: flex;
            z-index: 10;
            position: absolute;
            align-items: center;
            justify-content: center;
            background-color: rgba(217, 217, 217, 0);
          }
          .navbar-home-navbar-interactive {
            width: 80%;
            height: 117px;
            display: flex;
            padding: var(--dl-layout-space-unit);
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .navbar-home-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .navbar-home-desktop-menu {
            flex: 1;
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .navbar-home-container3 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .navbar-home-link6 {
            display: contents;
          }
          .navbar-home-image1 {
            width: 200px;
            object-fit: cover;
            text-decoration: none;
          }
          .navbar-home-links1 {
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
          .navbar-home-link7 {
            text-transform: capitalize;
            text-decoration: none;
          }
          .navbar-home-link8 {
            text-transform: capitalize;
            text-decoration: none;
          }
          .navbar-home-dropdown-arrow1 {
            display: none;
            transition: 0.3s;
          }
          .navbar-home-icon1 {
            width: 32px;
            height: 32px;
            transition: 0.3s;
          }
          .navbar-home-container4 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-home-link9 {
            text-transform: capitalize;
            text-decoration: none;
          }
          .navbar-home-about {
            text-transform: capitalize;
          }
          .navbar-home-contact-us {
            text-transform: capitalize;
          }
          .navbar-home-buttons1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-twounits);
          }
          .navbar-home-language-switcher {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar-home-language-switcher-toggle {
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
          .navbar-home-language-name {
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-right: 4px;
            vertical-align: middle;
          }
          .navbar-home-dropdown-arrow2 {
            transition: 0.3s;
          }
          .navbar-home-icon3 {
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .navbar-home-language-switcher-list {
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
          .navbar-home-language-switcher-item {
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
          .navbar-home-container6 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .navbar-home-action11 {
            display: flex;
            flex-direction: row;
          }
          .navbar-home-action21 {
            display: flex;
            flex-direction: row;
          }
          .navbar-home-image2 {
            width: 200px;
            display: none;
            object-fit: cover;
          }
          .navbar-home-burger-menu {
            width: var(--dl-layout-size-medium);
            height: var(--dl-layout-size-medium);
            display: none;
            position: absolute;
          }
          .navbar-home-icon5 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            display: none;
          }
          .navbar-home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            z-index: 100;
            position: absolute;
            transform: translateX(100%);
            overflow-y: auto;
            transition: 0.5s;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar-home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
          }
          .navbar-home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-home-image3 {
            width: 200px;
            object-fit: cover;
          }
          .navbar-home-links2 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            margin: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
          }
          .navbar-home-buttons2 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            margin-top: var(--dl-layout-space-twounits);
            align-items: center;
            justify-content: center;
          }

          .navbar-homeroot-class-name1 {
            position: relative;
          }
          .navbar-homeroot-class-name2 {
            position: relative;
          }
          @media (max-width: 1600px) {
            .navbar-home-container1 {
              height: 120px;
              margin-right: 0px;
            }
            .navbar-home-link8 {
              text-transform: capitalize;
              text-decoration: none;
            }
            .navbar-home-dropdown-arrow1 {
              display: none;
            }
            .navbar-home-link9 {
              text-transform: capitalize;
              text-decoration: none;
            }
            .navbar-home-about {
              text-transform: capitalize;
            }
            .navbar-home-contact-us {
              text-transform: capitalize;
            }
            .navbar-home-container6 {
              gap: var(--dl-layout-space-unit);
            }
            .navbar-home-burger-menu {
              position: absolute;
            }
            .navbar-home-icon5 {
              display: none;
            }
            .navbar-homeroot-class-name {
              top: 16px;
              left: 0px;
            }
          }
          @media (max-width: 1200px) {
            .navbar-home-navbar-interactive {
              width: 100%;
              max-width: 100%;
            }
            .navbar-home-desktop-menu {
              gap: var(--dl-layout-space-unit);
            }
            .navbar-home-links1 {
              width: auto;
              align-self: center;
              margin-left: 0px;
              align-content: space-between;
              justify-content: center;
            }
            .navbar-home-buttons1 {
              margin-left: var(--dl-layout-space-unit);
            }
            .navbar-homeroot-class-name1 {
              position: relative;
            }
          }
          @media (max-width: 991px) {
            .navbar-home-navbar-interactive {
              width: 100%;
              padding-left: var(--dl-layout-space-twounits);
              padding-right: 32px;
            }
            .navbar-home-container2 {
              height: 100%;
              flex-direction: row;
            }
            .navbar-home-container3 {
              width: 243px;
            }
            .navbar-home-links1 {
              width: auto;
              height: 87px;
              display: flex;
              margin-left: 0px;
              flex-direction: row;
              justify-content: center;
            }
            .navbar-home-link7 {
              font-size: 16px;
            }
            .navbar-home-link8 {
              font-size: 16px;
            }
            .navbar-home-dropdown-arrow1 {
              display: block;
            }
            .navbar-home-container4 {
              display: none;
            }
            .navbar-home-contact-us {
              font-size: 16px;
            }
            .navbar-home-buttons1 {
              width: auto;
              display: flex;
              margin-left: 0px;
              padding-left: 0px;
            }
            .navbar-home-container6 {
              display: flex;
              flex-direction: row;
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .navbar-home-container1 {
              height: 100%;
              align-items: center;
              flex-direction: row;
              justify-content: center;
            }
            .navbar-home-navbar-interactive {
              width: 557px;
              display: flex;
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              justify-content: space-around;
            }
            .navbar-home-container2 {
              display: flex;
              align-items: center;
              align-content: center;
              flex-direction: row;
              justify-content: space-between;
            }
            .navbar-home-desktop-menu {
              display: none;
            }
            .navbar-home-links1 {
              display: none;
            }
            .navbar-home-buttons1 {
              display: none;
            }
            .navbar-home-image2 {
              display: block;
            }
            .navbar-home-burger-menu {
              display: flex;
              position: relative;
              align-items: center;
              justify-content: center;
            }
            .navbar-home-icon5 {
              display: block;
            }
            .navbar-home-nav {
              align-self: center;
            }
            .navbar-home-top {
              align-self: flex-start;
            }
            .navbar-home-close-menu {
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
            .navbar-home-links2 {
              align-self: center;
            }
            .navbar-home-link1 {
              font-size: 30px;
            }
            .navbar-home-link2 {
              font-size: 30px;
            }
            .navbar-home-link3 {
              font-size: 30px;
            }
            .navbar-home-link4 {
              font-size: 30px;
            }
            .navbar-home-link5 {
              font-size: 30px;
            }
            .navbar-home-buttons2 {
              align-self: center;
            }
            .navbar-homeroot-class-name {
              position: relative;
            }
            .navbar-homeroot-class-name1 {
              position: relative;
            }
          }
          @media (max-width: 479px) {
            .navbar-home-navbar-interactive {
              padding: var(--dl-layout-space-twounits);
            }
            .navbar-home-dropdown-arrow1 {
              display: none;
            }
            .navbar-home-mobile-menu {
              padding: var(--dl-layout-space-unit);
              position: fixed;
            }
            .navbar-home-top {
              justify-content: space-between;
            }
          }
        `}
      </style>
    </>
  )
}

NavbarHome.defaultProps = {
  imageAlt2: 'image',
  languageLinkUrl: 'https://www.teleporthq.io',
  action1: 'Action 1',
  imageSrc5: '/logo_craft-1-removebg-preview-200h.png',
  imageSrc2: '/logo_craft-1-removebg-preview-200h.png',
  link5: 'About',
  link4: 'Link4',
  imageAlt6: 'image',
  rootClassName: '',
  link1: 'Home',
  imageSrc6: '/external/logo_craft-1-removebg-preview-200h-200h.png',
  link2: 'Blogs',
  link3: 'Blog',
  imageAlt5: 'image',
  action2: 'Action 2',
}

NavbarHome.propTypes = {
  imageAlt2: PropTypes.string,
  languageLinkUrl: PropTypes.string,
  action1: PropTypes.string,
  imageSrc5: PropTypes.string,
  imageSrc2: PropTypes.string,
  link5: PropTypes.string,
  link4: PropTypes.string,
  imageAlt6: PropTypes.string,
  rootClassName: PropTypes.string,
  link1: PropTypes.string,
  imageSrc6: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  imageAlt5: PropTypes.string,
  action2: PropTypes.string,
}

export default NavbarHome
