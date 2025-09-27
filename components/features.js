import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features = (props) => {
  return (
    <>
      <div
        className={`features-gallery3 section-padding ${props.rootClassName} `}
      >
        <div className="features-max-width section-max-width">
          <div className="features-section-title">
            <h2 className="features-text10 heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="features-text24">
                    Discover the Key Features
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="features-text11 body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="features-text20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Suspendisse varius enim
                    in eros elementum tristique. Duis cursus, mi quis viverra
                    ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features-content">
            <div className="features-container1">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="features-image1 img-ratio-4-3"
              />
              <span className="body-small features-text12">
                {props.image1Title ?? (
                  <Fragment>
                    <span className="features-text18">Image 1</span>
                  </Fragment>
                )}
              </span>
              <span className="features-text13 body-small">
                {props.image1Description ?? (
                  <Fragment>
                    <span className="features-text22">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features-container2">
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="features-image2 img-ratio-4-3"
              />
              <span className="body-small features-text14">
                {props.image2Title ?? (
                  <Fragment>
                    <span className="features-text23">Image 2</span>
                  </Fragment>
                )}
              </span>
              <span className="features-text15 body-small">
                {props.image2Description ?? (
                  <Fragment>
                    <span className="features-text25">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features-container3">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="features-image3 img-ratio-4-3"
              />
              <span className="body-small features-text16">
                {props.image3Title ?? (
                  <Fragment>
                    <span className="features-text19">Image 3</span>
                  </Fragment>
                )}
              </span>
              <span className="features-text17 body-small">
                {props.image3Description ?? (
                  <Fragment>
                    <span className="features-text21">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features-gallery3 {
            width: 100%;
            height: 1006px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            padding-top: 142px;
            flex-direction: column;
          }
          .features-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: 767px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .features-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features-text10 {
            text-align: center;
          }
          .features-text11 {
            text-align: center;
          }
          .features-content {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .features-container1 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .features-image1 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
          }
          .features-text13 {
            text-align: center;
          }
          .features-container2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .features-image2 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
          }
          .features-text15 {
            text-align: center;
          }
          .features-container3 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .features-image3 {
            width: 100%;
            height: 300px;
            max-width: 600px;
          }
          .features-text17 {
            text-align: center;
          }
          .features-text18 {
            display: inline-block;
          }
          .features-text19 {
            display: inline-block;
          }
          .features-text20 {
            display: inline-block;
          }
          .features-text21 {
            display: inline-block;
          }
          .features-text22 {
            display: inline-block;
          }
          .features-text23 {
            display: inline-block;
          }
          .features-text24 {
            display: inline-block;
          }
          .features-text25 {
            display: inline-block;
          }

          @media (max-width: 1600px) {
            .features-gallery3 {
              height: auto;
              padding-top: var(--dl-layout-space-fiveunits);
            }
            .features-max-width {
              height: auto;
              margin-bottom: 0px;
            }
            .features-text12 {
              font-size: 18px;
            }
            .features-text14 {
              font-size: 18px;
            }
            .features-text16 {
              font-size: 18px;
            }
          }
          @media (max-width: 991px) {
            .features-content {
              align-items: center;
              flex-direction: column;
            }
            .features-image1 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .features-image2 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .features-image3 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .featuresroot-class-name {
              width: 100%;
              height: 100%;
              overflow: visible;
              padding-top: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .featuresroot-class-name {
              flex: 1;
              overflow: visible;
            }
          }
          @media (max-width: 479px) {
            .featuresroot-class-name {
              margin-bottom: 70px;
            }
          }
        `}
      </style>
    </>
  )
}

Features.defaultProps = {
  image1Title: undefined,
  image2Alt: 'PlaceholderImage1302',
  image1Alt: 'PlaceholderImage1302',
  image3Title: undefined,
  image2Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=600',
  content1: undefined,
  image3Description: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=600',
  image1Description: undefined,
  image3Alt: 'PlaceholderImage1302',
  image2Title: undefined,
  image3Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  heading1: undefined,
  image2Description: undefined,
  rootClassName: '',
}

Features.propTypes = {
  image1Title: PropTypes.element,
  image2Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image3Title: PropTypes.element,
  image2Src: PropTypes.string,
  content1: PropTypes.element,
  image3Description: PropTypes.element,
  image1Src: PropTypes.string,
  image1Description: PropTypes.element,
  image3Alt: PropTypes.string,
  image2Title: PropTypes.element,
  image3Src: PropTypes.string,
  heading1: PropTypes.element,
  image2Description: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Features
