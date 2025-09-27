import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import SignIn from '../components/sign-in'

const SignInPage = (props) => {
  return (
    <>
      <div className="sign-in-page-container">
        <Head>
          <title>SignIn-page - Craft</title>
          <meta
            name="description"
            content="Craft produces eco-friendly fertilizers using green chemistry to enhance soil, boost yields, and reduce environmental impact."
          />
          <meta property="og:title" content="SignIn-page - Craft" />
          <meta
            property="og:description"
            content="Craft produces eco-friendly fertilizers using green chemistry to enhance soil, boost yields, and reduce environmental impact."
          />
        </Head>
        <SignIn
          button={
            <Fragment>
              <span className="sign-in-page-text1">
                Don&apos;t have an account? Sign up
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="sign-in-page-text2">Email</span>
            </Fragment>
          }
          button1={
            <Fragment>
              <span className="sign-in-page-text3">Forget Password</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="sign-in-page-text4">Sign In</span>
            </Fragment>
          }
        ></SignIn>
      </div>
      <style jsx>
        {`
          .sign-in-page-container {
            width: 100%;
            display: flex;
            height: 50%;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .sign-in-page-text1 {
            display: inline-block;
            font-size: 16px;
          }
          .sign-in-page-text2 {
            display: inline-block;
          }
          .sign-in-page-text3 {
            display: inline-block;
            font-size: 16px;
          }
          .sign-in-page-text4 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default SignInPage
