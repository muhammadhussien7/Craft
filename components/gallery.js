import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Gallery = (props) => {
  return (
    <>
      <div
        className={`gallery-gallery3 thq-section-padding ${props.rootClassName} `}
      >
        <div className="gallery-max-width thq-section-max-width">
          <div className="gallery-section-title">
            <h2 className="gallery-text10 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="gallery-text24">
                    Discover the Key Features
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="gallery-text11 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="gallery-text20">
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
          <div className="gallery-content">
            <div className="gallery-container1">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="gallery-image1 thq-img-ratio-4-3"
              />
              <span className="thq-body-small">
                {props.image1Title ?? (
                  <Fragment>
                    <span className="gallery-text18">Image 1</span>
                  </Fragment>
                )}
              </span>
              <span className="gallery-text13 thq-body-small">
                {props.image1Description ?? (
                  <Fragment>
                    <span className="gallery-text22">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="gallery-container2">
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="gallery-image2 thq-img-ratio-4-3"
              />
              <span className="thq-body-small">
                {props.image2Title ?? (
                  <Fragment>
                    <span className="gallery-text23">Image 2</span>
                  </Fragment>
                )}
              </span>
              <span className="gallery-text15 thq-body-small">
                {props.image2Description ?? (
                  <Fragment>
                    <span className="gallery-text25">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="gallery-container3">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="gallery-image3 thq-img-ratio-4-3"
              />
              <span className="thq-body-small">
                {props.image3Title ?? (
                  <Fragment>
                    <span className="gallery-text19">Image 3</span>
                  </Fragment>
                )}
              </span>
              <span className="gallery-text17 thq-body-small">
                {props.image3Description ?? (
                  <Fragment>
                    <span className="gallery-text21">
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
          .gallery-gallery3 {
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
          .gallery-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: 767px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery-text10 {
            text-align: center;
          }
          .gallery-text11 {
            text-align: center;
          }
          .gallery-content {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .gallery-container1 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-image1 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
          }
          .gallery-text13 {
            text-align: center;
          }
          .gallery-container2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-image2 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
          }
          .gallery-text15 {
            text-align: center;
          }
          .gallery-container3 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-image3 {
            width: 100%;
            height: 300px;
            max-width: 600px;
          }
          .gallery-text17 {
            text-align: center;
          }
          .gallery-text18 {
            display: inline-block;
          }
          .gallery-text19 {
            display: inline-block;
          }
          .gallery-text20 {
            display: inline-block;
          }
          .gallery-text21 {
            display: inline-block;
          }
          .gallery-text22 {
            display: inline-block;
          }
          .gallery-text23 {
            display: inline-block;
          }
          .gallery-text24 {
            display: inline-block;
          }
          .gallery-text25 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .gallery-content {
              align-items: center;
              flex-direction: column;
            }
            .gallery-image1 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .gallery-image2 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .gallery-image3 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .galleryroot-class-name {
              width: 100%;
              height: 100%;
              overflow: visible;
              padding-top: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .galleryroot-class-name {
              flex: 1;
              overflow: visible;
            }
          }
        `}
      </style>
    </>
  )
}

Gallery.defaultProps = {
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

Gallery.propTypes = {
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

export default Gallery
