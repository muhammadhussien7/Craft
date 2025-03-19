import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Shopping = (props) => {
  return (
    <>
      <div className={`shopping-header76 ${props.rootClassName} `}>
        <div className="shopping-max-width thq-section-max-width">
          <div className="shopping-column1 thq-section-padding">
            <h1 className="thq-heading-1 shopping-text1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="shopping-text7">
                    Shopping &amp; Protect your Farm
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="thq-body-large shopping-text2">
              {props.content1 ?? (
                <Fragment>
                  <span className="shopping-text8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="shopping-actions">
              <button className="thq-button-filled shopping-button1">
                <span className="thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="shopping-text5">Shopping</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline shopping-button2">
                <span className="thq-body-small">
                  {props.action2 ?? (
                    <Fragment>
                      <span className="shopping-text6">Show My Cart</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="shopping-content">
            <div className="shopping-column2">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="shopping-placeholder-image1 thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="shopping-placeholder-image2 thq-img-ratio-1-1"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="shopping-placeholder-image3 thq-img-ratio-1-1"
              />
            </div>
            <div className="shopping-column3">
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="shopping-placeholder-image4 thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="shopping-placeholder-image5 thq-img-ratio-1-1"
              />
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="shopping-placeholder-image6 thq-img-ratio-1-1"
              />
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="shopping-placeholder-image7 thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .shopping-header76 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: row;
            justify-content: center;
          }
          .shopping-max-width {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .shopping-column1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .shopping-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .shopping-content {
            gap: var(--dl-layout-space-unit);
            width: 50%;
            height: 900px;
            display: flex;
            position: relative;
            align-items: center;
          }
          .shopping-column2 {
            gap: 16px;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .shopping-placeholder-image1 {
            width: 100%;
            height: 400px;
            align-self: stretch;
            border-radius: var(--dl-layout-radius-radius4);
          }
          .shopping-placeholder-image2 {
            width: 100%;
            height: 400px;
            align-self: stretch;
            border-radius: var(--dl-layout-radius-radius4);
          }
          .shopping-placeholder-image3 {
            width: 100%;
            height: 400px;
            align-self: stretch;
            border-radius: var(--dl-layout-radius-radius4);
          }
          .shopping-column3 {
            gap: 16px;
            width: 50%;
            height: auto;
            display: flex;
            z-index: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .shopping-placeholder-image4 {
            width: 100%;
            height: 400px;
            align-self: stretch;
            border-radius: var(--dl-layout-radius-radius4);
          }
          .shopping-placeholder-image5 {
            width: 100%;
            height: 400px;
            align-self: stretch;
            border-radius: var(--dl-layout-radius-radius4);
          }
          .shopping-placeholder-image6 {
            width: 100%;
            height: 400px;
            align-self: stretch;
            border-radius: var(--dl-layout-radius-radius4);
          }
          .shopping-placeholder-image7 {
            width: 100%;
            height: 400px;
            align-self: stretch;
            border-radius: var(--dl-layout-radius-radius4);
          }
          .shopping-text5 {
            display: inline-block;
          }
          .shopping-text6 {
            display: inline-block;
          }
          .shopping-text7 {
            display: inline-block;
          }
          .shopping-text8 {
            display: inline-block;
          }

          @media (max-width: 1200px) {
            .shopping-text1 {
              width: 457px;
            }
          }
          @media (max-width: 991px) {
            .shopping-header76 {
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
            }
            .shopping-max-width {
              flex-direction: column;
            }
            .shopping-column1 {
              width: 100%;
              padding-left: var(--dl-layout-space-fiveunits);
              padding-right: var(--dl-layout-space-fiveunits);
            }
            .shopping-content {
              width: auto;
              height: auto;
              flex-direction: column;
            }
            .shopping-column2 {
              width: auto;
              margin-top: 0px;
              margin-left: -200px;
              flex-direction: row;
            }
            .shopping-placeholder-image1 {
              width: 400px;
            }
            .shopping-placeholder-image2 {
              width: 400px;
            }
            .shopping-placeholder-image3 {
              width: 400px;
            }
            .shopping-column3 {
              width: auto;
              flex-direction: row;
            }
            .shopping-placeholder-image4 {
              width: 400px;
            }
            .shopping-placeholder-image5 {
              width: 400px;
            }
            .shopping-placeholder-image6 {
              width: 400px;
            }
            .shopping-placeholder-image7 {
              width: 400px;
            }
          }
          @media (max-width: 767px) {
            .shopping-column1 {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .shopping-text1 {
              text-align: center;
            }
            .shopping-text2 {
              text-align: center;
            }
            .shopping-actions {
              width: 100%;
              justify-content: center;
            }
            .shopping-column2 {
              width: 100%;
              margin-left: 0px;
              flex-direction: column;
            }
            .shopping-placeholder-image1 {
              width: 100%;
              height: 500px;
            }
            .shopping-placeholder-image2 {
              width: 100%;
              height: 500px;
            }
            .shopping-placeholder-image3 {
              width: 100%;
              height: 500px;
            }
            .shopping-column3 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .shopping-column1 {
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .shopping-text1 {
              text-align: center;
            }
            .shopping-text2 {
              text-align: center;
            }
            .shopping-actions {
              flex-direction: column;
            }
            .shopping-button1 {
              width: 100%;
            }
            .shopping-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Shopping.defaultProps = {
  image1Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=800',
  image5Src:
    'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI5fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=400',
  action1: undefined,
  action2: undefined,
  image6Src:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=400',
  image3Src:
    'https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=800',
  image5Alt: 'Hero Image',
  image2Alt: 'Hero Image',
  image4Alt: 'Hero Image',
  rootClassName: '',
  image7Alt: 'Hero Image',
  image1Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=800',
  image4Src:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=400',
  image6Alt: 'Hero Image',
  heading1: undefined,
  image3Alt: 'Hero Image',
  content1: undefined,
  image7Src:
    'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=400',
}

Shopping.propTypes = {
  image1Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image5Src: PropTypes.string,
  action1: PropTypes.element,
  action2: PropTypes.element,
  image6Src: PropTypes.string,
  image3Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image7Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image4Src: PropTypes.string,
  image6Alt: PropTypes.string,
  heading1: PropTypes.element,
  image3Alt: PropTypes.string,
  content1: PropTypes.element,
  image7Src: PropTypes.string,
}

export default Shopping
