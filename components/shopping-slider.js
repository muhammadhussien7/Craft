import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ShoppingSlider = (props) => {
  return (
    <>
      <div className="shopping-slider-gallery3 section-padding">
        <div className="shopping-slider-max-width section-max-width">
          <div className="shopping-slider-section-title">
            <h2 className="shopping-slider-text1 heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="shopping-slider-text3">
                    Explore Our Eco-Friendly Products Gallery
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="shopping-slider-text2 body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="shopping-slider-text4">
                    Browse through a variety of organic fruits, vegetables,
                    sustainable beauty products, and more in our gallery
                    showcasing our eco-friendly offerings.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="shopping-slider-container">
            <div className="shopping-slider-content">
              <div
                data-thq="slider"
                data-navigation="true"
                data-pagination="true"
                className="shopping-slider-slider swiper"
              >
                <div data-thq="slider-wrapper" className="swiper-wrapper" style="border: solid red 5px;">
                  <div
                    data-thq="slider-slide"
                    className="shopping-slider-slider-slide1 swiper-slide"
                    style="border: solid blue 5px"
                  >
                    <img
                      alt={props.image1Alt}
                      src={props.image1Src}
                      className="shopping-slider-image1 img-ratio-4-3" 
                    />
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="shopping-slider-slider-slide2 swiper-slide"
                  >
                    <img
                      alt={props.image2Alt}
                      src={props.image2Src}
                      className="shopping-slider-image2 img-ratio-4-3" 
                    />
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="shopping-slider-slider-slide3 swiper-slide"
                  >
                    <img
                      alt={props.image3Alt}
                      src={props.image3Src}
                      className="shopping-slider-image3 img-ratio-4-3" 
                    />
                  </div>
                </div>
                <div
                  data-thq="slider-button-prev"
                  className="swiper-button-prev"
                ></div>
                <div
                  data-thq="slider-button-next"
                  className="swiper-button-next"
                ></div>
                <div
                  data-thq="slider-pagination"
                  className="shopping-slider-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
                >
                  <div
                    data-thq="slider-pagination-bullet"
                    className="swiper-pagination-bullet swiper-pagination-bullet-active"
                  ></div>
                  <div
                    data-thq="slider-pagination-bullet"
                    className="swiper-pagination-bullet"
                  ></div>
                  <div
                    data-thq="slider-pagination-bullet"
                    className="swiper-pagination-bullet"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .shopping-slider-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .shopping-slider-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .shopping-slider-section-title {
            gap: 24px;
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .shopping-slider-text1 {
            text-align: center;
          }
          .shopping-slider-text2 {
            text-align: center;
          }
          .shopping-slider-container {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .shopping-slider-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .shopping-slider-slider {
            width: 100%;
            height: 770px;
            display: inline-block;
          }
          .shopping-slider-slider-slide1 {
            height: calc(100% - 20px);
            display: flex;
          }
          .shopping-slider-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .shopping-slider-slider-slide2 {
            height: calc(100% - 20px);
            display: flex;
          }
          .shopping-slider-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .shopping-slider-slider-slide3 {
            height: calc(100% - 20px);
            display: flex;
          }
          .shopping-slider-image3 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .shopping-slider-slider-pagination {
            display: block;
          }
          .shopping-slider-text3 {
            display: inline-block;
          }
          .shopping-slider-text4 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .shopping-slider-content {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .shopping-slider-section-title {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .shopping-slider-slider {
              height: 550px;
            }
          }
          @media (max-width: 479px) {
            .shopping-slider-slider {
              height: 440px;
            }
          }
        `}
      </style>
    </>
  )
}

ShoppingSlider.defaultProps = {
  heading1: undefined,
  image3Alt: 'Natural cleaning supplies',
  image2Src:
    'https://images.unsplash.com/photo-1707811179913-ddcc09aaf498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NjE2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'Sustainable beauty products',
  image1Src:
    'https://images.unsplash.com/photo-1631089865903-1894c87f08d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NjE2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Src:
    'https://images.unsplash.com/photo-1588959570984-9f1e0e9a91a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NjE2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  image1Alt: 'Organic fruits and vegetables',
}

ShoppingSlider.propTypes = {
  heading1: PropTypes.element,
  image3Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image3Src: PropTypes.string,
  content1: PropTypes.element,
  image1Alt: PropTypes.string,
}

export default ShoppingSlider
