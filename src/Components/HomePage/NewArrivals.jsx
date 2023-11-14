// import React from 'react'

// const NewArrivals = () => {
//     return (
//         <div>
//             <section className="new_arrivals_area section_padding_100_0 clearfix">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="section_heading">
//                                 <h2>Latest Collections</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container">
//                     <div className="row karl-new-arrivals">
//                         {/* Single gallery Item Start */}
//                         <div className="col-five single_gallery_item women wow fadeInUpBig" data-wow-delay="0.2s">
//                             {/* Product Image */}
//                             <a href='/'>
//                                 <div className="product-img">
//                                     <img src="img/product-img/product-1.jpg" alt />
//                                 </div>
//                                 <div className="product-description d-flex justify-content-between" >
//                                     <h3 style={{ fontFamily: "Futura sans-serif", fontSize: "1.3rem" }} >Hoodies / Sweatshirts </h3>
//                                     <i style={{  fontSize: "1.3rem" }} class="ti-arrow-right"></i>
//                                 </div>
//                             </a>
//                         </div>
//                         {/* Single gallery Item Start */}
//                         <div className=" col-five single_gallery_item women wow fadeInUpBig" data-wow-delay="0.3s">
//                             {/* Product Image */}
//                             <div className="product-img">
//                                 <img src="img/product-img/product-2.jpg" alt />
//                                 {/* <div className="product-quicview">
//                                     <a href="/Quickview" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
//                                 </div> */}
//                             </div>
//                             {/* Product Description */}
//                             {/* <div className="product-description">
//                                 <p>Jeans midi cocktail dress</p>
//                                 <h4 className="product-price">$39.90</h4> */}
//                             {/* Add to Cart */}
//                             {/* <a href="/Cart" className="add-to-cart-btn">ADD TO CART</a>
//                             </div> */}
//                         </div>
//                         {/* Single gallery Item Start */}
//                         <div className=" col-five single_gallery_item access wow fadeInUpBig" data-wow-delay="0.4s">
//                             {/* Product Image */}
//                             <div className="product-img">
//                                 <img src="img/product-img/product-3.jpg" alt />
//                                 {/* <div className="product-quicview">
//                                     <a href="/Quickview" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
//                                 </div> */}
//                             </div>
//                             {/* Product Description */}
//                             {/* <div className="product-description">
//                                 <p>Jeans midi cocktail dress</p>
//                                 <h4 className="product-price">$39.90</h4> */}
//                             {/* Add to Cart */}
//                             {/* <a href="/Cart" className="add-to-cart-btn">ADD TO CART</a>
//                             </div> */}
//                         </div>
//                         {/* Single gallery Item Start */}
//                         <div className=" col-five single_gallery_item shoes wow fadeInUpBig" data-wow-delay="0.5s">
//                             {/* Product Image */}
//                             <div className="product-img">
//                                 <img src="img/product-img/product-4.jpg" alt />
//                                 {/* <div className="product-quicview">
//                                     <a href="/Quickview" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
//                                 </div> */}
//                             </div>
//                             {/* Product Description */}
//                             {/* <div className="product-description">
//                                 <p>Jeans midi cocktail dress</p>
//                                 <h4 className="product-price">$39.90</h4> */}
//                             {/* Add to Cart */}
//                             {/* <a href="/Cart" className="add-to-cart-btn">ADD TO CART</a>
//                             </div> */}
//                         </div>
//                         {/* Single gallery Item Start */}
//                         <div className=" col-five single_gallery_item women wow fadeInUpBig" data-wow-delay="0.6s">
//                             {/* Product Image */}
//                             <div className="product-img">
//                                 <img src="img/product-img/product-5.jpg" alt />
//                                 {/* <div className="product-quicview">
//                                     <a href="/Quickview" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
//                                 </div> */}
//                             </div>
//                             {/* Product Description */}
//                             {/* <div className="product-description">
//                                 <p>Jeans midi cocktail dress</p>
//                                 <h4 className="product-price">$39.90</h4> */}
//                             {/* Add to Cart */}
//                             {/* <a href="/Cart" className="add-to-cart-btn">ADD TO CART</a>
//                             </div> */}
//                         </div>
//                         {/* Single gallery Item */}
//                         <div className=" col-five single_gallery_item kids man wow fadeInUpBig" data-wow-delay="0.7s">
//                             {/* Product Image */}
//                             <div className="product-img">
//                                 <img src="img/product-img/product-6.jpg" alt />
//                                 {/* <div className="product-quicview">
//                                     <a href="/Quickview" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
//                                 </div> */}
//                             </div>
//                             {/* Product Description */}
//                             {/* <div className="product-description">
//                                 <p>Jeans midi cocktail dress</p>
//                                 <h4 className="product-price">$39.90</h4> */}
//                             {/* Add to Cart */}
//                             {/* <a href="/Cart" className="add-to-cart-btn">ADD TO CART</a>
//                             </div> */}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//         </div>
//     )
// }

// export default NewArrivals

import React from 'react';
import { Link } from 'react-router-dom';

const NewArrivals = ({ items }) => {
    return (
        <div>
            <section className="new_arrivals_area section_padding_100_0 clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section_heading">
                                <h2>Latest Collections</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row karl-new-arrivals">
                        {items.map((item, index) => (
                            <div key={index} className="col-five single_gallery_item women wow fadeInUpBig" data-wow-delay={`0.${index + 1}s`}>
                                <Link to={`/categories/${item.link}`}>
                                    <div className="product-img">
                                        <img src={item.imageUrl} alt={item.category} />
                                    </div>
                                    <div className="product-description d-flex justify-content-between">
                                        <h3 style={{ fontFamily: "Futura sans-serif", fontSize: "1.3rem" }}>{item.category}</h3>
                                        <i style={{ fontSize: "1.3rem" }} className="ti-arrow-right"></i>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewArrivals;

