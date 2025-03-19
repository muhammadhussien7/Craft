import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import { useGlobalContext } from '@/global-context'

const Header = (props) => {
  const { locale, locales } = useGlobalContext()
  return (
    <>
      <div
        className={`header-container1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="header-container2">
          <video
            src="https://videos.pexels.com/video-files/16704982/16704982-hd_1920_1080_60fps.mp4"
            loop
            muted
            poster="https://play.teleporthq.io/static/svg/videoposter.svg"
            autoPlay="true"
            className="header-video"
          ></video>
        </div>
        <div className="header-max-width thq-section-max-width">
          <div className="header-container3">
            <h3 className="header-text1 thq-heading-3">
              {props.content11 ?? (
                <Fragment>
                  <span className="header-text6">CRAFT</span>
                </Fragment>
              )}
            </h3>
            <h2 className="header-title thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="header-text7">GREEN CHEMISTRY</span>
                </Fragment>
              )}
            </h2>
            <h3 className="header-text2 thq-heading-3">
              {props.content1 ?? (
                <Fragment>
                  <span className="header-text9">
                    Farmer partners every step of the way
                  </span>
                </Fragment>
              )}
            </h3>
          </div>
          <button type="button" className="header-button thq-button-filled">
            <span>
              {props.action1 ?? (
                <Fragment>
                  <span className="header-text8">Read More</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
        <header data-thq="thq-navbar" className="header-navbar-interactive">
          <div className="header-container4">
            <div data-thq="thq-navbar-nav" className="header-desktop-menu">
              <div className="header-container5">
                <img
                  alt={props.imageAlt1}
                  src={props.imageSrc1}
                  className="header-image1"
                />
              </div>
              <nav className="header-links1">
                <span className="header-home thq-body-small thq-link">
                  {props.link1}
                </span>
                <span className="header-articles thq-body-small thq-link">
                  {props.link2}
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="header-dropdown-arrow1"
                >
                  <svg viewBox="0 0 1024 1024" className="header-icon1">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
                <div className="header-container6">
                  <span className="header-researchs thq-body-small thq-link">
                    {props.link31}
                  </span>
                  <span className="header-about thq-body-small thq-link">
                    {props.link41}
                  </span>
                  <span className="header-contact-us thq-body-small thq-link">
                    {props.link51}
                  </span>
                </div>
              </nav>
              <div className="header-buttons1">
                <div
                  data-thq="thq-dropdown"
                  className="header-language-switcher list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-language-switcher-toggle"
                  >
                    <span className="header-language-name">
                      {locale?.['name']}
                    </span>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="header-dropdown-arrow2"
                    >
                      <svg viewBox="0 0 1024 1024" className="header-icon3">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="header-language-switcher-list"
                  >
                    <div>
                      {locales.map((all_languages, index) => (
                        <Fragment key={index}>
                          <div className="header-language-switcher-item">
                            <a href={props.languageLinkUrl}>
                              {all_languages?.name}
                            </a>
                          </div>
                        </Fragment>
                      ))}
                    </div>
                  </ul>
                </div>
                <div className="header-container8">
                  <button className="header-action11 thq-button-animated thq-button-filled">
                    <span className="thq-body-small">SIGN IN</span>
                  </button>
                  <button className="header-action21 thq-button-animated thq-button-outline">
                    <span className="thq-body-small">SIGN UP</span>
                  </button>
                </div>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="header-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon5">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="header-mobile-menu">
            <div className="header-nav">
              <div className="header-top">
                <div data-thq="thq-close-menu" className="header-close-menu">
                  <svg viewBox="0 0 1024 1024" className="header-icon7">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
                <img
                  alt={props.imageAlt11}
                  src={props.imageSrc11}
                  className="header-image2"
                />
              </div>
              <nav className="header-links2">
                <span className="thq-body-small thq-link header-link1">
                  {props.link11}
                </span>
                <span className="thq-body-small thq-link header-link2">
                  {props.link21}
                </span>
                <span className="thq-body-small thq-link header-link3">
                  {props.link3}
                </span>
                <span className="thq-body-small thq-link header-link4">
                  {props.link4}
                </span>
                <span className="thq-body-small thq-link header-link5">
                  {props.link5}
                </span>
              </nav>
            </div>
            <div className="header-buttons2">
              <button className="thq-button-filled">Login</button>
              <button className="thq-button-outline">Register</button>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .header-container1 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: auto;
            display: flex;
            padding: 0px;
            position: relative;
            align-items: center;
            margin-left: 0px;
            margin-right: 0px;
            flex-direction: column;
            justify-content: center;
          }
          .header-container2 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .header-video {
            width: 100%;
            height: 100%;
          }
          .header-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            left: 0px;
            order: 10;
            right: 0px;
            width: 546px;
            height: auto;
            margin: auto;
            display: flex;
            z-index: 2;
            position: absolute;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .header-container3 {
            gap: var(--dl-layout-space-halfunit);
            flex: 1;
            display: flex;
            z-index: 100;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .header-text1 {
            display: none;
            font-size: 32px;
            align-self: center;
            text-align: center;
          }
          .header-title {
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
          }
          .header-text2 {
            align-self: center;
            text-align: center;
            text-transform: capitalize;
          }
          .header-button {
            z-index: 100;
          }
          .header-navbar-interactive {
            width: 100%;
            height: 117px;
            display: none;
            padding: var(--dl-layout-space-unit);
            position: unset;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .header-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .header-desktop-menu {
            flex: 1;
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .header-container5 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .header-image1 {
            width: 272px;
            height: 77px;
            object-fit: cover;
          }
          .header-links1 {
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
          .header-home {
            font-size: 24px;
          }
          .header-articles {
            font-size: 24px;
          }
          .header-dropdown-arrow1 {
            display: none;
            transition: 0.3s;
          }
          .header-icon1 {
            width: 32px;
            height: 32px;
            transition: 0.3s;
          }
          .header-container6 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .header-researchs {
            font-size: 24px;
          }
          .header-about {
            font-size: 24px;
          }
          .header-contact-us {
            font-size: 24px;
          }
          .header-buttons1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-twounits);
          }
          .header-language-switcher {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .header-language-switcher-toggle {
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
          .header-language-name {
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-right: 4px;
            vertical-align: middle;
          }
          .header-dropdown-arrow2 {
            transition: 0.3s;
          }
          .header-icon3 {
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .header-language-switcher-list {
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
          .header-language-switcher-item {
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
          .header-container8 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .header-action11 {
            display: flex;
            flex-direction: row;
          }
          .header-action21 {
            display: flex;
            flex-direction: row;
          }
          .header-burger-menu {
            color: white;
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
            display: none;
            background-color: var(--dl-color-theme-primary1);
          }
          .header-icon5 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            display: none;
          }
          .header-mobile-menu {
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
          .header-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .header-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-icon7 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .header-image2 {
            width: 272px;
            height: 77px;
            object-fit: cover;
          }
          .header-links2 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-buttons2 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            margin-top: var(--dl-layout-space-twounits);
            align-items: center;
          }
          .header-text6 {
            color: rgb(255, 255, 255);
            display: inline-block;
          }
          .header-text7 {
            color: rgb(255, 255, 255);
            display: inline-block;
          }
          .header-text8 {
            display: inline-block;
          }
          .header-text9 {
            color: rgb(255, 255, 255);
            display: inline-block;
          }
          .headerroot-class-name {
            width: 100%;
            height: auto;
            align-self: center;
            margin-right: 0px;
          }
          @media (max-width: 1600px) {
            .header-container1 {
              width: 100%;
              height: auto;
              margin-left: 0px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .header-video {
              width: 100%;
              height: auto;
            }
            .header-max-width {
              position: fixed;
            }
            .header-container3 {
              align-items: center;
              justify-content: center;
            }
            .header-dropdown-arrow1 {
              display: none;
            }
            .header-contact-us {
              font-size: 24px;
            }
            .header-container8 {
              gap: var(--dl-layout-space-unit);
            }
            .header-icon5 {
              display: none;
            }
            .headerroot-class-name {
              height: 100%;
            }
          }
          @media (max-width: 1200px) {
            .header-container1 {
              width: 100%;
              height: auto;
              margin-left: 0px;
              margin-right: 0px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .header-video {
              width: 100%;
              height: auto;
            }
            .header-max-width {
              position: fixed;
            }
            .header-navbar-interactive {
              width: 100%;
            }
            .header-desktop-menu {
              gap: var(--dl-layout-space-unit);
            }
            .header-links1 {
              width: auto;
              align-self: center;
              margin-left: 0px;
              align-content: space-between;
              justify-content: center;
            }
            .header-home {
              font-size: 24px;
              text-align: center;
              text-transform: uppercase;
            }
            .header-articles {
              font-size: 24px;
            }
            .header-researchs {
              font-size: 24px;
            }
            .header-about {
              font-size: 24px;
            }
            .header-contact-us {
              font-size: 24px;
            }
            .header-buttons1 {
              margin-left: var(--dl-layout-space-unit);
            }
            .headerroot-class-name {
              height: auto;
            }
          }
          @media (max-width: 991px) {
            .header-container1 {
              width: 100%;
              height: auto;
            }
            .header-video {
              width: 100%;
              height: auto;
            }
            .header-max-width {
              position: fixed;
            }
            .header-desktop-menu {
              display: none;
            }
            .header-container5 {
              width: 243px;
            }
            .header-image1 {
              width: 218px;
            }
            .header-links1 {
              width: auto;
              height: 87px;
              display: flex;
              margin-left: 0px;
              flex-direction: row;
              justify-content: center;
            }
            .header-home {
              font-size: 16px;
            }
            .header-articles {
              font-size: 16px;
            }
            .header-dropdown-arrow1 {
              display: block;
            }
            .header-container6 {
              display: none;
            }
            .header-contact-us {
              font-size: 16px;
            }
            .header-buttons1 {
              width: auto;
              display: flex;
              margin-left: 0px;
              padding-left: 0px;
            }
            .header-container8 {
              display: flex;
              flex-direction: row;
              justify-content: center;
            }
            .header-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .header-container1 {
              width: 100%;
              height: auto;
              position: static;
            }
            .header-video {
              width: 100%;
              height: auto;
            }
            .header-max-width {
              position: fixed;
            }
            .header-navbar-interactive {
              width: 557px;
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-threeunits);
            }
            .header-container4 {
              align-items: center;
              flex-direction: row;
              justify-content: flex-start;
            }
            .header-links1 {
              display: none;
            }
            .header-buttons1 {
              display: none;
            }
            .header-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .header-icon5 {
              display: block;
            }
            .header-mobile-menu {
              height: 1hv;
            }
            .header-nav {
              align-self: center;
            }
            .header-close-menu {
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
            .header-icon7 {
              width: var(--dl-layout-size-medium);
              height: auto;
              animation-name: none;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .header-links2 {
              align-self: center;
            }
            .header-link1 {
              font-size: 30px;
            }
            .header-link2 {
              font-size: 30px;
            }
            .header-link3 {
              font-size: 30px;
            }
            .header-link4 {
              font-size: 30px;
            }
            .header-link5 {
              font-size: 30px;
            }
            .header-buttons2 {
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .header-container1 {
              width: 100%;
              height: auto;
              padding: var(--dl-layout-space-oneandhalfunits);
              margin-left: 0px;
              padding-top: 0px;
              margin-right: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .header-video {
              width: 100%;
              height: auto;
            }
            .header-max-width {
              left: 0px;
              right: 0px;
              width: 100%;
              height: 163px;
              position: sticky;
            }
            .header-container3 {
              height: 50px;
            }
            .header-text1 {
              font-size: 20px;
            }
            .header-title {
              color: var(--dl-color-theme-neutral-dark);
              font-size: 24px;
            }
            .header-text2 {
              font-size: 20px;
            }
            .header-navbar-interactive {
              padding: var(--dl-layout-space-twounits);
            }
            .header-dropdown-arrow1 {
              display: none;
            }
            .header-mobile-menu {
              padding: var(--dl-layout-space-unit);
            }
            .header-icon7 {
              width: var(--dl-layout-size-medium);
              height: var(--dl-layout-size-medium);
            }
            .header-text7 {
              box-shadow: rgba(12, 12, 12, 0) 5px 5px 10px 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  link1: 'Home',
  content11: undefined,
  link41: 'Link4',
  link51: 'About',
  action2: 'Action 2',
  link2: 'ِArticals',
  heading1: undefined,
  link4: 'Link4',
  imageAlt1: 'image',
  link11: 'Home',
  imageSrc1: '/logo_craft-1-removebg-preview-200h.png',
  action11: 'Action 1',
  imageAlt11: 'image',
  rootClassName: '',
  link3: 'Link3',
  link21: 'ِArticals',
  link5: 'About',
  imageSrc11: '/logo_craft-1-removebg-preview-200h.png',
  action1: undefined,
  languageLinkUrl: 'https://www.teleporthq.io',
  link31: 'Link3',
  content1: undefined,
}

Header.propTypes = {
  link1: PropTypes.string,
  content11: PropTypes.element,
  link41: PropTypes.string,
  link51: PropTypes.string,
  action2: PropTypes.string,
  link2: PropTypes.string,
  heading1: PropTypes.element,
  link4: PropTypes.string,
  imageAlt1: PropTypes.string,
  link11: PropTypes.string,
  imageSrc1: PropTypes.string,
  action11: PropTypes.string,
  imageAlt11: PropTypes.string,
  rootClassName: PropTypes.string,
  link3: PropTypes.string,
  link21: PropTypes.string,
  link5: PropTypes.string,
  imageSrc11: PropTypes.string,
  action1: PropTypes.element,
  languageLinkUrl: PropTypes.string,
  link31: PropTypes.string,
  content1: PropTypes.element,
}

export default Header
