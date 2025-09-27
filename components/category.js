import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Category = (props) => {
  return (
    <>
      <header className={`category-container ${props.rootClassName} `}>
        <header data-thq="navbar" className="category-navbar-interactive">
          <div data-thq="navbar-nav" className="category-desktop-menu">
            <nav className="category-links1">
              <a
                href={props.link1Url}
                className="body-small link category-link11"
              >
                {props.link1 ?? (
                  <Fragment>
                    <span className="category-text2">Link1</span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.link2Url}
                className="body-small link category-link21"
              >
                {props.link2 ?? (
                  <Fragment>
                    <span className="category-text1">Link2</span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.link3Url}
                className="body-small link category-link31"
              >
                {props.link3 ?? (
                  <Fragment>
                    <span className="category-text4">Link3</span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.link4Url}
                className="body-small link category-link41"
              >
                {props.link4 ?? (
                  <Fragment>
                    <span className="category-text5">Link4</span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.link5Url}
                className="body-small link category-link51"
              >
                {props.link5 ?? (
                  <Fragment>
                    <span className="category-text3">Link5</span>
                  </Fragment>
                )}
              </a>
            </nav>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .category-container {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .category-navbar-interactive {
            width: 100%;
            display: flex;
            max-width: idth;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: space-between;
          }
          .category-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .category-links1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .category-burger-menu {
            display: none;
          }
          .category-icon10 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .category-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-layout-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .category-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .category-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .category-logo {
            height: 3rem;
          }
          .category-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .category-icon12 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .category-links2 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .category-icon-group {
            gap: var(--dl-layout-space-twounits);
            display: flex;
          }
          .category-text1 {
            display: inline-block;
          }
          .category-text2 {
            display: inline-block;
          }
          .category-text3 {
            display: inline-block;
          }
          .category-text4 {
            display: inline-block;
          }
          .category-text5 {
            display: inline-block;
          }

          @media (max-width: 1600px) {
            .category-links1 {
              padding-left: 0px;
              padding-right: 0px;
              justify-content: center;
            }
            .category-link11 {
              font-size: 20px;
            }
            .category-link21 {
              font-size: 20px;
            }
            .category-link31 {
              font-size: 20px;
            }
            .category-link41 {
              font-size: 20px;
            }
            .category-link51 {
              font-size: 20px;
            }
            .categoryroot-class-name1 {
              background-color: transparent;
            }
          }
          @media (max-width: 767px) {
            .category-navbar-interactive {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .category-desktop-menu {
              display: flex;
            }
              
            
          }
          @media (max-width: 600px) {
              .category-links1{
                gap: var(--dl-layout-space-twounits);
                flex-direction:column;
              }
        }

          @media (max-width: 479px) {
            .category-navbar-interactive {
              padding: var(--dl-layout-space-unit);
            }
            .category-mobile-menu {
              padding: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Category.defaultProps = {
  link1Url: 'https://www.teleporthq.io',
  link2: undefined,
  link5Url: 'https://www.teleporthq.io',
  link1: undefined,
  link2Url: 'https://www.teleporthq.io',
  link5: undefined,
  link4Url: 'https://www.teleporthq.io',
  rootClassName: '',
  link3: undefined,
  link3Url: 'https://www.teleporthq.io',
  logoAlt: 'logo',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link4: undefined,
}

Category.propTypes = {
  link1Url: PropTypes.string,
  link2: PropTypes.element,
  link5Url: PropTypes.string,
  link1: PropTypes.element,
  link2Url: PropTypes.string,
  link5: PropTypes.element,
  link4Url: PropTypes.string,
  rootClassName: PropTypes.string,
  link3: PropTypes.element,
  link3Url: PropTypes.string,
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  link4: PropTypes.element,
}

export default Category














