import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const DataPage = (props) => {
  return (
    <>
      <div className="data-page-container">
        <Head>
          <title>data-page - Authentic Lawful Parrot</title>
          <meta
            property="og:title"
            content="data-page - Authentic Lawful Parrot"
          />
        </Head>
        <div className="data-page-modal1">
          <div className="data-page-modal2">
            <div className="data-page-frame-modalheader">
              <img
                alt="image"
                src="/external/logo_craft-1-removebg-preview-200h-200h%20(2)-200h-200h.png"
                className="data-page-image"
              />
              <button className="data-page-buttonclose-x">
                <img
                  alt="xcloseI103"
                  src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/aff95e3c-85c4-40a3-b599-cf1d77c364a5/d108618c-95b4-495f-9897-cf25eada5fd8?org_if_sml=1279&amp;force_format=original"
                  className="data-page-xclose"
                />
              </button>
            </div>
            <div className="data-page-content1">
              <div className="data-page-form">
                <div className="data-page-inputfield1">
                  <div className="data-page-inputwithlabel1">
                    <span className="data-page-text10 TextsmMedium">Name</span>
                    <div className="data-page-input1">
                      <div className="data-page-content2">
                        <span className="data-page-text11 TextmdRegular">
                          enter your name
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="data-page-row1">
                  <div className="data-page-inputdropdown1">
                    <div className="data-page-inputwithlabel2">
                      <span className="data-page-text12 TextsmMedium">
                        Company
                      </span>
                      <div className="data-page-input2">
                        <div className="data-page-content3">
                          <span className="data-page-text13 TextmdRegular">
                            enter your company name
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="data-page-inputfield2">
                    <div className="data-page-inputwithlabel3">
                      <span className="data-page-text14 TextsmMedium">
                        Phone No.
                      </span>
                      <div className="data-page-input3">
                        <div className="data-page-addon">
                          <span className="data-page-text15 TextmdRegular">
                            +20
                          </span>
                        </div>
                        <input
                          type="text"
                          placeholder="123456789"
                          className="data-page-textinput"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="data-page-row2">
                  <div className="data-page-inputdropdown2">
                    <div className="data-page-inputwithlabel4">
                      <span className="data-page-text16 TextsmMedium">
                        Location
                      </span>
                      <div className="data-page-input4">
                        <div className="data-page-content4">
                          <span className="data-page-text17 TextmdRegular">
                            {' '}
                            enteryour city
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="data-page-inputdropdown3">
                    <div className="data-page-inputwithlabel5">
                      <span className="data-page-text18 TextsmMedium">
                        Your job
                      </span>
                      <div className="data-page-input5">
                        <div className="data-page-content5">
                          <span className="data-page-text19 TextmdMedium">
                            Farmer
                          </span>
                        </div>
                        <img
                          alt="chevrondownI103"
                          src="/external/chevrondowni103-4opl.svg"
                          className="data-page-chevrondown"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="data-page-frame-modalactions">
              <div className="data-page-content6">
                <button className="data-page-button1">
                  <span className="data-page-text20 TextmdSemibold">
                    Cancel
                  </span>
                </button>
                <button className="data-page-button2">
                  <span className="data-page-text21 TextmdSemibold">
                    Confirm
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .data-page-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .data-page-modal1 {
            width: auto;
            height: auto;
            margin: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(10, 13, 18, 0);
          }
          .data-page-modal2 {
            width: 640px;
            display: flex;
            overflow: hidden;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
            align-items: center;
            flex-shrink: 0;
            border-radius: 16px;
            flex-direction: column;
            background-color: rgba(251, 249, 239, 1);
          }
          .data-page-frame-modalheader {
            display: flex;
            padding: 10px;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            background-color: rgba(251, 249, 239, 1);
          }
          .data-page-image {
            width: 200px;
            margin: auto;
            object-fit: cover;
          }
          .data-page-buttonclose-x {
            display: flex;
            padding: 10px;
            z-index: 1;
            overflow: hidden;
            align-items: center;
            border-radius: 8px;
            justify-content: center;
          }
          .data-page-xclose {
            width: 24px;
            height: 24px;
          }
          .data-page-content1 {
            gap: 20px;
            display: flex;
            padding: 0 24px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .data-page-form {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .data-page-inputfield1 {
            gap: 6px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .data-page-inputwithlabel1 {
            gap: 6px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .data-page-text10 {
            color: var(--dl-color-gray-700);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .data-page-input1 {
            gap: 8px;
            display: flex;
            padding: 10px 14px;
            overflow: hidden;
            align-self: stretch;
            box-shadow: 0px 1px 2px 0px rgba(10, 13, 18, 0.05000000074505806);
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(213, 214, 217, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 8px;
            background-color: var(--dl-color-base-white);
          }
          .data-page-content2 {
            gap: 8px;
            display: flex;
            flex-grow: 1;
            align-items: center;
          }
          .data-page-text11 {
            color: var(--dl-color-gray-500);
            height: auto;
            flex-grow: 1;
            text-align: left;
            line-height: 24px;
          }
          .data-page-row1 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .data-page-inputdropdown1 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .data-page-inputwithlabel2 {
            gap: 6px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .data-page-text12 {
            color: var(--dl-color-gray-700);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .data-page-input2 {
            gap: 8px;
            display: flex;
            padding: 10px 14px;
            overflow: hidden;
            align-self: stretch;
            box-shadow: 0px 1px 2px 0px rgba(10, 13, 18, 0.05000000074505806);
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(213, 214, 217, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 8px;
            background-color: var(--dl-color-base-white);
          }
          .data-page-content3 {
            gap: 8px;
            display: flex;
            flex-grow: 1;
            align-items: center;
          }
          .data-page-text13 {
            color: var(--dl-color-gray-500);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .data-page-inputfield2 {
            gap: 6px;
            width: 312px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .data-page-inputwithlabel3 {
            gap: 6px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .data-page-text14 {
            color: var(--dl-color-gray-700);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .data-page-input3 {
            display: flex;
            align-self: stretch;
            box-shadow: 0px 1px 2px 0px rgba(10, 13, 18, 0.05000000074505806);
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(213, 214, 217, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 8px;
            background-color: var(--dl-color-base-white);
          }
          .data-page-addon {
            display: flex;
            padding: 10px 12px 10px 14px;
            align-items: center;
            border-radius: 8px 0 0 8px;
          }
          .data-page-text15 {
            color: var(--dl-color-gray-600);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .data-page-textinput {
            gap: 8px;
            color: rgba(113, 118, 128, 1);
            display: flex;
            padding: 10px 14px;
            overflow: hidden;
            flex-grow: 1;
            font-size: 16px;
            align-self: stretch;
            text-align: left;
            align-items: center;
            font-family: Inter;
            font-weight: 400;
            border-color: rgba(213, 214, 217, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 0 8px 8px 0;
            background-color: var(--dl-color-base-white);
          }
          .data-page-row2 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .data-page-inputdropdown2 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .data-page-inputwithlabel4 {
            gap: 6px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .data-page-text16 {
            color: var(--dl-color-gray-700);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .data-page-input4 {
            gap: 8px;
            display: flex;
            padding: 10px 14px;
            overflow: hidden;
            align-self: stretch;
            box-shadow: 0px 1px 2px 0px rgba(10, 13, 18, 0.05000000074505806);
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(213, 214, 217, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 8px;
            background-color: var(--dl-color-base-white);
          }
          .data-page-content4 {
            gap: 8px;
            display: flex;
            flex-grow: 1;
            align-items: center;
          }
          .data-page-text17 {
            color: var(--dl-color-gray-500);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .data-page-inputdropdown3 {
            gap: 8px;
            width: 312px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .data-page-inputwithlabel5 {
            gap: 6px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .data-page-text18 {
            color: var(--dl-color-gray-700);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .data-page-input5 {
            gap: 8px;
            display: flex;
            padding: 10px 14px;
            overflow: hidden;
            align-self: stretch;
            box-shadow: 0px 1px 2px 0px rgba(10, 13, 18, 0.05000000074505806);
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(213, 214, 217, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 8px;
            background-color: var(--dl-color-base-white);
          }
          .data-page-content5 {
            gap: 8px;
            display: flex;
            flex-grow: 1;
            align-items: center;
          }
          .data-page-text19 {
            color: var(--dl-color-gray-900);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .data-page-chevrondown {
            width: 20px;
            height: 20px;
          }
          .data-page-frame-modalactions {
            display: flex;
            padding: 32px 0 0;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .data-page-content6 {
            gap: 12px;
            display: flex;
            padding: 0 24px 24px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .data-page-button1 {
            gap: 8px;
            display: flex;
            padding: 10px 18px;
            overflow: hidden;
            flex-grow: 1;
            box-shadow: 0px 1px 2px 0px rgba(10, 13, 18, 0.05000000074505806);
            align-items: center;
            border-color: rgba(213, 214, 217, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 8px;
            justify-content: center;
            background-color: var(--dl-color-base-white);
          }
          .data-page-text20 {
            color: var(--dl-color-gray-700);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .data-page-button2 {
            gap: 8px;
            display: flex;
            padding: 10px 18px;
            overflow: hidden;
            flex-grow: 1;
            box-shadow: 0px 1px 2px 0px rgba(10, 13, 18, 0.05000000074505806);
            align-items: center;
            border-color: rgba(101, 131, 82, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 8px;
            justify-content: center;
            background-color: rgba(101, 131, 82, 1);
          }
          .data-page-text21 {
            color: var(--dl-color-base-white);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          @media (max-width: 479px) {
            .data-page-modal2 {
              width: 100%;
            }
            .data-page-row1 {
              flex-direction: column;
            }
            .data-page-inputfield2 {
              width: 100%;
              margin: auto;
            }
            .data-page-row2 {
              flex-direction: column;
            }
            .data-page-inputdropdown3 {
              margin: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default DataPage
