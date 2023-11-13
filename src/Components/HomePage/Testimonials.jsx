import React from 'react'

// Crousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "ease-out",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
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
            <section className="karl-testimonials-area section_padding_100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_heading text-center">
                                <h2>Testimonials</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8">

                            <div className="karl-testimonials-slides ">
                                <Slider {...settings}>
                                    <div>
                                        <div className="single-testimonial-area text-center">
                                            <span className="quote">"</span>
                                            <h6>Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. </h6>
                                            <div className="testimonial-info d-flex align-items-center justify-content-center">
                                                <div className="tes-thumbnail">
                                                    <img src="img/bg-img/tes-1.jpg" alt />
                                                </div>
                                                <div className="testi-data">
                                                    <p>Michelle Williams</p>
                                                    <span>Client, Los Angeles</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="single-testimonial-area text-center">
                                            <span className="quote">"</span>
                                            <h6>Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. </h6>
                                            <div className="testimonial-info d-flex align-items-center justify-content-center">
                                                <div className="tes-thumbnail">
                                                    <img src="img/bg-img/tes-1.jpg" alt />
                                                </div>
                                                <div className="testi-data">
                                                    <p>Michelle Williams</p>
                                                    <span>Client, Los Angeles</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="single-testimonial-area text-center">
                                            <span className="quote">"</span>
                                            <h6>Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. </h6>
                                            <div className="testimonial-info d-flex align-items-center justify-content-center">
                                                <div className="tes-thumbnail">
                                                    <img src="img/bg-img/tes-1.jpg" alt />
                                                </div>
                                                <div className="testi-data">
                                                    <p>Michelle Williams</p>
                                                    <span>Client, Los Angeles</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="single-testimonial-area text-center">
                                            <span className="quote">"</span>
                                            <h6>Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. </h6>
                                            <div className="testimonial-info d-flex align-items-center justify-content-center">
                                                <div className="tes-thumbnail">
                                                    <img src="img/bg-img/tes-1.jpg" alt />
                                                </div>
                                                <div className="testi-data">
                                                    <p>Michelle Williams</p>
                                                    <span>Client, Los Angeles</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials