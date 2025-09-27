import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Steps = (props) => {
  return (
    <>
      <div className="steps-container1 section-padding">
        <div className="steps-max-width section-max-width">
          <div className="steps-container2 grid-2">
            <div className="steps-section-header">
              <h2 className="heading-2">
                Discover the Power of Our Products
              </h2>
              <p className="body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <div className="steps-actions">
                <button className="button-animated button-filled steps-button">
                  <span className="body-small">Main action</span>
                </button>
              </div>
            </div>
            <div className="steps-container3">
              <div className="steps-container4 card">
                <h2 className="heading-2">
                  {props.step1Title ?? (
                    <Fragment>
                      <span className="steps-text30">
                        Explore our Organic Products
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps-text14 body-small">
                  {props.step1Description ?? (
                    <Fragment>
                      <span className="steps-text31">
                        Browse through our wide selection of organic and
                        eco-friendly products sourced from sustainable
                        agriculture.
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps-text15 heading-3">01</label>
              </div>
              <div className="steps-container5 card">
                <h2 className="heading-2">
                  {props.step2Title ?? (
                    <Fragment>
                      <span className="steps-text27">
                        Learn About Green Chemistry
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps-text17 body-small">
                  {props.step2Description ?? (
                    <Fragment>
                      <span className="steps-text32">
                        Discover the importance of green chemistry in creating
                        environmentally friendly products that are safe for you
                        and the planet.
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps-text18 heading-3">02</label>
              </div>
              <div className="steps-container6 card">
                <h2 className="heading-2">
                  {props.step3Title ?? (
                    <Fragment>
                      <span className="steps-text25">Shop Responsibly</span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps-text20 body-small">
                  {props.step3Description ?? (
                    <Fragment>
                      <span className="steps-text26">
                        Make a positive impact with your purchases by choosing
                        products that support sustainable practices and reduce
                        environmental harm.
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps-text21 heading-3">03</label>
              </div>
              <div className="steps-container7 card">
                <h2 className="heading-2">
                  {props.step4Title ?? (
                    <Fragment>
                      <span className="steps-text29">Join Our Community</span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps-text23 body-small">
                  {props.step4Description ?? (
                    <Fragment>
                      <span className="steps-text28">
                        Become part of our community, share your feedback, and
                        stay updated on the latest news and offers by
                        subscribing to our newsletter.
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps-text24 heading-3">04</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps-container1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps-max-width {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps-container2 {
            align-items: start;
          }
          .steps-section-header {
            gap: var(--dl-layout-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .steps-container3 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .steps-container4 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps-text14 {
            text-align: center;
          }
          .steps-text15 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps-container5 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps-text17 {
            text-align: center;
          }
          .steps-text18 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps-container6 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps-text20 {
            text-align: center;
          }
          .steps-text21 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps-container7 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps-text23 {
            text-align: center;
          }
          .steps-text24 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps-text25 {
            display: inline-block;
          }
          .steps-text26 {
            display: inline-block;
          }
          .steps-text27 {
            display: inline-block;
          }
          .steps-text28 {
            display: inline-block;
          }
          .steps-text29 {
            display: inline-block;
          }
          .steps-text30 {
            display: inline-block;
          }
          .steps-text31 {
            display: inline-block;
          }
          .steps-text32 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .steps-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .steps-section-header {
              position: static;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .steps-actions {
              margin: auto;
              justify-content: center;
            }
            .steps-button {
              align-self: flex-start;
            }
            .steps-container4 {
              width: 100%;
            }
            .steps-container5 {
              width: 100%;
            }
            .steps-container6 {
              width: 100%;
            }
            .steps-container7 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .steps-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Steps.defaultProps = {
  step3Title: undefined,
  step3Description: undefined,
  step2Title: undefined,
  step4Description: undefined,
  step4Title: undefined,
  step1Title: undefined,
  step1Description: undefined,
  step2Description: undefined,
}

Steps.propTypes = {
  step3Title: PropTypes.element,
  step3Description: PropTypes.element,
  step2Title: PropTypes.element,
  step4Description: PropTypes.element,
  step4Title: PropTypes.element,
  step1Title: PropTypes.element,
  step1Description: PropTypes.element,
  step2Description: PropTypes.element,
}

export default Steps
