import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ToBlog = (props) => {
  return (
    <>
      <div id="Blog" className="section-padding">
        <div className="section-max-width to-blog-container">
          <div className="to-blog-accent2-bg">
            <div className="to-blog-accent1-bg">
              <div className="to-blog-container2">
                <div className="to-blog-content">
                  <span className="heading-2">{props.heading1}</span>
                  <p className="body-large">{props.content1}</p>
                </div>
                
                <div className="to-blog-actions">
                  <button
                    type="button"
                    className="button-filled to-blog-button"
                  >
                    {props.action1}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .to-blog-container{
            width:auto;
          }
          .to-blog-accent2-bg {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            justify-content: space-around;
            transform-style: preserve-3d;
            background-color: var(--dl-color-theme-accent2);
          }
          .to-blog-accent2-bg:hover {
            transform: scale3d(1.1, 1.1, 1.1);
          }
          .to-blog-accent1-bg {
            width: 100%;
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(-2deg) skew(0deg, 0deg);
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            justify-content: space-between;
            transform-style: preserve-3d;
            background-color: var(--dl-color-theme-accent1);
          }
          .to-blog-container2 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-fourunits);
            border-radius: var(--dl-layout-radius-cardradius);
            padding-right: var(--dl-layout-space-fourunits);
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .to-blog-container2:hover {
            color: var(--dl-color-theme-neutral-light);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .to-blog-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .to-blog-actions {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          @media (max-width: 767px) {
            .to-blog-container2 {
              gap: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
          }
          @media (max-width: 479px) {
            .to-blog-actions {
              flex-wrap: wrap;
              align-self: stretch;
              justify-content: center;
            }
            .to-blog-button {
              flex: 1;
            }
          }
        `}
      </style>
    </>
  )
}

ToBlog.defaultProps = {
  action1: 'Main Action',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  heading1: 'Medium length heading goes here',
}

ToBlog.propTypes = {
  action1: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
}

export default ToBlog
