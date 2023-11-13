import React from 'react'
import Slider from "react-slick";

const Blogs = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 3,
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
        <div>
            <section className="new_arrivals_area section_padding_100_0 clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section_heading text-center">
                                <h2>Our Blogs</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blog-home5 container">
                    <div className="row mb-5">

                        <Slider {...settings}>
                            <div className="col-lg-12">
                                <div className="card b-h-box position-relative font-14 border-0 mb-4">
                                    {/* src={`${Imagesurl}${items.item_image}`} */}
                                    <img className="card-img img-fluid" src="img/product-img/product-1.jpg" alt="Card image" />
                                    <div className="card-img-overlay overflow-hidden">
                                        <div className="d-flex align-items-center">
                                            <span className="bg-danger-gradiant badge overflow-hidden text-white px-3 py-1 font-weight-normal">Lahore, Pakistan</span>
                                            <div className="ml-2">
                                                <span className="ml-2">23-5-2023</span>
                                            </div>
                                        </div>
                                        <h5 className="card-title my-3 font-weight-normal">Hello World</h5>
                                        <p className="card-text text-dark mt-0 pt-0" style={{ fontSize: '12px', lineHeight: '17px' }}>Our Navy White Raglan Flex Polo Shirt features a sporty and stylish design that is perfect for any occasion. The raglan sleeves provide a comfortable and modern fit, while the navy and white color scheme add a classic touch.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="card b-h-box position-relative font-14 border-0 mb-4">
                                    {/* src={`${Imagesurl}${items.item_image}`} */}
                                    <img className="card-img img-fluid" src="img/product-img/product-2.jpg" alt="Card image" />
                                    <div className="card-img-overlay overflow-hidden">
                                        <div className="d-flex align-items-center">
                                            <span className="bg-danger-gradiant badge overflow-hidden text-white px-3 py-1 font-weight-normal">Lahore, Pakistan</span>
                                            <div className="ml-2">
                                                <span className="ml-2">23-5-2023</span>
                                            </div>
                                        </div>
                                        <h5 className="card-title my-3 font-weight-normal">Hello World</h5>
                                        <p className="card-text text-dark mt-0 pt-0" style={{ fontSize: '12px', lineHeight: '17px' }}>Our Navy White Raglan Flex Polo Shirt features a sporty and stylish design that is perfect for any occasion. The raglan sleeves provide a comfortable and modern fit, while the navy and white color scheme add a classic touch.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="card b-h-box position-relative font-14 border-0 mb-4">
                                    <img className="card-img" src="img/product-img/product-3.jpg" alt="Card image" />
                                    <div className="card-img-overlay overflow-hidden">
                                        <div className="d-flex align-items-center">
                                            <span className="bg-danger-gradiant badge overflow-hidden text-white px-3 py-1 font-weight-normal">Islambad, Pak</span>
                                            <div className="ml-2">
                                                <span className="ml-2">Feb 18, 2018</span>
                                            </div>
                                        </div>
                                        <h5 className="card-title my-3 font-weight-normal">Help out the people who really need it on time.</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="card b-h-box position-relative font-14 border-0 mb-4">
                                    {/* src={`${Imagesurl}${items.item_image}`} */}
                                    <img className="card-img img-fluid" src="img/product-img/product-4.jpg" alt="Card image" />
                                    <div className="card-img-overlay overflow-hidden">
                                        <div className="d-flex align-items-center">
                                            <span className="bg-danger-gradiant badge overflow-hidden text-white px-3 py-1 font-weight-normal">Lahore, Pakistan</span>
                                            <div className="ml-2">
                                                <span className="ml-2">23-5-2023</span>
                                            </div>
                                        </div>
                                        <h5 className="card-title my-3 font-weight-normal">Hello World</h5>
                                        <p className="card-text text-dark mt-0 pt-0" style={{ fontSize: '12px', lineHeight: '17px' }}>Our Navy White Raglan Flex Polo Shirt features a sporty and stylish design that is perfect for any occasion. The raglan sleeves provide a comfortable and modern fit, while the navy and white color scheme add a classic touch.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="card b-h-box position-relative font-14 border-0 mb-4">
                                    <img className="card-img" src="img/product-img/product-5.jpg" alt="Card image" />
                                    <div className="card-img-overlay overflow-hidden">
                                        <div className="d-flex align-items-center">
                                            <span className="bg-danger-gradiant badge overflow-hidden text-white px-3 py-1 font-weight-normal">Charity, Ngo</span>
                                            <div className="ml-2">
                                                <span className="ml-2">Feb 18, 2018</span>
                                            </div>
                                        </div>
                                        <h5 className="card-title my-3 font-weight-normal">Help out the people who really need it on time.</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blogs