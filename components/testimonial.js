import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Testimonial = (props) => {
  return (
    <>
      <div className="section-padding">
        <div className="testimonial-max-width section-max-width">
          <div className="testimonial-container10">
            <h2 className="heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="testimonial-text28">Testimonials</span>
                </Fragment>
              )}
            </h2>
            <span className="testimonial-text11 body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="testimonial-text32">
                    I have been using products from this website for years, and
                    I have seen a significant improvement in the health of my
                    crops. Highly recommended!
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="grid-2">
            <div className="animated-card-bg-2">
              <div className="animated-card-bg-1">
                <div
                  data-animated="true"
                  className="card testimonial-card1"
                >
                  <div className="testimonial-container12">
                    <img
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial-image1"
                    />
                    <div className="testimonial-container13">
                      <strong className="body-large">
                        {props.author1Name ?? (
                          <Fragment>
                            <span className="testimonial-text30">
                              John Smith
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="body-small">
                        {props.author1Position ?? (
                          <Fragment>
                            <span className="testimonial-text27">
                              Organic Farmer
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text14 body-small">
                    {props.review1 ?? (
                      <Fragment>
                        <span className="testimonial-text25">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="animated-card-bg-2">
              <div className="animated-card-bg-1">
                <div
                  data-animated="true"
                  className="card testimonial-card2"
                >
                  <div className="testimonial-container14">
                    <img
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial-image2"
                    />
                    <div className="testimonial-container15">
                      <strong className="body-large">
                        {props.author2Name ?? (
                          <Fragment>
                            <span className="testimonial-text29">Jane Doe</span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="body-small">
                        {props.author2Position ?? (
                          <Fragment>
                            <span className="testimonial-text35">
                              Sustainable Agriculture Advocate
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text17 body-small">
                    {props.review2 ?? (
                      <Fragment>
                        <span className="testimonial-text36">
                          The products offered here are top-notch and have
                          helped me support local farmers while promoting
                          eco-friendly practices.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="animated-card-bg-2">
              <div className="animated-card-bg-1">
                <div
                  data-animated="true"
                  className="card testimonial-card3"
                >
                  <div className="testimonial-container16">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial-image3"
                    />
                    <div className="testimonial-container17">
                      <strong className="body-large">
                        {props.author3Name ?? (
                          <Fragment>
                            <span className="testimonial-text24">
                              Michael Johnson
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="body-small">
                        {props.author3Position ?? (
                          <Fragment>
                            <span className="testimonial-text31">
                              Environmental Scientist
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text20 body-small">
                    {props.review3 ?? (
                      <Fragment>
                        <span className="testimonial-text34">
                          I appreciate the dedication of this company to green
                          chemistry and sustainable agriculture. Their
                          commitment is truly inspiring.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="animated-card-bg-2">
              <div className="animated-card-bg-1">
                <div
                  data-animated="true"
                  className="card testimonial-card4"
                >
                  <div className="testimonial-container18">
                    <img
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial-image4"
                    />
                    <div className="testimonial-container19">
                      <strong className="body-large">
                        {props.author4Name ?? (
                          <Fragment>
                            <span className="testimonial-text26">
                              Sarah Lee
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="body-small">
                        {props.author4Position ?? (
                          <Fragment>
                            <span className="testimonial-text37">
                              Food Blogger
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text23 body-small">
                    {props.review4 ?? (
                      <Fragment>
                        <span className="testimonial-text33">
                          As a food blogger, I always recommend products from
                          this website to my audience. The quality and impact
                          speak for themselves.
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
          .testimonial-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial-container10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-layout-space-fourunits);
            flex-direction: column;
          }
          .testimonial-text11 {
            text-align: center;
          }
          .testimonial-container12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image1 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial-container13 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text14 {
            text-align: left;
          }
          .testimonial-container14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image2 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial-container15 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text17 {
            text-align: left;
          }
          .testimonial-container16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image3 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial-container17 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text20 {
            text-align: left;
          }
          .testimonial-container18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image4 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial-container19 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text23 {
            text-align: left;
          }
          .testimonial-text24 {
            display: inline-block;
          }
          .testimonial-text25 {
            display: inline-block;
          }
          .testimonial-text26 {
            display: inline-block;
          }
          .testimonial-text27 {
            display: inline-block;
          }
          .testimonial-text28 {
            display: inline-block;
          }
          .testimonial-text29 {
            display: inline-block;
          }
          .testimonial-text30 {
            display: inline-block;
          }
          .testimonial-text31 {
            display: inline-block;
          }
          .testimonial-text32 {
            display: inline-block;
          }
          .testimonial-text33 {
            display: inline-block;
          }
          .testimonial-text34 {
            display: inline-block;
          }
          .testimonial-text35 {
            display: inline-block;
          }
          .testimonial-text36 {
            display: inline-block;
          }
          .testimonial-text37 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .testimonial-container10 {
              margin-bottom: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .testimonial-container10 {
              margin-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .testimonial-card1 {
              width: 100%;
            }
            .testimonial-card2 {
              width: 100%;
            }
            .testimonial-card3 {
              width: 100%;
            }
            .testimonial-card4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial.defaultProps = {
  author2Src:
    'https://images.unsplash.com/photo-1631913290783-490324506193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM3NzQxMHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Src:
    'https://images.unsplash.com/photo-1563240619-44ec0047592c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM3NzQxMHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Alt: 'Image of Michael Johnson',
  author3Src:
    'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM3NzQxMHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: undefined,
  review1: undefined,
  author4Name: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1620122303020-87ec826cf70d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM3NzQxMHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Position: undefined,
  heading1: undefined,
  author2Name: undefined,
  author1Name: undefined,
  author4Alt: 'Image of Sarah Lee',
  author3Position: undefined,
  content1: undefined,
  author1Alt: 'Image of John Smith',
  review4: undefined,
  review3: undefined,
  author2Alt: 'Image of Jane Doe',
  author2Position: undefined,
  review2: undefined,
  author4Position: undefined,
}

Testimonial.propTypes = {
  author2Src: PropTypes.string,
  author1Src: PropTypes.string,
  author3Alt: PropTypes.string,
  author3Src: PropTypes.string,
  author3Name: PropTypes.element,
  review1: PropTypes.element,
  author4Name: PropTypes.element,
  author4Src: PropTypes.string,
  author1Position: PropTypes.element,
  heading1: PropTypes.element,
  author2Name: PropTypes.element,
  author1Name: PropTypes.element,
  author4Alt: PropTypes.string,
  author3Position: PropTypes.element,
  content1: PropTypes.element,
  author1Alt: PropTypes.string,
  review4: PropTypes.element,
  review3: PropTypes.element,
  author2Alt: PropTypes.string,
  author2Position: PropTypes.element,
  review2: PropTypes.element,
  author4Position: PropTypes.element,
}

export default Testimonial
