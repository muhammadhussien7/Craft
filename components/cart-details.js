import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CartDetails = (props) => {
  return (
    <>
      <div className={`cart-details-container10 ${props.rootClassName} `}>
        <div className="cart-details-container11">
          <div className="cart-details-container12">
            <div className="cart-details-container13">
              <span className="cart-details-text10">Shopping Continue</span>
            </div>
            <div className="cart-details-container14">
              <img
                alt="Line2751"
                src="/external/line2751-x92l.svg"
                className="cart-details-line2"
              />
            </div>
          </div>
          <div className="cart-details-container15">
            <div className="cart-details-container16">
              <span className="cart-details-text11">Shopping cart</span>
              <span className="cart-details-text12">
                You have 3 item in your cart
              </span>
            </div>
            <div className="cart-details-container17">
              <div className="cart-details-container18">
                <img
                  alt="rectangle21"
                  src="/external/rectangle21.png"
                  className="cart-details-rectangle211"
                />
                <span className="cart-details-text13">N.P.K 2</span>
              </div>
              <div className="cart-details-container19">
                <span className="cart-details-text14">2</span>
                <div className="cart-details-group51">
                  <img
                    alt="Rectangle6984"
                    src="/external/rectangle6984-5ytn.svg"
                    className="cart-details-rectangle61"
                  />
                  <img
                    alt="Rectangle7985"
                    src="/external/rectangle7985-izqa.svg"
                    className="cart-details-rectangle71"
                  />
                </div>
                <span className="cart-details-text15"> £681</span>
                <img
                  alt="TrashCan997"
                  src="/external/trash.png"
                  className="cart-details-trash-can1"
                />
              </div>
            </div>
            <div className="cart-details-container20">
              <div className="cart-details-container21">
                <img
                  alt="rectangle21"
                  src="/external/rectangle21.png"
                  className="cart-details-rectangle212"
                />
                <span className="cart-details-text16">N.P.K 2</span>
              </div>
              <div className="cart-details-container22">
                <span className="cart-details-text17">2</span>
                <div className="cart-details-group52">
                  <img
                    alt="Rectangle6984"
                    src="/external/rectangle6984-5ytn.svg"
                    className="cart-details-rectangle62"
                  />
                  <img
                    alt="Rectangle7985"
                    src="/external/rectangle7985-izqa.svg"
                    className="cart-details-rectangle72"
                  />
                </div>
                <span className="cart-details-text18"> £681</span>
                <img
                  alt="TrashCan997"
                  src="/external/trash.png"
                  className="cart-details-trash-can2"
                />
              </div>
            </div>
            <div className="cart-details-container23">
              <div className="cart-details-container24">
                <img
                  alt="rectangle21"
                  src="/external/rectangle21.png"
                  className="cart-details-rectangle213"
                />
                <span className="cart-details-text19">N.P.K 2</span>
              </div>
              <div className="cart-details-container25">
                <span className="cart-details-text20">2</span>
                <div className="cart-details-group53">
                  <img
                    alt="Rectangle6984"
                    src="/external/rectangle6984-5ytn.svg"
                    className="cart-details-rectangle63"
                  />
                  <img
                    alt="Rectangle7985"
                    src="/external/rectangle7985-izqa.svg"
                    className="cart-details-rectangle73"
                  />
                </div>
                <span className="cart-details-text21"> £681</span>
                <img
                  alt="TrashCan997"
                  src="/external/trash.png"
                  className="cart-details-trash-can3"
                />
              </div>
            </div>
            <div className="cart-details-container26">
              <div className="cart-details-container27">
                <img
                  alt="rectangle21"
                  src="/external/rectangle21.png"
                  className="cart-details-rectangle214"
                />
                <span className="cart-details-text22">N.P.K 2</span>
              </div>
              <div className="cart-details-container28">
                <span className="cart-details-text23">2</span>
                <div className="cart-details-group54">
                  <img
                    alt="Rectangle6984"
                    src="/external/rectangle6984-5ytn.svg"
                    className="cart-details-rectangle64"
                  />
                  <img
                    alt="Rectangle7985"
                    src="/external/rectangle7985-izqa.svg"
                    className="cart-details-rectangle74"
                  />
                </div>
                <span className="cart-details-text24"> £681</span>
                <img
                  alt="TrashCan997"
                  src="/external/trash.png"
                  className="cart-details-trash-can4"
                />
              </div>
            </div>
          </div>
          <div className="cart-details-container29"></div>
          <button
            type="submit"
            className="cart-details-button button-filled button"
          >
            <span className="body-small">To Payment </span>
            <img
              alt="Right742"
              src="/external/right742.png"
              className="cart-details-right"
            />
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .cart-details-container10 {
            width: 100%;fd
            height: 745px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .cart-details-container11 {
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .cart-details-container12 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .cart-details-container13 {
            width: 100%;
            height: 30px;
            margin: Unit;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .cart-details-text10 {
            height: auto;
            font-size: 18px;
            text-align: left;
            font-family: inter;
            font-weight: 600;
            line-height: normal;
          }
          .cart-details-container14 {
            width: 100%;
            margin: 20px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .cart-details-line2 {
            width: 100%;
            height: 2px;
            align-self: center;
          }
          .cart-details-container15 {
            width: 100%;
            height: auto;
            margin: 20px;
            display: flex;
            flex-direction: column;
          }
          .cart-details-container16 {
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-twounits);
            flex-direction: column;
          }
          .cart-details-text11 {
            left: 0px;
            color: rgba(30, 30, 30, 1);
            width: 190px;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: left;
            font-family: inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .cart-details-text12 {
            left: 0px;
            color: rgba(30, 30, 30, 1);
            width: 215px;
            height: auto;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .cart-details-container17 {
            left: 0px;
            width: 100%;
            height: 100px;
            display: flex;
            padding: 0px 20px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
            margin-top: HalfUnit;
            border-radius: 8px;
            margin-bottom: var(--dl-layout-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
            background-color: #fbfaf9;
          }
          .cart-details-container18 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .cart-details-rectangle211 {
            left: 10px;
            width: 80px;
            height: 82px;
            margin-right: 10px;
            border-radius: 8px;
          }
          .cart-details-text13 {
            color: rgba(30, 30, 30, 1);
            font-size: 18px;
            font-style: Medium;
            text-align: left;
            font-family: inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .cart-details-container19 {
            width: 40%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-around;
          }
          .cart-details-text14 {
            height: auto;
            font-size: 16px;
            text-align: center;
            font-family: 'inter';
            font-weight: 500;
            line-height: normal;
          }
          .cart-details-group51 {
            width: 20px;
            height: 24px;
            display: flex;
            align-items: flex-start;
            align-content: space-around;
            flex-direction: column;
            justify-content: space-between;
          }
          .cart-details-rectangle61 {
            top: 0px;
            left: 0px;
            width: 20px;
            height: 9px;
          }
          .cart-details-rectangle71 {
            width: 20px;
            height: 9px;
          }
          .cart-details-text15 {
            color: rgba(57, 57, 57, 1);
            width: 60px;
            font-size: 14px;
            font-style: Medium;
            text-align: center;
            font-family: inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
          }
          .cart-details-trash-can1 {
            width: 25px;
            height: 25px;
          }
          .cart-details-container20 {
            left: 0px;
            width: 100%;
            height: 100px;
            display: flex;
            padding: 0px 20px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
            margin-top: HalfUnit;
            border-radius: 8px;
            margin-bottom: var(--dl-layout-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
            background-color: #fbfaf9;
          }
          .cart-details-container21 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .cart-details-rectangle212 {
            left: 10px;
            width: 80px;
            height: 82px;
            margin-right: 10px;
            border-radius: 8px;
          }
          .cart-details-text16 {
            color: rgba(30, 30, 30, 1);
            font-size: 18px;
            font-style: Medium;
            text-align: left;
            font-family: inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .cart-details-container22 {
            width: 40%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-around;
          }
          .cart-details-text17 {
            height: auto;
            font-size: 16px;
            text-align: center;
            font-family: 'inter';
            font-weight: 500;
            line-height: normal;
          }
          .cart-details-group52 {
            width: 20px;
            height: 24px;
            display: flex;
            align-items: flex-start;
            align-content: space-around;
            flex-direction: column;
            justify-content: space-between;
          }
          .cart-details-rectangle62 {
            top: 0px;
            left: 0px;
            width: 20px;
            height: 9px;
          }
          .cart-details-rectangle72 {
            width: 20px;
            height: 9px;
          }
          .cart-details-text18 {
            color: rgba(57, 57, 57, 1);
            width: 60px;
            font-size: 14px;
            font-style: Medium;
            text-align: center;
            font-family: inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
          }
          .cart-details-trash-can2 {
            width: 25px;
            height: 25px;
          }
          .cart-details-container23 {
            left: 0px;
            width: 100%;
            height: 100px;
            display: flex;
            padding: 0px 20px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
            margin-top: HalfUnit;
            border-radius: 8px;
            margin-bottom: var(--dl-layout-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
            background-color: #fbfaf9;
          }
          .cart-details-container24 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .cart-details-rectangle213 {
            left: 10px;
            width: 80px;
            height: 82px;
            margin-right: 10px;
            border-radius: 8px;
          }
          .cart-details-text19 {
            color: rgba(30, 30, 30, 1);
            font-size: 18px;
            font-style: Medium;
            text-align: left;
            font-family: inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .cart-details-container25 {
            width: 40%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-around;
          }
          .cart-details-text20 {
            height: auto;
            font-size: 16px;
            text-align: center;
            font-family: 'inter';
            font-weight: 500;
            line-height: normal;
          }
          .cart-details-group53 {
            width: 20px;
            height: 24px;
            display: flex;
            align-items: flex-start;
            align-content: space-around;
            flex-direction: column;
            justify-content: space-between;
          }
          .cart-details-rectangle63 {
            top: 0px;
            left: 0px;
            width: 20px;
            height: 9px;
          }
          .cart-details-rectangle73 {
            width: 20px;
            height: 9px;
          }
          .cart-details-text21 {
            color: rgba(57, 57, 57, 1);
            width: 60px;
            font-size: 14px;
            font-style: Medium;
            text-align: center;
            font-family: inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
          }
          .cart-details-trash-can3 {
            width: 25px;
            height: 25px;
          }
          .cart-details-container26 {
            left: 0px;
            width: 100%;
            height: 100px;
            display: flex;
            padding: 0px 20px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
            margin-top: HalfUnit;
            border-radius: 8px;
            margin-bottom: var(--dl-layout-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
            background-color: #fbfaf9;
          }
          .cart-details-container27 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .cart-details-rectangle214 {
            left: 10px;
            width: 80px;
            height: 82px;
            margin-right: 10px;
            border-radius: 8px;
          }
          .cart-details-text22 {
            color: rgba(30, 30, 30, 1);
            font-size: 18px;
            font-style: Medium;
            text-align: left;
            font-family: inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .cart-details-container28 {
            width: 40%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-around;
          }
          .cart-details-text23 {
            height: auto;
            font-size: 16px;
            text-align: center;
            font-family: 'inter';
            font-weight: 500;
            line-height: normal;
          }
          .cart-details-group54 {
            width: 20px;
            height: 24px;
            display: flex;
            align-items: flex-start;
            align-content: space-around;
            flex-direction: column;
            justify-content: space-between;
          }
          .cart-details-rectangle64 {
            top: 0px;
            left: 0px;
            width: 20px;
            height: 9px;
          }
          .cart-details-rectangle74 {
            width: 20px;
            height: 9px;
          }
          .cart-details-text24 {
            color: rgba(57, 57, 57, 1);
            width: 60px;
            font-size: 14px;
            font-style: Medium;
            text-align: center;
            font-family: inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
          }
          .cart-details-trash-can4 {
            width: 25px;
            height: 25px;
          }
          .cart-details-container29 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
          }
          .cart-details-button {
            display: flex;
            align-self: center;
            border-color: #658352;
            border-width: 0px;
            justify-content: space-between;
            background-color: #658352;
          }
          .cart-details-right {
            width: 25px;
            height: 25px;
            z-index: 20;
          }
          .cart-detailsroot-class-name {
            height: 100%;
            align-self: flex-start;
            margin-top: var(--dl-layout-space-fourunits);
          }
          @media (max-width: 1200px) {
            .cart-details-text10 {
              color: rgb(30, 30, 30);
              font-size: 18px;
              font-family: inter;
              font-weight: 600;
              line-height: normal;
              text-decoration: none;
            }
          }

          @media (max-width: 767px) {
            .cart-details-container17 {
              width: 591px;
            }
            .cart-details-container20 {
              width: 591px;
            }
            .cart-details-container23 {
              width: 591px;
            }
            .cart-details-container26 {
              width: 591px;
            }
          }
          @media (max-width: 479px) {
            .cart-details-container11 {
              width: 100%;
            }
            .cart-details-container17 {
              width: auto;
            }
            .cart-details-container20 {
              width: auto;
            }
            .cart-details-container23 {
              width: auto;
            }
            .cart-details-container26 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

CartDetails.defaultProps = {
  rootClassName: '',
}

CartDetails.propTypes = {
  rootClassName: PropTypes.string,
}

export default CartDetails
