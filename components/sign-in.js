import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const SignIn = (props) => {
  return (
    <>
      <div className="sign-in-container1 section-padding">
        <div className="sign-in-max-width section-max-width">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="sign-in-image"
          />
          <div className="sign-in-form-root">
            <button type="button" className="sign-in-button1 button">
              <span className="sign-in-text10">
                {props.button ?? (
                  <Fragment>
                    <span className="sign-in-text23">
                      Don&apos;t have an account? Sign up
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <h2 className="sign-in-text11 heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="sign-in-text20">Sign In</span>
                </Fragment>
              )}
            </h2>
            <div className="sign-in-form1">
              <form className="sign-in-form2">
                <div className="sign-in-email">
                  <label
                    htmlFor="sign-in-2-email"
                    className="body-large"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="sign-in-2-email"
                    required="true"
                    placeholder="Email address"
                    className="sign-in-textinput1 input body-large"
                  />
                </div>
                <div className="sign-in-password">
                  <div className="sign-in-container2">
                    <label
                      htmlFor="sign-in-2-password"
                      className="body-large"
                    >
                      Password
                    </label>
                    <div className="sign-in-hide-password">
                      <svg viewBox="0 0 1024 1024" className="sign-in-icon1">
                        <path d="M317.143 762.857l44.571-80.571c-66.286-48-105.714-125.143-105.714-206.857 0-45.143 12-89.714 34.857-128.571-89.143 45.714-163.429 117.714-217.714 201.714 59.429 92 143.429 169.143 244 214.286zM539.429 329.143c0-14.857-12.571-27.429-27.429-27.429-95.429 0-173.714 78.286-173.714 173.714 0 14.857 12.571 27.429 27.429 27.429s27.429-12.571 27.429-27.429c0-65.714 53.714-118.857 118.857-118.857 14.857 0 27.429-12.571 27.429-27.429zM746.857 220c0 1.143 0 4-0.571 5.143-120.571 215.429-240 432-360.571 647.429l-28 50.857c-3.429 5.714-9.714 9.143-16 9.143-10.286 0-64.571-33.143-76.571-40-5.714-3.429-9.143-9.143-9.143-16 0-9.143 19.429-40 25.143-49.714-110.857-50.286-204-136-269.714-238.857-7.429-11.429-11.429-25.143-11.429-39.429 0-13.714 4-28 11.429-39.429 113.143-173.714 289.714-289.714 500.571-289.714 34.286 0 69.143 3.429 102.857 9.714l30.857-55.429c3.429-5.714 9.143-9.143 16-9.143 10.286 0 64 33.143 76 40 5.714 3.429 9.143 9.143 9.143 15.429zM768 475.429c0 106.286-65.714 201.143-164.571 238.857l160-286.857c2.857 16 4.571 32 4.571 48zM1024 548.571c0 14.857-4 26.857-11.429 39.429-17.714 29.143-40 57.143-62.286 82.857-112 128.571-266.286 206.857-438.286 206.857l42.286-75.429c166.286-14.286 307.429-115.429 396.571-253.714-42.286-65.714-96.571-123.429-161.143-168l36-64c70.857 47.429 142.286 118.857 186.857 192.571 7.429 12.571 11.429 24.571 11.429 39.429z"></path>
                      </svg>
                      <span className="body-small">Hide</span>
                    </div>
                  </div>
                  <input
                    type="password"
                    id="sign-in-2-password"
                    required="true"
                    placeholder="Password"
                    className="sign-in-textinput2 input body-large"
                  />
                  <button type="button" className="sign-in-button2 button">
                    <span className="sign-in-text15">
                      {props.button1 ?? (
                        <Fragment>
                          <span className="sign-in-text21">
                            Forget Password
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </form>
              <div className="sign-in-container3">
                <button
                  type="submit"
                  className="sign-in-button3 button-filled"
                >
                  <span className="sign-in-text16 body-small">
                    {props.action1 ?? (
                      <Fragment>
                        <span className="sign-in-text22">Email</span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <div className="sign-in-terms-agree">
                  <p className="body-large">
                    By continuing, you agree to the Terms of use and Privacy
                    Policy.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="sign-in-have-an-account-login"></div>
            </div>
            <div className="sign-in-divider1">
              <div className="sign-in-divider2"></div>
              <span className="body-large">OR</span>
              <div className="sign-in-divider3"></div>
            </div>
            <div className="sign-in-container4">
              <button className="sign-in-button4 button-outline">
                <svg
                  viewBox="0 0 860.0137142857142 1024"
                  className="sign-in-icon3"
                >
                  <path d="M438.857 449.143h414.286c4 22.286 6.857 44 6.857 73.143 0 250.286-168 428.571-421.143 428.571-242.857 0-438.857-196-438.857-438.857s196-438.857 438.857-438.857c118.286 0 217.714 43.429 294.286 114.857l-119.429 114.857c-32.571-31.429-89.714-68-174.857-68-149.714 0-272 124-272 277.143s122.286 277.143 272 277.143c173.714 0 238.857-124.571 249.143-189.143h-249.143v-150.857z"></path>
                </svg>
                <span className="body-small">Continue with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .sign-in-container1 {
            width: 100%;
            height:100vh;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            padding:50px;
          }
          .sign-in-max-width {
            width: 100%;
            height: 100hv;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sign-in-image {
            width: 200px;
            object-fit: cover;
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .sign-in-form-root {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: center;
            flex-shrink: 0;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            justify-content: center;
          }
          .sign-in-button1 {
            padding: 0px;
            align-self: flex-end;
            text-align: right;
            border-width: 0px;
            background-color: transparent;
          }
          .sign-in-text10 {
            text-align: right;
          }
          .sign-in-text11 {
            align-self: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .sign-in-form1 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .sign-in-form2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .sign-in-email {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .sign-in-textinput1 {
            width: 100%;
            border-color: var(--dl-color-theme-primary1);
            background-color: transparent;
          }
          .sign-in-password {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sign-in-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .sign-in-hide-password {
            gap: var(--dl-layout-space-halfunit);
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-shrink: 1;
            justify-content: center;
          }
          .sign-in-icon1 {
            fill: var(--dl-color-theme-neutral-dark);
            width: 24px;
            height: 24px;
          }
          .sign-in-textinput2 {
            width: 100%;
            border-color: var(--dl-color-theme-primary1);
            background-color: transparent;
          }
          .sign-in-button2 {
            padding: 0px;
            align-self: flex-end;
            text-align: right;
            border-width: 0px;
            background-color: transparent;
          }
          .sign-in-text15 {
            text-align: right;
          }
          .sign-in-container3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .sign-in-button3 {
            width: 100%;
            align-self: center;
          }
          .sign-in-text16 {
            text-align: center;
          }
          .sign-in-terms-agree {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: flex-start;
          }
          .sign-in-have-an-account-login {
            gap: var(--dl-layout-space-halfunit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .sign-in-divider1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .sign-in-divider2 {
            flex: 1;
            width: var(--dl-layout-size-medium);
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-primary1);
          }
          .sign-in-divider3 {
            flex: 1;
            width: var(--dl-layout-size-medium);
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-primary1);
          }
          .sign-in-container4 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .sign-in-button4 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            border-color: var(--dl-color-theme-primary1);
            border-style: solid;
            border-width: 1px;
            justify-content: center;
          }
          .sign-in-icon3 {
            width: 24px;
            height: 24px;
          }
          .sign-in-text20 {
            display: inline-block;
          }
          .sign-in-text21 {
            display: inline-block;
            font-size: 16px;
          }
          .sign-in-text22 {
            display: inline-block;
          }
          .sign-in-text23 {
            display: inline-block;
            font-size: 16px;
          }
          @media (max-width: 1600px) {
            .sign-in-image {
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .sign-in-button1 {
              font-size: 16px;
              align-self: flex-end;
              border-width: 0px;
              background-color: transparent;
            }
            .sign-in-text11 {
              align-self: flex-start;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .sign-in-button2 {
              font-size: 16px;
              align-self: flex-end;
              border-width: 0px;
              background-color: transparent;
            }
          }
          @media (max-width: 479px) {
            .sign-in-button3 {
              width: 100%;
            }
            .sign-in-button4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

SignIn.defaultProps = {
  heading1: undefined,
  button1: undefined,
  action1: undefined,
  imageSrc: '/external/logo_craft-1-removebg-preview-200h-200h.png',
  imageAlt: 'image',
  button: undefined,
}

SignIn.propTypes = {
  heading1: PropTypes.element,
  button1: PropTypes.element,
  action1: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  button: PropTypes.element,
}

export default SignIn
