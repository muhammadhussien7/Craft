import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Details = (props) => {
  return (
    <>
      <div
        className={`details-contact1 section-padding ${props.rootClassName} `}
      >
        <div className="details-max-width section-max-width flex-column">
          <form className="details-form1 flex-column">
            <h1 className="details-text10">
              {props.heading ?? (
                <Fragment>
                  <span className="details-text24">Contact Details</span>
                </Fragment>
              )}
            </h1>
            <div className="details-container1">
              <div className="details-container2">
                <div className="details-input10">
                  <label
                    htmlFor="contact-form-5-first-name"
                    className="body-small"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="contact-form-5-first-name"
                    placeholder="First Name"
                    className="details-text-input10 input"
                  />
                </div>
                <div id="contact-form-5-first-name" className="details-input11">
                  <label
                    htmlFor="contact-form-5-last-name"
                    className="body-small"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="contact-form-5-last-name"
                    placeholder="Last Name"
                    className="details-text-input11 input"
                  />
                </div>
              </div>
            </div>
            <div className="details-container3">
              <div className="details-input12">
                <label
                  htmlFor="contact-form-5-email"
                  className="body-small"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contact-form-5-email"
                  required="true"
                  placeholder="Email"
                  className="details-text-input12 input"
                />
              </div>
            </div>
            <div className="details-input13">
              <label htmlFor="contact-form-5-phone" className="body-small">
                Phone Number
              </label>
              <input
                type="tel"
                id="contact-form-5-phone"
                placeholder="Phone Number"
                className="details-text-input13 input"
              />
            </div>
          </form>
          <form className="details-form2 flex-column">
            <h1 className="details-text15">
              {props.heading2 ?? (
                <Fragment>
                  <span className="details-text23">Shipping Details</span>
                </Fragment>
              )}
            </h1>
            <div className="details-container4">
              <div className="details-input14">
                <label
                  htmlFor="contact-form-5-email"
                  className="body-small"
                >
                  House no.
                </label>
                <input
                  type="email"
                  id="contact-form-5-email"
                  required="true"
                  placeholder="Email"
                  className="details-text-input14 input"
                />
              </div>
            </div>
            <div className="details-input15">
              <label htmlFor="contact-form-5-phone" className="body-small">
                Address
              </label>
              <input
                type="tel"
                id="contact-form-5-phone"
                placeholder="Phone Number"
                className="details-text-input15 input"
              />
            </div>
            <div className="details-container5">
              <div className="details-input16">
                <label
                  htmlFor="contact-form-5-first-name"
                  className="body-small"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="contact-form-5-first-name"
                  placeholder="First Name"
                  className="details-text-input16 input"
                />
              </div>
              <div id="contact-form-5-first-name" className="details-input17">
                <label
                  htmlFor="contact-form-5-last-name"
                  className="body-small"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="contact-form-5-last-name"
                  placeholder="Last Name"
                  className="details-text-input17 input"
                />
              </div>
            </div>
            <div className="details-container6">
              <div className="details-container7">
                <div className="details-input18">
                  <label
                    htmlFor="contact-form-5-first-name"
                    className="body-small"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="contact-form-5-first-name"
                    placeholder="First Name"
                    className="details-text-input18 input"
                  />
                </div>
                <div id="contact-form-5-first-name" className="details-input19">
                  <label
                    htmlFor="contact-form-5-last-name"
                    className="body-small"
                  >
                    Landmark
                  </label>
                  <input
                    type="text"
                    id="contact-form-5-last-name"
                    placeholder="Last Name"
                    className="details-text-input19 input"
                  />
                </div>
              </div>
            </div>
            <div className="details-container8"></div>
            <div className="details-checkbox1">
              <input
                type="checkbox"
                id="contact-form-5-check"
                checked="true"
                required="true"
                className="checkbox"
              />
              <label htmlFor="contact-form-5-check" className="body-small">
                MY Shipping and Billing address are the Same
              </label>
            </div>
          </form>
        </div>
      </div>
      <style jsx>
        {`
          .details-contact1 {
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .details-max-width {
            width: 100%;
          }
          .details-form1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            padding: var(--dl-layout-space-twounits);
          }
          .details-text10 {
            align-self: flex-start;
            text-align: left;
          }
          .details-container1 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .details-container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
            .input::placeholder{
                font-size:12px;
                text-align:left;
            }
          .details-input10 {
            gap: var(--dl-layout-space-halfunit);
            width: 45%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .details-text-input10 {
            width: 100%;
            border-radius: var(--dl-layout-radius-imageradius);
          }
          .details-input11 {
            gap: var(--dl-layout-space-halfunit);
            width: 45%;
            display: flex;
            z-index: 45%;
            align-self: stretch;
            min-height: 45%;
            align-items: flex-start;
            flex-direction: column;
          }
          .details-text-input11 {
            border-radius: var(--dl-layout-radius-imageradius);
          }
          .details-container3 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .details-input12 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .details-text-input12 {
            width: 100%;
            border-radius: var(--dl-layout-radius-imageradius);
          }
          .details-input13 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .details-text-input13 {
            width: 100%;
            border-radius: var(--dl-layout-radius-imageradius);
          }
          .details-form2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            padding: var(--dl-layout-space-twounits);
            padding-top: 0px;
          }
          .details-text15 {
            align-self: flex-start;
            text-align: left;
          }
          .details-container4 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .details-input14 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .details-text-input14 {
            width: 100%;
            border-radius: var(--dl-layout-radius-imageradius);
          }
          .details-input15 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .details-text-input15 {
            width: 100%;
            border-radius: var(--dl-layout-radius-imageradius);
          }
          .details-container5 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .details-input16 {
            gap: var(--dl-layout-space-halfunit);
            width: 45%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .details-text-input16 {
            width: 100%;
            border-radius: var(--dl-layout-radius-imageradius);
          }
          .details-input17 {
            gap: var(--dl-layout-space-halfunit);
            width: 45%;
            display: flex;
            z-index: 45%;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .details-text-input17 {
            border-radius: var(--dl-layout-radius-imageradius);
          }
          .details-container6 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .details-container7 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .details-input18 {
            gap: var(--dl-layout-space-halfunit);
            width: 45%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .details-text-input18 {
            width: 100%;
            border-radius: var(--dl-layout-radius-imageradius);
          }
          .details-input19 {
            gap: var(--dl-layout-space-halfunit);
            width: 45%;
            display: flex;
            z-index: 45%;
            max-width: 45%;
            align-self: stretch;
            min-height: 45%;
            align-items: flex-start;
            flex-direction: column;
          }
          .details-text-input19 {
            border-radius: var(--dl-layout-radius-imageradius);
          }
          .details-container8 {
            flex: 0 0 auto;
            width: 50%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .details-checkbox1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .details-text23 {
            display: inline-block;
          }
          .details-text24 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .details-container1 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .details-input11 {
              flex-direction: column;
            }
            .details-container3 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .details-input12 {
              width: 100%;
            }
            .details-input13 {
              width: 100%;
            }
            .details-container4 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .details-input14 {
              width: 100%;
            }
            .details-input15 {
              width: 100%;
            }
            .details-input16 {
              width: 50%;
            }
            .details-container6 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .details-input18 {
              width: 50%;
            }
            .details-input19 {
              width: 50%;
              flex-direction: column;
            }
            .details-container8 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .details-checkbox1 {
              align-self: flex-start;
            }
          }
          @media (max-width: 479px) {
            .details-form1 {
              padding: var(--dl-layout-space-unit);
            }
            .details-container1 {
              align-items: stretch;
              flex-direction: column;
            }
            .details-container2 {
              flex-direction: column;
            }
            .details-input10 {
              width: 100%;
            }
            .details-input11 {
              width: 100%;
            }
            .details-container3 {
              align-items: stretch;
              flex-direction: column;
            }
            .details-input12 {
              width: 100%;
            }
            .details-input13 {
              width: 100%;
            }
            .details-form2 {
              padding: var(--dl-layout-space-unit);
            }
            .details-container4 {
              align-items: stretch;
              flex-direction: column;
            }
            .details-input14 {
              width: 100%;
            }
            .details-input15 {
              width: 100%;
            }
            .details-container5 {
              flex-direction: column;
            }
            .details-input16 {
              width: 100%;
            }
            .details-input17 {
              width: 100%;
            }
            .details-container6 {
              align-items: stretch;
              flex-direction: column;
            }
            .details-container7 {
              flex-direction: column;
            }
            .details-input18 {
              width: 100%;
            }
            .details-input19 {
              width: 100%;
              max-width: 100%;
              min-height: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Details.defaultProps = {
  heading2: undefined,
  heading: undefined,
  rootClassName: '',
}

Details.propTypes = {
  heading2: PropTypes.element,
  heading: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Details
