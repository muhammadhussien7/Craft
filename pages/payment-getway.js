import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'


import Cart from '../components/cart'
import Payment from '../components/payment'

const PaymentGetaway = (props) => {
  return (
    <>
      <div className="payment-getaway-container1">
        <Head>
          <title>Craft - payment</title>
          <meta property="og:title" content="Authentic Lawful Parrot" />
        </Head>
        <div className="payment-getaway-container2">
          <div className="payment-getaway-container3">
            <Cart rootClassName="cartroot-class-name"></Cart>
          </div>
          <div className="payment-getaway-container4">
            <Payment rootClassName="paymentroot-class-name"></Payment>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .payment-getaway-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
         
          }
          .payment-getaway-container2 {
            display: flex;
            margin-top: 10px;
            align-items: center;
            flex-direction: row;
          }
          .payment-getaway-container3 {
            margin: 0px 20px;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .payment-getaway-container4 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          @media (max-width: 767px) {
            .payment-getaway-container2 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default PaymentGetaway
