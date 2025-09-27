import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const BlogRight = (props) => {
  return (
    <>
      <div className="blog-right-layout349 section-padding">
        <div className="blog-right-max-width">
          <div className="blog-right-content1">
            <div className="blog-right-section-title">
              <div className="blog-right-content2">
                <h2 className="heading-2">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="blog-right-text3">Blog Title</span>
                    </Fragment>
                  )}
                </h2>
                <p className="body-large blog-right-text2">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="blog-right-text4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Qui dicta minus molestiae vel beatae natus eveniet
                        ratione temporibus aperiam harum alias officiis
                        assumenda officia quibusdam deleniti eos cupiditate
                        dolore doloribus!
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="blog-right-image-container">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="img-ratio-16-9"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-right-layout349 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            
          }
          .blog-right-max-width {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            align-items: center;
            
          }
          .blog-right-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            
          }
          .blog-right-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-right-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-right-image-container {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
            
          }
          .blog-right-text3 {
            display: inline-block;
          }
          .blog-right-text4 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .blog-right-layout349 {
              width: 100%;
              padding-top: var(--dl-layout-space-halfunit);
              margin-right: 0px;
              padding-bottom: var(--dl-layout-space-halfunit);
            }
          }
          @media (max-width: 991px) {
            .blog-right-layout349 {
              margin-bottom: var(--dl-layout-space-unit);
              
               
            }
            .blog-right-max-width {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column-reverse;
              
            }
            .blog-right-content2 {
              align-items: center;
            }
            .blog-right-text2 {
              text-align: center;
            }
          }
            
          @media (max-width: 479px) {
            .blog-right-content2 {

            }
          }
        `}
      </style>
    </>
  )
}

BlogRight.defaultProps = {
  feature1Title: undefined,
  feature1ImageAlt: 'Organic Products',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1578747763484-51b21a33e4fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMDk4Mnw&ixlib=rb-4.0.3&q=80&w=1400',
  feature1Description: undefined,
}

BlogRight.propTypes = {
  feature1Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Description: PropTypes.element,
}

export default BlogRight
