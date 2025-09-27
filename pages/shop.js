import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar from '../components/navbar'
import Products from '../components/products'
import UserReviews from '../components/user-reviews'
import Footer from '../components/footer'

const Shop = (props) => {
  return (
    <>
      <div className="shop-container1">
        <Head>
          <title>Shop - Craft</title>
          <meta
            name="description"
            content="Craft produces eco-friendly fertilizers using green chemistry to enhance soil, boost yields, and reduce environmental impact."
          />
          <meta property="og:title" content="Shop - Craft" />
          <meta
            property="og:description"
            content="Craft produces eco-friendly fertilizers using green chemistry to enhance soil, boost yields, and reduce environmental impact."
          />
        </Head>
        <div className="shop-container2">
          <Navbar rootClassName="navbarroot-class-name"></Navbar>
          <Products
            button={
              <Fragment>
                <span className="shop-text10">Check Out</span>
              </Fragment>
            }
            content1={
              <Fragment>
                <span className="shop-text11">Discover Our Products</span>
              </Fragment>
            }
            heading1={
              <Fragment>
                <span className="shop-text12">Shopping</span>
              </Fragment>
            }
            image1Src="https://images.unsplash.com/photo-1647708475573-d11a7583a465?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMjM0MHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
            image1Src6="https://images.unsplash.com/photo-1708432331128-cfe5a2803781?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMTkzNHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
            image1Title={
              <Fragment>
                <span className="shop-text13">Organic Farming</span>
              </Fragment>
            }
            image2Title={
              <Fragment>
                <span className="shop-text14">Eco-Friendly Products</span>
              </Fragment>
            }
            image3Title={
              <Fragment>
                <span className="shop-text15">Green Chemistry</span>
              </Fragment>
            }
            image1Title1={
              <Fragment>
                <span className="shop-text16">Organic Farming</span>
              </Fragment>
            }
            image2Title9={
              <Fragment>
                <span className="shop-text17">Eco-Friendly Products</span>
              </Fragment>
            }
            image3Title9={
              <Fragment>
                <span className="shop-text18">Green Chemistry</span>
              </Fragment>
            }
            image1Title10={
              <Fragment>
                <span className="shop-text19">Organic Farming</span>
              </Fragment>
            }
            image1Title19={
              <Fragment>
                <span className="shop-text20">Organic Farming</span>
              </Fragment>
            }
            image1Title20={
              <Fragment>
                <span className="shop-text21">Organic Farming</span>
              </Fragment>
            }
            image1Title21={
              <Fragment>
                <span className="shop-text22">Organic Farming</span>
              </Fragment>
            }
            image1Title22={
              <Fragment>
                <span className="shop-text23">Organic Farming</span>
              </Fragment>
            }
            image2Title10={
              <Fragment>
                <span className="shop-text24">Eco-Friendly Products</span>
              </Fragment>
            }
            image2Title11={
              <Fragment>
                <span className="shop-text25">Eco-Friendly Products</span>
              </Fragment>
            }
            image2Title12={
              <Fragment>
                <span className="shop-text26">Eco-Friendly Products</span>
              </Fragment>
            }
            image3Title10={
              <Fragment>
                <span className="shop-text27">Green Chemistry</span>
              </Fragment>
            }
            image3Title11={
              <Fragment>
                <span className="shop-text28">Green Chemistry</span>
              </Fragment>
            }
            image3Title12={
              <Fragment>
                <span className="shop-text29">Green Chemistry</span>
              </Fragment>
            }
            image1Title110={
              <Fragment>
                <span className="shop-text30">Organic Farming</span>
              </Fragment>
            }
            image1Title111={
              <Fragment>
                <span className="shop-text31">Organic Farming</span>
              </Fragment>
            }
            image1Title112={
              <Fragment>
                <span className="shop-text32">Organic Farming</span>
              </Fragment>
            }
            image1Description={
              <Fragment>
                <span className="shop-text33">
                  Our organic farming practices ensure the highest quality
                  products.
                </span>
              </Fragment>
            }
            image2Description={
              <Fragment>
                <span className="shop-text34">
                  Explore our wide range of eco-friendly products for a
                  sustainable lifestyle.
                </span>
              </Fragment>
            }
            image3Description={
              <Fragment>
                <span className="shop-text35">
                  Learn about the innovative green chemistry behind our
                  environmentally friendly products.
                </span>
              </Fragment>
            }
            image1Description1={
              <Fragment>
                <span className="shop-text36">
                  Our organic farming practices ensure the highest quality
                  products.
                </span>
              </Fragment>
            }
            image2Description9={
              <Fragment>
                <span className="shop-text37">
                  Explore our wide range of eco-friendly products for a
                  sustainable lifestyle.
                </span>
              </Fragment>
            }
            image3Description9={
              <Fragment>
                <span className="shop-text38">
                  Learn about the innovative green chemistry behind our
                  environmentally friendly products.
                </span>
              </Fragment>
            }
            image1Description10={
              <Fragment>
                <span className="shop-text39">
                  Our organic farming practices ensure the highest quality
                  products.
                </span>
              </Fragment>
            }
            image1Description19={
              <Fragment>
                <span className="shop-text40">
                  Our organic farming practices ensure the highest quality
                  products.
                </span>
              </Fragment>
            }
            image1Description20={
              <Fragment>
                <span className="shop-text41">
                  Our organic farming practices ensure the highest quality
                  products.
                </span>
              </Fragment>
            }
            image1Description21={
              <Fragment>
                <span className="shop-text42">
                  Our organic farming practices ensure the highest quality
                  products.
                </span>
              </Fragment>
            }
            image1Description22={
              <Fragment>
                <span className="shop-text43">
                  Our organic farming practices ensure the highest quality
                  products.
                </span>
              </Fragment>
            }
            image2Description10={
              <Fragment>
                <span className="shop-text44">
                  Explore our wide range of eco-friendly products for a
                  sustainable lifestyle.
                </span>
              </Fragment>
            }
            image2Description11={
              <Fragment>
                <span className="shop-text45">
                  Explore our wide range of eco-friendly products for a
                  sustainable lifestyle.
                </span>
              </Fragment>
            }
            image2Description12={
              <Fragment>
                <span className="shop-text46">
                  Explore our wide range of eco-friendly products for a
                  sustainable lifestyle.
                </span>
              </Fragment>
            }
            image3Description10={
              <Fragment>
                <span className="shop-text47">
                  Learn about the innovative green chemistry behind our
                  environmentally friendly products.
                </span>
              </Fragment>
            }
            image3Description11={
              <Fragment>
                <span className="shop-text48">
                  Learn about the innovative green chemistry behind our
                  environmentally friendly products.
                </span>
              </Fragment>
            }
            image3Description12={
              <Fragment>
                <span className="shop-text49">
                  Learn about the innovative green chemistry behind our
                  environmentally friendly products.
                </span>
              </Fragment>
            }
            image1Description110={
              <Fragment>
                <span className="shop-text50">
                  Our organic farming practices ensure the highest quality
                  products.
                </span>
              </Fragment>
            }
            image1Description111={
              <Fragment>
                <span className="shop-text51">
                  Our organic farming practices ensure the highest quality
                  products.
                </span>
              </Fragment>
            }
            image1Description112={
              <Fragment>
                <span className="shop-text52">
                  Our organic farming practices ensure the highest quality
                  products.
                </span>
              </Fragment>
            }
          ></Products>
          <UserReviews
            author2={
              <Fragment>
                <span className="shop-text53">Michael Lee</span>
              </Fragment>
            }
            author3={
              <Fragment>
                <span className="shop-text54">Emily Chen</span>
              </Fragment>
            }
            review1={
              <Fragment>
                <span className="shop-text55">
                  I love the wide range of eco-friendly products available on
                  this website. It&apos;s great to support sustainable practices
                  while also finding high-quality items.
                </span>
              </Fragment>
            }
            review2={
              <Fragment>
                <span className="shop-text56">
                  As a farmer committed to sustainable agriculture, I appreciate
                  the dedication of this website to promoting organic products.
                  It&apos;s a great platform for connecting with like-minded
                  individuals.
                </span>
              </Fragment>
            }
            review3={
              <Fragment>
                <span className="shop-text57">
                  The emphasis on green chemistry in the product selection is
                  impressive. It&apos;s inspiring to see a focus on
                  environmentally friendly options that are both effective and
                  sustainable.
                </span>
              </Fragment>
            }
            content1={
              <Fragment>
                <span className="shop-text58">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </Fragment>
            }
            heading1={
              <Fragment>
                <span className="shop-text59">User Reviews</span>
              </Fragment>
            }
            author1Name={
              <Fragment>
                <span className="shop-text60">Sarah Johnson</span>
              </Fragment>
            }
            rootClassName="user-reviewsroot-class-name"
            author1Position={
              <Fragment>
                <span className="shop-text61">Environmental Activist</span>
              </Fragment>
            }
            author2Position={
              <Fragment>
                <span className="shop-text62">Organic Farmer</span>
              </Fragment>
            }
            author3Position={
              <Fragment>
                <span className="shop-text63">Green Chemist</span>
              </Fragment>
            }
          ></UserReviews>
          <Footer
            link1={
              <Fragment>
                <span className="shop-text64">Link 1</span>
              </Fragment>
            }
            link2={
              <Fragment>
                <span className="shop-text65">Link 2</span>
              </Fragment>
            }
            link3={
              <Fragment>
                <span className="shop-text66">Link 3</span>
              </Fragment>
            }
            link4={
              <Fragment>
                <span className="shop-text67">Link 4</span>
              </Fragment>
            }
            link5={
              <Fragment>
                <span className="shop-text68">Link 5</span>
              </Fragment>
            }
            link6={
              <Fragment>
                <span className="shop-text69">Link 6</span>
              </Fragment>
            }
            link7={
              <Fragment>
                <span className="shop-text70">Link 7</span>
              </Fragment>
            }
            link8={
              <Fragment>
                <span className="shop-text71">Link 8</span>
              </Fragment>
            }
            link9={
              <Fragment>
                <span className="shop-text72">Link 9</span>
              </Fragment>
            }
            link10={
              <Fragment>
                <span className="shop-text73">Link 10</span>
              </Fragment>
            }
            action1={
              <Fragment>
                <span className="shop-text74">Subscribe</span>
              </Fragment>
            }
            content2={
              <Fragment>
                <span className="shop-text75">
                  By subscribing you agree to with our Privacy Policy and
                  provide consent to receive updates from our company.
                </span>
              </Fragment>
            }
            content3={
              <Fragment>
                <span className="shop-text76">
                  © 2025 Craft International Group
                </span>
              </Fragment>
            }
            termsLink={
              <Fragment>
                <span className="shop-text77">Terms of Service</span>
              </Fragment>
            }
            cookiesLink={
              <Fragment>
                <span className="shop-text78">Cookies Settings</span>
              </Fragment>
            }
            privacyLink={
              <Fragment>
                <span className="shop-text79">Privacy Policy</span>
              </Fragment>
            }
            column1Title={
              <Fragment>
                <span className="shop-text80">Column One</span>
              </Fragment>
            }
            column2Title={
              <Fragment>
                <span className="shop-text81">Column Two</span>
              </Fragment>
            }
            rootClassName="footerroot-class-name"
            socialLinkTitleCategory={
              <Fragment>
                <span className="shop-text82">Follow Us</span>
              </Fragment>
            }
          ></Footer>
        </div>
      </div>
      <style jsx>
        {`
          .shop-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .shop-container2 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .shop-text10 {
            display: inline-block;
          }
          .shop-text11 {
            display: inline-block;
          }
          .shop-text12 {
            display: inline-block;
          }
          .shop-text13 {
            display: inline-block;
          }
          .shop-text14 {
            display: inline-block;
          }
          .shop-text15 {
            display: inline-block;
          }
          .shop-text16 {
            display: inline-block;
          }
          .shop-text17 {
            display: inline-block;
          }
          .shop-text18 {
            display: inline-block;
          }
          .shop-text19 {
            display: inline-block;
          }
          .shop-text20 {
            display: inline-block;
          }
          .shop-text21 {
            display: inline-block;
          }
          .shop-text22 {
            display: inline-block;
          }
          .shop-text23 {
            display: inline-block;
          }
          .shop-text24 {
            display: inline-block;
          }
          .shop-text25 {
            display: inline-block;
          }
          .shop-text26 {
            display: inline-block;
          }
          .shop-text27 {
            display: inline-block;
          }
          .shop-text28 {
            display: inline-block;
          }
          .shop-text29 {
            display: inline-block;
          }
          .shop-text30 {
            display: inline-block;
          }
          .shop-text31 {
            display: inline-block;
          }
          .shop-text32 {
            display: inline-block;
          }
          .shop-text33 {
            display: inline-block;
          }
          .shop-text34 {
            display: inline-block;
          }
          .shop-text35 {
            display: inline-block;
          }
          .shop-text36 {
            display: inline-block;
          }
          .shop-text37 {
            display: inline-block;
          }
          .shop-text38 {
            display: inline-block;
          }
          .shop-text39 {
            display: inline-block;
          }
          .shop-text40 {
            display: inline-block;
          }
          .shop-text41 {
            display: inline-block;
          }
          .shop-text42 {
            display: inline-block;
          }
          .shop-text43 {
            display: inline-block;
          }
          .shop-text44 {
            display: inline-block;
          }
          .shop-text45 {
            display: inline-block;
          }
          .shop-text46 {
            display: inline-block;
          }
          .shop-text47 {
            display: inline-block;
          }
          .shop-text48 {
            display: inline-block;
          }
          .shop-text49 {
            display: inline-block;
          }
          .shop-text50 {
            display: inline-block;
          }
          .shop-text51 {
            display: inline-block;
          }
          .shop-text52 {
            display: inline-block;
          }
          .shop-text53 {
            display: inline-block;
          }
          .shop-text54 {
            display: inline-block;
          }
          .shop-text55 {
            display: inline-block;
          }
          .shop-text56 {
            display: inline-block;
          }
          .shop-text57 {
            display: inline-block;
          }
          .shop-text58 {
            display: inline-block;
          }
          .shop-text59 {
            display: inline-block;
          }
          .shop-text60 {
            display: inline-block;
          }
          .shop-text61 {
            display: inline-block;
          }
          .shop-text62 {
            display: inline-block;
          }
          .shop-text63 {
            display: inline-block;
          }
          .shop-text64 {
            display: inline-block;
          }
          .shop-text65 {
            display: inline-block;
          }
          .shop-text66 {
            display: inline-block;
          }
          .shop-text67 {
            display: inline-block;
          }
          .shop-text68 {
            display: inline-block;
          }
          .shop-text69 {
            display: inline-block;
          }
          .shop-text70 {
            display: inline-block;
          }
          .shop-text71 {
            display: inline-block;
          }
          .shop-text72 {
            display: inline-block;
          }
          .shop-text73 {
            display: inline-block;
          }
          .shop-text74 {
            display: inline-block;
          }
          .shop-text75 {
            display: inline-block;
          }
          .shop-text76 {
            display: inline-block;
          }
          .shop-text77 {
            display: inline-block;
          }
          .shop-text78 {
            display: inline-block;
          }
          .shop-text79 {
            display: inline-block;
          }
          .shop-text80 {
            display: inline-block;
          }
          .shop-text81 {
            display: inline-block;
          }
          .shop-text82 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .shop-text12 {
              font-size: 20px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Shop
