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
import { useGetCategoriesQuery } from '../features/categories/categoriesSlice';

const NewArrivals = () => {
    const { data, isError, isLoading } = useGetCategoriesQuery();
    console.log('Data:', data);
    console.log('Is Loading:', isLoading);
    console.log('Error:', isError);
    let newArrivalsItems;
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching categories</div>;
    } else if (data) {
        console.log(data, "errror")
        newArrivalsItems = data.map(item => ({
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
                        {newArrivalsItems.map((item, index) => (
                            <div key={index} className="col-five single_gallery_item women wow fadeInUpBig" data-wow-delay={`0.${index + 1}s`}>
                                <Link to={`/categories/${item.link}`}>
                                    <div className="product-img">
                                        <img src={item.imageUrl} alt={item.cat_name} />
                                    </div>
                                    <div className="product-description d-flex justify-content-between">
                                        <h3 style={{ fontFamily: "Futura sans-serif", fontSize: "1.3rem" }}>{item.cat_name}</h3>
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

