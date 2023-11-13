import React from 'react'
import Slider from "react-slick";
import backgroundImage from '../SourceFiles/Images/bg-1.jpg'

const Hero = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "ease-out",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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
        <div>

            <section className="">
                <div className="">
                    <Slider {...settings}>
                        <div className="height-800 background-overlay background-hover-change"  >
                            <div className="single_slide h-100" style={{ backgroundImage: 'url(../img/bg-img/bg-1.jpg)' }}>
                                <div className="row h-100 align-items-center" >
                                    <div className="col-12">
                                        <div className="welcome_slide_text text-center" >
                                            <h6 data-animation="bounceInDown" data-delay={0} data-duration="500ms">* Only today we offer free shipping</h6>
                                            <h2 data-animation="fadeInUp" data-delay="500ms" data-duration="500ms">Fashion Trends</h2>
                                            <a href="#" className="btn karl-btn" data-animation="fadeInUp" data-delay="1s" data-duration="500ms">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="height-800 bg-img background-overlay" >
                            <div className="single_slide h-100" style={{ backgroundImage: 'url(../img/bg-img/bg-2.jpg)' }}>
                                <div className="row h-100 align-items-center">
                                    <div className="col-12">
                                        <div className="welcome_slide_text text-center">
                                            <h6 data-animation="fadeInDown" data-delay={0} data-duration="500ms">* Only today we offer free shipping</h6>
                                            <h2 data-animation="fadeInUp" data-delay="500ms" data-duration="500ms">Summer Collection</h2>
                                            <a href="#" className="btn karl-btn" data-animation="fadeInLeftBig" data-delay="1s" data-duration="500ms">Check Collection</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="height-800 bg-img background-overlay" >
                            <div className="single_slide h-100" style={{ backgroundImage: 'url(../img/bg-img/bg-3.jpg)' }}>
                                <div className="row h-100 align-items-center">
                                    <div className="col-12">
                                        <div className="welcome_slide_text text-center">
                                            <h6 data-animation="fadeInDown" data-delay={0} data-duration="500ms">* Only today we offer free shipping</h6>
                                            <h2 data-animation="bounceInDown" data-delay="500ms" data-duration="500ms">Women Fashion</h2>
                                            <a href="#" className="btn karl-btn" data-animation="fadeInRightBig" data-delay="1s" data-duration="500ms">Check Collection</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="height-800 bg-img background-overlay" >
                            <div className="single_slide h-100" style={{ backgroundImage: 'url(../img/bg-img/bg-4.jpg)' }}>
                                <div className="row h-100 align-items-center">
                                    <div className="col-12">
                                        <div className="welcome_slide_text text-center">
                                            <h6 data-animation="fadeInDown" data-delay={0} data-duration="500ms">* Only today we offer free shipping</h6>
                                            <h2 data-animation="bounceInDown" data-delay="500ms" data-duration="500ms">ECommerce</h2>
                                            <a href="#" className="btn karl-btn" data-animation="fadeInRightBig" data-delay="1s" data-duration="500ms">Check Collection</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>

        </div >
    )
}

export default Hero