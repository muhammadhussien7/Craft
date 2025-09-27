import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Team = (props) => {
  return (
    <>
      <div className="section-padding">
        <div className="team-max-width section-max-width">
          <div className="team-section-title">
            <span className="body-small team-text10">
              {props.content1 ?? (
                <Fragment>
                  <span className="team-text62">Join Our Team Today!</span>
                </Fragment>
              )}
            </span>
            <div className="team-content10">
              <h2 className="heading-2 team-text11">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="team-text48">Meet Our Team</span>
                  </Fragment>
                )}
              </h2>
              <p className="body-large team-text12">
                {props.content2 ?? (
                  <Fragment>
                    <span className="team-text41">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="team-content11">
            <div className="team-content12">
              <div className="team-row1">
                <div className="team-container1">
                  <div className="team-card1">
                    <img
                      alt={props.member1Alt}
                      src={props.member1Src}
                      className="team-placeholder-image1 img-round img-ratio-1-1"
                    />
                    <div className="team-content13">
                      <div className="team-title1">
                        <span className="team-text13 body-small">
                          {props.member1 ?? (
                            <Fragment>
                              <span className="team-text51">John Doe</span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team-text14 body-small">
                          {props.member1Job ?? (
                            <Fragment>
                              <span className="team-text54">
                                Founder &amp; CEO
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team-text15 body-small">
                        {props.member1Content ?? (
                          <Fragment>
                            <span className="team-text44">
                              John is passionate about sustainable agriculture
                              and has been promoting green chemistry for over a
                              decade.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team-social-icons1">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="team-card2">
                    <img
                      alt={props.member2Alt}
                      src={props.member2Src}
                      className="team-placeholder-image2 img-round img-ratio-1-1"
                    />
                    <div className="team-content14">
                      <div className="team-title2">
                        <span className="team-text16 body-small">
                          {props.member2 ?? (
                            <Fragment>
                              <span className="team-text46">Jane Smith</span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team-text17 body-small">
                          {props.member2Job ?? (
                            <Fragment>
                              <span className="team-text40">
                                Head of Product Development
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team-text18 body-small">
                        {props.member2Content ?? (
                          <Fragment>
                            <span className="team-text43">
                              Jane leads our product development team, ensuring
                              that all our products meet the highest
                              eco-friendly standards.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team-social-icons2">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="team-container2">
                  <div className="team-card3">
                    <img
                      alt={props.member3Alt}
                      src={props.member3Src}
                      className="team-placeholder-image3 img-round img-ratio-1-1"
                    />
                    <div className="team-content15">
                      <div className="team-title3">
                        <span className="team-text19 body-small">
                          {props.member3 ?? (
                            <Fragment>
                              <span className="team-text60">
                                Michael Johnson
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team-text20 body-small">
                          {props.member3Job ?? (
                            <Fragment>
                              <span className="team-text61">
                                Sustainability Specialist
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team-text21 body-small">
                        {props.member3Content ?? (
                          <Fragment>
                            <span className="team-text58">
                              Michael works closely with farmers to implement
                              sustainable practices and improve environmental
                              impact.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team-social-icons3">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="team-card4">
                    <img
                      alt={props.member4Alt}
                      src={props.member4Src}
                      className="team-placeholder-image4 img-round img-ratio-1-1"
                    />
                    <div className="team-content16">
                      <div className="team-title4">
                        <span className="team-text22 body-small">
                          {props.member4 ?? (
                            <Fragment>
                              <span className="team-text55">Sarah Lee</span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team-text23 body-small">
                          {props.member4Job ?? (
                            <Fragment>
                              <span className="team-text38">
                                Marketing Manager
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team-text24 body-small">
                        {props.member4Content ?? (
                          <Fragment>
                            <span className="team-text50">
                              Sarah handles our marketing strategies to raise
                              awareness about the importance of organic and
                              sustainable products.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team-social-icons4">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-row2">
                <div className="team-container3">
                  <div className="team-card5">
                    <img
                      alt={props.member5Alt}
                      src={props.member5Src}
                      className="team-placeholder-image5 img-round img-ratio-1-1"
                    />
                    <div className="team-content17">
                      <div className="team-title5">
                        <span className="team-text25 body-small">
                          {props.member5 ?? (
                            <Fragment>
                              <span className="team-text42">David Brown</span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team-text26 body-small">
                          {props.member5Job ?? (
                            <Fragment>
                              <span className="team-text52">
                                Customer Relations Manager
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team-text27 body-small">
                        {props.member5Content ?? (
                          <Fragment>
                            <span className="team-text53">
                              David ensures our customers have a seamless
                              experience and provides support for all their
                              inquiries.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team-social-icons5">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="team-card6">
                    <img
                      alt={props.member6Alt}
                      src={props.member6Src}
                      className="team-placeholder-image6 img-round img-ratio-1-1"
                    />
                    <div className="team-content18">
                      <div className="team-title6">
                        <span className="team-text28 body-small">
                          {props.member6 ?? (
                            <Fragment>
                              <span className="team-text56">Emily Davis</span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team-text29 body-small">
                          {props.member6Job ?? (
                            <Fragment>
                              <span className="team-text57">
                                Quality Control Specialist
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team-text30 body-small">
                        {props.member6Content ?? (
                          <Fragment>
                            <span className="team-text37">
                              Emily monitors the quality of our products to
                              guarantee they meet the highest organic standards.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team-social-icons6">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="team-container4">
                  <div className="team-card7">
                    <img
                      alt={props.member7Alt}
                      src={props.member7Src}
                      className="team-placeholder-image7 img-round img-ratio-1-1"
                    />
                    <div className="team-content19">
                      <div className="team-title7">
                        <span className="team-text31 body-small">
                          {props.member7 ?? (
                            <Fragment>
                              <span className="team-text39">Alex Wilson</span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team-text32 body-small">
                          {props.member7Job ?? (
                            <Fragment>
                              <span className="team-text49">
                                Supply Chain Coordinator
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team-text33 body-small">
                        {props.member7Content ?? (
                          <Fragment>
                            <span className="team-text59">
                              Alex manages our supply chain to ensure that our
                              products are sourced sustainably and ethically.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team-social-icons7">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="team-card8">
                    <img
                      alt={props.member8Alt}
                      src={props.member8Src}
                      className="team-placeholder-image8 img-round img-ratio-1-1"
                    />
                    <div className="team-content20">
                      <div className="team-title8">
                        <span className="team-text34 body-small">
                          {props.member8 ?? (
                            <Fragment>
                              <span className="team-text47">
                                Olivia Martinez
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team-text35 body-small">
                          {props.member8Job ?? (
                            <Fragment>
                              <span className="team-text45">
                                Community Engagement Manager
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team-text36 body-small">
                        {props.member8Content ?? (
                          <Fragment>
                            <span className="team-text63">
                              Olivia engages with our community to promote
                              sustainability and organizes events to raise
                              awareness.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team-social-icons8">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .team-max-width {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .team-section-title {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team-content10 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team-content11 {
            gap: var(--dl-layout-space-sixunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team-content12 {
            gap: 64px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-row1 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .team-container1 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team-card1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team-placeholder-image1 {
            width: 80px;
            height: 80px;
          }
          .team-content13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team-title1 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team-text13 {
            font-style: normal;
            font-weight: 600;
          }
          .team-text14 {
            text-align: center;
          }
          .team-text15 {
            text-align: center;
          }
          .team-social-icons1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team-card2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team-placeholder-image2 {
            width: 80px;
            height: 80px;
          }
          .team-content14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team-title2 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team-text16 {
            font-style: normal;
            font-weight: 600;
          }
          .team-text17 {
            text-align: center;
          }
          .team-text18 {
            text-align: center;
          }
          .team-social-icons2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team-container2 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team-card3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team-placeholder-image3 {
            width: 80px;
            height: 80px;
          }
          .team-content15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team-title3 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team-text19 {
            font-style: normal;
            font-weight: 600;
          }
          .team-text20 {
            text-align: center;
          }
          .team-text21 {
            text-align: center;
          }
          .team-social-icons3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team-card4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team-placeholder-image4 {
            width: 80px;
            height: 80px;
          }
          .team-content16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team-title4 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team-text22 {
            font-style: normal;
            font-weight: 600;
          }
          .team-text23 {
            text-align: center;
          }
          .team-text24 {
            text-align: center;
          }
          .team-social-icons4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team-row2 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .team-container3 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team-card5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team-placeholder-image5 {
            width: 80px;
            height: 80px;
          }
          .team-content17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team-title5 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team-text25 {
            font-style: normal;
            font-weight: 600;
          }
          .team-text26 {
            text-align: center;
          }
          .team-text27 {
            text-align: center;
          }
          .team-social-icons5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team-card6 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team-placeholder-image6 {
            width: 80px;
            height: 80px;
          }
          .team-content18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team-title6 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team-text28 {
            font-style: normal;
            font-weight: 600;
          }
          .team-text29 {
            text-align: center;
          }
          .team-text30 {
            text-align: center;
          }
          .team-social-icons6 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team-container4 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team-card7 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team-placeholder-image7 {
            width: 80px;
            height: 80px;
          }
          .team-content19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team-title7 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team-text31 {
            font-style: normal;
            font-weight: 600;
          }
          .team-text32 {
            text-align: center;
          }
          .team-text33 {
            text-align: center;
          }
          .team-social-icons7 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team-card8 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team-placeholder-image8 {
            width: 80px;
            height: 80px;
          }
          .team-content20 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team-title8 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team-text34 {
            font-style: normal;
            font-weight: 600;
          }
          .team-text35 {
            text-align: center;
          }
          .team-text36 {
            text-align: center;
          }
          .team-social-icons8 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team-text37 {
            display: inline-block;
          }
          .team-text38 {
            display: inline-block;
          }
          .team-text39 {
            display: inline-block;
          }
          .team-text40 {
            display: inline-block;
          }
          .team-text41 {
            display: inline-block;
          }
          .team-text42 {
            display: inline-block;
          }
          .team-text43 {
            display: inline-block;
          }
          .team-text44 {
            display: inline-block;
          }
          .team-text45 {
            display: inline-block;
          }
          .team-text46 {
            display: inline-block;
          }
          .team-text47 {
            display: inline-block;
          }
          .team-text48 {
            display: inline-block;
          }
          .team-text49 {
            display: inline-block;
          }
          .team-text50 {
            display: inline-block;
          }
          .team-text51 {
            display: inline-block;
          }
          .team-text52 {
            display: inline-block;
          }
          .team-text53 {
            display: inline-block;
          }
          .team-text54 {
            display: inline-block;
          }
          .team-text55 {
            display: inline-block;
          }
          .team-text56 {
            display: inline-block;
          }
          .team-text57 {
            display: inline-block;
          }
          .team-text58 {
            display: inline-block;
          }
          .team-text59 {
            display: inline-block;
          }
          .team-text60 {
            display: inline-block;
          }
          .team-text61 {
            display: inline-block;
          }
          .team-text62 {
            display: inline-block;
          }
          .team-text63 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .team-content11 {
              gap: var(--dl-layout-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .team-row1 {
              align-items: center;
              flex-direction: column;
            }
            .team-row2 {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .team-text10 {
              text-align: center;
            }
            .team-text11 {
              text-align: center;
            }
            .team-text12 {
              text-align: center;
            }
            .team-container1 {
              flex-direction: column;
            }
            .team-container2 {
              flex-direction: column;
            }
            .team-container3 {
              flex-direction: column;
            }
            .team-container4 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Team.defaultProps = {
  member5Alt: 'Image of David Brown',
  member6Content: undefined,
  member4Job: undefined,
  member8Alt: 'Image of Olivia Martinez',
  member7: undefined,
  member6Alt: 'Image of Emily Davis',
  member2Job: undefined,
  member1Src:
    'https://images.unsplash.com/photo-1631426964394-06606872d836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDcxNDkyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  content2: undefined,
  member5: undefined,
  member2Content: undefined,
  member1Content: undefined,
  member5Src:
    'https://images.unsplash.com/photo-1605005196264-a86c94f48c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDcxNDkxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  member8Job: undefined,
  member2: undefined,
  member3Src:
    'https://images.unsplash.com/photo-1543269664-7eef42226a21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDcxNDkxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  member4Src:
    'https://images.unsplash.com/photo-1546961329-78bef0414d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDcxNDkxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  member8: undefined,
  heading1: undefined,
  member7Job: undefined,
  member8Src:
    'https://images.unsplash.com/photo-1636313857162-9cda5af2dc98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDcxNDkxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  member4Content: undefined,
  member1Alt: 'Image of John Doe',
  member1: undefined,
  member7Src:
    'https://images.unsplash.com/photo-1518211608833-067cb12ef566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDcxNDkyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  member5Job: undefined,
  member5Content: undefined,
  member1Job: undefined,
  member2Src:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDcxNDkyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  member4: undefined,
  member6: undefined,
  member6Job: undefined,
  member3Content: undefined,
  member3Alt: 'Image of Michael Johnson',
  member2Alt: 'Image of Jane Smith',
  member7Alt: 'Image of Alex Wilson',
  member6Src:
    'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDcxNDkxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  member7Content: undefined,
  member3: undefined,
  member3Job: undefined,
  member4Alt: 'Image of Sarah Lee',
  content1: undefined,
  member8Content: undefined,
}

Team.propTypes = {
  member5Alt: PropTypes.string,
  member6Content: PropTypes.element,
  member4Job: PropTypes.element,
  member8Alt: PropTypes.string,
  member7: PropTypes.element,
  member6Alt: PropTypes.string,
  member2Job: PropTypes.element,
  member1Src: PropTypes.string,
  content2: PropTypes.element,
  member5: PropTypes.element,
  member2Content: PropTypes.element,
  member1Content: PropTypes.element,
  member5Src: PropTypes.string,
  member8Job: PropTypes.element,
  member2: PropTypes.element,
  member3Src: PropTypes.string,
  member4Src: PropTypes.string,
  member8: PropTypes.element,
  heading1: PropTypes.element,
  member7Job: PropTypes.element,
  member8Src: PropTypes.string,
  member4Content: PropTypes.element,
  member1Alt: PropTypes.string,
  member1: PropTypes.element,
  member7Src: PropTypes.string,
  member5Job: PropTypes.element,
  member5Content: PropTypes.element,
  member1Job: PropTypes.element,
  member2Src: PropTypes.string,
  member4: PropTypes.element,
  member6: PropTypes.element,
  member6Job: PropTypes.element,
  member3Content: PropTypes.element,
  member3Alt: PropTypes.string,
  member2Alt: PropTypes.string,
  member7Alt: PropTypes.string,
  member6Src: PropTypes.string,
  member7Content: PropTypes.element,
  member3: PropTypes.element,
  member3Job: PropTypes.element,
  member4Alt: PropTypes.string,
  content1: PropTypes.element,
  member8Content: PropTypes.element,
}

export default Team
