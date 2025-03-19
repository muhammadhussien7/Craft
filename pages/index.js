import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar from '../components/navbar'
import Header from '../components/header'
import Gallery1 from '../components/gallery1'
import CTA from '../components/cta'
import Shopping from '../components/shopping'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Spotless Hungry Crocodile</title>
        </Head>
        <Navbar
          link2="Products"
          link3="Blog"
          link4="About"
          link5="ContactUs"
          rootClassName="navbarroot-class-name"
        ></Navbar>
        <Header
          action1={
            <Fragment>
              <span className="home-text10">Read More</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text11">
                Farmer partners every step of the way
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text12">GREEN CHEMISTRY</span>
            </Fragment>
          }
          content11={
            <Fragment>
              <span className="home-text13">CRAFT</span>
            </Fragment>
          }
          video1Src="https://videos.pexels.com/video-files/3120741/3120741-hd_1280_720_24fps.mp4"
          rootClassName="headerroot-class-name"
        ></Header>
        <Gallery1 rootClassName="gallery1root-class-name"></Gallery1>
        <CTA action1="Read  " heading1="Blog and Research"></CTA>
        <Shopping
          action1={
            <Fragment>
              <span className="home-text14">Shopping</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text15">Show My Cart</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text17">
                Shopping &amp; Protect your Farm
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          image1Src="https://images.unsplash.com/uploads/141247613151541c06062/c15fb37d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MDY0NjUyNHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          image2Src="https://images.unsplash.com/photo-1442774503508-2e17027df511?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MDY0NjU2Nnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          image3Src="https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MDY0NjUwNHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          image5Src="https://images.unsplash.com/photo-1680343144218-5df41d5ebe38?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MDY0NjQ4NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          image6Src="https://images.unsplash.com/photo-1680458842015-fa3bc6eee145?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MDY0NjQ1OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          image7Src="https://images.unsplash.com/photo-1609086742852-8e2091fae977?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MDY0NjU0NXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          rootClassName="shoppingroot-class-name"
        ></Shopping>
        <Footer
          link1={
            <Fragment>
              <span className="home-text18">Link 1</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text19">Link 2</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text20">Link 3</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text21">Link 4</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text22">Link 5</span>
            </Fragment>
          }
          link6={
            <Fragment>
              <span className="home-text23">Link 6</span>
            </Fragment>
          }
          link7={
            <Fragment>
              <span className="home-text24">Link 7</span>
            </Fragment>
          }
          link8={
            <Fragment>
              <span className="home-text25">Link 8</span>
            </Fragment>
          }
          link9={
            <Fragment>
              <span className="home-text26">Link 9</span>
            </Fragment>
          }
          link10={
            <Fragment>
              <span className="home-text27">Link 10</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text28">Subscribe</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text29">
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="home-text30">
                © 2025 Craft International Group
              </span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="home-text31">Terms of Service</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="home-text32">Cookies Settings</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="home-text33">Privacy Policy</span>
            </Fragment>
          }
          column1Title={
            <Fragment>
              <span className="home-text34">Column One</span>
            </Fragment>
          }
          column2Title={
            <Fragment>
              <span className="home-text35">Column Two</span>
            </Fragment>
          }
          socialLinkTitleCategory={
            <Fragment>
              <span className="home-text36">Follow Us</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            color: rgb(255, 255, 255);
            display: inline-block;
          }
          .home-text12 {
            color: rgb(254, 255, 254);
            display: inline-block;
          }
          .home-text13 {
            color: rgb(255, 255, 255);
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-text25 {
            display: inline-block;
          }
          .home-text26 {
            display: inline-block;
          }
          .home-text27 {
            display: inline-block;
          }
          .home-text28 {
            display: inline-block;
          }
          .home-text29 {
            display: inline-block;
          }
          .home-text30 {
            display: inline-block;
          }
          .home-text31 {
            display: inline-block;
          }
          .home-text32 {
            display: inline-block;
          }
          .home-text33 {
            display: inline-block;
          }
          .home-text34 {
            display: inline-block;
          }
          .home-text35 {
            display: inline-block;
          }
          .home-text36 {
            display: inline-block;
          }
          @media (max-width: 479px) {
            .home-text12 {
              box-shadow: rgba(12, 12, 12, 0) 5px 5px 10px 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
