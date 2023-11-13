import React, { useState } from 'react'
import DiscountArea from '../HomePage/DiscountArea'

const ShopNow = () => {
    const [range, setRange] = useState(750)
    return (
        <div>

            <div>
                <DiscountArea />
                <section className="shop_grid_area mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-4 col-lg-3">
                                <div className="shop_sidebar_area">
                                    <div className="widget catagory mb-50">
                                        {/*  Side Nav  */}
                                        <div className="nav-side-menu">
                                            <h6 className="mb-0">Catagories</h6>
                                            <div className="menu-list">
                                                <ul id="menu-content2" className="menu-content collapse out">
                                                    {/* Single Item */}
                                                    <li data-toggle="collapse" data-target="#women2">
                                                        <a >Woman wear</a>
                                                        <ul className="sub-menu collapse show" id="women2">
                                                            <li><a >Midi Dresses</a></li>
                                                            <li><a >Maxi Dresses</a></li>
                                                            <li><a >Prom Dresses</a></li>
                                                            <li><a >Little Black Dresses</a></li>
                                                            <li><a >Mini Dresses</a></li>
                                                        </ul>
                                                    </li>
                                                    {/* Single Item */}
                                                    <li data-toggle="collapse" data-target="#man2" className="collapsed">
                                                        <a >Man Wear</a>
                                                        <ul className="sub-menu collapse" id="man2">
                                                            <li><a >Man Dresses</a></li>
                                                            <li><a >Man Black Dresses</a></li>
                                                            <li><a >Man Mini Dresses</a></li>
                                                        </ul>
                                                    </li>
                                                    {/* Single Item */}
                                                    <li data-toggle="collapse" data-target="#kids2" className="collapsed">
                                                        <a >Children</a>
                                                        <ul className="sub-menu collapse" id="kids2">
                                                            <li><a >Children Dresses</a></li>
                                                            <li><a >Mini Dresses</a></li>
                                                        </ul>
                                                    </li>
                                                    {/* Single Item */}
                                                    <li data-toggle="collapse" data-target="#bags2" className="collapsed">
                                                        <a >Bags &amp; Purses</a>
                                                        <ul className="sub-menu collapse" id="bags2">
                                                            <li><a >Bags</a></li>
                                                            <li><a >Purses</a></li>
                                                        </ul>
                                                    </li>
                                                    {/* Single Item */}
                                                    <li data-toggle="collapse" data-target="#eyewear2" className="collapsed">
                                                        <a >Eyewear</a>
                                                        <ul className="sub-menu collapse" id="eyewear2">
                                                            <li><a >Eyewear Style 1</a></li>
                                                            <li><a >Eyewear Style 2</a></li>
                                                            <li><a >Eyewear Style 3</a></li>
                                                        </ul>
                                                    </li>
                                                    {/* Single Item */}
                                                    <li data-toggle="collapse" data-target="#footwear2" className="collapsed">
                                                        <a >Footwear</a>
                                                        <ul className="sub-menu collapse" id="footwear2">
                                                            <li><a >Footwear 1</a></li>
                                                            <li><a >Footwear 2</a></li>
                                                            <li><a >Footwear 3</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget price mb-50">
                                        <h6 className="widget-title mb-30">Filter by Price</h6>
                                        <div className="widget-desc">
                                            <div className="slider-range">
                                                <input
                                                    type="range"
                                                    className="form-range"
                                                    onChange={(e) => setRange(e.target.value)}
                                                    id="customRange1"
                                                    min="750"
                                                    max="4500"
                                                    step="50"
                                                    style={{
                                                        '--bs-thumb-color': 'black',
                                                        '--bs-track-color': 'gray',
                                                    }}
                                                />
                                                {/* <div className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min={0} data-value-max={1350} data-label-result="Price:">
                                                    <div className="ui-slider-range ui-widget-header ui-corner-all" />
                                                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} />
                                                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} />
                                                </div> */}
                                                <p>{range - 250} - {Number(range) + 250}</p>
                                                <div className="range-price">Price: 500 - 4500</div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="widget color mb-70">
                                        <h6 className="widget-title mb-30">Filter by Color</h6>
                                        <div className="widget-desc">
                                            <ul className="d-flex justify-content-between">
                                                <li className="gray"><a ><span>(3)</span></a></li>
                                                <li className="red"><a ><span>(25)</span></a></li>
                                                <li className="yellow"><a ><span>(112)</span></a></li>
                                                <li className="green"><a ><span>(72)</span></a></li>
                                                <li className="teal"><a ><span>(9)</span></a></li>
                                                <li className="cyan"><a ><span>(29)</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget size mb-50">
                                        <h6 className="widget-title mb-30">Filter by Size</h6>
                                        <div className="widget-desc">
                                            <ul className="d-flex justify-content-between">
                                                <li><a >XS</a></li>
                                                <li><a >S</a></li>
                                                <li><a >M</a></li>
                                                <li><a >L</a></li>
                                                <li><a >XL</a></li>
                                                <li><a >XXL</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget recommended">
                                        <h6 className="widget-title mb-30">Hot in the market</h6>
                                        <div className="widget-desc">
                                            {/* Single Recommended Product */}
                                            <div className="single-recommended-product d-flex mb-30">
                                                <div className="single-recommended-thumb mr-3">
                                                    <img src="img/product-img/product-10.jpg" alt />
                                                </div>
                                                <div className="single-recommended-desc">
                                                    <h6>Men’s T-shirt</h6>
                                                    <p style={{fontSize:'12px', textDecoration:'line-through', marginBottom:'0px'}}>$ 39.99</p>
                                                    <p>$ 39.99</p>
                                                </div>
                                            </div>
                                            {/* Single Recommended Product */}
                                            <div className="single-recommended-product d-flex mb-30">
                                                <div className="single-recommended-thumb mr-3">
                                                    <img src="img/product-img/product-11.jpg" alt />
                                                </div>
                                                <div className="single-recommended-desc">
                                                    <h6>Blue mini top</h6>
                                                    <p style={{fontSize:'12px', textDecoration:'line-through', marginBottom:'0px'}}>$ 39.99</p>

                                                    <p>$ 19.99</p>
                                                </div>
                                            </div>
                                            {/* Single Recommended Product */}
                                            <div className="single-recommended-product d-flex">
                                                <div className="single-recommended-thumb mr-3">
                                                    <img src="img/product-img/product-12.jpg" alt />
                                                </div>
                                                <div className="single-recommended-desc">
                                                    <h6>Women’s T-shirt</h6>
                                                    <p style={{fontSize:'12px', textDecoration:'line-through', marginBottom:'0px'}}>$ 39.99</p>
                                                    <p>$ 39.99</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-8 col-lg-9">
                                <div className="shop_grid_product_area">
                                    <div className="row">
                                        {/* Single gallery Item */}
                                        <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.2s">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-1.jpg" alt />
                                                <div className="product-quicview">
                                                    <a data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                                                </div>
                                            </div>
                                            {/* Product Description */}
                                            <div className="product-description">
                                                <p className='item-title'>Jeans midi cocktail dress</p>
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
                                                <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
                                            </div>
                                        </div>
                                        {/* Single gallery Item */}
                                        <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.3s">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-2.jpg" alt />
                                                <div className="product-quicview">
                                                    <a data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                                                </div>
                                            </div>
                                            {/* Product Description */}
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
                                                <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
                                            </div>
                                        </div>
                                        {/* Single gallery Item */}
                                        <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.4s">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-3.jpg" alt />
                                                <div className="product-quicview">
                                                    <a data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                                                </div>
                                            </div>
                                            {/* Product Description */}
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
                                                <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
                                            </div>
                                        </div>
                                        {/* Single gallery Item */}
                                        <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.5s">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-4.jpg" alt />
                                                <div className="product-quicview">
                                                    <a data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                                                </div>
                                            </div>
                                            {/* Product Description */}
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
                                                <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
                                            </div>
                                        </div>
                                        {/* Single gallery Item */}
                                        <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.6s">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-5.jpg" alt />
                                                <div className="product-quicview">
                                                    <a data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                                                </div>
                                            </div>
                                            {/* Product Description */}
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
                                                <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
                                            </div>
                                        </div>
                                        {/* Single gallery Item */}
                                        <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.7s">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-6.jpg" alt />
                                                <div className="product-quicview">
                                                    <a data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                                                </div>
                                            </div>
                                            {/* Product Description */}
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
                                                <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
                                            </div>
                                        </div>
                                        {/* Single gallery Item */}
                                        <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.8s">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-7.jpg" alt />
                                                <div className="product-quicview">
                                                    <a data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                                                </div>
                                            </div>
                                            {/* Product Description */}
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
                                                <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
                                            </div>
                                        </div>
                                        {/* Single gallery Item */}
                                        <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.9s">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-8.jpg" alt />
                                                <div className="product-quicview">
                                                    <a data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                                                </div>
                                            </div>
                                            {/* Product Description */}
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
                                                <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="shop_pagination_area wow fadeInUp mb-5" data-wow-delay="1.1s">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination pagination-sm">
                                            <li className="page-item active"><a className="page-link" >01</a></li>
                                            <li className="page-item"><a className="page-link" >02</a></li>
                                            <li className="page-item"><a className="page-link" >03</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default ShopNow