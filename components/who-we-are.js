import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const WhoWeAre = (props) => {
  return (
    <>
      <div className="who-we-are-container section-padding">
        <div className="who-we-are-max-width section-max-width flex-column">
          <div className="who-we-are-content1 flex-column">
            <ul className="who-we-are-ul1 flex-column"></ul>
          </div>
          <div className="who-we-are-content2 flex-column">
            <ul className="who-we-are-ul2 flex-column">
              <li className="who-we-are-li1 flex-column list-item">
                <h2 className="who-we-are-heading10 heading-2">
                  {props.heading10 ?? (
                    <Fragment>
                      <span className="who-we-are-text7">Who We Are</span>
                    </Fragment>
                  )}
                </h2>
                <p className="who-we-are-content10 body-small">
                  {props.content10 ?? (
                    <Fragment>
                      <span className="who-we-are-text1">
                        Lorem ipsum dolor sit amet. Vel dolores illum est
                        aperiam quis nam voluptatem quia et omnis autem qui
                        dolore ullam sed fugiat cumque! Qui accusamus assumenda
                        et molestias eius et error sunt. Id recusandae nostrum
                        ea officiis voluptatem in nisi consequatur sed quia
                        tenetur sit alias molestias qui illum soluta. Est
                        nesciunt perferendis eum sint rerum 33 cupiditate
                        dolorem id corrupti laboriosam ut debitis veniam ut
                        ipsam fugit vel sunt consequatur. Et nobis quasi et
                        cumque adipisci aut molestiae eligendi quo inventore
                        dicta ea suscipit sequi sed veritatis nemo.
                      </span>
                    </Fragment>
                  )}
                </p>
                <ul className="who-we-are-ul3 flex-column">
                  <li className="list-item">
                    <h3 className="heading-3">
                      {props.heading11 ?? (
                        <Fragment>
                          <span className="who-we-are-text5">General</span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="body-small">
                      {props.content11 ?? (
                        <Fragment>
                          <span className="who-we-are-text8">
                            Lorem ipsum dolor sit amet. Nam nihil facilis sit
                            consequuntur internos qui minima rerum ut molestias
                            laudantium aut iusto deserunt. Aut voluptatibus
                            excepturi qui officia laudantium est repellendus
                            tempore hic sunt debitis. Ut galisum tempore in enim
                            fugit eum pariatur possimus est tenetur nemo et sint
                            sint et dolores Quis. Aut illum perspiciatis rem
                            architecto culpa et fuga aliquid. Est omnis
                            praesentium ut nisi internos rem quod totam et
                            similique quis. Est tempore cumque aut recusandae
                            labore qui error molestiae et possimus quia! Eum
                            Quis asperiores non nihil tempora qui quia
                            voluptatem aut aspernatur aspernatur aut asperiores
                            labore et sapiente quaerat qui suscipit quia. Ea
                            nesciunt iste aut temporibus culpa sit dignissimos
                            quaerat eum architecto voluptatum et nemo velit At
                            harum harum.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                  <li className="list-item">
                    <h3 className="heading-3">
                      {props.heading12 ?? (
                        <Fragment>
                          <span className="who-we-are-text2">
                            Damages and issues
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="body-small">
                      {props.content12 ?? (
                        <Fragment>
                          <span className="who-we-are-text6">
                            Lorem ipsum dolor sit amet. Est vitae blanditiis ab
                            aliquam tempore aut ipsam iusto in sunt repellat ex
                            voluptatum inventore ab facilis galisum ea
                            consequatur consequuntur. Ab voluptas voluptatem eum
                            consequatur aspernatur non laboriosam atque est
                            labore asperiores a neque quos. Ea nemo modi hic
                            dicta saepe et veritatis maiores At praesentium
                            aliquid. Sed dolores architecto non doloribus quia
                            eos consectetur commodi non tenetur vitae est neque
                            omnis. Non perspiciatis velit At aliquam rerum ut
                            officiis ipsa id minima eius ut sapiente nobis et
                            nemo neque. Aut maiores tempora in officiis sunt eum
                            voluptatem tenetur sit iste reprehenderit ea nisi
                            dolor. Ea impedit omnis ad internos autem ut esse
                            sunt ad saepe maiores vel perferendis veritatis. Ex
                            magni fugiat ut reprehenderit laudantium sit galisum
                            ipsam eos tempora doloribus sed accusantium nobis
                            eum praesentium quod.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                  <li className="list-item">
                    <h3 className="heading-3">
                      {props.heading13 ?? (
                        <Fragment>
                          <span className="who-we-are-text3">Refunds</span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="body-small">
                      {props.content13 ?? (
                        <Fragment>
                          <span className="who-we-are-text4">
                            Lorem ipsum dolor sit amet. Est vitae blanditiis ab
                            aliquam tempore aut ipsam iusto in sunt repellat ex
                            voluptatum inventore ab facilis galisum ea
                            consequatur consequuntur. Ab voluptas voluptatem eum
                            consequatur aspernatur non laboriosam atque est
                            labore asperiores a neque quos. Ea nemo modi hic
                            dicta saepe et veritatis maiores At praesentium
                            aliquid. Sed dolores architecto non doloribus quia
                            eos consectetur commodi non tenetur vitae est neque
                            omnis. Non perspiciatis velit At aliquam rerum ut
                            officiis ipsa id minima eius ut sapiente nobis et
                            nemo neque. Aut maiores tempora in officiis sunt eum
                            voluptatem tenetur sit iste reprehenderit ea nisi
                            dolor. Ea impedit omnis ad internos autem ut esse
                            sunt ad saepe maiores vel perferendis veritatis. Ex
                            magni fugiat ut reprehenderit laudantium sit galisum
                            ipsam eos tempora doloribus sed accusantium nobis
                            eum praesentium quod.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .who-we-are-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .who-we-are-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .who-we-are-content1 {
            align-self: stretch;
            align-items: flex-start;
          }
          .who-we-are-ul1 {
            align-items: flex-start;
          }
          .who-we-are-content2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .who-we-are-ul2 {
            align-items: flex-start;
          }
          .who-we-are-li1 {
            align-items: flex-start;
          }
          .who-we-are-heading10 {
            align-self: center;
            text-align: center;
          }
          .who-we-are-content10 {
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .who-we-are-ul3 {
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
          }
          .who-we-are-text1 {
            display: inline-block;
          }
          .who-we-are-text2 {
            display: inline-block;
          }
          .who-we-are-text3 {
            display: inline-block;
          }
          .who-we-are-text4 {
            display: inline-block;
          }
          .who-we-are-text5 {
            display: inline-block;
          }
          .who-we-are-text6 {
            display: inline-block;
          }
          .who-we-are-text7 {
            display: inline-block;
          }
          .who-we-are-text8 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .who-we-are-ul3 {
              padding-left: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .who-we-are-ul3 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

WhoWeAre.defaultProps = {
  content10: undefined,
  heading12: undefined,
  heading13: undefined,
  content13: undefined,
  heading11: undefined,
  content12: undefined,
  heading10: undefined,
  content11: undefined,
}

WhoWeAre.propTypes = {
  content10: PropTypes.element,
  heading12: PropTypes.element,
  heading13: PropTypes.element,
  content13: PropTypes.element,
  heading11: PropTypes.element,
  content12: PropTypes.element,
  heading10: PropTypes.element,
  content11: PropTypes.element,
}

export default WhoWeAre
