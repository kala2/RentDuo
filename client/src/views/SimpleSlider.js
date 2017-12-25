import React, { Component } from 'react';
import Slider from 'react-slick';

export default class SimpleSlider extends Component {
    render() {

      var settings = {
        dots: true,
        // nextArrow: true,
        // prevArrow: true,
        infinite: true,
        arrows: true,
        draggable: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed:6000,
        autoplay: true,
        lazyLoad: true,
        swipeToSlide: true,
        easing: 'linear',
        fade: true
      };
      
      return (
        <Slider {...settings}>
          <div><div className="slider1"></div></div>
          <div><div className="slider2"></div></div>
          <div><div className="slider3"></div></div>
          <div><div className="slider4"></div></div>
          <div><div className="slider5"></div></div>
        </Slider>
      );
    }
  }
