// SliderComponent.js
import React from 'react';
import Slider from 'react-slick';

const SliderComponent = ({ sectionTitle, slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "ease-out",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
  };

  return (
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_heading">
              <h2>{sectionTitle}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-0 pb-0">
        <div className="row">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index}>
                {/* Your individual slide content here */}
                {slide}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SliderComponent;
