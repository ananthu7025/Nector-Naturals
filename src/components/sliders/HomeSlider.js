import React from 'react'
import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const HomeSlider = () => {
    const honeyProducts = [
        {
          id: 1,
          image: "slider0.png",
        },
        {
          id: 2,
          image: 'Slider 2.png',
        },
      ];
    
      const settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
      };
  return (
    <div className="honey-shop-container">
      <Slick {...settings}>
        {honeyProducts.map(honeyProduct => (
          <div key={honeyProduct.id}>
            <img style={{height:"65vh",width:"inherit"}} src="./img/slider0.png" alt={honeyProduct.name} />
          </div>
        ))}
      </Slick>
    </div>
  )
}

export default HomeSlider;