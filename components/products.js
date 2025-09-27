import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Category from './category'


const Products = (props) => {
  return (
    <>
      <div className="products-gallery3 section-padding">
        <div className="products-max-width section-max-width">
{/* Title */}
          <div className="products-section-title">
            <h2 className="products-text10 heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="products-text92">Shopping</span>
                </Fragment>
              )}
            </h2>
            <span className="products-text11 body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="products-text69">Discover Our Products</span>
                </Fragment>
              )}
            </span>
          </div>
{/* Slider */}
          <div className="products-container10">
              <div
                data-thq="slider"
                data-loop="true"
                data-autoplay="true"
                data-navigation="true"
                data-pagination="true"
                data-pause-autoplay-on-mouse-enter="true"
                className="products-slider swiper"
              >
                <div
                  data-thq="slider-wrapper"
                  className="products-slider-wrapper swiper-wrapper"
                >
                  <div
                    data-thq="slider-slide"
                    className="products-slider-slide1 swiper-slide"
                  >
                    <img
                      alt={props.image1Alt6}
                      src={props.image2Src5}
                      className="products-image4 img-product"
                    />
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="products-slider-slide2 swiper-slide"
                  >
                    <img
                      alt={props.image2Alt5}
                      src={props.image1Src6}
                      className="products-image5 img-product"
                    />
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="products-slider-slide3 swiper-slide"
                  >
                    <img
                      alt={props.image3Alt5}
                      src={props.image3Src5}
                      className="products-image6 img-product"
                    />
                  </div>
                </div>
                {/* <div
                  data-thq="slider-button-prev"
                  className="swiper-button-prev products-slider-button-prev"
                ></div>
                <div
                  data-thq="slider-button-next"
                  className="swiper-button-next products-slider-button-next"
                ></div> */}
                {/* <div 
                  data-thq="slider-pagination"
                  className="products-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
                >
                  <div
                    data-thq="slider-pagination-bullet"
                    className="swiper-pagination-bullet swiper-pagination-bullet-active"
                  ></div>
                  <div
                    data-thq="slider-pagination-bullet"
                    className="swiper-pagination-bullet"
                  ></div>
                  <div
                    data-thq="slider-pagination-bullet"
                    className="swiper-pagination-bullet"
                  ></div>
                </div> */}
              </div>
          </div>
{/* Category */}
          <Category
            link1={
              <Fragment>
                <span className="products-text12">Category1</span>
              </Fragment>
            }
            link2={
              <Fragment>
                <span className="products-text13">Category2</span>
              </Fragment>
            }
            link3={
              <Fragment>
                <span className="products-text14">Category3</span>
              </Fragment>
            }
            link4={
              <Fragment>
                <span className="products-text15">Category4</span>
              </Fragment>
            }
            link5={
              <Fragment>
                <span className="products-text16">Category5</span>
              </Fragment>
            }
            rootClassName="categoryroot-class-name1"
          ></Category>
{/* Products */}









          <div className="products-content">

            <div className="products-container products-container">
              <img
                alt={props.image1Alt111}
                src={props.image1Src111}
                className="products-image115 img-product"
              />
              <span className="body-small">
                {props.image1Title110 ?? (
                  <Fragment>
                    <span className="products-text94">Organic Farming</span>
                  </Fragment>
                )}
              </span>
              <span className="products-text40 body-small">
                {props.image1Description110 ?? (
                  <Fragment>
                    <span className="products-text72">
                      Our organic farming practices ensure the highest quality
                      products.
                    </span>
                  </Fragment>
                )}
              </span>
              <button className="btn-product " >
                <span>Add to Cart</span>
                <svg class="cart-plus-icon" viewBox="0 0 24 24" width="22" height="22">
                  <path fill="white" d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-9.8-3.2c.1.2.2.4.3.5l.6.3h11.5c.7 0 1.4-.4 1.7-1l3.6-6.5c.1-.2.1-.4.1-.5 0-.6-.4-1-1-1H5.2l-.9-2H1v2h2l3.6 7.6-1.3 2.5c-.3.5-.1 1.1.4 1.3.1.1.3.1.5.1h12v-2H7.6c-.1 0-.3-.1-.4-.2z"/>
                </svg>
              </button>

            
            </div>
            <div className="products-container products-container">
              <img
                alt={props.image1Alt111}
                src={props.image1Src111}
                className="products-image115 img-product"
              />
              <span className="body-small">
                {props.image1Title110 ?? (
                  <Fragment>
                    <span className="products-text94">Organic Farming</span>
                  </Fragment>
                )}
              </span>
              <span className="products-text40 body-small">
                {props.image1Description110 ?? (
                  <Fragment>
                    <span className="products-text72">
                      Our organic farming practices ensure the highest quality
                      products.
                    </span>
                  </Fragment>
                )}
              </span>
              <button className="btn-product">add to cart</button>
                            
            </div>
            <div className="products-container products-container">
              <img
                alt={props.image1Alt111}
                src={props.image1Src111}
                className="products-image115 img-product"
              />
              <span className="body-small">
                {props.image1Title110 ?? (
                  <Fragment>
                    <span className="products-text94">Organic Farming</span>
                  </Fragment>
                )}
              </span>
              <span className="products-text40 body-small">
                {props.image1Description110 ?? (
                  <Fragment>
                    <span className="products-text72">
                      Our organic farming practices ensure the highest quality
                      products.
                    </span>
                  </Fragment>
                )}
              </span>
              <button className="btn-product">add to cart</button>

            
            </div>

            <div className="products-container products-container">
              <img
                alt={props.image1Alt111}
                src={props.image1Src111}
                className="products-image115 img-product"
              />
              <span className="body-small">
                {props.image1Title110 ?? (
                  <Fragment>
                    <span className="products-text94">Organic Farming</span>
                  </Fragment>
                )}
              </span>
              <span className="products-text40 body-small">
                {props.image1Description110 ?? (
                  <Fragment>
                    <span className="products-text72">
                      Our organic farming practices ensure the highest quality
                      products.
                    </span>
                  </Fragment>
                )}
              </span>
              <button className="btn-product">add to cart</button>

            
            </div>
          </div>

          <div className="products-content">

            <div className="products-container products-container">
              <img
                alt={props.image1Alt111}
                src={props.image1Src111}
                className="products-image115 img-product"
              />
              <span className="body-small">
                {props.image1Title110 ?? (
                  <Fragment>
                    <span className="products-text94">Organic Farming</span>
                  </Fragment>
                )}
              </span>
              <span className="products-text40 body-small">
                {props.image1Description110 ?? (
                  <Fragment>
                    <span className="products-text72">
                      Our organic farming practices ensure the highest quality
                      products.
                    </span>
                  </Fragment>
                )}
              </span>
              <button className="btn-product">add to cart</button>

            
            </div>
            <div className="products-container products-container">
              <img
                alt={props.image1Alt111}
                src={props.image1Src111}
                className="products-image115 img-product"
              />
              <span className="body-small">
                {props.image1Title110 ?? (
                  <Fragment>
                    <span className="products-text94">Organic Farming</span>
                  </Fragment>
                )}
              </span>
              <span className="products-text40 body-small">
                {props.image1Description110 ?? (
                  <Fragment>
                    <span className="products-text72">
                      Our organic farming practices ensure the highest quality
                      products.
                    </span>
                  </Fragment>
                )}
              </span>
              <button className="btn-product">add to cart</button>

            
            </div>
            <div className="products-container products-container">
              <img
                alt={props.image1Alt111}
                src={props.image1Src111}
                className="products-image115 img-product"
              />
              <span className="body-small">
                {props.image1Title110 ?? (
                  <Fragment>
                    <span className="products-text94">Organic Farming</span>
                  </Fragment>
                )}
              </span>
              <span className="products-text40 body-small">
                {props.image1Description110 ?? (
                  <Fragment>
                    <span className="products-text72">
                      Our organic farming practices ensure the highest quality
                      products.
                    </span>
                  </Fragment>
                )}
              </span>
              <button className="btn-product">add to cart</button>

            
            </div>

            <div className="products-container products-container">
              <img
                alt={props.image1Alt111}
                src={props.image1Src111}
                className="products-image115 img-product"
              />
              <span className="body-small">
                {props.image1Title110 ?? (
                  <Fragment>
                    <span className="products-text94">Organic Farming</span>
                  </Fragment>
                )}
              </span>
              <span className="products-text40 body-small">
                {props.image1Description110 ?? (
                  <Fragment>
                    <span className="products-text72">
                      Our organic farming practices ensure the highest quality
                      products.
                    </span>
                  </Fragment>
                )}
              </span>
              <button className="btn-product">add to cart</button>

            
            </div>
          </div>
          
          <div className="products-content">

<div className="products-container products-container">
  <img
    alt={props.image1Alt111}
    src={props.image1Src111}
    className="products-image115 img-product"
  />
  <span className="body-small">
    {props.image1Title110 ?? (
      <Fragment>
        <span className="products-text94">Organic Farming</span>
      </Fragment>
    )}
  </span>
  <span className="products-text40 body-small">
    {props.image1Description110 ?? (
      <Fragment>
        <span className="products-text72">
          Our organic farming practices ensure the highest quality
          products.
        </span>
      </Fragment>
    )}
  </span>
  <button className="btn-product">add to cart</button>


</div>
<div className="products-container products-container">
  <img
    alt={props.image1Alt111}
    src={props.image1Src111}
    className="products-image115 img-product"
  />
  <span className="body-small">
    {props.image1Title110 ?? (
      <Fragment>
        <span className="products-text94">Organic Farming</span>
      </Fragment>
    )}
  </span>
  <span className="products-text40 body-small">
    {props.image1Description110 ?? (
      <Fragment>
        <span className="products-text72">
          Our organic farming practices ensure the highest quality
          products.
        </span>
      </Fragment>
    )}
  </span>
  <button className="btn-product">add to cart</button>


</div>
<div className="products-container products-container">
  <img
    alt={props.image1Alt111}
    src={props.image1Src111}
    className="products-image115 img-product"
  />
  <span className="body-small">
    {props.image1Title110 ?? (
      <Fragment>
        <span className="products-text94">Organic Farming</span>
      </Fragment>
    )}
  </span>
  <span className="products-text40 body-small">
    {props.image1Description110 ?? (
      <Fragment>
        <span className="products-text72">
          Our organic farming practices ensure the highest quality
          products.
        </span>
      </Fragment>
    )}
  </span>
  <button className="btn-product">add to cart</button>


</div>

<div className="products-container products-container">
  <img
    alt={props.image1Alt111}
    src={props.image1Src111}
    className="products-image115 img-product"
  />
  <span className="body-small">
    {props.image1Title110 ?? (
      <Fragment>
        <span className="products-text94">Organic Farming</span>
      </Fragment>
    )}
  </span>
  <span className="products-text40 body-small">
    {props.image1Description110 ?? (
      <Fragment>
        <span className="products-text72">
          Our organic farming practices ensure the highest quality
          products.
        </span>
      </Fragment>
    )}
  </span>
  <button className="btn-product">add to cart</button>


</div>
          </div>

          <div className="products-content">

          <div className="products-container products-container">
            <img
              alt={props.image1Alt111}
              src={props.image1Src111}
              className="products-image115 img-product"
            />
            <span className="body-small">
              {props.image1Title110 ?? (
                <Fragment>
                  <span className="products-text94">Organic Farming</span>
                </Fragment>
              )}
            </span>
            <span className="products-text40 body-small">
              {props.image1Description110 ?? (
                <Fragment>
                  <span className="products-text72">
                    Our organic farming practices ensure the highest quality
                    products.
                  </span>
                </Fragment>
              )}
            </span>
            <button className="btn-product">add to cart</button>


          </div>
          <div className="products-container products-container">
            <img
              alt={props.image1Alt111}
              src={props.image1Src111}
              className="products-image115 img-product"
            />
            <span className="body-small">
              {props.image1Title110 ?? (
                <Fragment>
                  <span className="products-text94">Organic Farming</span>
                </Fragment>
              )}
            </span>
            <span className="products-text40 body-small">
              {props.image1Description110 ?? (
                <Fragment>
                  <span className="products-text72">
                    Our organic farming practices ensure the highest quality
                    products.
                  </span>
                </Fragment>
              )}
            </span>
            <button className="btn-product">add to cart</button>


          </div>
          <div className="products-container products-container">
            <img
              alt={props.image1Alt111}
              src={props.image1Src111}
              className="products-image115 img-product"
            />
            <span className="body-small">
              {props.image1Title110 ?? (
                <Fragment>
                  <span className="products-text94">Organic Farming</span>
                </Fragment>
              )}
            </span>
            <span className="products-text40 body-small">
              {props.image1Description110 ?? (
                <Fragment>
                  <span className="products-text72">
                    Our organic farming practices ensure the highest quality
                    products.
                  </span>
                </Fragment>
              )}
            </span>
            <button className="btn-product">add to cart</button>


          </div>

          <div className="products-container products-container">
            <img
              alt={props.image1Alt111}
              src={props.image1Src111}
              className="products-image115 img-product"
            />
            <span className="body-small">
              {props.image1Title110 ?? (
                <Fragment>
                  <span className="products-text94">Organic Farming</span>
                </Fragment>
              )}
            </span>
            <span className="products-text40 body-small">
              {props.image1Description110 ?? (
                <Fragment>
                  <span className="products-text72">
                    Our organic farming practices ensure the highest quality
                    products.
                  </span>
                </Fragment>
              )}
            </span>
            <button className="btn-product">add to cart</button>


          </div>
          </div>

          <div className="products-content">

          <div className="products-container products-container">
            <img
              alt={props.image1Alt111}
              src={props.image1Src111}
              className="products-image115 img-product"
            />
            <span className="body-small">
              {props.image1Title110 ?? (
                <Fragment>
                  <span className="products-text94">Organic Farming</span>
                </Fragment>
              )}
            </span>
            <span className="products-text40 body-small">
              {props.image1Description110 ?? (
                <Fragment>
                  <span className="products-text72">
                    Our organic farming practices ensure the highest quality
                    products.
                  </span>
                </Fragment>
              )}
            </span>
            <button className="btn-product">add to cart</button>


          </div>
          <div className="products-container products-container">
            <img
              alt={props.image1Alt111}
              src={props.image1Src111}
              className="products-image115 img-product"
            />
            <span className="body-small">
              {props.image1Title110 ?? (
                <Fragment>
                  <span className="products-text94">Organic Farming</span>
                </Fragment>
              )}
            </span>
            <span className="products-text40 body-small">
              {props.image1Description110 ?? (
                <Fragment>
                  <span className="products-text72">
                    Our organic farming practices ensure the highest quality
                    products.
                  </span>
                </Fragment>
              )}
            </span>
            <button className="btn-product">add to cart</button>


          </div>
          <div className="products-container products-container">
            <img
              alt={props.image1Alt111}
              src={props.image1Src111}
              className="products-image115 img-product"
            />
            <span className="body-small">
              {props.image1Title110 ?? (
                <Fragment>
                  <span className="products-text94">Organic Farming</span>
                </Fragment>
              )}
            </span>
            <span className="products-text40 body-small">
              {props.image1Description110 ?? (
                <Fragment>
                  <span className="products-text72">
                    Our organic farming practices ensure the highest quality
                    products.
                  </span>
                </Fragment>
              )}
            </span>
            <button className="btn-product">add to cart</button>


          </div>

          <div className="products-container products-container">
            <img
              alt={props.image1Alt111}
              src={props.image1Src111}
              className="products-image115 img-product"
            />
            <span className="body-small">
              {props.image1Title110 ?? (
                <Fragment>
                  <span className="products-text94">Organic Farming</span>
                </Fragment>
              )}
            </span>
            <span className="products-text40 body-small">
              {props.image1Description110 ?? (
                <Fragment>
                  <span className="products-text72">
                    Our organic farming practices ensure the highest quality
                    products.
                  </span>
                </Fragment>
              )}
            </span>
            <button className="btn-product">add to cart</button>


          </div>
          </div>










          <Link legacyBehavior href="/info-page" >
          <a>
          <button type="button" className="button products-button">
            <span>
              {props.button ?? (
                <Fragment>
                 
                  <span className="products-text83">Check Out</span>
                  
                </Fragment>
              )}
            </span>
          </button>
          </a>
                  </Link>
        </div>
      </div>
      <style jsx>
        {`
          .products-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .products-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .products-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .products-text10 {
            text-align: center;
          }
          .products-text11 {
            text-align: center;
          }
          .products-container10 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .products-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .products-slider {
            width: 100%;
            height: 550px;
            display: inline-block;
            border-radius: var(--dl-layout-radius-radius4);
            border-radius: var(--dl-layout-radius-imageradius);
          }
          .products-slider-wrapper {
            border-radius: var(--dl-layout-radius-imageradius);
            
          }
          .products-slider-slide1 {
            height: calc(100% - 20px);
            display: flex;
          }
          .products-image4 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .products-slider-slide2 {
            height: calc(100% - 20px);
            display: flex;
          }
          .products-image5 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .products-slider-slide3 {
            height: calc(100% - 20px);
            display: flex;
          }
          .products-image6 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .products-slider-pagination {
            display: block;
            bottom:30px;
          
          }
            .swiper-pagination-bullet{
            }
          .products-text12 {
            display: inline-block;
          }
          .products-text13 {
            display: inline-block;
          }
          .products-text14 {
            display: inline-block;
          }
          .products-text15 {
            display: inline-block;
          }
          .products-text16 {
            display: inline-block;
          }

          .products-container{
          position: relative;
          overflow: hidden;
          display: inline-block;
          width:100%;
          
          height:;
          }

          .products-container:hover {
            transform: scale(1.05);
            opacity: 0.9; 
            filter: brightness(1.1);
            cursor: pointer;
            opacity: 1;
            transition: 0.5s ease;
          }

          .img-product{
          border-radius:20px;
          
          }
          .btn-product{
          color:white;
            background-color:var(--dl-color-theme-primary1);
            border-radius:20px;
            padding:15px;
            transition: background 0.3s ease;
            }

            

          .btn-product:hover{
            cursor:pointer; 
            background:rgb(29, 41, 30);
            animation: gradientPulse 2s ease infinite;        
            }


        

          .img-overlay{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 300px;
            background: rgba(0, 0, 0, 0.5);
            opacity: 0;
            transition: 0.5s ease;
            border-radius:20px;
          }

          .img-overlay:hover{
           
          }


          .products-content2 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .products-container11 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .products-image110 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
          }
          .products-text18 {
            text-align: center;
          }
          .products-container12 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .products-image21 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
          }
          .products-text20 {
            text-align: center;
          }
          .products-container13 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .products-image31 {
            width: 100%;
            height: 300px;
            max-width: 600px;
          }
          .products-text22 {
            text-align: center;
          }
          .products-container14 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .products-image111 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
          }
          .products-text24 {
            text-align: center;
          }
          .products-content3 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .products-container15 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .products-image112 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
          }
          .products-text26 {
            text-align: center;
          }
          .products-container16 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .products-image22 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
          }
          .products-text28 {
            text-align: center;
          }
          .products-container17 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .products-image32 {
            width: 100%;
            height: 300px;
            max-width: 600px;
          }
          .products-text30 {
            text-align: center;
          }
          .products-container18 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .products-image113 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
          }
          .products-text32 {
            text-align: center;
          }
          .products-content {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .products-container19 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .products-image114 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
          }
          .products-text34 {
            text-align: center;
          }
          .products-container20 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .products-image23 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
          }
          .products-text36 {
            text-align: center;
          }
          .products-container21 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .products-image33 {
            width: 100%;
            height: 300px;
            max-width: 600px;
          }
          .products-text38 {
            text-align: center;
          }
          .products-container {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .products-image115 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
          }
          .products-text40 {
            text-align: center;
          }
          .products-content5 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .products-container23 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .products-image116 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
          }
          .products-text42 {
            text-align: center;
          }
          .products-container24 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .products-image24 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
          }
          .products-text44 {
            text-align: center;
          }
          .products-container25 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .products-image34 {
            width: 100%;
            height: 300px;
            max-width: 600px;
          }
          .products-text46 {
            text-align: center;
          }
          .products-container26 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .products-image117 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
          }
          .products-text48 {
            text-align: center;
          }
          .products-content6 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .products-container27 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .products-image118 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
          }
          .products-text50 {
            text-align: center;
          }
          .products-container28 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .products-image25 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
          }
          .products-text52 {
            text-align: center;
          }
          .products-container29 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .products-image35 {
            width: 100%;
            height: 300px;
            max-width: 600px;
          }
          .products-text54 {
            text-align: center;
          }
          .products-container30 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .products-image119 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
          }
          .products-text56 {
            text-align: center;
          }
          .products-text58 {
            display: inline-block;
          }
          .products-text59 {
            display: inline-block;
          }
          .products-text60 {
            display: inline-block;
          }
          .products-text61 {
            display: inline-block;
          }
          .products-text62 {
            display: inline-block;
          }
          .products-text63 {
            display: inline-block;
          }
          .products-text64 {
            display: inline-block;
          }
          .products-text65 {
            display: inline-block;
          }
          .products-text66 {
            display: inline-block;
          }
          .products-text67 {
            display: inline-block;
          }
          .products-text68 {
            display: inline-block;
          }
          .products-text69 {
            display: inline-block;
          }
          .products-text70 {
            display: inline-block;
          }
          .products-text71 {
            display: inline-block;
          }
          .products-text72 {
            display: inline-block;
          }
          .products-text73 {
            display: inline-block;
          }
          .products-text74 {
            display: inline-block;
          }
          .products-text75 {
            display: inline-block;
          }
          .products-text76 {
            display: inline-block;
          }
          .products-text77 {
            display: inline-block;
          }
          .products-text78 {
            display: inline-block;
          }
          .products-text79 {
            display: inline-block;
          }
          .products-text80 {
            display: inline-block;
          }
          .products-text81 {
            display: inline-block;
          }
          .products-text82 {
            display: inline-block;
          }
          .products-text83 {
            display: inline-block;
          }
          .products-text84 {
            display: inline-block;
          }
          .products-text85 {
            display: inline-block;
          }
          .products-text86 {
            display: inline-block;
          }
          .products-text87 {
            display: inline-block;
          }
          .products-text88 {
            display: inline-block;
          }
          .products-text89 {
            display: inline-block;
          }
          .products-text90 {
            display: inline-block;
          }
          .products-text91 {
            display: inline-block;
          }
          .products-text92 {
            display: inline-block;
          }
          .products-text93 {
            display: inline-block;
          }
          .products-text94 {
            display: inline-block;
          }
          .products-text95 {
            display: inline-block;
          }
          .products-text96 {
            display: inline-block;
          }
          .products-text97 {
            display: inline-block;
          }
          .products-text98 {
            display: inline-block;
          }
          .products-text99 {
            display: inline-block;
          }
          .products-text100 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .products-max-width {
              border-style: hidden;
              border-width: 0px;
            }
            .products-text11 {
              font-size: 30px;
              font-style: normal;
              font-weight: 500;
            }
            .products-container10 {
              border-radius: var(--dl-layout-radius-inputradius);
            }
            .products-image4 {
              border-radius: var(--dl-layout-radius-buttonradius);
            }
            .products-image5 {
              border-radius: var(--dl-layout-radius-buttonradius);
            }
            .products-image6 {
              border-radius: var(--dl-layout-radius-buttonradius);
            }
            .products-slider-button-prev {
              margin-left: var(--dl-layout-space-oneandhalfunits);
            }
            .products-slider-button-next {
              margin-right: var(--dl-layout-space-oneandhalfunits);
            }
            .products-button {
              color: #ffffff;
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-fiveunits);
              border-radius: var(--dl-layout-radius-buttonradius);
              padding-right: var(--dl-layout-space-fiveunits);
              padding-bottom: var(--dl-layout-space-unit);
              background-color: var(--dl-color-theme-primary1);
              margin-top:50px;
              border:hidden;
            }

           

            .products-text92 {
              font-size: 20px;
            }
          }
          @media (max-width: 991px) {
            .products-content1 {
              align-items: center;
              flex-direction: column;
            }
            .products-content2 {
              flex-wrap: wrap;
              align-items: center;
              
            }
            .products-container11 {
              width: 45%;
            }
              .products-slider {
              width: 100%;
             
              
            }
            .products-image110 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .products-container12 {
              width: 48%;
            }
            .products-image21 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .products-container13 {
              width: 48%;
            }
            .products-image31 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .products-container14 {
              width: 48%;
            }
            .products-image111 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .products-content3 {
              flex-wrap: wrap;
              align-items: center;
              flex-direction: column;
            }
            .products-container15 {
              width: 48%;
            }
            .products-image112 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .products-container16 {
              width: 48%;
            }
            .products-image22 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .products-container17 {
              width: 48%;
            }
            .products-image32 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .products-container18 {
              width: 48%;
            }
            .products-image113 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .products-content {
              flex-wrap: wrap;
              align-items: center;
              flex-direction: column;
            }
            .products-container19 {
              width: 48%;
            }
            .products-image114 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .products-container20 {
              width: 48%;
            }
            .products-image23 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .products-container21 {
              width: 48%;
            }
            .products-image33 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .products-container {
              width: 48%;
            }
            .products-image115 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .products-content5 {
              flex-wrap: wrap;
              align-items: center;
              flex-direction: column;
            }
            .products-container23 {
              width: 48%;
            }
            .products-image116 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .products-container24 {
              width: 48%;
            }
            .products-image24 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .products-container25 {
              width: 48%;
            }
            .products-image34 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .products-container26 {
              width: 48%;
            }
            .products-image117 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .products-content6 {
              flex-wrap: wrap;
              align-items: center;
              flex-direction: column;
            }
            .products-container27 {
              width: 48%;
            }
            .products-image118 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .products-container28 {
              width: 48%;
            }
            .products-image25 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .products-container29 {
              width: 48%;
            }
            .products-image35 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .products-container30 {
              width: 48%;
            }
            .products-image119 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
          }
          @media (max-width: 767px) {
            .products-slider {
              
            
              
              
            }
            .products-container11 {
              width: 90%;
            }
            .products-container12 {
              width: 90%;
            }
            .products-container13 {
              width: 90%;
            }
            .products-container14 {
              width: 90%;
            }
            .products-container15 {
              width: 90%;
            }
            .products-container16 {
              width: 90%;
            }
            .products-container17 {
              width: 90%;
            }
            .products-container18 {
              width: 90%;
            }
            .products-container19 {
              width: 90%;
            }
            .products-container20 {
              width: 90%;
            }
            .products-container21 {
              width: 90%;
            }
            .products-container {
              width: 90%;
            }
            .products-container23 {
              width: 90%;
            }
            .products-container24 {
              width: 90%;
            }
            .products-container25 {
              width: 90%;
            }
            .products-container26 {
              width: 90%;
            }
            .products-container27 {
              width: 90%;
            }
            .products-container28 {
              width: 90%;
            }
            .products-container29 {
              width: 90%;
            }
            .products-container30 {
              width: 90%;
            }
          }
          @media (max-width: 479px) {
            .products-slider {
              width:auto;
              height: 440px;
            }
          }
        `}
      </style>
    </>
  )
}

Products.defaultProps = {
  image1Title21: undefined,
  image2Alt12: 'Eco-Friendly Products Image',
  image3Title12: undefined,
  image1Title111: undefined,
  image2Title9: undefined,
  image2Title: undefined,
  image3Alt10: 'Green Chemistry Image',
  image1Title22: undefined,
  image2Src13:
    'https://images.unsplash.com/photo-1592721317326-dcdd2fca8b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NTc4NXw&ixlib=rb-4.0.3&q=80&w=600',
  image2Alt11: 'Eco-Friendly Products Image',
  image1Alt6: 'Organic fruits and vegetables',
  image1Description10: undefined,
  image1Description112: undefined,
  image1Src19:
    'https://images.unsplash.com/photo-1588713029525-f95e7652926d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NTc4Nnw&ixlib=rb-4.0.3&q=80&w=600',
  image1Description: undefined,
  image1Alt22: 'Organic Farming Image',
  image1Alt21: 'Organic Farming Image',
  image1Title20: undefined,
  image1Src6:
    'https://images.unsplash.com/photo-1631089865903-1894c87f08d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NjE2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Src10:
    'https://images.unsplash.com/photo-1592721317326-dcdd2fca8b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NTc4NXw&ixlib=rb-4.0.3&q=80&w=600',
  image2Description10: undefined,
  content1: undefined,
  image2Src5:
    'https://images.unsplash.com/photo-1707811179913-ddcc09aaf498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NjE2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt13: 'Eco-Friendly Products Image',
  image1Alt113: 'Organic Farming Image',
  image1Src22:
    'https://images.unsplash.com/photo-1588713029525-f95e7652926d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NTc4Nnw&ixlib=rb-4.0.3&q=80&w=600',
  image1Src113:
    'https://images.unsplash.com/photo-1588713029525-f95e7652926d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NTc4Nnw&ixlib=rb-4.0.3&q=80&w=600',
  image1Src111:
    'https://images.unsplash.com/photo-1588713029525-f95e7652926d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NTc4Nnw&ixlib=rb-4.0.3&q=80&w=600',
  image2Description9: undefined,
  image1Description1: undefined,
  image3Alt13: 'Green Chemistry Image',
  image1Description110: undefined,
  image3Description12: undefined,
  image1Alt1: 'Organic Farming Image',
  image2Description: undefined,
  image3Alt: 'Green Chemistry Image',
  image1Description111: undefined,
  image3Src10:
    'https://images.unsplash.com/photo-1589732559738-0b1fa45ca085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NTc4NXw&ixlib=rb-4.0.3&q=80&w=600',
  image3Alt5: 'Natural cleaning supplies',
  image1Src110:
    'https://images.unsplash.com/photo-1588713029525-f95e7652926d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NTc4Nnw&ixlib=rb-4.0.3&q=80&w=600',
  image3Title: undefined,
  image3Title9: undefined,
  image3Alt11: 'Green Chemistry Image',
  image1Alt112: 'Organic Farming Image',
  image1Title10: undefined,
  image3Description: undefined,
  image1Src20:
    'https://images.unsplash.com/photo-1588713029525-f95e7652926d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NTc4Nnw&ixlib=rb-4.0.3&q=80&w=600',
  image3Description10: undefined,
  image1Description22: undefined,
  image3Title11: undefined,
  button: undefined,
  image3Src5:
    'https://images.unsplash.com/photo-1588959570984-9f1e0e9a91a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NjE2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image1Description21: undefined,
  image2Title10: undefined,
  image1Alt110: 'Organic Farming Image',
  image3Description11: undefined,
  image1Description19: undefined,
  image3Src13:
    'https://images.unsplash.com/photo-1589732559738-0b1fa45ca085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NTc4NXw&ixlib=rb-4.0.3&q=80&w=600',
  image1Title1: undefined,
  image3Src:
    'https://images.unsplash.com/photo-1589732559738-0b1fa45ca085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NTc4NXw&ixlib=rb-4.0.3&q=80&w=600',
  image3Src11:
    'https://images.unsplash.com/photo-1589732559738-0b1fa45ca085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NTc4NXw&ixlib=rb-4.0.3&q=80&w=600',
  image1Src:
    'https://images.unsplash.com/photo-1708432331128-cfe5a2803781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMjM3N3w&ixlib=rb-4.0.3&q=80&w=600',
  image1Src21:
    'https://images.unsplash.com/photo-1588713029525-f95e7652926d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NTc4Nnw&ixlib=rb-4.0.3&q=80&w=600',
  image1Description20: undefined,
  image2Alt10: 'Eco-Friendly Products Image',
  image3Title10: undefined,
  image3Description9: undefined,
  heading1: undefined,
  image2Alt5: 'Sustainable beauty products',
  image1Title112: undefined,
  image2Alt: 'Eco-Friendly Products Image',
  image2Src12:
    'https://images.unsplash.com/photo-1592721317326-dcdd2fca8b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NTc4NXw&ixlib=rb-4.0.3&q=80&w=600',
  image1Src1:
    'https://images.unsplash.com/photo-1588713029525-f95e7652926d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NTc4Nnw&ixlib=rb-4.0.3&q=80&w=600',
  image1Title110: undefined,
  image3Alt12: 'Green Chemistry Image',
  image2Description12: undefined,
  image2Src11:
    'https://images.unsplash.com/photo-1592721317326-dcdd2fca8b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NTc4NXw&ixlib=rb-4.0.3&q=80&w=600',
  image1Src112:
    'https://images.unsplash.com/photo-1588713029525-f95e7652926d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NTc4Nnw&ixlib=rb-4.0.3&q=80&w=600',
  image2Description11: undefined,
  image2Title11: undefined,
  image1Alt19: 'Organic Farming Image',
  image1Alt111: 'Organic Farming Image',
  image3Src12:
    'https://images.unsplash.com/photo-1589732559738-0b1fa45ca085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NTc4NXw&ixlib=rb-4.0.3&q=80&w=600',
  image1Title19: undefined,
  image1Alt: 'Organic Farming Image',
  image2Src:
    'https://images.unsplash.com/photo-1592721317326-dcdd2fca8b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDQ0NTc4NXw&ixlib=rb-4.0.3&q=80&w=600',
  image2Title12: undefined,
  image1Alt20: 'Organic Farming Image',
  image1Title: undefined,
}

Products.propTypes = {
  image1Title21: PropTypes.element,
  image2Alt12: PropTypes.string,
  image3Title12: PropTypes.element,
  image1Title111: PropTypes.element,
  image2Title9: PropTypes.element,
  image2Title: PropTypes.element,
  image3Alt10: PropTypes.string,
  image1Title22: PropTypes.element,
  image2Src13: PropTypes.string,
  image2Alt11: PropTypes.string,
  image1Alt6: PropTypes.string,
  image1Description10: PropTypes.element,
  image1Description112: PropTypes.element,
  image1Src19: PropTypes.string,
  image1Description: PropTypes.element,
  image1Alt22: PropTypes.string,
  image1Alt21: PropTypes.string,
  image1Title20: PropTypes.element,
  image1Src6: PropTypes.string,
  image2Src10: PropTypes.string,
  image2Description10: PropTypes.element,
  content1: PropTypes.element,
  image2Src5: PropTypes.string,
  image2Alt13: PropTypes.string,
  image1Alt113: PropTypes.string,
  image1Src22: PropTypes.string,
  image1Src113: PropTypes.string,
  image1Src111: PropTypes.string,
  image2Description9: PropTypes.element,
  image1Description1: PropTypes.element,
  image3Alt13: PropTypes.string,
  image1Description110: PropTypes.element,
  image3Description12: PropTypes.element,
  image1Alt1: PropTypes.string,
  image2Description: PropTypes.element,
  image3Alt: PropTypes.string,
  image1Description111: PropTypes.element,
  image3Src10: PropTypes.string,
  image3Alt5: PropTypes.string,
  image1Src110: PropTypes.string,
  image3Title: PropTypes.element,
  image3Title9: PropTypes.element,
  image3Alt11: PropTypes.string,
  image1Alt112: PropTypes.string,
  image1Title10: PropTypes.element,
  image3Description: PropTypes.element,
  image1Src20: PropTypes.string,
  image3Description10: PropTypes.element,
  image1Description22: PropTypes.element,
  image3Title11: PropTypes.element,
  button: PropTypes.element,
  image3Src5: PropTypes.string,
  image1Description21: PropTypes.element,
  image2Title10: PropTypes.element,
  image1Alt110: PropTypes.string,
  image3Description11: PropTypes.element,
  image1Description19: PropTypes.element,
  image3Src13: PropTypes.string,
  image1Title1: PropTypes.element,
  image3Src: PropTypes.string,
  image3Src11: PropTypes.string,
  image1Src: PropTypes.string,
  image1Src21: PropTypes.string,
  image1Description20: PropTypes.element,
  image2Alt10: PropTypes.string,
  image3Title10: PropTypes.element,
  image3Description9: PropTypes.element,
  heading1: PropTypes.element,
  image2Alt5: PropTypes.string,
  image1Title112: PropTypes.element,
  image2Alt: PropTypes.string,
  image2Src12: PropTypes.string,
  image1Src1: PropTypes.string,
  image1Title110: PropTypes.element,
  image3Alt12: PropTypes.string,
  image2Description12: PropTypes.element,
  image2Src11: PropTypes.string,
  image1Src112: PropTypes.string,
  image2Description11: PropTypes.element,
  image2Title11: PropTypes.element,
  image1Alt19: PropTypes.string,
  image1Alt111: PropTypes.string,
  image3Src12: PropTypes.string,
  image1Title19: PropTypes.element,
  image1Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image2Title12: PropTypes.element,
  image1Alt20: PropTypes.string,
  image1Title: PropTypes.element,
}

export default Products
