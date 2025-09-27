import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar from '../components/navbar'
import BlogPostHeader from '../components/blog-post-header'
import BlogArticle from '../components/blog-article'
import Footer from '../components/footer'


const BlogPage = (props) => {
  return (
    <>
      <div className="blog-page-container">
        <Head>
          <title>Blog-page - Craft</title>
          <meta
            name="description"
            content="Craft produces eco-friendly fertilizers using green chemistry to enhance soil, boost yields, and reduce environmental impact."
          />
          <meta property="og:title" content="Blog-page - Craft" />
          <meta
            property="og:description"
            content="Craft produces eco-friendly fertilizers using green chemistry to enhance soil, boost yields, and reduce environmental impact."
          />
        </Head>
        <Navbar link4="About" rootClassName="navbarroot-class-name1"></Navbar>
        <BlogPostHeader
          date={
            <Fragment>
              <span className="blog-page-text10">September 15, 2021</span>
            </Fragment>
          }
          category={
            <Fragment>
              <span className="blog-page-text11">Green Chemistry</span>
            </Fragment>
          }
          readTime={
            <Fragment>
              <span className="blog-page-text12">5 minutes read</span>
            </Fragment>
          }
          avatarName={
            <Fragment>
              <span className="blog-page-text13">SustainableSolutions21</span>
            </Fragment>
          }
          blogPostTitle={
            <Fragment>
              <span className="blog-page-text14">
                Exploring the Benefits of Green Chemistry in Everyday Life
              </span>
            </Fragment>
          }
          blogPostImageSrc="https://images.unsplash.com/photo-1609784969374-b53a14d91338?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDcxNTc3OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        ></BlogPostHeader>
        <BlogArticle
          content1={
            <Fragment>
              <span className="blog-page-text15">
                <span>
                  Learn about our mission to promote green chemistry, organic
                  products, and sustainable agriculture. Discover how we source
                  eco-friendly products from farmers using sustainable practices
                </span>
                <br></br>
                <span>
                  Learn about our mission to promote green chemistry, organic
                  products, and sustainable agriculture. Discover how we source
                  eco-friendly products from farmers using sustainable
                  practices.Learn about our mission to promote green chemistry,
                  organic products, and sustainable agriculture. Discover how we
                  source eco-friendly products from farmers using sustainable
                  practices.Learn about our mission to promote green chemistry,
                  organic products, and sustainable agriculture. Discover how we
                  source eco-friendly products from farmers using sustainable
                  practices.Learn about our mission to promote green chemistry,
                  organic products, and sustainable agriculture. Discover how we
                  source eco-friendly products from farmers using sustainable
                  practices.Learn about our mission to promote green chemistry,
                  organic products, and sustainable agriculture. Discover how we
                  source eco-friendly products from farmers using sustainable
                  practices.Learn about our mission to promote green chemistry,
                  organic products, and sustainable agriculture. Discover how we
                  source eco-friendly products from farmers using sustainable
                  practices.Learn about our mission to promote green chemistry,
                  organic products, and sustainable agriculture. Discover how we
                  source eco-friendly products from farmers using sustainable
                  practices.Learn about our mission to promote green chemistry,
                  organic products, and sustainable agriculture. Discover how we
                  source eco-friendly products from farmers using sustainable
                  practices.Learn about our mission to promote green chemistry,
                  organic products, and sustainable agriculture. Discover how we
                  source eco-friendly products from farmers using sustainable
                  practices.Learn about our mission to promote green chemistry,
                  organic products, and sustainable agriculture. Discover how we
                  source eco-friendly products from farmers using sustainable
                  practices.Learn about our mission to promote green chemistry,
                  organic products, and sustainable agriculture. Discover how we
                  source eco-friendly products from farmers using sustainable
                  practices.Learn about our mission to promote green chemistry,
                  organic products, and sustainable agriculture. Discover how we
                  source eco-friendly products from farmers using sustainable
                  practices
                </span>
                <br></br>
                <span>
                  {' '}
                  sustainable agriculture. Discover how we source eco-friendly
                  products from farmers using sustainable practices..
                </span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="blog-page-text21">
                <span className="blog-page-text22">
                  Browse our wide selection of eco-friendly products ranging
                  from organic foods to sustainable household items. Support
                  environmentally conscious farmers and make a positive impact
                  with your purchases..Learn about our mission to promote green
                  chemistry, organic products, and sustainable agriculture.
                  Discover how we source eco-friendly products from farmers
                  using sustainable practices.Learn about our mission to promote
                  green chemistry, organic products, and sustainable
                  agriculture. Discover how we source eco-friendly products from
                  farmers using sustainable practices.Learn about our mission to
                  promote green chemistry, organic products, and sustainable
                  agriculture. Discover how we source eco-friendly products from
                  farmers using sustainable practices.Learn about our mission to
                  promote green chemistry, organic products, and sustainable
                  agriculture. Discover how we source eco-friendly products from
                  farmers using sustainable practices.Learn about our mission to
                  promote green chemistry, organic products, and sustainable
                  agriculture. Discover how we source eco-friendly products from
                  farmers using sustainable practices.Learn about our mission to
                  promote green chemistry, organic products, and sustainable
                  agriculture. Discover how we source eco-friendly products from
                  farmers using sustainable practices.Learn about our mission to
                  promote green chemistry, organic products, and sustainable
                  agriculture. Discover how we source eco-friendly products from
                  farmers using sustainable practices.Learn about our mission to
                  promote green chemistry, organic products, and sustainable
                  agriculture. Discover how we source eco-friendly products from
                  farmers using sustainable practices.Learn about our mission to
                  promote green chemistry, organic products, and sustainable
                  agriculture. Discover how we source eco-friendly products from
                  farmers using sustainable practices.Learn about our mission to
                  promote green chemistry,
                </span>
                <br className="blog-page-text23"></br>
                <br className="blog-page-text24"></br>
                <br className="blog-page-text25"></br>
                <span className="blog-page-text26">
                  Join a community that values environmental sustainability and
                  supports responsible consumer choices. Connect with
                  like-minded individuals who are passionate about making a
                  difference. organic products, and sustainable agriculture.
                  Discover how we source eco-friendly products from farmers
                  using sustainable practices.Learn about our mission to promote
                  green chemistry, organic products, and sustainable
                  agriculture. Discover how we source eco-friendly products from
                  farmers using sustainable practices.Learn about our mission to
                  promote green chemistry, organic products, and sustainable
                  agriculture. Discover how we source eco-friendly products from
                  farmers using sustainable practices.Learn about our mission to
                  promote green chemistry, organic products, and sustainable
                  agriculture. Discover how we source eco-friendly products from
                  farmers using sustainable practices.Learn about our mission to
                  promote green chemistry, organic products, and sustainable
                  agriculture. Discover how we source eco-friendly products from
                  farmers using sustainable practices.Learn about our mission to
                  promote green chemistry, organic products, and
                </span>
                <br className="blog-page-text27"></br>
                <span className="blog-page-text28">
                  Join a community that values environmental sustainability and
                  supports responsible consumer choices. Connect with
                  like-minded individuals who are passionate about making a
                  difference.Join a community that values environmental
                  sustainability and supports responsible consumer choices.
                  Connect with like-minded individuals who are passionate about
                  making a difference.Join a community that values environmental
                  sustainability and supports responsible consumer choices.
                  Connect with like-minded individuals who are passionate about
                  making a difference.Join a community that values environmental
                  sustainability and supports responsible consumer choices.
                  Connect with like-minded individuals who are passionate about
                  making a difference.Join a community that values environmental
                  sustainability and supports responsible consumer choices.
                  Connect with like-minded individuals who are passionate about
                  making a difference.
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="blog-page-text30">Shop Responsibly</span>
            </Fragment>
          }
          heading8={
            <Fragment>
              <span className="blog-page-text31">Blog Title</span>
            </Fragment>
          }
        ></BlogArticle>
        <Footer
          link1={
            <Fragment>
              <span className="blog-page-text32">Link 1</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="blog-page-text33">Link 2</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="blog-page-text34">Link 3</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="blog-page-text35">Link 4</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="blog-page-text36">Link 5</span>
            </Fragment>
          }
          link6={
            <Fragment>
              <span className="blog-page-text37">Link 6</span>
            </Fragment>
          }
          link7={
            <Fragment>
              <span className="blog-page-text38">Link 7</span>
            </Fragment>
          }
          link8={
            <Fragment>
              <span className="blog-page-text39">Link 8</span>
            </Fragment>
          }
          link9={
            <Fragment>
              <span className="blog-page-text40">Link 9</span>
            </Fragment>
          }
          link10={
            <Fragment>
              <span className="blog-page-text41">Link 10</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="blog-page-text42">Subscribe</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="blog-page-text43">
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="blog-page-text44">
                © 2025 Craft International Group
              </span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="blog-page-text45">Terms of Service</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="blog-page-text46">Cookies Settings</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="blog-page-text47">Privacy Policy</span>
            </Fragment>
          }
          column1Title={
            <Fragment>
              <span className="blog-page-text48">Column One</span>
            </Fragment>
          }
          column2Title={
            <Fragment>
              <span className="blog-page-text49">Column Two</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name1"
          socialLinkTitleCategory={
            <Fragment>
              <span className="blog-page-text50">Follow Us</span>
            </Fragment>
          }
        ></Footer>
        
        
      </div>
      <style jsx>
        {`
          .blog-page-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-page-text10 {
            display: inline-block;
          }
          .blog-page-text11 {
            display: inline-block;
          }
          .blog-page-text12 {
            display: inline-block;
          }
          .blog-page-text13 {
            display: inline-block;
          }
          .blog-page-text14 {
            display: inline-block;
          }
          .blog-page-text15 {
            display: inline-block;
          }
          .blog-page-text21 {
            display: inline-block;
          }
          .blog-page-text30 {
            display: inline-block;
          }
          .blog-page-text31 {
            display: inline-block;
          }
          .blog-page-text32 {
            display: inline-block;
          }
          .blog-page-text33 {
            display: inline-block;
          }
          .blog-page-text34 {
            display: inline-block;
          }
          .blog-page-text35 {
            display: inline-block;
          }
          .blog-page-text36 {
            display: inline-block;
          }
          .blog-page-text37 {
            display: inline-block;
          }
          .blog-page-text38 {
            display: inline-block;
          }
          .blog-page-text39 {
            display: inline-block;
          }
          .blog-page-text40 {
            display: inline-block;
          }
          .blog-page-text41 {
            display: inline-block;
          }
          .blog-page-text42 {
            display: inline-block;
          }
          .blog-page-text43 {
            display: inline-block;
          }
          .blog-page-text44 {
            display: inline-block;
          }
          .blog-page-text45 {
            display: inline-block;
          }
          .blog-page-text46 {
            display: inline-block;
          }
          .blog-page-text47 {
            display: inline-block;
          }
          .blog-page-text48 {
            display: inline-block;
          }
          .blog-page-text49 {
            display: inline-block;
          }
          .blog-page-text50 {
            display: inline-block;
          }
          .blog-page-text51 {
            display: inline-block;
            font-size: 16px;
          }
          
          @media (max-width: 1600px) {
            .blog-page-text15 {
              font-size: 20px;
            }
            .blog-page-text22 {
              font-size: 24px;
            }
            .blog-page-text23 {
              font-size: 24px;
            }
            .blog-page-text24 {
              font-size: 24px;
            }
            .blog-page-text25 {
              font-size: 24px;
            }
            .blog-page-text26 {
              font-size: 24px;
            }
            .blog-page-text27 {
              font-size: 24px;
            }
            .blog-page-text28 {
              font-size: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

export default BlogPage
