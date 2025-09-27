import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Details from '../components/details'
import CartDetails from '../components/cart-details'

const InfoPage = (props) => {
  return (
    <>
      <div className="info-page-container">
        <Head>
          <title>Craft - info-page</title>
          <meta
            property="og:title"
            content="info-page - Authentic Lawful Parrot"
          />
        </Head>
        <Details
          heading={
            <Fragment>
              <span className="info-page-text1">Contact Details</span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="info-page-text2">Shipping Details</span>
            </Fragment>
          }
          rootClassName="detailsroot-class-name"
        ></Details>
        <CartDetails rootClassName="cart-detailsroot-class-name"></CartDetails>
      </div>
      <style jsx>
        {`
          .info-page-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .info-page-text1 {
            display: inline-block;
          }
          .info-page-text2 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .info-page-container {
              flex-directon: column;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default InfoPage
