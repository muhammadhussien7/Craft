import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const SignUp = (props) => {
  return (
    <>
      <div className="sign-up-container1">
        <div className="sign-up-max-width section-max-width">
          <div className="sign-up-form-root section-padding">
            <div className="sign-up-form1">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="sign-up-image"
              />
              <div className="sign-up-title-root">
                <h2 className="heading-2 sign-up-text10">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="sign-up-text26">Welcome To CRAFT</span>
                    </Fragment>
                  )}
                </h2>
                <div className="sign-up-have-an-account-login1">
                  <p className="body-large">
                    Already have an account? Sign in
                  </p>
                </div>
              </div>
              <form className="sign-up-form2">
                <div className="sign-up-email">
                  <label
                    htmlFor="sign-up-1-email"
                    className="body-large"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="sign-up-1-email"
                    required="true"
                    placeholder="Email address"
                    className="sign-up-textinput1 input body-large"
                  />
                </div>
                <div className="sign-up-username">
                  <label
                    htmlFor="sign-up-1-username"
                    className="body-large"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="sign-up-1-username"
                    required="true"
                    placeholder="Username"
                    className="sign-up-textinput2 input body-large"
                  />
                </div>
                <div className="sign-up-password">
                  <div className="sign-up-textfield">
                    <div className="sign-up-container2">
                      <label
                        htmlFor="sign-up-1-password"
                        className="body-large"
                      >
                        Password
                      </label>
                      <div className="sign-up-hide-password">
                        <svg viewBox="0 0 1024 1024" className="sign-up-icon1">
                          <path d="M317.143 762.857l44.571-80.571c-66.286-48-105.714-125.143-105.714-206.857 0-45.143 12-89.714 34.857-128.571-89.143 45.714-163.429 117.714-217.714 201.714 59.429 92 143.429 169.143 244 214.286zM539.429 329.143c0-14.857-12.571-27.429-27.429-27.429-95.429 0-173.714 78.286-173.714 173.714 0 14.857 12.571 27.429 27.429 27.429s27.429-12.571 27.429-27.429c0-65.714 53.714-118.857 118.857-118.857 14.857 0 27.429-12.571 27.429-27.429zM746.857 220c0 1.143 0 4-0.571 5.143-120.571 215.429-240 432-360.571 647.429l-28 50.857c-3.429 5.714-9.714 9.143-16 9.143-10.286 0-64.571-33.143-76.571-40-5.714-3.429-9.143-9.143-9.143-16 0-9.143 19.429-40 25.143-49.714-110.857-50.286-204-136-269.714-238.857-7.429-11.429-11.429-25.143-11.429-39.429 0-13.714 4-28 11.429-39.429 113.143-173.714 289.714-289.714 500.571-289.714 34.286 0 69.143 3.429 102.857 9.714l30.857-55.429c3.429-5.714 9.143-9.143 16-9.143 10.286 0 64 33.143 76 40 5.714 3.429 9.143 9.143 9.143 15.429zM768 475.429c0 106.286-65.714 201.143-164.571 238.857l160-286.857c2.857 16 4.571 32 4.571 48zM1024 548.571c0 14.857-4 26.857-11.429 39.429-17.714 29.143-40 57.143-62.286 82.857-112 128.571-266.286 206.857-438.286 206.857l42.286-75.429c166.286-14.286 307.429-115.429 396.571-253.714-42.286-65.714-96.571-123.429-161.143-168l36-64c70.857 47.429 142.286 118.857 186.857 192.571 7.429 12.571 11.429 24.571 11.429 39.429z"></path>
                        </svg>
                        <span className="body-small">Hide</span>
                      </div>
                    </div>
                    <input
                      type="password"
                      id="sign-up-1-password"
                      required="true"
                      placeholder="Password"
                      className="sign-up-textinput3 input body-large"
                    />
                  </div>
                  <div className="sign-up-pass-requirements">
                    <div className="sign-up-pass-conditions1">
                      <div className="sign-up-bulletpoint1">
                        <div className="sign-up-container3"></div>
                        <span className="sign-up-text16 body-small">
                          Use 8 or more characters
                        </span>
                      </div>
                      <div className="sign-up-bulletpoint2">
                        <div className="sign-up-container4"></div>
                        <span className="sign-up-text17 body-small">
                          One special character
                        </span>
                      </div>
                    </div>
                    <div className="sign-up-pass-conditions2">
                      <div className="sign-up-bulletpoint3">
                        <div className="sign-up-container5"></div>
                        <span className="sign-up-text18 body-small">
                          One Uppercase character
                        </span>
                      </div>
                      <div className="sign-up-bulletpoint4">
                        <div className="sign-up-container6"></div>
                        <span className="sign-up-text19 body-small">
                          One number
                        </span>
                      </div>
                    </div>
                    <div className="sign-up-pass-conditions3">
                      <div className="sign-up-bulletpoint5">
                        <div className="sign-up-container7"></div>
                        <span className="sign-up-text20 body-small">
                          One lowercase character
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="sign-up-container8">
                <input
                  type="checkbox"
                  id="sign-up-1-newsletter"
                  checked="true"
                  className="checkbox"
                />
                <label
                  htmlFor="sign-up-1-newsletter"
                  className="body-large"
                >
                  {props.content1 ?? (
                    <Fragment>
                      <span className="sign-up-text27">
                        Subscribe to our newsletter to receive updates on new
                        products, promotions, and company news.
                      </span>
                    </Fragment>
                  )}
                </label>
              </div>
              <div className="sign-up-terms-agree">
                <p className="body-large">
                  By creating an account, you agree to the Terms of use and
                  Privacy Policy.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <button
                type="submit"
                className="button-filled sign-up-button"
              >
                <span className="sign-up-text23 body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="sign-up-text25">Sign Up Now</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <div className="sign-up-have-an-account-login2">
                <p className="body-large">
                  Already have an account? Sign in
                </p>
              </div>
            </div>
          </div>
          <div className="sign-up-container9">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="sign-up-sign-up-image img-ratio-4-6"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .sign-up-container1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .sign-up-max-width {
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .sign-up-form-root {
            gap: var(--dl-layout-space-unit);
            width: 60%;
            height: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .sign-up-form1 {
            gap: var(--dl-layout-space-twounits);
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .sign-up-image {
            width: 200px;
            align-self: flex-start;
            object-fit: cover;
            margin-left: -32px;
          }
          .sign-up-title-root {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sign-up-have-an-account-login1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
          }
          .sign-up-form2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .sign-up-email {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .sign-up-textinput1 {
            width: 100%;
            border-color: var(--dl-color-theme-primary1);
            background-color: transparent;
          }
          .sign-up-username {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .sign-up-textinput2 {
            width: 100%;
            border-color: var(--dl-color-theme-primary1);
            background-color: transparent;
          }
          .sign-up-password {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sign-up-textfield {
            gap: 4px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .sign-up-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .sign-up-hide-password {
            gap: var(--dl-layout-space-halfunit);
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-shrink: 1;
            justify-content: center;
          }
          .sign-up-icon1 {
            fill: var(--dl-color-theme-neutral-dark);
            width: 24px;
            height: 24px;
          }
          .sign-up-textinput3 {
            width: 100%;
            border-color: var(--dl-color-theme-primary1);
            background-color: transparent;
          }
          .sign-up-pass-requirements {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .sign-up-pass-conditions1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sign-up-bulletpoint1 {
            gap: 8px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 8px 8px 8px 0;
            padding-right: 8px 8px 8px 0;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: center;
          }
          .sign-up-container3 {
            flex: 0 0 auto;
            width: 6px;
            height: 6px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .sign-up-text16 {
            font-size: 14px;
          }
          .sign-up-bulletpoint2 {
            gap: 8px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 8px 8px 8px 0;
            padding-right: 8px 8px 8px 0;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: center;
          }
          .sign-up-container4 {
            flex: 0 0 auto;
            width: 6px;
            height: 6px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .sign-up-text17 {
            font-size: 14px;
          }
          .sign-up-pass-conditions2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sign-up-bulletpoint3 {
            gap: 8px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 8px 8px 8px 0;
            padding-right: 8px 8px 8px 0;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: center;
          }
          .sign-up-container5 {
            flex: 0 0 auto;
            width: 6px;
            height: 6px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .sign-up-text18 {
            font-size: 14px;
          }
          .sign-up-bulletpoint4 {
            gap: 8px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 8px 8px 8px 0;
            padding-right: 8px 8px 8px 0;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: center;
          }
          .sign-up-container6 {
            flex: 0 0 auto;
            width: 6px;
            height: 6px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .sign-up-text19 {
            font-size: 14px;
          }
          .sign-up-pass-conditions3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sign-up-bulletpoint5 {
            gap: 8px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 8px 8px 8px 0;
            padding-right: 8px 8px 8px 0;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: center;
          }
          .sign-up-container7 {
            flex: 0 0 auto;
            width: 6px;
            height: 6px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .sign-up-text20 {
            font-size: 14px;
          }
          .sign-up-container8 {
            gap: var(--dl-layout-space-halfunit);
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .sign-up-terms-agree {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: flex-start;
          }
          .sign-up-text23 {
            text-align: center;
          }
          .sign-up-have-an-account-login2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
          }
          .sign-up-container9 {
            width: 40%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .sign-up-sign-up-image {
            width: 100%;
            height: 100%;
          }
          .sign-up-text25 {
            display: inline-block;
          }
          .sign-up-text26 {
            display: inline-block;
          }
          .sign-up-text27 {
            display: inline-block;
          }
          @media (max-width: 1200px) {
            .sign-up-sign-up-image {
              width: 95%;
              margin-right: 0px;
            }
          }
          @media (max-width: 991px) {
            .sign-up-form-root {
              width: 100%;
              padding: var(--dl-layout-space-fourunits);
            }
            .sign-up-container9 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .sign-up-form-root {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .sign-up-image {
              align-self: center;
            }
            .sign-up-title-root {
              align-self: center;
            }
            .sign-up-text10 {
              align-self: flex-start;
            }
            .sign-up-pass-requirements {
              flex-direction: column;
            }
            .sign-up-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

SignUp.defaultProps = {
  imageSrc: '/external/logo_craft-1-removebg-preview-200h-200h.png',
  action1: undefined,
  image1Alt: 'Newsletter Signup',
  heading1: undefined,
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1550758103-d83e024d38ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc1MDA0OHw&ixlib=rb-4.0.3&q=80&w=600',
  imageAlt: 'image',
}

SignUp.propTypes = {
  imageSrc: PropTypes.string,
  action1: PropTypes.element,
  image1Alt: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  image1Src: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default SignUp
