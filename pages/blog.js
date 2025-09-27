import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar from '../components/navbar'
import BlogSlogan from '../components/blog-slogan'
import BlogLeft from '../components/blog-left'
import BlogRight from '../components/blog-right'
import Footer from '../components/footer'

const Blog = (props) => {
  return (
    <>
      <div className="blog-container">
        <Head>
          <title>Blog - Craft</title>
          <meta
            name="description"
            content="Craft produces eco-friendly fertilizers using green chemistry to enhance soil, boost yields, and reduce environmental impact."
          />
          <meta property="og:title" content="Blog - Craft" />
          <meta
            property="og:description"
            content="Craft produces eco-friendly fertilizers using green chemistry to enhance soil, boost yields, and reduce environmental impact."
          />
        </Head>
        <Navbar rootClassName="navbarroot-class-name1"></Navbar>
        <BlogSlogan
          heading1={
            <Fragment>
              <span className="blog-text10">
                Green Chemistry: The Future is Non-Toxic — Join the Revolution!
              </span>
            </Fragment>
          }
        ></BlogSlogan>
        <BlogLeft
          feature1Title={
            <Fragment>
              <span className="blog-text11">Blog Title</span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="blog-text12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                dicta minus molestiae vel beatae natus eveniet ratione
                temporibus aperiam harum alias officiis assumenda officia
                quibusdam deleniti eos cupiditate dolore doloribus!
              </span>
            </Fragment>
          }
        ></BlogLeft>
        <BlogRight
          feature1Title={
            <Fragment>
              <span className="blog-text13">Blog Title</span>
            </Fragment>
          }
          feature1ImageSrc="https://images.unsplash.com/9/fields.jpg?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMTM0NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          feature1Description={
            <Fragment>
              <span className="blog-text14">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                dicta minus molestiae vel beatae natus eveniet ratione
                temporibus aperiam harum alias officiis assumenda officia
                quibusdam deleniti eos cupiditate dolore doloribus!
              </span>
            </Fragment>
          }
        ></BlogRight>
        <BlogLeft
          feature1Title={
            <Fragment>
              <span className="blog-text15">Blog Title</span>
            </Fragment>
          }
          feature1ImageSrc="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMTM1OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          feature1Description={
            <Fragment>
              <span className="blog-text16">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                dicta minus molestiae vel beatae natus eveniet ratione
                temporibus aperiam harum alias officiis assumenda officia
                quibusdam deleniti eos cupiditate dolore doloribus!
              </span>
            </Fragment>
          }
        ></BlogLeft>
        <BlogRight
          feature1Title={
            <Fragment>
              <span className="blog-text17">Blog Title</span>
            </Fragment>
          }
          feature1ImageSrc="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMTM2N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          feature1Description={
            <Fragment>
              <span className="blog-text18">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                dicta minus molestiae vel beatae natus eveniet ratione
                temporibus aperiam harum alias officiis assumenda officia
                quibusdam deleniti eos cupiditate dolore doloribus!
              </span>
            </Fragment>
          }
        ></BlogRight>
        <BlogLeft
          feature1Title={
            <Fragment>
              <span className="blog-text19">Blog Title</span>
            </Fragment>
          }
          feature1ImageSrc="https://images.unsplash.com/photo-1507662228758-08d030c4820b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMTM3NXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          feature1Description={
            <Fragment>
              <span className="blog-text20">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                dicta minus molestiae vel beatae natus eveniet ratione
                temporibus aperiam harum alias officiis assumenda officia
                quibusdam deleniti eos cupiditate dolore doloribus!
              </span>
            </Fragment>
          }
        ></BlogLeft>
        <BlogRight
          feature1Title={
            <Fragment>
              <span className="blog-text21">Blog Title</span>
            </Fragment>
          }
          feature1ImageSrc="https://images.unsplash.com/photo-1543051932-6ef9fecfbc80?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMTM4N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          feature1Description={
            <Fragment>
              <span className="blog-text22">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                dicta minus molestiae vel beatae natus eveniet ratione
                temporibus aperiam harum alias officiis assumenda officia
                quibusdam deleniti eos cupiditate dolore doloribus!
              </span>
            </Fragment>
          }
        ></BlogRight>
        <BlogLeft
          feature1Title={
            <Fragment>
              <span className="blog-text23">Blog Title</span>
            </Fragment>
          }
          feature1ImageSrc="https://images.unsplash.com/photo-1587479281396-a369ac624104?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMTM5Nnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          feature1Description={
            <Fragment>
              <span className="blog-text24">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                dicta minus molestiae vel beatae natus eveniet ratione
                temporibus aperiam harum alias officiis assumenda officia
                quibusdam deleniti eos cupiditate dolore doloribus!
              </span>
            </Fragment>
          }
        ></BlogLeft>
        <BlogRight
          feature1Title={
            <Fragment>
              <span className="blog-text25">Blog Title</span>
            </Fragment>
          }
          feature1ImageSrc="https://images.unsplash.com/photo-1607720336444-7990bedc2bf9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMTMyOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          feature1Description={
            <Fragment>
              <span className="blog-text26">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                dicta minus molestiae vel beatae natus eveniet ratione
                temporibus aperiam harum alias officiis assumenda officia
                quibusdam deleniti eos cupiditate dolore doloribus!
              </span>
            </Fragment>
          }
        ></BlogRight>
        <BlogLeft
          feature1Title={
            <Fragment>
              <span className="blog-text27">Blog Title</span>
            </Fragment>
          }
          feature1ImageSrc="https://images.unsplash.com/photo-1596753365498-2d23bbfcbc24?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMTQzNnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          feature1Description={
            <Fragment>
              <span className="blog-text28">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                dicta minus molestiae vel beatae natus eveniet ratione
                temporibus aperiam harum alias officiis assumenda officia
                quibusdam deleniti eos cupiditate dolore doloribus!
              </span>
            </Fragment>
          }
        ></BlogLeft>
        <Footer
          link1={
            <Fragment>
              <span className="blog-text29">Link 1</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="blog-text30">Link 2</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="blog-text31">Link 3</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="blog-text32">Link 4</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="blog-text33">Link 5</span>
            </Fragment>
          }
          link6={
            <Fragment>
              <span className="blog-text34">Link 6</span>
            </Fragment>
          }
          link7={
            <Fragment>
              <span className="blog-text35">Link 7</span>
            </Fragment>
          }
          link8={
            <Fragment>
              <span className="blog-text36">Link 8</span>
            </Fragment>
          }
          link9={
            <Fragment>
              <span className="blog-text37">Link 9</span>
            </Fragment>
          }
          link10={
            <Fragment>
              <span className="blog-text38">Link 10</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="blog-text39">Subscribe</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="blog-text40">
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="blog-text41">
                © 2025 Craft International Group
              </span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="blog-text42">Terms of Service</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="blog-text43">Cookies Settings</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="blog-text44">Privacy Policy</span>
            </Fragment>
          }
          column1Title={
            <Fragment>
              <span className="blog-text45">Column One</span>
            </Fragment>
          }
          column2Title={
            <Fragment>
              <span className="blog-text46">Column Two</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name1"
          socialLinkTitleCategory={
            <Fragment>
              <span className="blog-text47">Follow Us</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .blog-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-text10 {
            display: inline-block;
          }
          .blog-text11 {
            display: inline-block;
          }
          .blog-text12 {
            display: inline-block;
          }
          .blog-text13 {
            display: inline-block;
          }
          .blog-text14 {
            display: inline-block;
          }
          .blog-text15 {
            display: inline-block;
          }
          .blog-text16 {
            display: inline-block;
          }
          .blog-text17 {
            display: inline-block;
          }
          .blog-text18 {
            display: inline-block;
          }
          .blog-text19 {
            display: inline-block;
          }
          .blog-text20 {
            display: inline-block;
          }
          .blog-text21 {
            display: inline-block;
          }
          .blog-text22 {
            display: inline-block;
          }
          .blog-text23 {
            display: inline-block;
          }
          .blog-text24 {
            display: inline-block;
          }
          .blog-text25 {
            display: inline-block;
          }
          .blog-text26 {
            display: inline-block;
          }
          .blog-text27 {
            display: inline-block;
          }
          .blog-text28 {
            display: inline-block;
          }
          .blog-text29 {
            display: inline-block;
          }
          .blog-text30 {
            display: inline-block;
          }
          .blog-text31 {
            display: inline-block;
          }
          .blog-text32 {
            display: inline-block;
          }
          .blog-text33 {
            display: inline-block;
          }
          .blog-text34 {
            display: inline-block;
          }
          .blog-text35 {
            display: inline-block;
          }
          .blog-text36 {
            display: inline-block;
          }
          .blog-text37 {
            display: inline-block;
          }
          .blog-text38 {
            display: inline-block;
          }
          .blog-text39 {
            display: inline-block;
          }
          .blog-text40 {
            display: inline-block;
          }
          .blog-text41 {
            display: inline-block;
          }
          .blog-text42 {
            display: inline-block;
          }
          .blog-text43 {
            display: inline-block;
          }
          .blog-text44 {
            display: inline-block;
          }
          .blog-text45 {
            display: inline-block;
          }
          .blog-text46 {
            display: inline-block;
          }
          .blog-text47 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Blog
