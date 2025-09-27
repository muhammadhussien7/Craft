import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const UserReviews = (props) => {
  return (
    <>
      <div className={`section-padding ${props.rootClassName} `}>
        <div className="user-reviews-max-width section-max-width">
          <div className="user-reviews-section-title">
            <h2 className="user-reviews-title heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="user-reviews-text21">User Reviews</span>
                </Fragment>
              )}
            </h2>
            <p className="user-reviews-subtitle body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="user-reviews-text19">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="user-reviews-content flex-row">        
            <div className="user-reviews-column2 card flex-column">
              <div className="user-reviews-stars2">
                <svg viewBox="0 0 1024 1024" className="icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <span className="user-reviews-text13 body-small">
                {props.review2 ?? (
                  <Fragment>
                    <span className="user-reviews-text27">
                      As a farmer committed to sustainable agriculture, I
                      appreciate the dedication of this website to promoting
                      organic products. It&apos;s a great platform for
                      connecting with like-minded individuals.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="user-reviews-avatar2">
                <img
                  alt={props.author2Alt}
                  src={props.author2Src}
                  className="user-reviews-avatar-image2 img-round img-ratio-1-1"
                />
                <div className="user-reviews-avatar-content2">
                  <span className="user-reviews-text14 body-small">
                    {props.author2 ?? (
                      <Fragment>
                        <span className="user-reviews-text28">Michael Lee</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="body-small">
                    {props.author2Position ?? (
                      <Fragment>
                        <span className="user-reviews-text23">
                          Organic Farmer
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="user-reviews-column2 card flex-column">
              <div className="user-reviews-stars2">
                <svg viewBox="0 0 1024 1024" className="icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <span className="user-reviews-text13 body-small">
                {props.review2 ?? (
                  <Fragment>
                    <span className="user-reviews-text27">
                      As a farmer committed to sustainable agriculture, I
                      appreciate the dedication of this website to promoting
                      organic products. It&apos;s a great platform for
                      connecting with like-minded individuals.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="user-reviews-avatar2">
                <img
                  alt={props.author2Alt}
                  src={props.author2Src}
                  className="user-reviews-avatar-image2 img-round img-ratio-1-1"
                />
                <div className="user-reviews-avatar-content2">
                  <span className="user-reviews-text14 body-small">
                    {props.author2 ?? (
                      <Fragment>
                        <span className="user-reviews-text28">Michael Lee</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="body-small">
                    {props.author2Position ?? (
                      <Fragment>
                        <span className="user-reviews-text23">
                          Organic Farmer
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="user-reviews-column3 card flex-column">
              <div className="user-reviews-stars3">
                <svg viewBox="0 0 1024 1024" className="icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <span className="user-reviews-text16 body-small">
                {props.review3 ?? (
                  <Fragment>
                    <span className="user-reviews-text20">
                      The emphasis on green chemistry in the product selection
                      is impressive. It&apos;s inspiring to see a focus on
                      environmentally friendly options that are both effective
                      and sustainable.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="user-reviews-avatar3">
                <img
                  alt={props.author3Alt}
                  src={props.author3Src}
                  className="user-reviews-avatar-image3 img-round img-ratio-1-1"
                />
                <div className="user-reviews-avatar-content3">
                  <span className="user-reviews-text17 body-small">
                    {props.author3 ?? (
                      <Fragment>
                        <span className="user-reviews-text25">Emily Chen</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="body-small">
                    {props.author3Position ?? (
                      <Fragment>
                        <span className="user-reviews-text22">
                          Green Chemist
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .user-reviews-max-width {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .user-reviews-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .user-reviews-title {
            width: 100%;
            text-align: center;
          }
          .user-reviews-subtitle {
            text-align: center;
          }
          .user-reviews-content {
            gap: var(--dl-layout-space-twounits);
          }
          .user-reviews-column1 {
            flex: 1;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
          }
          .user-reviews-stars1 {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .user-reviews-text10 {
            height: auto;
          }
          .user-reviews-avatar1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .user-reviews-avatar-image1 {
            width: 56px;
            height: 56px;
          }
          .user-reviews-avatar-content1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-reviews-text11 {
            font-weight: 600;
          }
          .user-reviews-column2 {
            flex: 1;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
          }
          .user-reviews-stars2 {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .user-reviews-text13 {
            height: auto;
          }
          .user-reviews-avatar2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .user-reviews-avatar-image2 {
            width: 56px;
            height: 56px;
          }
          .user-reviews-avatar-content2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-reviews-text14 {
            font-weight: 600;
          }
          .user-reviews-column3 {
            flex: 1;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
          }
          .user-reviews-stars3 {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .user-reviews-text16 {
            height: auto;
          }
          .user-reviews-avatar3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .user-reviews-avatar-image3 {
            width: 56px;
            height: 56px;
          }
          .user-reviews-avatar-content3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-reviews-text17 {
            font-weight: 600;
          }
          .user-reviews-text19 {
            display: inline-block;
          }
          .user-reviews-text20 {
            display: inline-block;
          }
          .user-reviews-text21 {
            display: inline-block;
          }
          .user-reviews-text22 {
            display: inline-block;
          }
          .user-reviews-text23 {
            display: inline-block;
          }
          .user-reviews-text24 {
            display: inline-block;
          }
          .user-reviews-text25 {
            display: inline-block;
          }
          .user-reviews-text26 {
            display: inline-block;
          }
          .user-reviews-text27 {
            display: inline-block;
          }
          .user-reviews-text28 {
            display: inline-block;
          }
          .user-reviews-text29 {
            display: inline-block;
          }

          @media (max-width: 1600px) {
            .user-reviews-column1 {
              width: 454px;
              height: var(--dl-layout-size-xxlarge);
            }
          }
          @media (max-width: 991px) {
            .user-reviews-max-width {
              gap: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .user-reviews-section-title {
              width: 100%;
              max-width: 800px;
            }
            .user-reviews-content {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

UserReviews.defaultProps = {
  content1: undefined,
  review3: undefined,
  heading1: undefined,
  author1Alt: 'Image of Sarah Johnson',
  author3Alt: 'Image of Emily Chen',
  author3Position: undefined,
  author2Position: undefined,
  author1Position: undefined,
  author2Alt: 'Image of Michael Lee',
  author2Src:
    'https://images.unsplash.com/photo-1481437642641-2f0ae875f836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NzcwOXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Src:
    'https://images.unsplash.com/photo-1595868228899-abc8fabb3447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NzcwOXw&ixlib=rb-4.0.3&q=80&w=500',
  author3: undefined,
  review1: undefined,
  review2: undefined,
  rootClassName: '',
  author3Src:
    'https://images.unsplash.com/photo-1531384441138-2736e62e0919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NzcwOXw&ixlib=rb-4.0.3&q=80&w=1080',
  author2: undefined,
  author1Name: undefined,
}

UserReviews.propTypes = {
  content1: PropTypes.element,
  review3: PropTypes.element,
  heading1: PropTypes.element,
  author1Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  author3Position: PropTypes.element,
  author2Position: PropTypes.element,
  author1Position: PropTypes.element,
  author2Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author1Src: PropTypes.string,
  author3: PropTypes.element,
  review1: PropTypes.element,
  review2: PropTypes.element,
  rootClassName: PropTypes.string,
  author3Src: PropTypes.string,
  author2: PropTypes.element,
  author1Name: PropTypes.element,
}

export default UserReviews
