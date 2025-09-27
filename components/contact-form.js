import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ContactForm = (props) => {
  return (
    <>
      <div className="contact-form-contact11 section-padding">
        <div className="contact-form-max-width section-max-width">
          <div className="contact-form-section-title card">
            <div className="contact-form-content1">
              <h2 className="heading-2">
                {props.contactTitle ?? (
                  <Fragment>
                    <span className="contact-form-text22">
                      It’s an honor to have you here.
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact-form-text20">
                      Have a question or feedback? Drop us a message!
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="contact-form-content2">
            <form className="contact-form-form card">
              <div className="contact-form-input1">
                <label
                  htmlFor="contact-form-10-name"
                  className="body-small contact-form-text12"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contact-form-10-name"
                  placeholder="Full Name"
                  className="input"
                />
              </div>
              <div className="contact-form-input2">
                <label
                  htmlFor="contact-form-10-email"
                  className="body-small contact-form-text13"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="contact-form-10-email"
                  required="true"
                  placeholder="Email"
                  className="contact-form-text-input2 input"
                />
              </div>
              <div className="contact-form-container">
                <div className="contact-form-input3">
                  <label
                    htmlFor="contact-form-10-options"
                    className="body-small contact-form-text14"
                  >
                    Choose one topic
                  </label>
                  <select
                    id="contact-form-10-options"
                    placeholder="Select one"
                    className="select contact-form-select"
                  >
                    <option value="Option 1">Feature request</option>
                    <option value="Option 1">Customer Service</option>
                  </select>
                </div>
              </div>
              <div className="contact-form-input4">
                <label
                  htmlFor="contact-form-10-message"
                  className="body-small contact-form-text15"
                >
                  Message
                </label>
                <textarea
                  id="contact-form-10-message"
                  rows="3"
                  placeholder="Enter your message"
                  className="input"
                ></textarea>
              </div>
              <div className="contact-form-checkbox1">
                <input
                  type="checkbox"
                  id="contact-form-10-check"
                  checked="true"
                  required="true"
                  className="checkbox"
                />
                <label
                  htmlFor="contact-form-10-check"
                  className="body-small"
                >
                  I accept the Terms
                </label>
              </div>
              <button
                type="submit"
                className="button-filled contact-form-button"
              >
                <span className="body-small">
                  {props.submitAction ?? (
                    <Fragment>
                      <span className="contact-form-text23">Submit</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </form>
            <div className="contact-form-content3 card">
              <div className="contact-form-row1 flex-row">
                <div className="contact-form-content4">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="contact-form-icon1 icon-small"
                  >
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <div className="contact-form-contact-info1">
                    <h3 className="heading-3 contact-form-text17">Email</h3>
                    <span className="body-small contact-form-email">
                      {props.email ?? (
                        <Fragment>
                          <span className="contact-form-text21">
                            info@greenharvest.com
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <div className="contact-form-content5">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="contact-form-icon3 icon-small"
                  >
                    <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                  </svg>
                  <div className="contact-form-contact-info2">
                    <h3 className="heading-3 contact-form-text18">Phone</h3>
                    <span className="body-small contact-form-phone">
                      {props.phone ?? (
                        <Fragment>
                          <span className="contact-form-text25">
                            +1-800-ORGANIC
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <div className="contact-form-content6">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="contact-form-icon5 icon-small"
                  >
                    <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                  </svg>
                  <div className="contact-form-contact-info3">
                    <h3 className="heading-3 contact-form-text19">
                      Office
                    </h3>
                    <span className="body-small contact-form-address">
                      {props.address ?? (
                        <Fragment>
                          <span className="contact-form-text24">
                            123 Green Way, Eco City, Earth
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-row contact-form-row2">
                <iframe
                  src={props.location1GoogleMap}
                  title="Map"
                  className="contact-form-iframe img-ratio-16-9"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact-form-contact11 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-direction: column;
          }
          .contact-form-max-width {
            display: flex;
            flex-direction: column;
          }
          .contact-form-section-title {
            gap: var(--dl-layout-space-unit);
            display: flex;
            flex-direction: column;
          }
          .contact-form-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form-content2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .contact-form-form {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact-form-input1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form-input2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form-text-input2 {
            background-color: var(--dl-color-theme-neutral-light);
          }
          .contact-form-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form-input3 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form-input4 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form-checkbox1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .contact-form-content3 {
            align-items: stretch;
          }
          .contact-form-row1 {
            align-self: flex-start;
            align-items: flex-start;
          }
          .contact-form-icon1 {
            width: 32px;
            height: 32px;
          }
          .contact-form-contact-info1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form-icon3 {
            width: 32px;
            height: 32px;
          }
          .contact-form-contact-info2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form-icon5 {
            width: 32px;
            height: 32px;
          }
          .contact-form-contact-info3 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form-iframe {
            width: 100%;
            height: auto;
            min-height: 450px;
            object-fit: cover;
          }
          .contact-form-text20 {
            display: inline-block;
          }
          .contact-form-text21 {
            display: inline-block;
          }
          .contact-form-text22 {
            display: inline-block;
          }
          .contact-form-text23 {
            display: inline-block;
          }
          .contact-form-text24 {
            display: inline-block;
          }
          .contact-form-text25 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .contact-form-row1 {
              justify-content: center;
            }
          }
          @media (max-width: 1200px) {
            .contact-form-content2 {
              flex-direction: row;
            }
          }
          @media (max-width: 991px) {
            .contact-form-form {
              width: 50%;
            }
            .contact-form-container {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .contact-form-input3 {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
              flex-direction: column;
            }
            .contact-form-content3 {
              width: 50%;
            }
            .contact-form-row1 {
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .contact-form-content4 {
              width: 50%;
            }
            .contact-form-contact-info1 {
              width: 100%;
            }
            .contact-form-content5 {
              width: 50%;
            }
            .contact-form-row2 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .contact-form-content2 {
              align-content: center;
              flex-direction: column;
            }
            .contact-form-form {
              width: 100%;
            }
            .contact-form-text12 {
              align-self: center;
            }
            .contact-form-text13 {
              align-self: center;
            }
            .contact-form-input3 {
              width: 100%;
            }
            .contact-form-text14 {
              align-self: center;
            }
            .contact-form-select {
              align-self: center;
            }
            .contact-form-text15 {
              align-self: center;
            }
            .contact-form-checkbox1 {
              align-self: center;
            }
            .contact-form-button {
              align-self: center;
            }
            .contact-form-content3 {
              width: 100%;
              text-align: center;
            }
            .contact-form-row1 {
              width: 100%;
            }
            .contact-form-content4 {
              width: 100%;
              flex-direction: column;
            }
            .contact-form-contact-info1 {
              text-align: center;
            }
            .contact-form-text17 {
              margin: auto;
            }
            .contact-form-email {
              margin: auto;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
            }
            .contact-form-content5 {
              width: 100%;
            }
            .contact-form-text18 {
              align-self: center;
            }
            .contact-form-phone {
              align-self: center;
            }
            .contact-form-content6 {
              width: 100%;
            }
            .contact-form-text19 {
              align-self: center;
            }
            .contact-form-address {
              align-self: center;
            }
            .contact-form-row2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .contact-form-content2 {
              flex-direction: column;
            }
            .contact-form-form {
              width: 100%;
            }
            .contact-form-text12 {
              align-self: center;
            }
            .contact-form-text13 {
              align-self: center;
            }
            .contact-form-input3 {
              width: 100%;
            }
            .contact-form-text14 {
              align-self: center;
            }
            .contact-form-select {
              align-self: center;
            }
            .contact-form-text15 {
              align-self: center;
            }
            .contact-form-checkbox1 {
              align-self: center;
            }
            .contact-form-button {
              align-self: center;
            }
            .contact-form-content3 {
              width: 100%;
            }
            .contact-form-row1 {
              flex-direction: column;
            }
            .contact-form-content4 {
              width: 100%;
            }
            .contact-form-content5 {
              width: 100%;
            }
            .contact-form-row2 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

ContactForm.defaultProps = {
  location1GoogleMap:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91160.77077631063!2d26.012237766112886!3d44.43779612993267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest!5e0!3m2!1sen!2sro!4v1713441854828!5m2!1sen!2sro',
  content1: undefined,
  email: undefined,
  contactTitle: undefined,
  submitAction: undefined,
  address: undefined,
  phone: undefined,
}

ContactForm.propTypes = {
  location1GoogleMap: PropTypes.string,
  content1: PropTypes.element,
  email: PropTypes.element,
  contactTitle: PropTypes.element,
  submitAction: PropTypes.element,
  address: PropTypes.element,
  phone: PropTypes.element,
}

export default ContactForm






