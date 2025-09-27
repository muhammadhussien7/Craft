import React from 'react'

import { useTranslations } from 'next-intl'

const InfoBox = (props) => {
  return (
    <>
      <div className="info-box-container">
        <div className="info-box-modal1">
          <div className="info-box-modal2">
            <div className="info-box-frame-modalheader">
              <img
                alt="image"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/aff95e3c-85c4-40a3-b599-cf1d77c364a5/ece83508-b371-4583-a2d4-a3bf40aaaf4d?org_if_sml=126501&amp;force_format=original"
                className="info-box-image"
              />
              <button className="info-box-buttonclose-x">
                <img
                  alt="xcloseI103"
                  src="/external/xclosei103-x2me.svg"
                  className="info-box-xclose"
                />
              </button>
            </div>
            <div className="info-box-content1">
              <div className="info-box-form">
                <div className="info-box-inputfield1">
                  <div className="info-box-inputwithlabel1">
                    <span className="info-box-text10 TextsmMedium">Name</span>
                    <div className="info-box-input1">
                      <div className="info-box-content2">
                        <span className="info-box-text11 TextmdRegular">
                          enter your name
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="info-box-row1">
                  <div className="info-box-inputdropdown1">
                    <div className="info-box-inputwithlabel2">
                      <span className="info-box-text12 TextsmMedium">
                        Company
                      </span>
                      <div className="info-box-input2">
                        <div className="info-box-content3">
                          <span className="info-box-text13 TextmdRegular">
                            enter your company name
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="info-box-inputfield2">
                    <div className="info-box-inputwithlabel3">
                      <span className="info-box-text14 TextsmMedium">
                        Phone No.
                      </span>
                      <div className="info-box-input3">
                        <div className="info-box-addon">
                          <span className="info-box-text15 TextmdRegular">
                            +20
                          </span>
                        </div>
                        <input
                          type="text"
                          placeholder="123456789"
                          className="info-box-textinput"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="info-box-row2">
                  <div className="info-box-inputdropdown2">
                    <div className="info-box-inputwithlabel4">
                      <span className="info-box-text16 TextsmMedium">
                        Location
                      </span>
                      <div className="info-box-input4">
                        <div className="info-box-content4">
                          <span className="info-box-text17 TextmdRegular">
                            {' '}
                            enteryour city
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="info-box-inputdropdown3">
                    <div className="info-box-inputwithlabel5">
                      <span className="info-box-text18 TextsmMedium">
                        Your job
                      </span>
                      <div className="info-box-input5">
                        <div className="info-box-content5">
                          <span className="info-box-text19 TextmdMedium">
                            Farmer
                          </span>
                        </div>
                        <img
                          alt="chevrondownI103"
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/aff95e3c-85c4-40a3-b599-cf1d77c364a5/ce61c54c-5048-4346-b135-108654c39413?org_if_sml=1284&amp;force_format=original"
                          className="info-box-chevrondown"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-box-frame-modalactions">
              <div className="info-box-content6">
                <button className="info-box-button1">
                  <span className="info-box-text20 TextmdSemibold">Cancel</span>
                </button>
                <button className="info-box-button2">
                  <span className="info-box-text21 TextmdSemibold">
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
          .info-box-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .info-box-modal1 {
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
          .info-box-modal2 {
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
          .info-box-frame-modalheader {
            display: flex;
            padding: 10px;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            background-color: rgba(251, 249, 239, 1);
          }
          .info-box-image {
            width: 200px;
            margin: auto;
            object-fit: cover;
          }
          .info-box-buttonclose-x {
            display: flex;
            padding: 10px;
            z-index: 1;
            overflow: hidden;
            align-items: center;
            border-radius: 8px;
            justify-content: center;
          }
          .info-box-xclose {
            width: 24px;
            height: 24px;
          }
          .info-box-content1 {
            gap: 20px;
            display: flex;
            padding: 0 24px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .info-box-form {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .info-box-inputfield1 {
            gap: 6px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .info-box-inputwithlabel1 {
            gap: 6px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .info-box-text10 {
            color: var(--dl-color-gray-700);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .info-box-input1 {
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
          .info-box-content2 {
            gap: 8px;
            display: flex;
            flex-grow: 1;
            align-items: center;
          }
          .info-box-text11 {
            color: var(--dl-color-gray-500);
            height: auto;
            flex-grow: 1;
            text-align: left;
            line-height: 24px;
          }
          .info-box-row1 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .info-box-inputdropdown1 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .info-box-inputwithlabel2 {
            gap: 6px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .info-box-text12 {
            color: var(--dl-color-gray-700);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .info-box-input2 {
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
          .info-box-content3 {
            gap: 8px;
            display: flex;
            flex-grow: 1;
            align-items: center;
          }
          .info-box-text13 {
            color: var(--dl-color-gray-500);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .info-box-inputfield2 {
            gap: 6px;
            width: 312px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .info-box-inputwithlabel3 {
            gap: 6px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .info-box-text14 {
            color: var(--dl-color-gray-700);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .info-box-input3 {
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
          .info-box-addon {
            display: flex;
            padding: 10px 12px 10px 14px;
            align-items: center;
            border-radius: 8px 0 0 8px;
          }
          .info-box-text15 {
            color: var(--dl-color-gray-600);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .info-box-textinput {
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
          .info-box-row2 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .info-box-inputdropdown2 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .info-box-inputwithlabel4 {
            gap: 6px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .info-box-text16 {
            color: var(--dl-color-gray-700);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .info-box-input4 {
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
          .info-box-content4 {
            gap: 8px;
            display: flex;
            flex-grow: 1;
            align-items: center;
          }
          .info-box-text17 {
            color: var(--dl-color-gray-500);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .info-box-inputdropdown3 {
            gap: 8px;
            width: 312px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .info-box-inputwithlabel5 {
            gap: 6px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .info-box-text18 {
            color: var(--dl-color-gray-700);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .info-box-input5 {
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
          .info-box-content5 {
            gap: 8px;
            display: flex;
            flex-grow: 1;
            align-items: center;
          }
          .info-box-text19 {
            color: var(--dl-color-gray-900);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .info-box-chevrondown {
            width: 20px;
            height: 20px;
          }
          .info-box-frame-modalactions {
            display: flex;
            padding: 32px 0 0;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .info-box-content6 {
            gap: 12px;
            display: flex;
            padding: 0 24px 24px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .info-box-button1 {
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
          .info-box-text20 {
            color: var(--dl-color-gray-700);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .info-box-button2 {
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
          .info-box-text21 {
            color: var(--dl-color-base-white);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          @media (max-width: 479px) {
            .info-box-modal2 {
              width: 100%;
            }
            .info-box-row1 {
              flex-direction: column;
            }
            .info-box-inputfield2 {
              width: 100%;
              margin: auto;
            }
            .info-box-row2 {
              flex-direction: column;
            }
            .info-box-inputdropdown3 {
              margin: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default InfoBox
