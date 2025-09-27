import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar from '../components/navbar'
import ContactPage from '../components/contact-page'
import Footer from '../components/footer'

const ContactUs = (props) => {
  return (
    <>
      <div className="contact-us-container">
        <Head>
          <title>Craft</title>
        </Head>
        <Navbar rootClassName="navbarroot-class-name2"></Navbar>
        <ContactPage
          email1={
            <Fragment>
              <span className="contact-us-text10">info@example.com</span>
            </Fragment>
          }
          phone1={
            <Fragment>
              <span className="contact-us-text11">+123-456-7890</span>
            </Fragment>
          }
          address1={
            <Fragment>
              <span className="contact-us-text12">
                123 Main Street, City, Country
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="contact-us-text13">
                Have a question or need support? Reach out to us!
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="contact-us-text14">
                Our team is here to help you with any inquiries you may have.
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="contact-us-text15">
                For business inquiries, please contact our sales team.
              </span>
            </Fragment>
          }
          content4={
            <Fragment>
              <span className="contact-us-text16">
                Follow us on social media for the latest updates and news.
              </span>
            </Fragment>
          }
          content5={
            <Fragment>
              <span className="contact-us-text17">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contact-us-text18">Contact Us</span>
            </Fragment>
          }
        ></ContactPage>
        <Footer
          link1={
            <Fragment>
              <span className="contact-us-text19">Link 1</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="contact-us-text20">Link 2</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="contact-us-text21">Link 3</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="contact-us-text22">Link 4</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="contact-us-text23">Link 5</span>
            </Fragment>
          }
          link6={
            <Fragment>
              <span className="contact-us-text24">Link 6</span>
            </Fragment>
          }
          link7={
            <Fragment>
              <span className="contact-us-text25">Link 7</span>
            </Fragment>
          }
          link8={
            <Fragment>
              <span className="contact-us-text26">Link 8</span>
            </Fragment>
          }
          link9={
            <Fragment>
              <span className="contact-us-text27">Link 9</span>
            </Fragment>
          }
          link10={
            <Fragment>
              <span className="contact-us-text28">Link 10</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="contact-us-text29">Subscribe</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="contact-us-text30">
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="contact-us-text31">
                © 2025 Craft International Group
              </span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="contact-us-text32">Terms of Service</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="contact-us-text33">Cookies Settings</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="contact-us-text34">Privacy Policy</span>
            </Fragment>
          }
          column1Title={
            <Fragment>
              <span className="contact-us-text35">Column One</span>
            </Fragment>
          }
          column2Title={
            <Fragment>
              <span className="contact-us-text36">Column Two</span>
            </Fragment>
          }
          socialLinkTitleCategory={
            <Fragment>
              <span className="contact-us-text37">Follow Us</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .contact-us-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contact-us-text10 {
            display: inline-block;
          }
          .contact-us-text11 {
            display: inline-block;
          }
          .contact-us-text12 {
            display: inline-block;
          }
          .contact-us-text13 {
            display: inline-block;
          }
          .contact-us-text14 {
            display: inline-block;
          }
          .contact-us-text15 {
            display: inline-block;
          }
          .contact-us-text16 {
            display: inline-block;
          }
          .contact-us-text17 {
            display: inline-block;
          }
          .contact-us-text18 {
            display: inline-block;
          }
          .contact-us-text19 {
            display: inline-block;
          }
          .contact-us-text20 {
            display: inline-block;
          }
          .contact-us-text21 {
            display: inline-block;
          }
          .contact-us-text22 {
            display: inline-block;
          }
          .contact-us-text23 {
            display: inline-block;
          }
          .contact-us-text24 {
            display: inline-block;
          }
          .contact-us-text25 {
            display: inline-block;
          }
          .contact-us-text26 {
            display: inline-block;
          }
          .contact-us-text27 {
            display: inline-block;
          }
          .contact-us-text28 {
            display: inline-block;
          }
          .contact-us-text29 {
            display: inline-block;
          }
          .contact-us-text30 {
            display: inline-block;
          }
          .contact-us-text31 {
            display: inline-block;
          }
          .contact-us-text32 {
            display: inline-block;
          }
          .contact-us-text33 {
            display: inline-block;
          }
          .contact-us-text34 {
            display: inline-block;
          }
          .contact-us-text35 {
            display: inline-block;
          }
          .contact-us-text36 {
            display: inline-block;
          }
          .contact-us-text37 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default ContactUs
