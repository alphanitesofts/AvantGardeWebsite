// SliderComponent.js
import React from 'react';
import Slider from 'react-slick';
import { useGetArticlesQuery } from '../../features/articles/getArticlesApi';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem,updateQuantity } from '../../features/addToCart/addToCartSlice';
const imageUrl = 'https://avantgardeimages.alphanitesofts.net/';



const SliderComponent = ({ id }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        console.log("cart button chal raha hai");
    };
    const { data: articlesData, isError: articlesError, isLoading: articlesLoading } = useGetArticlesQuery(id);
    let articles;
    let slides = [];
    const handleProductClick = (item) => {
        // Navigate to the product description page with the corresponding product data
        navigate(`/product-description/${item.id}`);
    };
    let sectionTitle // Provide a default title
    if (articlesData) {
        articles = articlesData.data.filter((item) => item.sub_categorys_id === id);
        sectionTitle = articles[0].cat_name ? articles[0].cat_name : sectionTitle;

        // Populate slides only if articles is defined
        if (articles) {
            slides = articles.map((item) => (
                <div key={item.sub_categorys_id}>
                    <div className="col-lg-12 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.2s">
                        <div className="product-img">
                            {item.image != null ? (
                                <img src={`${imageUrl}${item.image?.[0]}`} alt="" style={{ height: "320px" }} />) : (
                                <img src="img/product-img/product-1.jpg" alt="" style={{ height: "320px" }} />
                            )}
                            <div className="product-quicview">
                                <a href="/Quickview" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                            </div>
                        </div>
                        <div className="product-description">
                            <Link to={`/product-description/${item.id}`} onClick={() => handleProductClick(item)}>
                                <p>{item.sub_cat_name}</p>
                            </Link>
                            <div className='d-flex align-items-center'>
                                <i className='fa-solid fa-star' />
                                <i className='fa-solid fa-star' />
                                <i className='fa-solid fa-star' />
                                <i className='fa-solid fa-star' />
                                <i className='fa-solid fa-star' />
                                <p className='ms-1'>&nbsp;2 reviews</p>
                            </div>
                            <div className='d-flex align-items-center mt-2'>
                                <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
                                <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
                            </div>
                            <a className="add-to-cart-btn" style={{ marginTop: '20px' }}
                                onClick={
                                    () => handleAddToCart(item)}>ADD TO CART</a>
                        </div>
                    </div>
                </div>
            ))
        }
    }
    const slideWidth = 250;
    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: Math.min(4, articles ? articles.length : 0),
        variableWidth: slides.length < 5 ? true : false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "ease-out",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(4, articles ? articles.length : 0),
                    slidesToScroll: Math.min(3, articles ? articles.length : 0),
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: Math.min(2, articles ? articles.length : 0),
                    slidesToScroll: Math.min(2, articles ? articles.length : 0),
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: Math.min(2, articles ? articles.length : 0),
                    slidesToScroll: Math.min(2, articles ? articles.length : 0),
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
                            <div key={index} style={{ width: slideWidth }}>
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
