import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Payment = (props) => {
  return (
    <>
      <div className={`payment-container1 ${props.rootClassName} `}>
        <div className="payment-container2">
         

          <img
            src="/external/rectangle241022.png"
            alt="Rectangle241022"
            className="payment-rectangle24"
          />
          <span className="payment-text10">Name on card</span>
          <span className="payment-text11">Payment Type</span>
          <span className="payment-text12">Expiration date</span>
          <span className="payment-text13">CVV</span>
          <span className="payment-text14">Card Number</span>
          <span className="payment-text15">Subtotal</span>
          <span className="payment-text16">£<span className="price">1658</span></span>
          <span className="payment-text17"> £<span className="price">40</span></span>
          <span className="payment-text18"> £<span className="price">1698</span></span>
          <span className="payment-text19">Shipping</span>
          <span className="payment-text20">Total (Tax incl.)</span>

          
          <span className="payment-text21">Checkout</span>
          <img
            src="/external/rectangle10716.png"
            alt="Rectangle10716"
            className="payment-rectangle10"
          />
          <img
            src="/external/rectangle11717.png"
            alt="Rectangle11717"
            className="payment-rectangle11"
          />
          <img
            src="/external/rectangle9715.png"
            alt="Rectangle9715"
            className="payment-rectangle9"
          />
          <input
            type="text"
            placeholder="Enter Name On Card"
            className="payment-textinput1 input"
          />
          <input
            type="text"
            placeholder="Enter Card Number"
            className="payment-textinput2 input"
          />
          <input
            type="text"
            placeholder="EX-Date"
            className="payment-textinput3 input"
          />
          <input
            type="text"
            placeholder="CVV"
            className="payment-textinput4 input"
          />
          <Link legacyBehavior href="/">
            <a className="navbar-home-link6">
            <img
              src="/external/rectangle275.png"
              alt="Rectangle275"
              className="payment-rectangle2"
            />
            <span className="payment-text22">£<span className="price">1698</span></span>
            <span className="payment-text23">Checkout</span>
            <img
              src="/external/right742.png"
              alt="Right742"
              className="payment-right"
            />
            </a>
          </Link>

        </div>
      </div>
      <style jsx>
        {`
          .payment-container1 {
            width: 386px;
            height: 645px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .payment-container2 {
            top: 0px;
            left: 0px;
            width: 388px;
            height: 644px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color:#546F3F;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
            border-radius:15px;
          }
          .payment-rectangle1 {
            top: 0px;
            left: 0px;
            width: 388px;
            height: 644px;
            position: absolute;
            border-radius: 20px;
          }
          .payment-rectangle24 {
            top: 111.00001525878906px;
            right: 23.98748779296875px;
            width: 75px;
            height: 55px;
            position: absolute;
            border-radius: 5px;
          }
          .payment-text10 {
            top: 192.00001525878906px;
            left: 23px;
            color: rgba(253, 251, 251, 1);
            width: 138px;
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .payment-text11 {
            top: 71px;
            left: 23px;
            color: rgba(253, 251, 251, 1);
            width: auto;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .payment-text12 {
            left: 23px;
            color: rgba(253, 251, 251, 1);
            width: 138px;
            bottom: 258.7999897003174px;
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .payment-text13 {
            color: rgba(253, 251, 251, 1);
            right: 48px;
            width: 138px;
            bottom: 258.7999897003174px;
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .payment-text14 {
            top: 272.00001525878906px;
            left: 23px;
            color: rgba(253, 251, 251, 1);
            width: 138px;
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .payment-text15 {
            left: 23px;
            color: rgba(253, 251, 251, 1);
            width: 138px;
            bottom: 156.79998970031738px;
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .payment-text16 {
            color: rgba(253, 251, 251, 1);
            right: 15px;
            width: 138px;
            bottom: 156.79998970031738px;
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Medium;
            text-align: right;
            font-family: inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .payment-text17 {
            color: rgba(253, 251, 251, 1);
            right: 15px;
            width: 138px;
            bottom: 129.79998970031738px;
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Medium;
            text-align: right;
            font-family: inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .payment-text18 {
            color: rgba(253, 251, 251, 1);
            right: 15px;
            width: 138px;
            bottom: 102.79998970031738px;
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Medium;
            text-align: right;
            font-family: inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .payment-text19 {
            left: 23px;
            color: rgba(253, 251, 251, 1);
            width: 138px;
            bottom: 129.79998970031738px;
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .payment-text20 {
            left: 23px;
            color: rgba(253, 251, 251, 1);
            width: 138px;
            bottom: 102.79998970031738px;
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .payment-rectangle2 {
            left: 23px;
            width: 350px;
            bottom: 16.599990844726562px;
            height: 60px;
            position: absolute;
            border-radius: 12px;
            
          }
          .payment-text21 {
            top: 17px;
            left: 23px;
            color: rgba(253, 251, 251, 1);
            width: 150px;
            height: auto;
            position: absolute;
            font-size: 22px;
            font-style: SemiBold;
            text-align: left;
            font-family: inter;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .payment-rectangle10 {
            top: 110.00001525878906px;
            left: 115px;
            width: 75px;
            height: 55px;
            position: absolute;
            border-radius: 5px;
          }
          .payment-rectangle11 {
            top: 110.00001525878906px;
            right: 107px;
            width: 75px;
            height: 55px;
            position: absolute;
            border-radius: 5px;
          }
          .payment-rectangle9 {
            top: 110px;
            left: 23px;
            width: 75px;
            height: 55px;
            position: absolute;
            border-radius: 5px;
          }
          .input{
            border: none;
            height: 40px;
            margin: auto;
            z-index: 2;
            align-self: center;
            background-color:rgb(181, 194, 173);
            position: relative;
            border-radius:10px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
            padding:4%;
            }
          .input::placeholder{
            color: gray;
            font-size:13px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);           
          }
          .input:focus{
            outline: 2px solid #B48654;
          }
          .payment-textinput1 {
            top: 220px;
            fill: var(--dl-color-theme-primary2);
            left: 5px;
            right: 0px;
            width: 90%;
            position: absolute;
            
          }
          .payment-textinput2 {
            top: 300px;
            fill: var(--dl-color-theme-primary2);
            left: 5px;
            right: 0px;
            width: 90%;
            position: absolute;
          
           
          }
          .payment-textinput3 {
            top: 390px;
            fill: var(--dl-color-theme-primary2);
            left: 22px;
            width: 42%;
            position: absolute;
            
            
          }
          .payment-textinput4 {
            top: 390px;
            fill: var(--dl-color-theme-primary2);
            left: 190px;
            right: 0px;
            width: 42%;
            position: absolute;
            
            
          }
          .payment-line1 {
            left: 22.98748779296875px;
            width: 350px;
            bottom: 191.1499786376953px;
            height: 1px;
            position: absolute;
            
          }
          .payment-text22 {
            left: 47px;
            color: rgba(253, 251, 251, 1);
            width: 138px;
            bottom: 38px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .payment-text23 {
            color: rgba(253, 251, 251, 1);
            right: 60px;
            width: 85px;
            bottom: 38px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .payment-right {
            right: 34.98748779296875px;
            width: 25px;
            bottom: 34.59999084472656px;
            height: 25px;
            position: absolute;
            
          }

          @media (max-width: 479px) {
            .payment-container1 {
              width: 390px;
              height: 649px;
              padding-right: 1px;
            }
          }
        `}
      </style>
    </>
  )
}

Payment.defaultProps = {
  rootClassName: '',
}

Payment.propTypes = {
  rootClassName: PropTypes.string,
}

export default Payment
