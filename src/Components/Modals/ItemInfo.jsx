// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { addItem, getTotals } from '../features/addToCart/addToCartSlice';
// import { useGetsingleArticleQuery } from '../features/articles/getArticlesApi';
// const imageUrl = 'https://avantgardeimages.alphanitesofts.net/';
// const ItemInfo = ({ product, onClose }) => {
//     const [productData, setProductData] = useState(null);

//     useEffect(() => {
//         console.log('Received Product:', product);
//         if (product) {
//             setProductData({ ...product });
//         }
//     }, [product]);

//     const dispatch = useDispatch();
//     const cart = useSelector((state) => state.addToCart);
//     const [quantity, setQuantity] = useState(1);

//     const handleQuantityChange = (amount) => {
//         setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
//     };

//     const handleAddToCart = () => {
//         dispatch(addItem(productData));
//         console.log("cart button chal raha hai");
//     };

//     console.log(productData, 'product data');

//     if (!productData) {
//         return null; // Return null if no product data
//     }

//     return (
//         <div>
//             <div className="modal fade" id="quickview" tabIndex={-1} role="dialog" aria-labelledby="quickview" aria-hidden="true">
//                 <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
//                     <div className="modal-content">
//                         <button type="button" className="close btn" data-dismiss="modal" aria-label="Close" onClick={onClose}>
//                             <span aria-hidden="true">×</span>
//                         </button>
//                         <div className="modal-body">
//                             <div className="quickview_body">
//                                 <div className="container">
//                                     <div className="row">
//                                         <div className="col-12 col-lg-5">
//                                             <div className="quickview_pro_img">
//                                                 {productData?.image != null ? (
//                                                     <img src={`${imageUrl}${productData?.image?.[0]}`} alt="" style={{ height: "320px" }}/>
//                                                 ) : (
//                                                     <img src="img/product-img/product-1.jpg" alt="" />
//                                                 )}
//                                             </div>
//                                         </div>
//                                         <div className="col-12 col-lg-7">
//                                             <div className="quickview_pro_des">
//                                                 {/* <h4 className="title">{selectedProduct?.sub_cat_name}</h4> */}
//                                                 <h4 className="title">{productData?.sub_cat_name}</h4>

//                                                 <div className="top_seller_product_rating mb-15">
//                                                     <i className="fa fa-star" aria-hidden="true" />
//                                                     <i className="fa fa-star" aria-hidden="true" />
//                                                     <i className="fa fa-star" aria-hidden="true" />
//                                                     <i className="fa fa-star" aria-hidden="true" />
//                                                     <i className="fa fa-star" aria-hidden="true" />
//                                                 </div>
//                                                 <h5 className="price">{productData?.price}<span></span></h5>
//                                                 {productData?.description != null?(
//                                                      <p> {productData?.description}</p>
//                                                 ):(
//                                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita quibusdam aspernatur, sapiente consectetur accusantium perspiciatis praesentium eligendi, in fugiat?</p>
//                                                 )}
//                                                 <a href="/Product-description">View Full Product Details</a>
//                                             </div>
//                                             {/* Add to Cart Form */}
//                                             <form className="cart" onSubmit={(e) => e.preventDefault()}>
//                                                 <div className="quantity">
//                                                     <span className="qty-minus"
//                                                         onClick={() => handleQuantityChange(-1)}
//                                                     //  onClick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) && qty > 1 ) effect.value--;return false;"
//                                                     >
//                                                         <i className="fa fa-minus" aria-hidden="true" /></span>
//                                                     <input type="number" className="qty-text" id="qty"
//                                                         step={1}
//                                                         min={1}
//                                                         max={12}
//                                                         name="quantity"
//                                                         value={quantity}
//                                                         readOnly
//                                                     // step={1} min={1} max={12} name="quantity" defaultValue={1} 
//                                                     />
//                                                     <span className="qty-plus"
//                                                         onClick={() => handleQuantityChange(1)}
//                                                     //  onClick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"
//                                                     >
//                                                         <i className="fa fa-plus" aria-hidden="true" /></span>
//                                                 </div>
//                                                 <button type="submit" name="addtocart" value={5} className="cart-submit" onClick={handleAddToCart}>Add to cart</button>
//                                                 {/* Wishlist */}
//                                                 <div className="modal_pro_wishlist">
//                                                     <a href="wishlist.html" target="_blank"><i className="ti-heart" /></a>
//                                                 </div>
//                                                 {/* Compare */}
//                                                 <div className="modal_pro_compare">
//                                                     <a href="compare.html" target="_blank"><i className="ti-stats-up" /></a>
//                                                 </div>
//                                             </form>
//                                             <div className="share_wf mt-30">
//                                                 <p>Share With Friend</p>
//                                                 <div className="_icon">
//                                                     <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
//                                                     <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
//                                                     <a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a>
//                                                     <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* ))} */}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>



//         </div>

//     )
// }

// export default ItemInfo



import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getTotals } from '../features/addToCart/addToCartSlice';
import { useGetsingleArticleQuery } from '../features/articles/getArticlesApi';
const imageUrl = 'https://avantgardeimages.alphanitesofts.net/';

const ItemInfo = ({ product, onClose }) => {
  const [productData, setProductData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getTotals())
    console.log('Received Product:', product);
    if (product) {
      setProductData({ ...product });
    }
  }, [product]);
  console.log(productData, 'product data');

  if (!productData) {
    return null; // Return null if no product data
  }
   const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };
const handleAddToCart = () => {
    dispatch(addItem({ ...productData, cartQuantity: quantity }));
    navigate('./Cart');
    console.log('cart button chal raha hai');
    console.log('New Quantity:', quantity);
  };
  return (
    <div>
      <div className="modal fade" id="quickview" tabIndex={-1} role="dialog" aria-labelledby="quickview" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <button type="button" className="close btn" data-dismiss="modal" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body">
              <div className="quickview_body">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-lg-5">
                      <div className="quickview_pro_img">
                        {productData?.image != null ? (
                          <img src={`${imageUrl}${productData?.image?.[0]}`} alt="" style={{ height: "320px" }} />
                        ) : (
                          <img src="img/product-img/product-1.jpg" alt="" />
                        )}
                      </div>
                    </div>
                    <div className="col-12 col-lg-7">
                      <div className="quickview_pro_des">
                        <h4 className="title">{productData?.sub_cat_name}</h4>
                        <div className="top_seller_product_rating mb-15">
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                        </div>
                        <h5 className="price">{productData?.price}<span></span></h5>
                        {productData?.description != null ? (
                          <p> {productData?.description}</p>
                        ) : (
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita quibusdam aspernatur, sapiente consectetur accusantium perspiciatis praesentium eligendi, in fugiat?</p>
                        )}
                        <a href="/Product-description">View Full Product Details</a>
                      </div>
                      {/* Add to Cart Form */}
                      <form className="cart" onSubmit={(e) => e.preventDefault()}>
                        <div className="quantity">
                          <span className="qty-minus"
                            onClick={() => handleQuantityChange(-1)}>
                            <i className="fa fa-minus" aria-hidden="true" />
                          </span>
                          <input type="number" className="qty-text" id="qty"
                            step={1} min={1} max={99}
                            name="quantity"
                            value={quantity}
                            readOnly
                          />
                          <span className="qty-plus"
                            onClick={() => handleQuantityChange(1)}>
                            <i className="fa fa-plus" aria-hidden="true" />
                          </span>
                        </div>
                        <button type="button" name="addtocart" value={5} className="cart-submit" onClick={handleAddToCart}>Add to cart</button>
                        <div className="modal_pro_wishlist">
                          <a href="wishlist.html" target="_blank"><i className="ti-heart" /></a>
                        </div>
                        <div className="modal_pro_compare">
                          <a href="compare.html" target="_blank"><i className="ti-stats-up" /></a>
                        </div>
                      </form>
                      <div className="share_wf mt-30">
                        <p>Share With Friend</p>
                        <div className="_icon">
                          <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                          <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                          <a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a>
                          <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
