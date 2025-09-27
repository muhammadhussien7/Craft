import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const BlogLeft = (props) => {
  return (
    <>
      <div className="blog-left-layout349 section-padding">
        <div className="blog-left-max-width">
          <div className="blog-left-image-container">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="img-ratio-16-9"
            />
          </div>
          <div className="blog-left-content1">
            <div className="blog-left-section-title">
              <div className="blog-left-content2">
                <h2 className="heading-2">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="blog-left-text3">Blog Title</span>
                    </Fragment>
                  )}
                </h2>
                <p className="body-large blog-left-text2">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="blog-left-text4">
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
        </div>
      </div>
      <style jsx>
        {`
          .blog-left-layout349 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .blog-left-max-width {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .blog-left-image-container {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
          }
          .blog-left-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-left-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-left-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-left-text3 {
            display: inline-block;
          }
          .blog-left-text4 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .blog-left-layout349 {
              padding-top: var(--dl-layout-space-halfunit);
              padding-left: var(--dl-layout-space-fiveunits);
              margin-bottom: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-fiveunits);
              padding-bottom: var(--dl-layout-space-halfunit);
            }
          }
          @media (max-width: 991px) {
            .blog-left-layout349 {
              margin-bottom: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-halfunit);
            }
            .blog-left-max-width {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column;
            }
            .blog-left-content2 {
              align-items: center;
            }
            .blog-left-text2 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .blog-left-layout349 {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .blog-left-content2 {
              align-self: stretch;
              align-items: center;
              justify-content: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

BlogLeft.defaultProps = {
  feature1Title: undefined,
  feature1Description: undefined,
  feature1ImageAlt: 'Organic products',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1707811180403-c22b7ef06476?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMDkzNXw&ixlib=rb-4.0.3&q=80&w=1080',
}

BlogLeft.propTypes = {
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
}

export default BlogLeft
