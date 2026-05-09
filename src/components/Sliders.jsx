import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Backimg from '../assets/Background22.png';

const Sliders = ()=> {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 300,
    cssEase: "linear"
  };
  return (
    <div className='bg-primary py-7.5'>
      <Slider {...settings}>
        <div>
          <img src={Backimg} />
        </div>
        <div>
          <img src={Backimg} />
        </div>
        <div>
          <img src={Backimg} />
        </div>
      </Slider>
    </div>
  )
}

export default Sliders
