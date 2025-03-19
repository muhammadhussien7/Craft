import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <footer className="footer-footer1 thq-section-padding">
        <div className="footer-max-width thq-section-max-width">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="footer-image"
          />
          <div className="footer-content">
            <div className="footer-newsletter">
              <span className="thq-body-small">
                Subscribe to our newsletter for the latest updates on new
                features and product releases.
              </span>
              <div className="footer-actions">
                <div className="footer-form">
                  <div className="footer-container">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="footer-text-input thq-input"
                    />
                  </div>
                  <button className="thq-button-outline footer-button">
                    <span className="thq-body-small">
                      {props.action1 ?? (
                        <Fragment>
                          <span className="footer-text28">Subscribe</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <span className="footer-content2 thq-body-small">
                  {props.content2 ?? (
                    <Fragment>
                      <span className="footer-text24">
                        By subscribing you agree to with our Privacy Policy and
                        provide consent to receive updates from our company.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-column1">
                <strong className="thq-body-large footer-column1-title">
                  {props.column1Title ?? (
                    <Fragment>
                      <span className="footer-text11">Column One</span>
                    </Fragment>
                  )}
                </strong>
                <div className="footer-footer-links1">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="thq-body-small footer-link1"
                  >
                    {props.link1 ?? (
                      <Fragment>
                        <span className="footer-text27">Link 1</span>
                      </Fragment>
                    )}
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="thq-body-small footer-link2"
                  >
                    {props.link2 ?? (
                      <Fragment>
                        <span className="footer-text22">Link 2</span>
                      </Fragment>
                    )}
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="thq-body-small footer-link3"
                  >
                    {props.link3 ?? (
                      <Fragment>
                        <span className="footer-text26">Link 3</span>
                      </Fragment>
                    )}
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="thq-body-small footer-link4"
                  >
                    {props.link4 ?? (
                      <Fragment>
                        <span className="footer-text12">Link 4</span>
                      </Fragment>
                    )}
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="thq-body-small footer-link5"
                  >
                    {props.link5 ?? (
                      <Fragment>
                        <span className="footer-text25">Link 5</span>
                      </Fragment>
                    )}
                  </a>
                </div>
              </div>
              <div className="footer-column2">
                <strong className="thq-body-large footer-column2-title">
                  {props.column2Title ?? (
                    <Fragment>
                      <span className="footer-text15">Column Two</span>
                    </Fragment>
                  )}
                </strong>
                <div className="footer-footer-links2">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="thq-body-small"
                  >
                    {props.link6 ?? (
                      <Fragment>
                        <span className="footer-text18">Link 6</span>
                      </Fragment>
                    )}
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="thq-body-small"
                  >
                    {props.link7 ?? (
                      <Fragment>
                        <span className="footer-text10">Link 7</span>
                      </Fragment>
                    )}
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="thq-body-small"
                  >
                    {props.link8 ?? (
                      <Fragment>
                        <span className="footer-text16">Link 8</span>
                      </Fragment>
                    )}
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="thq-body-small"
                  >
                    {props.link9 ?? (
                      <Fragment>
                        <span className="footer-text20">Link 9</span>
                      </Fragment>
                    )}
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="thq-body-small"
                  >
                    {props.link10 ?? (
                      <Fragment>
                        <span className="footer-text21">Link 10</span>
                      </Fragment>
                    )}
                  </a>
                </div>
              </div>
              <div className="footer-column3">
                <strong className="thq-body-large footer-social-link1-title">
                  {props.socialLinkTitleCategory ?? (
                    <Fragment>
                      <span className="footer-text23">Follow Us</span>
                    </Fragment>
                  )}
                </strong>
                <div className="footer-social-links">
                  <div className="footer-link14">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                    </svg>
                    <span className="thq-body-small">Facebook</span>
                  </div>
                  <div className="footer-link15">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <span className="thq-body-small">Instagram</span>
                  </div>
                  <div className="footer-link16">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <span className="thq-body-small">X</span>
                  </div>
                  <div className="footer-link17">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <span className="thq-body-small">LinkedIn</span>
                  </div>
                  <div className="footer-link18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                    <span className="thq-body-small">Youtube</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="footer-row">
              <span className="thq-body-small">
                {props.content3 ?? (
                  <Fragment>
                    <span className="footer-text19">
                      © 2025 Craft International Group
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="footer-footer-links3">
                <span className="thq-body-small">
                  {props.privacyLink ?? (
                    <Fragment>
                      <span className="footer-text13">Privacy Policy</span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.termsLink ?? (
                    <Fragment>
                      <span className="footer-text17">Terms of Service</span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.cookiesLink ?? (
                    <Fragment>
                      <span className="footer-text14">Cookies Settings</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-footer1 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .footer-max-width {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-image {
            width: 200px;
            align-self: stretch;
            object-fit: cover;
            margin-left: -35px;
            margin-bottom: 16px;
          }
          .footer-content {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: var(--dl-layout-radius-radius4);
          }
          .footer-newsletter {
            gap: 24px;
            width: 500px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer-actions {
            gap: 16px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-form {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-shrink: 0;
          }
          .footer-container {
            width: 365px;
            display: flex;
            align-items: flex-start;
          }
          .footer-text-input {
            gap: 8px;
            width: 100%;
            height: 32px;
            display: flex;
            font-size: 16px;
            box-sizing: content-box;
            text-align: left;
            align-items: center;
            font-family: Roboto;
            font-weight: 400;
            background-color: transparent;
          }
          .footer-content2 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            height: auto;
            font-size: 12px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: 'Roboto';
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .footer-links {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .footer-column1 {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            max-width: 300px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer-footer-links1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-column2 {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            max-width: 300px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer-footer-links2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-column3 {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            max-width: 300px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer-social-links {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-link14 {
            gap: 12px;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .footer-link15 {
            gap: 12px;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .footer-link16 {
            gap: 12px;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .footer-link17 {
            gap: 12px;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .footer-link18 {
            gap: 12px;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .footer-credits {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-layout-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            justify-content: space-between;
          }
          .footer-footer-links3 {
            gap: 24px;
            display: flex;
            align-items: flex-start;
          }
          .footer-text10 {
            display: inline-block;
          }
          .footer-text11 {
            display: inline-block;
          }
          .footer-text12 {
            display: inline-block;
          }
          .footer-text13 {
            display: inline-block;
          }
          .footer-text14 {
            display: inline-block;
          }
          .footer-text15 {
            display: inline-block;
          }
          .footer-text16 {
            display: inline-block;
          }
          .footer-text17 {
            display: inline-block;
          }
          .footer-text18 {
            display: inline-block;
          }
          .footer-text19 {
            display: inline-block;
          }
          .footer-text20 {
            display: inline-block;
          }
          .footer-text21 {
            display: inline-block;
          }
          .footer-text22 {
            display: inline-block;
          }
          .footer-text23 {
            display: inline-block;
          }
          .footer-text24 {
            display: inline-block;
          }
          .footer-text25 {
            display: inline-block;
          }
          .footer-text26 {
            display: inline-block;
          }
          .footer-text27 {
            display: inline-block;
          }
          .footer-text28 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .footer-max-width {
              width: 1307px;
            }
            .footer-image {
              align-self: flex-start;
              margin-left: var(--dl-layout-space-halfunit);
            }
            .footer-newsletter {
              width: 521px;
              height: 241px;
              align-items: stretch;
              margin-left: var(--dl-layout-space-threeunits);
              justify-content: center;
            }
            .footer-links {
              width: auto;
            }
            .footer-column1 {
              width: 0px;
              align-items: flex-start;
              padding-left: 12px;
            }
            .footer-link1 {
              padding-left: 0px;
            }
            .footer-link2 {
              padding-left: 0px;
            }
            .footer-link3 {
              padding-left: 0px;
            }
            .footer-link4 {
              padding-left: 0px;
            }
            .footer-link5 {
              padding-left: 0px;
            }
            .footer-column2 {
              width: 0px;
              padding-right: 0px;
            }
            .footer-footer-links2 {
              width: 103px;
              height: 166px;
            }
            .footer-column3 {
              width: 50%;
              height: 292px;
              align-items: flex-start;
              padding-left: 0px;
            }
            .footer-social-link1-title {
              align-self: center;
              padding-left: 0px;
              padding-right: 0px;
            }
            .footer-social-links {
              width: 263px;
            }
            .footer-link14 {
              align-self: flex-start;
              padding-left: 112px;
              padding-right: var(--dl-layout-space-halfunit);
            }
            .footer-link15 {
              padding-left: 112px;
              padding-right: 0px;
            }
            .footer-link16 {
              padding-left: 112px;
              padding-right: 6px;
            }
            .footer-link17 {
              padding-left: 112px;
              padding-right: 0px;
            }
            .footer-link18 {
              padding-left: 112px;
              padding-right: var(--dl-layout-space-halfunit);
            }
          }
          @media (max-width: 991px) {
            .footer-newsletter {
              width: 300px;
            }
            .footer-form {
              width: 100%;
              flex-direction: column;
            }
            .footer-container {
              width: 100%;
            }
            .footer-text-input {
              width: 100%;
              padding: var(--dl-layout-space-halfunit);
            }
            .footer-button {
              width: 100%;
              padding-top: var(--dl-layout-space-halfunit);
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-halfunit);
            }
          }
          @media (max-width: 767px) {
            .footer-image {
              align-self: center;
            }
            .footer-content {
              flex-direction: column;
            }
            .footer-newsletter {
              width: 100%;
            }
            .footer-form {
              width: 100%;
              flex-direction: row;
              justify-content: flex-start;
            }
            .footer-container {
              width: 100%;
            }
            .footer-button {
              width: 208px;
            }
            .footer-links {
              width: 100%;
              align-items: flex-start;
              justify-content: center;
            }
            .footer-column1 {
              align-items: center;
            }
            .footer-column1-title {
              text-align: center;
            }
            .footer-footer-links1 {
              align-self: center;
            }
            .footer-column2 {
              align-items: center;
            }
            .footer-column2-title {
              text-align: center;
            }
            .footer-footer-links2 {
              align-self: center;
            }
            .footer-column3 {
              align-items: center;
            }
            .footer-social-link1-title {
              text-align: center;
            }
            .footer-social-links {
              align-self: center;
            }
            .footer-row {
              gap: var(--dl-layout-space-unit);
              flex-direction: column;
              justify-content: flex-start;
            }
          }
          @media (max-width: 479px) {
            .footer-image {
              width: 267px;
              height: 86px;
              margin: 0px;
              align-self: center;
            }
            .footer-actions {
              width: 100%;
            }
            .footer-form {
              width: 100%;
              flex-direction: column;
            }
            .footer-container {
              width: 100%;
            }
            .footer-button {
              width: 100%;
            }
            .footer-links {
              flex-direction: column;
            }
            .footer-column1 {
              width: 100%;
              max-width: 100%;
              align-items: center;
              justify-content: center;
            }
            .footer-footer-links1 {
              align-items: center;
              justify-content: center;
            }
            .footer-column2 {
              width: 100%;
              max-width: 100%;
              align-items: center;
              justify-content: center;
            }
            .footer-footer-links2 {
              align-items: center;
              justify-content: center;
            }
            .footer-column3 {
              width: 100%;
              max-width: 100%;
              align-items: center;
              justify-content: center;
            }
            .footer-social-links {
              align-items: center;
              justify-content: center;
            }
            .footer-credits {
              gap: var(--dl-layout-space-unit);
            }
            .footer-row {
              align-items: center;
              justify-content: center;
            }
            .footer-footer-links3 {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  link7: undefined,
  column1Title: undefined,
  link4: undefined,
  privacyLink: undefined,
  cookiesLink: undefined,
  column2Title: undefined,
  imageSrc1: '/logo_craft-1-removebg-preview-200h.png',
  link8: undefined,
  termsLink: undefined,
  link6: undefined,
  content3: undefined,
  link9: undefined,
  link10: undefined,
  link2: undefined,
  imageAlt1: 'image',
  socialLinkTitleCategory: undefined,
  content2: undefined,
  link5: undefined,
  link3: undefined,
  link1: undefined,
  action1: undefined,
}

Footer.propTypes = {
  link7: PropTypes.element,
  column1Title: PropTypes.element,
  link4: PropTypes.element,
  privacyLink: PropTypes.element,
  cookiesLink: PropTypes.element,
  column2Title: PropTypes.element,
  imageSrc1: PropTypes.string,
  link8: PropTypes.element,
  termsLink: PropTypes.element,
  link6: PropTypes.element,
  content3: PropTypes.element,
  link9: PropTypes.element,
  link10: PropTypes.element,
  link2: PropTypes.element,
  imageAlt1: PropTypes.string,
  socialLinkTitleCategory: PropTypes.element,
  content2: PropTypes.element,
  link5: PropTypes.element,
  link3: PropTypes.element,
  link1: PropTypes.element,
  action1: PropTypes.element,
}

export default Footer
