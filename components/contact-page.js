import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ContactPage = (props) => {
  return (
    <>
      <div className="contact-page-contact20 section-padding">
        <div className="contact-page-max-width section-max-width">
          <div className="contact-page-section-title">
            <span className="body-small">
              {props.content2 ?? (
                <Fragment>
                  <span className="contact-page-text20">
                    Our team is here to help you with any inquiries you may
                    have.
                  </span>
                </Fragment>
              )}
            </span>
            <div className="contact-page-content1">
              <h2 className="heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact-page-text25">Contact Us</span>
                  </Fragment>
                )}
              </h2>
              <p className="contact-page-text12 body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact-page-text27">
                      Have a question or need support? Reach out to us!
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <iframe
            src={props.location1GoogleMap}
            title="Map"
            className="contact-page-iframe img-ratio-16-9"
          ></iframe>
          <div className="contact-page-row">
            <div className="contact-page-content2">
              <svg viewBox="0 0 1024 1024" className="icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact-page-contact-info1">
                <div className="contact-page-content3">
                  <h3 className="contact-page-text13 heading-3">Email</h3>
                  <p className="contact-page-text14 body-large">
                    {props.content3 ?? (
                      <Fragment>
                        <span className="contact-page-text24">
                          For business inquiries, please contact our sales team.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <span className="contact-page-email body-small">
                  {props.email1 ?? (
                    <Fragment>
                      <span className="contact-page-text19">
                        info@example.com
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact-page-content4">
              <svg viewBox="0 0 1024 1024" className="icon-medium">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <div className="contact-page-contact-info2">
                <div className="contact-page-content5">
                  <h3 className="contact-page-text15 heading-3">Phone</h3>
                  <p className="contact-page-text16 body-large">
                    {props.content4 ?? (
                      <Fragment>
                        <span className="contact-page-text21">
                          Follow us on social media for the latest updates and
                          news.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <span className="contact-page-phone body-small">
                  {props.phone1 ?? (
                    <Fragment>
                      <span className="contact-page-text23">+123-456-7890</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact-page-content6">
              <svg viewBox="0 0 1024 1024" className="icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact-page-contact-info3">
                <div className="contact-page-content7">
                  <h3 className="contact-page-text17 heading-3">Office</h3>
                  <p className="contact-page-text18 body-large">
                    {props.content5 ?? (
                      <Fragment>
                        <span className="contact-page-text26">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in ero.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <span className="contact-page-address body-small">
                  {props.address1 ?? (
                    <Fragment>
                      <span className="contact-page-text22">
                        123 Main Street, City, Country
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
          .contact-page-contact20 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact-page-max-width {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact-page-section-title {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact-page-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact-page-text12 {
            text-align: center;
          }
          .contact-page-iframe {
            width: 100%;
            height: auto;
            min-height: 720px;
            object-fit: cover;
          }
          .contact-page-row {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .contact-page-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact-page-contact-info1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact-page-content3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
          }
          .contact-page-text13 {
            align-self: stretch;
            text-align: center;
          }
          .contact-page-text14 {
            text-align: center;
          }
          .contact-page-email {
            text-align: center;
          }
          .contact-page-content4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact-page-contact-info2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact-page-content5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
          }
          .contact-page-text15 {
            align-self: stretch;
            text-align: center;
          }
          .contact-page-text16 {
            text-align: center;
          }
          .contact-page-phone {
            text-align: center;
          }
          .contact-page-content6 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact-page-contact-info3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact-page-content7 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
          }
          .contact-page-text17 {
            align-self: stretch;
            text-align: center;
          }
          .contact-page-text18 {
            text-align: center;
          }
          .contact-page-address {
            text-align: center;
          }
          .contact-page-text19 {
            display: inline-block;
          }
          .contact-page-text20 {
            display: inline-block;
          }
          .contact-page-text21 {
            display: inline-block;
          }
          .contact-page-text22 {
            display: inline-block;
          }
          .contact-page-text23 {
            display: inline-block;
          }
          .contact-page-text24 {
            display: inline-block;
          }
          .contact-page-text25 {
            display: inline-block;
          }
          .contact-page-text26 {
            display: inline-block;
          }
          .contact-page-text27 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .contact-page-row {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

ContactPage.defaultProps = {
  email1: undefined,
  content2: undefined,
  content4: undefined,
  address1: undefined,
  phone1: undefined,
  content3: undefined,
  heading1: undefined,
  content5: undefined,
  content1: undefined,
  location1GoogleMap:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91160.77077631063!2d26.012237766112886!3d44.43779612993267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest!5e0!3m2!1sen!2sro!4v1713441854828!5m2!1sen!2sro',
}

ContactPage.propTypes = {
  email1: PropTypes.element,
  content2: PropTypes.element,
  content4: PropTypes.element,
  address1: PropTypes.element,
  phone1: PropTypes.element,
  content3: PropTypes.element,
  heading1: PropTypes.element,
  content5: PropTypes.element,
  content1: PropTypes.element,
  location1GoogleMap: PropTypes.string,
}

export default ContactPage
