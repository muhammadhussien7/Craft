import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import SignUp from '../components/sign-up'

const SignUpPage = (props) => {
  return (
    <>
      <div className="sign-up-page-container">
        <Head>
          <title>SignUp-page - Craft</title>
          <meta
            name="description"
            content="Craft produces eco-friendly fertilizers using green chemistry to enhance soil, boost yields, and reduce environmental impact."
          />
          <meta property="og:title" content="SignUp-page - Craft" />
          <meta
            property="og:description"
            content="Craft produces eco-friendly fertilizers using green chemistry to enhance soil, boost yields, and reduce environmental impact."
          />
        </Head>
        <SignUp
          action1={
            <Fragment>
              <span className="sign-up-page-text1">Sign Up Now</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="sign-up-page-text2">Welcome To CRAFT</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="sign-up-page-text3">
                Subscribe to our newsletter to receive updates on new products,
                promotions, and company news.
              </span>
            </Fragment>
          }
          rootClassName="sign-uproot-class-name"
        ></SignUp>
      </div>
      <style jsx>
        {`
          .sign-up-page-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sign-up-page-text1 {
            display: inline-block;
          }
          .sign-up-page-text2 {
            display: inline-block;
          }
          .sign-up-page-text3 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default SignUpPage
