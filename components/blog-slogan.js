import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const BlogSlogan = (props) => {
  return (
    <>
      <div className="blog-slogan-container section-padding">
        <div className="blog-slogan-max-width section-max-width">
          <div className="blog-slogan-content">
            <h2 className="blog-slogan-heading1 heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="blog-slogan-text">
                    Green Chemistry: The Future is Non-Toxic — Join the
                    Revolution!
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-slogan-container {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-direction: column;
          }
          .blog-slogan-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .blog-slogan-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .blog-slogan-heading1 {
            text-align: center;
          }
          .blog-slogan-text {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

BlogSlogan.defaultProps = {
  heading1: undefined,
}

BlogSlogan.propTypes = {
  heading1: PropTypes.element,
}

export default BlogSlogan
