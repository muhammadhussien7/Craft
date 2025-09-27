import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Cart = (props) => {
  return (
    <>
      <div className={`cart-container10 ${props.rootClassName} `}>
        <div className="cart-container11 ">
          <div className="cart-container12">
            <div className="cart-container13">
              
              <Link legacyBehavior href="/shop">
                <a>
                  <div className="flex"> 
                  <img
                  src="/external/arrow.png"
                  alt="arrow749"
                  className="cart-arrow"
                />
                  <span className="cart-text10" >Shopping Continue</span>
                  </div>
                  </a>
                </Link>
              
            </div>
            <div className="cart-container14">
              <img
                src="/external/line2751-x92l.svg"
                alt="Line2751"
                className="cart-line2"
              />
            </div>
          </div>
          <div className="cart-container15">
            <div className="cart-container16">
              <span className="cart-text11">Shopping cart</span>
              <span className="cart-text12">You have 3 item in your cart</span>
            </div>
            <div className="cart-container17">
              <div className="cart-container18">
                <img
                  src="/external/rectangle21.png"
                  alt="Rectangle21982"
                  className="cart-rectangle211"
                />
                <span className="cart-text13">N.P.K 2</span>
              </div>
              <div className="cart-container19">
                <span className="cart-text14">2</span>
                <div className="cart-group51">
                  <img
                    src="/external/rectangle6984-5ytn.svg"
                    alt="Rectangle6984"
                    className="cart-rectangle61"
                  />
                  <img
                    src="/external/rectangle7985-izqa.svg"
                    alt="Rectangle7985"
                    className="cart-rectangle71"
                  />
                </div>
                <span className="cart-text15"> £681</span>
                <img
                  src="/external/trash.png"
                  alt="TrashCan997"
                  className="cart-trash-can1"
                />
              </div>
            </div>
            <div className="cart-container20">
              <div className="cart-container21">
                <img
                  src="/external/rectangle21.png"
                  alt="Rectangle21982"
                  className="cart-rectangle212"
                />
                <span className="cart-text16">N.P.K 2</span>
              </div>
              <div className="cart-container22">
                <span className="cart-text17">2</span>
                <div className="cart-group52">
                  <img
                    src="/external/rectangle6984-5ytn.svg"
                    alt="Rectangle6984"
                    className="cart-rectangle62"
                  />
                  <img
                    src="/external/rectangle7985-izqa.svg"
                    alt="Rectangle7985"
                    className="cart-rectangle72"
                  />
                </div>
                <span className="cart-text18"> £681</span>
                <img
                  src="/external/trash.png"
                  alt="TrashCan997"
                  className="cart-trash-can2"
                />
              </div>
            </div>
            <div className="cart-container23">
              <div className="cart-container24">
                <img
                  src="/external/rectangle21.png"
                  alt="Rectangle21982"
                  className="cart-rectangle213"
                />
                <span className="cart-text19">N.P.K 2</span>
              </div>
              <div className="cart-container25">
                <span className="cart-text20">2</span>
                <div className="cart-group53">
                  <img
                    src="/external/rectangle6984-5ytn.svg"
                    alt="Rectangle6984"
                    className="cart-rectangle63"
                  />
                  <img
                    src="/external/rectangle7985-izqa.svg"
                    alt="Rectangle7985"
                    className="cart-rectangle73"
                  />
                </div>
                <span className="cart-text21"> £681</span>
                <img
                  src="/external/trash.png"
                  alt="TrashCan997"
                  className="cart-trash-can3"
                />
              </div>
            </div>
            <div className="cart-container26">
              <div className="cart-container27">
                <img
                  src="/external/rectangle21.png"
                  alt="Rectangle21982"
                  className="cart-rectangle214"
                />
                <span className="cart-text22">N.P.K 2</span>
              </div>
              <div className="cart-container28">
                <span className="cart-text23">2</span>
                <div className="cart-group54">
                  <img
                    src="/external/rectangle6984-5ytn.svg"
                    alt="Rectangle6984"
                    className="cart-rectangle64"
                  />
                  <img
                    src="/external/rectangle7985-izqa.svg"
                    alt="Rectangle7985"
                    className="cart-rectangle74"
                  />
                </div>
                <span className="cart-text24"> £681</span>
                <img
                  src="/external/trash.png"
                  alt="TrashCan997"
                  className="cart-trash-can4"
                />
              </div>
            </div>
          </div>
          <div className="cart-container29">
            
            <div className="cart-frame23">
              <span className="cart-text27">Delivery</span>
              <span className="cart-text28">Address</span>
              <span className="cart-text29">
                847 Jewess Bridge Apt. 174 London, UK 474-769-3919
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
        .flex{
          display:flex;
          align-content:center;
        }
          .font{
            font-family:inter ;
          }
          .cart-container10 {
          
            width: 100%;
            height: 745px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .cart-container11 {
          font-family: Cabin;
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .cart-container12 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .cart-container13 {
            width: 100%;
            height: 30px;
            margin: Unit;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .cart-arrow {  
            width: 30px;
            height: 30px;
            margin-right: 10px;
          }
          .cart-text10 {
            height: auto;
            font-size: 18px;
            text-align: left;
            font-family: inter;
            font-weight: 600;
            line-height: normal;
            padding:5px 0px;
          }
          .cart-container14 {
            width: 100%;
            margin: 20px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .cart-line2 {
            width: 100%;
            height: 2px;
            align-self: center;
          }
          .cart-container15 {
            width: 100%;
            height: auto;
            margin: 20px;
            display: flex;
            flex-direction: column;
          }
          .cart-container16 {
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-twounits);
            flex-direction: column;
          }
          .cart-text11 {
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
          .cart-text12 {
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
          .cart-container17 {
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
          .cart-container18 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .cart-rectangle211 {
            left: 10px;
            width: 80px;
            height: 82px;
            margin-right: 10px;
            border-radius: 8px;
          }
          .cart-text13 {
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
          .cart-container19 {
            width: 40%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-around;
          }
          .cart-text14 {
            height: auto;
            font-size: 16px;
            text-align: center;
            font-family: 'inter';
            font-weight: 500;
            line-height: normal;
          }
          .cart-group51 {
            width: 20px;
            height: 24px;
            display: flex;
            align-items: flex-start;
            align-content: space-around;
            flex-direction: column;
            justify-content: space-between;
          }
          .cart-rectangle61 {
            top: 0px;
            left: 0px;
            width: 20px;
            height: 9px;
          }
          .cart-rectangle71 {
            width: 20px;
            height: 9px;
          }
          .cart-text15 {
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
          .cart-trash-can1 {
            width: 25px;
            height: 25px;
          }
          .cart-container20 {
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
          .cart-container21 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .cart-rectangle212 {
            left: 10px;
            width: 80px;
            height: 82px;
            margin-right: 10px;
            border-radius: 8px;
          }
          .cart-text16 {
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
          .cart-container22 {
            width: 40%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-around;
          }
          .cart-text17 {
            height: auto;
            font-size: 16px;
            text-align: center;
            font-family: 'inter';
            font-weight: 500;
            line-height: normal;
          }
          .cart-group52 {
            width: 20px;
            height: 24px;
            display: flex;
            align-items: flex-start;
            align-content: space-around;
            flex-direction: column;
            justify-content: space-between;
          }
          .cart-rectangle62 {
            top: 0px;
            left: 0px;
            width: 20px;
            height: 9px;
          }
          .cart-rectangle72 {
            width: 20px;
            height: 9px;
          }
          .cart-text18 {
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
          .cart-trash-can2 {
            width: 25px;
            height: 25px;
          }
          .cart-container23 {
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
          .cart-container24 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .cart-rectangle213 {
            left: 10px;
            width: 80px;
            height: 82px;
            margin-right: 10px;
            border-radius: 8px;
          }
          .cart-text19 {
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
          .cart-container25 {
            width: 40%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-around;
          }
          .cart-text20 {
            height: auto;
            font-size: 16px;
            text-align: center;
            font-family: 'inter';
            font-weight: 500;
            line-height: normal;
          }
          .cart-group53 {
            width: 20px;
            height: 24px;
            display: flex;
            align-items: flex-start;
            align-content: space-around;
            flex-direction: column;
            justify-content: space-between;
          }
          .cart-rectangle63 {
            top: 0px;
            left: 0px;
            width: 20px;
            height: 9px;
          }
          .cart-rectangle73 {
            width: 20px;
            height: 9px;
          }
          .cart-text21 {
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
          .cart-trash-can3 {
            width: 25px;
            height: 25px;
          }
          .cart-container26 {
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
          .cart-container27 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .cart-rectangle214 {
            left: 10px;
            width: 80px;
            height: 82px;
            margin-right: 10px;
            border-radius: 8px;
          }
          .cart-text22 {
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
          .cart-container28 {
            width: 40%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-around;
          }
          .cart-text23 {
            height: auto;
            font-size: 16px;
            text-align: center;
            font-family: 'inter';
            font-weight: 500;
            line-height: normal;
          }
          .cart-group54 {
            width: 20px;
            height: 24px;
            display: flex;
            align-items: flex-start;
            align-content: space-around;
            flex-direction: column;
            justify-content: space-between;
          }
          .cart-rectangle64 {
            top: 0px;
            left: 0px;
            width: 20px;
            height: 9px;
          }
          .cart-rectangle74 {
            width: 20px;
            height: 9px;
          }
          .cart-text24 {
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
          .cart-trash-can4 {
            width: 25px;
            height: 25px;
          }
          .cart-container29 {
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
          }
          .cart-frame21 {
            gap: 4px;
            width: 275px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .cart-text25 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 20.501136779785156px;
            font-stretch: normal;
            text-decoration: none;
          }
          .cart-frame22 {
            gap: 7.517084121704102px;
            display: flex;
            align-items: center;
          }
          .cart-text26 {
            color: var(--dl-color-natural-500);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 13.667425155639648px;
            font-stretch: normal;
            text-decoration: none;
          }
          .cart-paymentmethodicon {
            width: 23.234622955322266px;
            height: 16.400909423828125px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(242, 243, 246, 1);
            border-style: solid;
            border-width: 0.6833712458610535px;
            border-radius: 2.733484983444214px;
            background-color: var(--dl-color-default-white);
          }
          .cart-visalogo {
            top: 5.535311222076416px;
            left: 3.2801735401153564px;
            width: 16px;
            height: 5px;
            position: absolute;
          }
          .cart-frame23 {
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .cart-text27 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 20.501136779785156px;
            font-stretch: normal;
            text-decoration: none;
          }
          .cart-text28 {
            color: var(--dl-color-natural-500);
            height: auto;
            font-size: 9.567197799682617px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 13.667425155639648px;
            font-stretch: normal;
            text-decoration: none;
          }
          .cart-text29 {
            color: var(--dl-color-natural-500);
            width: auto;
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 19.134395599365234px;
            font-stretch: normal;
            text-decoration: none;
          }

          @media (max-width: 1200px) {
            .cart-text10 {
              color: rgb(30, 30, 30);
              font-size: 18px;
              font-family: inter;
              font-weight: 600;
              line-height: normal;
              text-decoration: none;
            }
          }

          @media (max-width: 767px) {
            .cart-container17 {
              width: 591px;
            }
            .cart-container20 {
              width: 591px;
            }
            .cart-container23 {
              width: 591px;
            }
            .cart-container26 {
              width: 591px;
            }
          }
            @media (max-width:660px){
            .cart-container11 {
              width: 450px;
            }
            .cart-container17 {
              width: auto;
            }
            .cart-container20 {
              width: auto;
            }
            .cart-container23 {
              width: auto;
            }
            .cart-container26 {
              width: auto;
            }
            .cart-frame21 {
              align-items: flex-start;
            }
            .cart-frame23 {
              align-items: flex-start;
            }}
          @media (max-width: 479px) {
            .cart-container11 {
              width: autopx;
            }
            .cart-container17 {
              width: auto;
            }
            .cart-container20 {
              width: auto;
            }
            .cart-container23 {
              width: auto;
            }
            .cart-container26 {
              width: auto;
            }
            .cart-frame21 {
              align-items: flex-start;
            }
            .cart-frame23 {
              align-items: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

Cart.defaultProps = {
  rootClassName: '',
}

Cart.propTypes = {
  rootClassName: PropTypes.string,
}

export default Cart
