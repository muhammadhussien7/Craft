import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Stats = (props) => {
  return (
    <>
      <div className="stats-container1 section-padding">
        <div className="stats-max-width section-max-width">
          <div className="stats-container2 flex-column edit-state">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="img-ratio-1-1 stats-image"
            />
          </div>
          <div className="stats-container3 flex-column">
            <span className="body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="stats-text27">Organic Products</span>
                </Fragment>
              )}
            </span>
            <h2 className="heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="stats-text30">Our Impact</span>
                </Fragment>
              )}
            </h2>
            <p className="body-large">
              {props.content2 ?? (
                <Fragment>
                  <span className="stats-text29">Eco-Friendly Farmers</span>
                </Fragment>
              )}
            </p>
            <div className="stats-container4 grid-2">
              <div className="stats-container5">
                <h2 className="heading-2">
                  {props.stat1 ?? (
                    <Fragment>
                      <span className="stats-text26">100%</span>
                    </Fragment>
                  )}
                </h2>
                <span className="body-small">
                  {props.stat1Description ?? (
                    <Fragment>
                      <span className="stats-text25">
                        Percentage of eco-friendly products
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="stats-container6">
                <h2 className="heading-2">
                  {props.stat2 ?? (
                    <Fragment>
                      <span className="stats-text23">80%</span>
                    </Fragment>
                  )}
                </h2>
                <span className="body-small">
                  {props.stat2Description ?? (
                    <Fragment>
                      <span className="stats-text22">
                        Percentage of products that are organic
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="stats-container7 grid-2">
              <div className="stats-container8">
                <h2 className="heading-2">
                  {props.stat3 ?? (
                    <Fragment>
                      <span className="stats-text28">95%</span>
                    </Fragment>
                  )}
                </h2>
                <span className="body-small">
                  {props.stat3Description ?? (
                    <Fragment>
                      <span className="stats-text21">
                        Percentage of farmers using sustainable practices
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="stats-container9">
                <h2 className="heading-2">
                  {props.stat4 ?? (
                    <Fragment>
                      <span className="stats-text24">85%</span>
                    </Fragment>
                  )}
                </h2>
                <span className="body-small">
                  {props.stat4Description ?? (
                    <Fragment>
                      <span className="stats-text31">
                        Customer satisfaction rate
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .stats-container1 {
            width: 100%;
            flex-direction: column;
          }
          .stats-max-width {
            gap: var(--dl-layout-space-fourunits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .stats-container2 {
            max-width: 50%;
          }
          .stats-container3 {
            align-self: center;
            align-items: flex-start;
            margin-left: auto;
          }
          .stats-container4 {
            width: 100%;
          }
          .stats-container5 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          .stats-container6 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          .stats-container7 {
            width: 100%;
          }
          .stats-container8 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          .stats-container9 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          .stats-text21 {
            display: inline-block;
          }
          .stats-text22 {
            display: inline-block;
          }
          .stats-text23 {
            display: inline-block;
          }
          .stats-text24 {
            display: inline-block;
          }
          .stats-text25 {
            display: inline-block;
          }
          .stats-text26 {
            display: inline-block;
          }
          .stats-text27 {
            display: inline-block;
          }
          .stats-text28 {
            display: inline-block;
          }
          .stats-text29 {
            display: inline-block;
          }
          .stats-text30 {
            display: inline-block;
          }
          .stats-text31 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .stats-max-width {
              gap: var(--dl-layout-space-twounits);
              align-items: flex-start;
              flex-direction: column;
            }
            .stats-container2 {
              width: 100%;
              max-width: 100%;
            }
            .stats-container3 {
              align-self: flex-start;
              margin-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .stats-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Stats.defaultProps = {
  stat3Description: undefined,
  image1Alt: 'Farmers in a sustainable field',
  stat2Description: undefined,
  stat2: undefined,
  stat4: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1603712545202-6325230329bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM4MzE5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  stat1Description: undefined,
  stat1: undefined,
  content1: undefined,
  stat3: undefined,
  content2: undefined,
  heading1: undefined,
  stat4Description: undefined,
}

Stats.propTypes = {
  stat3Description: PropTypes.element,
  image1Alt: PropTypes.string,
  stat2Description: PropTypes.element,
  stat2: PropTypes.element,
  stat4: PropTypes.element,
  image1Src: PropTypes.string,
  stat1Description: PropTypes.element,
  stat1: PropTypes.element,
  content1: PropTypes.element,
  stat3: PropTypes.element,
  content2: PropTypes.element,
  heading1: PropTypes.element,
  stat4Description: PropTypes.element,
}

export default Stats
