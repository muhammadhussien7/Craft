import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar from '../components/navbar'
import WhoWeAre from '../components/who-we-are'
import LogosPartners from '../components/logos-partners'
import Team from '../components/team'
import Footer from '../components/footer'

const About = (props) => {
  return (
    <>
      <div className="about-container1">
        <Head>
          <title>About - Craft</title>
          <meta
            name="description"
            content="Craft produces eco-friendly fertilizers using green chemistry to enhance soil, boost yields, and reduce environmental impact."
          />
          <meta property="og:title" content="About - Craft" />
          <meta
            property="og:description"
            content="Craft produces eco-friendly fertilizers using green chemistry to enhance soil, boost yields, and reduce environmental impact."
          />
        </Head>
        <div className="about-container2">
          <Navbar rootClassName="navbarroot-class-name"></Navbar>
          <WhoWeAre
            content10={
              <Fragment>
                <span className="about-text10">
                  Lorem ipsum dolor sit amet. Vel dolores illum est aperiam quis
                  nam voluptatem quia et omnis autem qui dolore ullam sed fugiat
                  cumque! Qui accusamus assumenda et molestias eius et error
                  sunt. Id recusandae nostrum ea officiis voluptatem in nisi
                  consequatur sed quia tenetur sit alias molestias qui illum
                  soluta. Est nesciunt perferendis eum sint rerum 33 cupiditate
                  dolorem id corrupti laboriosam ut debitis veniam ut ipsam
                  fugit vel sunt consequatur. Et nobis quasi et cumque adipisci
                  aut molestiae eligendi quo inventore dicta ea suscipit sequi
                  sed veritatis nemo.
                </span>
              </Fragment>
            }
            content11={
              <Fragment>
                <span className="about-text11">
                  Lorem ipsum dolor sit amet. Nam nihil facilis sit consequuntur
                  internos qui minima rerum ut molestias laudantium aut iusto
                  deserunt. Aut voluptatibus excepturi qui officia laudantium
                  est repellendus tempore hic sunt debitis. Ut galisum tempore
                  in enim fugit eum pariatur possimus est tenetur nemo et sint
                  sint et dolores Quis. Aut illum perspiciatis rem architecto
                  culpa et fuga aliquid. Est omnis praesentium ut nisi internos
                  rem quod totam et similique quis. Est tempore cumque aut
                  recusandae labore qui error molestiae et possimus quia! Eum
                  Quis asperiores non nihil tempora qui quia voluptatem aut
                  aspernatur aspernatur aut asperiores labore et sapiente
                  quaerat qui suscipit quia. Ea nesciunt iste aut temporibus
                  culpa sit dignissimos quaerat eum architecto voluptatum et
                  nemo velit At harum harum.
                </span>
              </Fragment>
            }
            content12={
              <Fragment>
                <span className="about-text12">
                  Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam
                  tempore aut ipsam iusto in sunt repellat ex voluptatum
                  inventore ab facilis galisum ea consequatur consequuntur. Ab
                  voluptas voluptatem eum consequatur aspernatur non laboriosam
                  atque est labore asperiores a neque quos. Ea nemo modi hic
                  dicta saepe et veritatis maiores At praesentium aliquid. Sed
                  dolores architecto non doloribus quia eos consectetur commodi
                  non tenetur vitae est neque omnis. Non perspiciatis velit At
                  aliquam rerum ut officiis ipsa id minima eius ut sapiente
                  nobis et nemo neque. Aut maiores tempora in officiis sunt eum
                  voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea
                  impedit omnis ad internos autem ut esse sunt ad saepe maiores
                  vel perferendis veritatis. Ex magni fugiat ut reprehenderit
                  laudantium sit galisum ipsam eos tempora doloribus sed
                  accusantium nobis eum praesentium quod.
                </span>
              </Fragment>
            }
            content13={
              <Fragment>
                <span className="about-text13">
                  Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam
                  tempore aut ipsam iusto in sunt repellat ex voluptatum
                  inventore ab facilis galisum ea consequatur consequuntur. Ab
                  voluptas voluptatem eum consequatur aspernatur non laboriosam
                  atque est labore asperiores a neque quos. Ea nemo modi hic
                  dicta saepe et veritatis maiores At praesentium aliquid. Sed
                  dolores architecto non doloribus quia eos consectetur commodi
                  non tenetur vitae est neque omnis. Non perspiciatis velit At
                  aliquam rerum ut officiis ipsa id minima eius ut sapiente
                  nobis et nemo neque. Aut maiores tempora in officiis sunt eum
                  voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea
                  impedit omnis ad internos autem ut esse sunt ad saepe maiores
                  vel perferendis veritatis. Ex magni fugiat ut reprehenderit
                  laudantium sit galisum ipsam eos tempora doloribus sed
                  accusantium nobis eum praesentium quod.
                </span>
              </Fragment>
            }
            heading10={
              <Fragment>
                <span className="about-text14">Who We Are</span>
              </Fragment>
            }
            heading11={
              <Fragment>
                <span className="about-text15">General</span>
              </Fragment>
            }
            heading12={
              <Fragment>
                <span className="about-text16">Damages and issues</span>
              </Fragment>
            }
            heading13={
              <Fragment>
                <span className="about-text17">Refunds</span>
              </Fragment>
            }
          ></WhoWeAre>
          <LogosPartners
            heading1={
              <Fragment>
                <span className="about-text18">
                  Trusted by the world&apos;s best companies social proof to
                  build credibility
                </span>
              </Fragment>
            }
          ></LogosPartners>
          <Team
            member1={
              <Fragment>
                <span className="about-text19">John Doe</span>
              </Fragment>
            }
            member2={
              <Fragment>
                <span className="about-text20">Jane Smith</span>
              </Fragment>
            }
            member3={
              <Fragment>
                <span className="about-text21">Michael Johnson</span>
              </Fragment>
            }
            member4={
              <Fragment>
                <span className="about-text22">Sarah Lee</span>
              </Fragment>
            }
            member5={
              <Fragment>
                <span className="about-text23">David Brown</span>
              </Fragment>
            }
            member6={
              <Fragment>
                <span className="about-text24">Emily Davis</span>
              </Fragment>
            }
            member7={
              <Fragment>
                <span className="about-text25">Alex Wilson</span>
              </Fragment>
            }
            member8={
              <Fragment>
                <span className="about-text26">Olivia Martinez</span>
              </Fragment>
            }
            content1={
              <Fragment>
                <span className="about-text27">Join Our Team Today!</span>
              </Fragment>
            }
            content2={
              <Fragment>
                <span className="about-text28">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </Fragment>
            }
            heading1={
              <Fragment>
                <span className="about-text29">Meet Our Team</span>
              </Fragment>
            }
            member1Job={
              <Fragment>
                <span className="about-text30">Founder &amp; CEO</span>
              </Fragment>
            }
            member2Job={
              <Fragment>
                <span className="about-text31">
                  Head of Product Development
                </span>
              </Fragment>
            }
            member3Job={
              <Fragment>
                <span className="about-text32">Sustainability Specialist</span>
              </Fragment>
            }
            member4Job={
              <Fragment>
                <span className="about-text33">Marketing Manager</span>
              </Fragment>
            }
            member5Job={
              <Fragment>
                <span className="about-text34">Customer Relations Manager</span>
              </Fragment>
            }
            member6Job={
              <Fragment>
                <span className="about-text35">Quality Control Specialist</span>
              </Fragment>
            }
            member7Job={
              <Fragment>
                <span className="about-text36">Supply Chain Coordinator</span>
              </Fragment>
            }
            member8Job={
              <Fragment>
                <span className="about-text37">
                  Community Engagement Manager
                </span>
              </Fragment>
            }
            member1Content={
              <Fragment>
                <span className="about-text38">
                  John is passionate about sustainable agriculture and has been
                  promoting green chemistry for over a decade.
                </span>
              </Fragment>
            }
            member2Content={
              <Fragment>
                <span className="about-text39">
                  Jane leads our product development team, ensuring that all our
                  products meet the highest eco-friendly standards.
                </span>
              </Fragment>
            }
            member3Content={
              <Fragment>
                <span className="about-text40">
                  Michael works closely with farmers to implement sustainable
                  practices and improve environmental impact.
                </span>
              </Fragment>
            }
            member4Content={
              <Fragment>
                <span className="about-text41">
                  Sarah handles our marketing strategies to raise awareness
                  about the importance of organic and sustainable products.
                </span>
              </Fragment>
            }
            member5Content={
              <Fragment>
                <span className="about-text42">
                  David ensures our customers have a seamless experience and
                  provides support for all their inquiries.
                </span>
              </Fragment>
            }
            member6Content={
              <Fragment>
                <span className="about-text43">
                  Emily monitors the quality of our products to guarantee they
                  meet the highest organic standards.
                </span>
              </Fragment>
            }
            member7Content={
              <Fragment>
                <span className="about-text44">
                  Alex manages our supply chain to ensure that our products are
                  sourced sustainably and ethically.
                </span>
              </Fragment>
            }
            member8Content={
              <Fragment>
                <span className="about-text45">
                  Olivia engages with our community to promote sustainability
                  and organizes events to raise awareness.
                </span>
              </Fragment>
            }
          ></Team>
          <Footer
            link1={
              <Fragment>
                <span className="about-text46">Link 1</span>
              </Fragment>
            }
            link2={
              <Fragment>
                <span className="about-text47">Link 2</span>
              </Fragment>
            }
            link3={
              <Fragment>
                <span className="about-text48">Link 3</span>
              </Fragment>
            }
            link4={
              <Fragment>
                <span className="about-text49">Link 4</span>
              </Fragment>
            }
            link5={
              <Fragment>
                <span className="about-text50">Link 5</span>
              </Fragment>
            }
            link6={
              <Fragment>
                <span className="about-text51">Link 6</span>
              </Fragment>
            }
            link7={
              <Fragment>
                <span className="about-text52">Link 7</span>
              </Fragment>
            }
            link8={
              <Fragment>
                <span className="about-text53">Link 8</span>
              </Fragment>
            }
            link9={
              <Fragment>
                <span className="about-text54">Link 9</span>
              </Fragment>
            }
            link10={
              <Fragment>
                <span className="about-text55">Link 10</span>
              </Fragment>
            }
            action1={
              <Fragment>
                <span className="about-text56">Subscribe</span>
              </Fragment>
            }
            content2={
              <Fragment>
                <span className="about-text57">
                  By subscribing you agree to with our Privacy Policy and
                  provide consent to receive updates from our company.
                </span>
              </Fragment>
            }
            content3={
              <Fragment>
                <span className="about-text58">
                  © 2025 Craft International Group
                </span>
              </Fragment>
            }
            termsLink={
              <Fragment>
                <span className="about-text59">Terms of Service</span>
              </Fragment>
            }
            cookiesLink={
              <Fragment>
                <span className="about-text60">Cookies Settings</span>
              </Fragment>
            }
            privacyLink={
              <Fragment>
                <span className="about-text61">Privacy Policy</span>
              </Fragment>
            }
            column1Title={
              <Fragment>
                <span className="about-text62">Column One</span>
              </Fragment>
            }
            column2Title={
              <Fragment>
                <span className="about-text63">Column Two</span>
              </Fragment>
            }
            rootClassName="footerroot-class-name"
            socialLinkTitleCategory={
              <Fragment>
                <span className="about-text64">Follow Us</span>
              </Fragment>
            }
          ></Footer>
        </div>
      </div>
      <style jsx>
        {`
          .about-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-container2 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-text10 {
            display: inline-block;
          }
          .about-text11 {
            display: inline-block;
          }
          .about-text12 {
            display: inline-block;
          }
          .about-text13 {
            display: inline-block;
          }
          .about-text14 {
            display: inline-block;
          }
          .about-text15 {
            display: inline-block;
          }
          .about-text16 {
            display: inline-block;
          }
          .about-text17 {
            display: inline-block;
          }
          .about-text18 {
            display: inline-block;
          }
          .about-text19 {
            display: inline-block;
          }
          .about-text20 {
            display: inline-block;
          }
          .about-text21 {
            display: inline-block;
          }
          .about-text22 {
            display: inline-block;
          }
          .about-text23 {
            display: inline-block;
          }
          .about-text24 {
            display: inline-block;
          }
          .about-text25 {
            display: inline-block;
          }
          .about-text26 {
            display: inline-block;
          }
          .about-text27 {
            display: inline-block;
          }
          .about-text28 {
            display: inline-block;
          }
          .about-text29 {
            display: inline-block;
          }
          .about-text30 {
            display: inline-block;
          }
          .about-text31 {
            display: inline-block;
          }
          .about-text32 {
            display: inline-block;
          }
          .about-text33 {
            display: inline-block;
          }
          .about-text34 {
            display: inline-block;
          }
          .about-text35 {
            display: inline-block;
          }
          .about-text36 {
            display: inline-block;
          }
          .about-text37 {
            display: inline-block;
          }
          .about-text38 {
            display: inline-block;
          }
          .about-text39 {
            display: inline-block;
          }
          .about-text40 {
            display: inline-block;
          }
          .about-text41 {
            display: inline-block;
          }
          .about-text42 {
            display: inline-block;
          }
          .about-text43 {
            display: inline-block;
          }
          .about-text44 {
            display: inline-block;
          }
          .about-text45 {
            display: inline-block;
          }
          .about-text46 {
            display: inline-block;
          }
          .about-text47 {
            display: inline-block;
          }
          .about-text48 {
            display: inline-block;
          }
          .about-text49 {
            display: inline-block;
          }
          .about-text50 {
            display: inline-block;
          }
          .about-text51 {
            display: inline-block;
          }
          .about-text52 {
            display: inline-block;
          }
          .about-text53 {
            display: inline-block;
          }
          .about-text54 {
            display: inline-block;
          }
          .about-text55 {
            display: inline-block;
          }
          .about-text56 {
            display: inline-block;
          }
          .about-text57 {
            display: inline-block;
          }
          .about-text58 {
            display: inline-block;
          }
          .about-text59 {
            display: inline-block;
          }
          .about-text60 {
            display: inline-block;
          }
          .about-text61 {
            display: inline-block;
          }
          .about-text62 {
            display: inline-block;
          }
          .about-text63 {
            display: inline-block;
          }
          .about-text64 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default About
