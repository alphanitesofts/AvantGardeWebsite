// SliderComponent.js
import React from 'react';
import Slider from 'react-slick';
import { useGetArticlesQuery } from '../../features/articles/getArticlesApi';
import { Link, useNavigate } from 'react-router-dom';
const imageUrl='https://avantgardeimages.alphanitesofts.net/'
const SliderComponent = ({ id, sectionTitle }) => {

    const navigate = useNavigate();
    console.log(id, 'key')
    const { data: articlesData, isError: articlesError, isLoading: articlesLoading } = useGetArticlesQuery(id);
    console.log(articlesData, 'articles data at id 1.................');
    let articles;
    let slides = [];
    const handleProductClick = (item) => {
        console.log(item.sub_categorys_id, 'id........')
        // Navigate to the product description page with the corresponding product data
        navigate(`/product-description/${item.sub_categorys_id}`);
        localStorage.setItem("product", JSON.stringify({item})
            // JSON.stringify({
            //     sub_categorys_id: item.sub_categorys_id,
            //     name: item.cat_name,
            //     price: item.price,
            //     image: item.image,
            //     category_id: item.category_id,
            //     quantity: item.quantity,
            //     discount: item.discount,
            //     description: item.description,
            //     size: item.size,
            //     color: item.color,
            //     type: item.type,
            //     status: item.status,
            //     createdAt: item.createdAt,
            //     is_live:item.is_live,
            //     on_sale:item.on_sale,
            //     size_chart_img:item.size_chart_img,
            //     sub_cat_name:item.sub_cat_name
            //     })
        )
        console.log(item, 'item data')
    };
    if (articlesData) {
        articles = articlesData.data.filter((item) => item.sub_categorys_id === id);

        // Populate slides only if articles is defined
        if (articles) {
            slides = articles.map((item) => (
                <div key={item.sub_categorys_id}>
                    <div className="col-lg-12 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.2s">
                        <div className="product-img">
                            {item.image !=null?(
                            <img src={`${imageUrl}${item.image?.[0]}`} alt=""style={{height:"320px"}} />):(
                                <img src="img/product-img/product-1.jpg" alt="" style={{height:"320px"}}/>
                            )}
                            <div className="product-quicview">
                                <a href="/Quickview" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                            </div>
                        </div>
                        <div className="product-description">
                            <Link to={`/product-description/${item.id}`} onClick={() => handleProductClick(item)}>
                                <p>{item.cat_name}</p>
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
                            <a href="/Cart" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
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
        slidesToShow: Math.min(5, articles ? articles.length : 0),
        variableWidth: slides.length < 5 ? true : false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "ease-out",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(5, articles ? articles.length : 0),
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
