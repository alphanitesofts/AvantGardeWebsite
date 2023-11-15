import React, { useEffect } from 'react';
import SliderComponent from './sliderComponent/SliderComponent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../app/features/categories/categoriesSlice';

const Portfolio = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);
    console.log(categories)
    useEffect(() => {
        dispatch(fetchCategories())
            .then((response) => console.log('API Response:', response))
            .catch((error) => console.error('Error fetching categories:', error));
    }, [dispatch]);

    // Check if categories.data is an object
    let newArrivalsItems;
    if (categories.isLoading) {
        return <div>Loading...</div>;
    }

    if (categories.isError) {
        return <div>Error fetching categories</div>;
    } else if (categories.data.Categorys) {
        console.log(categories.data.Categorys,"................................")
        newArrivalsItems = categories.data.Categorys?.map(item => ({
            id: item.category_id,
            cat_name: item.cat_name,
            added_by: item.added_by,
            created_at: item.created_at,
            updated_at: item.updated_at,
            username: item.username,
            imageUrl: 'img/product-img/product-1.jpg',
            link: item.cat_name.toLowerCase().replace(/\s+/g, '-'),
        }))
    }

    const slides = [
        <div>
            <div className="col-lg-12 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.2s">
                <div className="product-img">
                    <img src="img/product-img/product-1.jpg" alt="" />
                    <div className="product-quicview">
                        <a href="/Quickview" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                    </div>
                </div>
                <div className="product-description">
                    <p>Jeans midi cocktail dress</p>
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
        </div>,
        <div>
            <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.3s">
                <div className="product-img">
                    <img src="img/product-img/product-2.jpg" alt />
                    <div className="product-quicview">
                        <a href="/Quickview" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                    </div>
                </div>
                <div className="product-description">
                    <p>Jeans midi cocktail dress</p>
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
        </div>,
        <div>
            <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item access wow fadeInUpBig" data-wow-delay="0.4s">
                <div className="product-img">
                    <img src="img/product-img/product-3.jpg" alt />
                    <div className="product-quicview">
                        <a href="/Quickview" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                    </div>
                </div>
                <div className="product-description">
                    <p>Jeans midi cocktail dress</p>
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
        </div>,
        <div>
            <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item shoes wow fadeInUpBig" data-wow-delay="0.5s">
                <div className="product-img">
                    <img src="img/product-img/product-4.jpg" alt />
                    <div className="product-quicview">
                        <a href="/Quickview" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                    </div>
                </div>
                <div className="product-description">
                    <p>Jeans midi cocktail dress</p>
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
        </div>,
        <div>
            <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.6s">
                <div className="product-img">
                    <img src="img/product-img/product-5.jpg" alt />
                    <div className="product-quicview">
                        <a href="/Quickview" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                    </div>
                </div>
                <div className="product-description">
                    <p>Jeans midi cocktail dress</p>
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
        </div>,
        <div>
            <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item kids man wow fadeInUpBig" data-wow-delay="0.7s">
                <div className="product-img">
                    <img src="img/product-img/product-6.jpg" alt />
                    <div className="product-quicview">
                        <a href="/Quickview" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                    </div>
                </div>
                <div className="product-description">
                    <p>Jeans midi cocktail dress</p>
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
        // Add more slides as needed
    ];
    return (
        <>
        {
        newArrivalsItems.map((category, index) => (
            <SliderComponent key={index} sectionTitle={category.cat_name} slides={slides} />
        ))}
            {/* <SliderComponent sectionTitle="Hoddies" slides={slides} />
            <SliderComponent sectionTitle="Jogger Pants" slides={slides} />
            <SliderComponent sectionTitle="Sweatshirt" slides={slides} />
            <SliderComponent sectionTitle="Corduroy Shirts" slides={slides} />
            <SliderComponent sectionTitle="Flannel Shirts" slides={slides} />
            <SliderComponent sectionTitle="Flannel Shackets" slides={slides} />
            <SliderComponent sectionTitle="Oversized Graphic Tees" slides={slides} />
            <SliderComponent sectionTitle="Polo Shirts" slides={slides} />
            <SliderComponent sectionTitle="Casual Shirts" slides={slides} />
            <SliderComponent sectionTitle="T-Shirts" slides={slides} />
            <SliderComponent sectionTitle="Shorts" slides={slides} />
            <SliderComponent sectionTitle="Jeans" slides={slides} />
            <SliderComponent sectionTitle="Utility Cargos" slides={slides} />
            <SliderComponent sectionTitle="Premium Chinos" slides={slides} /> */}
        </>
        // <div>
        //     <section className="">
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-lg-12">
        //                     <div className="section_heading">
        //                         <h2>Oversized Graphic Tees</h2>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="container mb-0 pb-0">
        //             <div className="row">

        //                 <Slider {...settings}>
        //                     <div>
        //                         <div className="col-lg-12 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.2s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-1.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="/Quickview" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.3s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-2.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item access wow fadeInUpBig" data-wow-delay="0.4s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-3.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item shoes wow fadeInUpBig" data-wow-delay="0.5s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-4.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.6s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-5.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item kids man wow fadeInUpBig" data-wow-delay="0.7s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-6.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </Slider>


        //             </div>
        //         </div>
        //     </section>

        //     <section className=" m-0 p-0">
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-lg-12">
        //                     <div className="section_heading">
        //                         <h2>T-Shirts</h2>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="container mb-0 pb-0">
        //             <div className="row">
        //                 <Slider {...settings}>
        //                     <div>
        //                         <div className="col-lg-12 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.2s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-1.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.3s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-2.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item access wow fadeInUpBig" data-wow-delay="0.4s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-3.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item shoes wow fadeInUpBig" data-wow-delay="0.5s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-4.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.6s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-5.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item kids man wow fadeInUpBig" data-wow-delay="0.7s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-6.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </Slider>


        //             </div>
        //         </div>
        //     </section>
        //     <section className=" m-0 p-0">
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-lg-12">
        //                     <div className="section_heading">
        //                         <h2>Hoddies</h2>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="container mb-0 pb-0">
        //             <div className="row">
        //                 <Slider {...settings}>
        //                     <div>
        //                         <div className="col-lg-12 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.2s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-1.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.3s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-2.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item access wow fadeInUpBig" data-wow-delay="0.4s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-3.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item shoes wow fadeInUpBig" data-wow-delay="0.5s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-4.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.6s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-5.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item kids man wow fadeInUpBig" data-wow-delay="0.7s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-6.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </Slider>
        //             </div>
        //         </div>
        //     </section>
        //     <section className=" m-0 p-0">
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-lg-12">
        //                     <div className="section_heading">
        //                         <h2>Jogger Pants</h2>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="container mb-0 pb-0">
        //             <div className="row">
        //                 <Slider {...settings}>
        //                     <div>
        //                         <div className="col-lg-12 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.2s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-1.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.3s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-2.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item access wow fadeInUpBig" data-wow-delay="0.4s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-3.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item shoes wow fadeInUpBig" data-wow-delay="0.5s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-4.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.6s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-5.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item kids man wow fadeInUpBig" data-wow-delay="0.7s">
        //                             <div className="product-img">
        //                                 <img src="img/product-img/product-6.jpg" alt />
        //                                 <div className="product-quicview">
        //                                     <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-description">
        //                                 <p>Jeans midi cocktail dress</p>
        //                                 <div className='d-flex align-items-center'>
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <i className='fa-solid fa-star' />
        //                                     <p className='ms-1'>&nbsp;2 reviews</p>
        //                                 </div>
        //                                 <div className='d-flex align-items-center mt-2'>
        //                                     <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
        //                                     <h4 className="product-price" style={{ fontSize: '19px' }}>&nbsp; $39.90</h4>
        //                                 </div>
        //                                 <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </Slider>
        //             </div>
        //         </div>
        //     </section>
        // </div>
    )
}

export default Portfolio;