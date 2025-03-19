import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Gallery from './gallery'

const Gallery1 = (props) => {
  return (
    <>
      <div className={`gallery1-container ${props.rootClassName} `}>
        <Gallery
          content1={
            <Fragment>
              <span className="gallery1-text1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Suspendisse varius enim in eros
                elementum tristique. Duis cursus, mi quis viverra ornare, eros
                dolor interdum nulla.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="gallery1-text2">Discover the Key Features</span>
            </Fragment>
          }
          image1Src="https://images.unsplash.com/photo-1567331711402-509c12c41959?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MDQwMTI0Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          image2Src="https://images.unsplash.com/photo-1570937709055-375aeb7fbde3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MDQwMTI1OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          image3Src="https://images.unsplash.com/photo-1565068363322-e82a3e106d2e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MDQwMTI2OHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          image1Title={
            <Fragment>
              <span className="gallery1-text3">Image 1</span>
            </Fragment>
          }
          image2Title={
            <Fragment>
              <span className="gallery1-text4">Image 2</span>
            </Fragment>
          }
          image3Title={
            <Fragment>
              <span className="gallery1-text5">Image 3</span>
            </Fragment>
          }
          rootClassName="galleryroot-class-name"
          image1Description={
            <Fragment>
              <span className="gallery1-text6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </span>
            </Fragment>
          }
          image2Description={
            <Fragment>
              <span className="gallery1-text7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </span>
            </Fragment>
          }
          image3Description={
            <Fragment>
              <span className="gallery1-text8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </span>
            </Fragment>
          }
        ></Gallery>
      </div>
      <style jsx>
        {`
          .gallery1-container {
            width: 100%;
            height: 944px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .gallery1-text1 {
            display: inline-block;
          }
          .gallery1-text2 {
            display: inline-block;
          }
          .gallery1-text3 {
            display: inline-block;
          }
          .gallery1-text4 {
            display: inline-block;
          }
          .gallery1-text5 {
            display: inline-block;
          }
          .gallery1-text6 {
            display: inline-block;
          }
          .gallery1-text7 {
            display: inline-block;
          }
          .gallery1-text8 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .gallery1-container {
              height: 1748px;
              margin-top: 0px;
            }
          }
          @media (max-width: 767px) {
            .gallery1root-class-name {
              height: 1780px;
            }
          }
          @media (max-width: 479px) {
            .gallery1-container {
              height: 1780px;
            }
          }
        `}
      </style>
    </>
  )
}

Gallery1.defaultProps = {
  rootClassName: '',
}

Gallery1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Gallery1
