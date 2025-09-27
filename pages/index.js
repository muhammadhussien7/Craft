import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import NavbarHome from '../components/navbar-home'
import Header from '../components/header'
import Features from '../components/features'
import ToBlog from '../components/to-blog'
import Shopping from '../components/shopping'
import Steps from '../components/steps'
import Stats from '../components/stats'
import Testimonial from '../components/testimonial'
import ContactForm from '../components/contact-form'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Craft</title>
        </Head>
        <NavbarHome
          link2="Products"
          link3="Blog"
          link4="About"
          link5="ContactUs"
          rootClassName="navbar-homeroot-class-name"
        ></NavbarHome>
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
          video1Src="https://videos.pexels.com/video-files/3120741/3120741-hd_1280_720_24fps.mp4"
          rootClassName="headerroot-class-name"
        ></Header>
        <Features
          content1={
            <Fragment>
              <span className="home-text13">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Suspendisse varius enim in eros
                elementum tristique. Duis cursus, mi quis viverra ornare, eros
                dolor interdum nulla.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text14">Discover the Key Features</span>
            </Fragment>
          }
          image1Src="https://images.unsplash.com/photo-1714984210567-8f4b9a36d2b6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0ODUyNHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          image2Src="https://images.unsplash.com/photo-1581187414475-8ddd817da2e4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0ODQ4Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          image3Src="https://images.unsplash.com/photo-1469122312224-c5846569feb1?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0ODUwNnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          image1Title={
            <Fragment>
              <span className="home-text15">Image 1</span>
            </Fragment>
          }
          image2Title={
            <Fragment>
              <span className="home-text16">Image 2</span>
            </Fragment>
          }
          image3Title={
            <Fragment>
              <span className="home-text17">Image 3</span>
            </Fragment>
          }
          rootClassName="featuresroot-class-name1"
          image1Description={
            <Fragment>
              <span className="home-text18">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </span>
            </Fragment>
          }
          image2Description={
            <Fragment>
              <span className="home-text19">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </span>
            </Fragment>
          }
          image3Description={
            <Fragment>
              <span className="home-text20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </span>
            </Fragment>
          }
        ></Features>
        <Link legacyBehavior href="/blog">
          <a className="home-link1">
            <ToBlog
              action1="Read  "
              heading1="Blog and Research"
              className="home-cta-instance"
            ></ToBlog>
          </a>
        </Link>
       
            <Shopping
              action1={
                <Fragment>
                   <Link legacyBehavior href="/shop">
                   <a className="home-link2">
                  <span className="home-text21">Shopping</span>
                  </a>
        </Link>
                </Fragment>
              }
              
              action2={
                <Fragment>
                  <Link legacyBehavior href="/payment-getway">
                    <a className="home-link2">
                      <span className="home-text22">Show My Cart</span>
                    </a>
                  </Link>
                </Fragment>
              }
              content1={
                <Fragment>
                  <span className="home-text23">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </span>
                </Fragment>
              }
              heading1={
                <Fragment>
                  <span className="home-text24">
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
              className="home-component4"
            ></Shopping>
          
        <Steps
          step1Title={
            <Fragment>
              <span className="home-text25">Explore our Organic Products</span>
            </Fragment>
          }
          step2Title={
            <Fragment>
              <span className="home-text26">Learn About Green Chemistry</span>
            </Fragment>
          }
          step3Title={
            <Fragment>
              <span className="home-text27">Shop Responsibly</span>
            </Fragment>
          }
          step4Title={
            <Fragment>
              <span className="home-text28">Join Our Community</span>
            </Fragment>
          }
          step1Description={
            <Fragment>
              <span className="home-text29">
                Browse through our wide selection of organic and eco-friendly
                products sourced from sustainable agriculture.
              </span>
            </Fragment>
          }
          step2Description={
            <Fragment>
              <span className="home-text30">
                Discover the importance of green chemistry in creating
                environmentally friendly products that are safe for you and the
                planet.
              </span>
            </Fragment>
          }
          step3Description={
            <Fragment>
              <span className="home-text31">
                Make a positive impact with your purchases by choosing products
                that support sustainable practices and reduce environmental
                harm.
              </span>
            </Fragment>
          }
          step4Description={
            <Fragment>
              <span className="home-text32">
                Become part of our community, share your feedback, and stay
                updated on the latest news and offers by subscribing to our
                newsletter.
              </span>
            </Fragment>
          }
        ></Steps>
        <Stats
          stat1={
            <Fragment>
              <span className="home-text33">100%</span>
            </Fragment>
          }
          stat2={
            <Fragment>
              <span className="home-text34">80%</span>
            </Fragment>
          }
          stat3={
            <Fragment>
              <span className="home-text35">95%</span>
            </Fragment>
          }
          stat4={
            <Fragment>
              <span className="home-text36">85%</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text37">Organic Products</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text38">Eco-Friendly Farmers</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text39">Our Impact</span>
            </Fragment>
          }
          image1Src="https://images.unsplash.com/photo-1519897831810-a9a01aceccd1?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM4MzIzMnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          stat1Description={
            <Fragment>
              <span className="home-text40">
                Percentage of eco-friendly products
              </span>
            </Fragment>
          }
          stat2Description={
            <Fragment>
              <span className="home-text41">
                Percentage of products that are organic
              </span>
            </Fragment>
          }
          stat3Description={
            <Fragment>
              <span className="home-text42">
                Percentage of farmers using sustainable practices
              </span>
            </Fragment>
          }
          stat4Description={
            <Fragment>
              <span className="home-text43">Customer satisfaction rate</span>
            </Fragment>
          }
        ></Stats>
        <Testimonial
          review1={
            <Fragment>
              <span className="home-text44">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text45">
                The products offered here are top-notch and have helped me
                support local farmers while promoting eco-friendly practices.
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text46">
                I appreciate the dedication of this company to green chemistry
                and sustainable agriculture. Their commitment is truly
                inspiring.
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text47">
                As a food blogger, I always recommend products from this website
                to my audience. The quality and impact speak for themselves.
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text48">
                I have been using products from this website for years, and I
                have seen a significant improvement in the health of my crops.
                Highly recommended!
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text49">Testimonials</span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text50">John Smith</span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text51">Jane Doe</span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text52">Michael Johnson</span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text53">Sarah Lee</span>
            </Fragment>
          }
          author1Position={
            <Fragment>
              <span className="home-text54">Organic Farmer</span>
            </Fragment>
          }
          author2Position={
            <Fragment>
              <span className="home-text55">
                Sustainable Agriculture Advocate
              </span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="home-text56">Environmental Scientist</span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="home-text57">Food Blogger</span>
            </Fragment>
          }
        ></Testimonial>
        <ContactForm
          email={
            <Fragment>
              <span className="home-text58">info@greenharvest.com</span>
            </Fragment>
          }
          phone={
            <Fragment>
              <span className="home-text59">+1-800-ORGANIC</span>
            </Fragment>
          }
          address={
            <Fragment>
              <span className="home-text60">
                123 Green Way, Eco City, Earth
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text61">
                Have a question or feedback? Drop us a message!
              </span>
            </Fragment>
          }
          contactTitle={
            <Fragment>
              <span className="home-text62">
                It’s an honor to have you here.
              </span>
            </Fragment>
          }
          submitAction={
            <Fragment>
              <span className="home-text63">Submit</span>
            </Fragment>
          }
        ></ContactForm>
        <Footer
          link1={
            <Fragment>
              <span className="home-text64">Link 1</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text65">Link 2</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text66">Link 3</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text67">Link 4</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text68">Link 5</span>
            </Fragment>
          }
          link6={
            <Fragment>
              <span className="home-text69">Link 6</span>
            </Fragment>
          }
          link7={
            <Fragment>
              <span className="home-text70">Link 7</span>
            </Fragment>
          }
          link8={
            <Fragment>
              <span className="home-text71">Link 8</span>
            </Fragment>
          }
          link9={
            <Fragment>
              <span className="home-text72">Link 9</span>
            </Fragment>
          }
          link10={
            <Fragment>
              <span className="home-text73">Link 10</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text74">Subscribe</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text75">
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="home-text76">
                © 2025 Craft International Group
              </span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="home-text77">Terms of Service</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="home-text78">Cookies Settings</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="home-text79">Privacy Policy</span>
            </Fragment>
          }
          column1Title={
            <Fragment>
              <span className="home-text80">Column One</span>
            </Fragment>
          }
          column2Title={
            <Fragment>
              <span className="home-text81">Column Two</span>
            </Fragment>
          }
          socialLinkTitleCategory={
            <Fragment>
              <span className="home-text82">Follow Us</span>
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
          .home-link1 {
            display: contents;
          }
          .home-cta-instance {
            text-decoration: none;
          }
          .home-link2 {
            display: contents;
          }
          .home-component4 {
            text-decoration: none;
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
          .home-text37 {
            display: inline-block;
          }
          .home-text38 {
            display: inline-block;
          }
          .home-text39 {
            display: inline-block;
          }
          .home-text40 {
            display: inline-block;
          }
          .home-text41 {
            display: inline-block;
          }
          .home-text42 {
            display: inline-block;
          }
          .home-text43 {
            display: inline-block;
          }
          .home-text44 {
            display: inline-block;
          }
          .home-text45 {
            display: inline-block;
          }
          .home-text46 {
            display: inline-block;
          }
          .home-text47 {
            display: inline-block;
          }
          .home-text48 {
            display: inline-block;
          }
          .home-text49 {
            display: inline-block;
          }
          .home-text50 {
            display: inline-block;
          }
          .home-text51 {
            display: inline-block;
          }
          .home-text52 {
            display: inline-block;
          }
          .home-text53 {
            display: inline-block;
          }
          .home-text54 {
            display: inline-block;
          }
          .home-text55 {
            display: inline-block;
          }
          .home-text56 {
            display: inline-block;
          }
          .home-text57 {
            display: inline-block;
          }
          .home-text58 {
            display: inline-block;
          }
          .home-text59 {
            display: inline-block;
          }
          .home-text60 {
            display: inline-block;
          }
          .home-text61 {
            display: inline-block;
          }
          .home-text62 {
            display: inline-block;
          }
          .home-text63 {
            display: inline-block;
          }
          .home-text64 {
            display: inline-block;
          }
          .home-text65 {
            display: inline-block;
          }
          .home-text66 {
            display: inline-block;
          }
          .home-text67 {
            display: inline-block;
          }
          .home-text68 {
            display: inline-block;
          }
          .home-text69 {
            display: inline-block;
          }
          .home-text70 {
            display: inline-block;
          }
          .home-text71 {
            display: inline-block;
          }
          .home-text72 {
            display: inline-block;
          }
          .home-text73 {
            display: inline-block;
          }
          .home-text74 {
            display: inline-block;
          }
          .home-text75 {
            display: inline-block;
          }
          .home-text76 {
            display: inline-block;
          }
          .home-text77 {
            display: inline-block;
          }
          .home-text78 {
            display: inline-block;
          }
          .home-text79 {
            display: inline-block;
          }
          .home-text80 {
            display: inline-block;
          }
          .home-text81 {
            display: inline-block;
          }
          .home-text82 {
            display: inline-block;
          }
          @media (max-width: 1200px) {
            .home-text12 {
              color: rgb(255, 255, 255);
            }
          }
          @media (max-width: 991px) {
            .home-text12 {
              color: rgb(255, 255, 255);
            }
          }
          @media (max-width: 767px) {
            .home-text12 {
              color: rgb(255, 255, 255);
            }
          }
          @media (max-width: 479px) {
            .home-text11 {
              color: #000000;
            }
            .home-text12 {
              color: inherit;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
