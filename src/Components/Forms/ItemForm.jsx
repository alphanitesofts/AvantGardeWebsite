// import React from 'react'
// import DiscountArea from '../HomePage/DiscountArea'

// const ItemForm = () => {
//     return (
//         <div>
//             {/* <DiscountArea /> */}
//             <div className="checkout_area section_padding_100">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12 col-md-6">
//                             <div className="checkout_details_area mt-50 clearfix">
//                                 <div className="cart-page-heading">
//                                     <h5>Billing Address</h5>
//                                     <p>Enter your coupons code</p>
//                                 </div>
//                                 <form onSubmit={handleSubmit}>
//                                     <div className="row">
//                                         <div className="col-md-6 mb-3">
//                                             <label htmlFor="first_name">First Name <span>*</span></label>
//                                             <input type="text" className="form-control" id="first_name"
//                                                 placeholder='First Name'
//                                                 value={postData.billing_data?.first_name}
//                                                 onChange={(e) => setPostData({ ...postData.billing_data, first_name: e.target.value })}
//                                                 required />
//                                         </div>
//                                         <div className="col-md-6 mb-3">
//                                             <label htmlFor="last_name">Last Name <span>*</span></label>
//                                             <input type="text" className="form-control" id="last_name"
//                                                 value={postData.billing_data?.last_name}
//                                                 onChange={(e) => setPostData({ ...postData.billing_data, last_name: e.target.value })}
//                                                 required />
//                                         </div>
//                                         {/* <div className="col-12 mb-3">
//                                             <label htmlFor="company">Company Name</label>
//                                             <input type="text" className="form-control" id="company" defaultValue />
//                                         </div> */}
//                                         <div className="col-12 mb-3">
//                                             <label htmlFor="country">Country <span>*</span></label>
//                                             <select className="custom-select d-block w-100" id="country"
//                                                 // value={postData.country}
//                                                 // onChange={(e) => setPostData({ ...postData, country: e.target.value })}
//                                             >
//                                                 <option value="pak">Pakistan</option>
//                                                 {/* <option value="uk">United Kingdom</option>
//                                                 <option value="ger">Germany</option>
//                                                 <option value="fra">France</option>
//                                                 <option value="ind">India</option>
//                                                 <option value="aus">Australia</option>
//                                                 <option value="bra">Brazil</option>
//                                                 <option value="cana">Canada</option> */}
//                                             </select>
//                                         </div>
//                                         <div className="col-12 mb-3">
//                                             <label htmlFor="street_address">Address <span>*</span></label>
//                                             <input type="text" className="form-control mb-3" id="street_address"
//                                                 value={postData.shipping_address}
//                                                 // onChange={(e) => setPostData({ ...postData, shipping_address: e.target.value })}
//                                                 onChange={(e) => handleInputChange('billing_data', { ...postData.billing_data, phone: e.target.value })}
//                                             />
//                                             {/* <input type="text" className="form-control" id="street_address2" defaultValue /> */}
//                                         </div>
//                                         <div className="col-12 mb-3">
//                                             <label htmlFor="postcode">Postcode <span>*</span></label>
//                                             <input type="text" className="form-control" id="postcode" 
//                                             value={postData.billing_data?.postcode} 
//                                             // onChange={(e)=>setPostData({...postData.billing_data, postcode: e.target.value})}
//                                             onChange={(e) => handleInputChange('billing_data', { ...postData.billing_data, postcode: e.target.value })}
//                                             />
//                                         </div>
//                                         <div className="col-12 mb-3">
//                                             <label htmlFor="city">Town/City <span>*</span></label>
//                                             <input type="text" className="form-control" id="city" 
//                                             value={postData.billing_data?.city } 
//                                             // onChange={(e)=>setPostData({...postData.billing_data, city:e.target.value})}
//                                             onChange={(e) => handleInputChange('billing_data', { ...postData.billing_data, city: e.target.value })}
//                                             />
//                                         </div>
//                                         {/* <div className="col-12 mb-3">
//                                             <label htmlFor="state">Province <span>*</span></label>
//                                             <input type="text" className="form-control" id="state" 
//                                              />
//                                         </div> */}
//                                         <div className="col-12 mb-3">
//                                             <label htmlFor="phone_number">Phone No <span>*</span></label>
//                                             <input type="number" className="form-control" id="phone_number" 
//                                             value={postData.billing_data?.phone} 
//                                             // onChange={(e)=>setPostData({...postData.billing_data, phone:e.target.value})}
//                                             onChange={(e) => handleInputChange('billing_data', { ...postData.billing_data, phone: e.target.value })}
//                                             />
//                                         </div>
//                                         <div className="col-12 mb-4">
//                                             <label htmlFor="email_address">Email Address <span>*</span></label>
//                                             <input type="email" className="form-control" id="email_address"
//                                             value={postData.contact_data?.email}
//                                             onChange={(e)=>setPostData({...postData.contact_data, email:e.target.value})}
//                                              />
//                                         </div>
//                                         {/* <div className="col-12">
//                                             <div className="custom-control custom-checkbox d-block mb-2">
//                                                 <input type="checkbox" className="custom-control-input" id="customCheck1" />
//                                                 <label className="custom-control-label" htmlFor="customCheck1">Terms and conitions</label>
//                                             </div>
//                                             <div className="custom-control custom-checkbox d-block mb-2">
//                                                 <input type="checkbox" className="custom-control-input" id="customCheck2" />
//                                                 <label className="custom-control-label" htmlFor="customCheck2">Create an accout</label>
//                                             </div>
//                                             <div className="custom-control custom-checkbox d-block">
//                                                 <input type="checkbox" className="custom-control-input" id="customCheck3" />
//                                                 <label className="custom-control-label" htmlFor="customCheck3">Subscribe to our newsletter</label>
//                                             </div>
//                                         </div> */}
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                         <div className="col-12 col-md-6 col-lg-5 ml-lg-auto">
//                             <div className="order-details-confirmation">
//                                 <div className="cart-page-heading">
//                                     <h5>Your Order</h5>
//                                     <p>The Details</p>
//                                 </div>

//                                 <ul className="order-details-form mb-4">
//                                     <li><span>Product</span> <span>Total</span></li>
//                                     {cart?.cartItems.map((items) => (
//                                         <li><span>{items.sub_cat_name}</span> <span>{items.price}</span></li>
//                                     ))}
//                                     <li><span>Subtotal</span> <span>{cart?.cartTotalAmount}</span></li>
//                                     <li><span>Shipping</span> <span>{cart.shippingCharges}</span></li>
//                                     <li><span>Total</span> <span>{cart.cartTotalAmount + cart.shippingCharges}</span></li>
//                                 </ul>
//                                 {/*                                 
//                                 <ul className="order-details-form mb-4">
//                                     <li><span>Product</span> <span>Total</span></li>
//                                     <li><span>Cocktail Yellow dress</span> <span>$59.90</span></li>
//                                     <li><span>Subtotal</span> <span>$59.90</span></li>
//                                     <li><span>Shipping</span> <span>Free</span></li>
//                                     <li><span>Total</span> <span>$59.90</span></li>
//                                 </ul> */}
//                                 <div id="accordion" role="tablist" className="mb-4">
//                                     <div className="card">
//                                         <div className="card-header" role="tab" id="headingOne">
//                                             <h6 className="mb-0">
//                                                 <a data-toggle="collapse" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><i className="fa fa-circle-o mr-3" />Paypal</a>
//                                             </h6>
//                                         </div>
//                                         <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
//                                             <div className="card-body">
//                                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integ er bibendum sodales arcu id te mpus. Ut consectetur lacus.</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="card">
//                                         <div className="card-header" role="tab" id="headingTwo">
//                                             <h6 className="mb-0">
//                                                 <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><i className="fa fa-circle-o mr-3" />cash on delievery</a>
//                                             </h6>
//                                         </div>
//                                         <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
//                                             <div className="card-body">
//                                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quis in veritatis officia inventore, tempore provident dignissimos.</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="card">
//                                         <div className="card-header" role="tab" id="headingThree">
//                                             <h6 className="mb-0">
//                                                 <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><i className="fa fa-circle-o mr-3" />credit card</a>
//                                             </h6>
//                                         </div>
//                                         <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
//                                             <div className="card-body">
//                                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quo sint repudiandae suscipit ab soluta delectus voluptate, vero vitae</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="card">
//                                         <div className="card-header" role="tab" id="headingFour">
//                                             <h6 className="mb-0">
//                                                 <a className="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour"><i className="fa fa-circle-o mr-3" />direct bank transfer</a>
//                                             </h6>
//                                         </div>
//                                         <div id="collapseFour" className="collapse show" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
//                                             <div className="card-body">
//                                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est cum autem eveniet saepe fugit, impedit magni.</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <button className="btn karl-checkout-b tn" type='submit' >Place Order</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default ItemForm



import React, { useEffect, useState } from 'react'
// import DiscountArea from '../HomePage/DiscountArea'
import { useDispatch, useSelector } from 'react-redux'
import { getTotals } from '../features/addToCart/addToCartSlice';
import axios from 'axios';
// import { useCreateOrderMutation } from '../features/dataForm/createFormDataSlice';

const ItemForm = () => {
    const dispatch = useDispatch();
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('cash on delivery'); // Add this state
    // const { mutate: createOrder, isLoading, isError } = useCreateOrderMutation();
    const cart = useSelector((state) => state.addToCart);
    console.log(cart, "checkout item");
    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handlePaymentMethodChange = (method) => {
        console.log(method, "method");
        setSelectedPaymentMethod(method);
        console.log(selectedPaymentMethod,"method")
    };

    const handleInputChange = (section, newData) => {
        if (section === 'billing_data') {
          setPostData((prevData) => ({
            ...prevData,
            [section]: {
              ...prevData[section],
              ...newData,
            },
          }));
        } else if (section === 'payment_method') {
          setPostData((prevData) => ({
            ...prevData,
            [section]: newData,
          }));
        } else {
          setPostData((prevData) => ({
            ...prevData,
            [section]: {
              ...prevData[section],
              ...newData,
            },
          }));
        }
      };
    const [postData, setPostData] = useState({
        total: cart.cartTotalAmount + cart.shippingCharges,
        sub_total: cart.cartTotalAmount,
        gst: 26.00,
        shipment_charges: cart.shippingCharges,
        delivery_method: `${cart.shippingCharges === 0 ? "Home Delivery" : "Personal Pickup"}`,
        shipping_address: "",
        promo_code: "",
        paid: `${selectedPaymentMethod==="cash on delievery"? false:true}`,
        status: "new",
        cod: `${selectedPaymentMethod==="cash on delievery"? true: false}`,  // cash on delivery
        payment_method: `${selectedPaymentMethod}`,
        vat: 26.00,
        order_data: cart.cartItems.map((item) => ({
            article_id: item.id,
            size: item.sub_datas[0].size,
            qty: item.cartQuantity,
            total_price: (item.price * item.cartQuantity) + cart.shippingCharges + 26.00,
            single_price: item.price,
            actual_single_price: item.price,
            on_sale: item.on_sale != null ? item.on_sale : "true",
            title: item.title,
            description: item.description,
            image: item.image!=null ? item.image[0] : null,
        })),
        billing_data: {
            first_name: "",
            last_name: "",
            phone: 0,
            address: "",
            city: "",
            postcode: "",
            state: "",
        },
        contact_data: {
            phone: 0,
            email: "",
        },
        shipping_data: {
            phone: 0,
            address: "",
            city: "",
            postcode: "",
            state: "",
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sending data:", postData);
        try {
            console.log("Sending data:", postData);
            const response = await axios.post('https://avantgarde.alphanitesofts.net/api/post_order', postData);
            console.log('Response:', response.data);
          
        } catch (err) {
            if (err.response) {
                console.log('Server responded with an error:', err.response.data);
            } else if (err.request) {
                console.log('No response received from the server');
            } else {
                console.log('Error setting up the request:', err.message);
            }
        }
    };
    return (
        <div>
            {/* <DiscountArea /> */}
            <div className="checkout_area section_padding_100">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="checkout_details_area mt-50 clearfix">
                                <div className="cart-page-heading">
                                    <h5>Billing Address</h5>
                                    <p>Enter your coupons code</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="first_name">First Name <span>*</span></label>
                                            <input type="text" className="form-control" id="first_name" name="first_name"
                                                placeholder='First Name'
                                                value={postData.billing_data?.first_name}
                                                onChange={(e) => handleInputChange('billing_data', { first_name: e.target.value })}
                                                required />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="last_name">Last Name <span>*</span></label>
                                            <input type="text" className="form-control" id="last_name" name="last_name"
                                                value={postData.billing_data?.last_name}
                                                onChange={(e) => handleInputChange('billing_data', { last_name: e.target.value })}
                                                required />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="country">Country <span>*</span></label>
                                            <select className="custom-select d-block w-100" id="country">
                                                <option value="pak">Pakistan</option>
                                            </select>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="street_address">Address <span>*</span></label>
                                            <input type="text" className="form-control mb-3" id="street_address"
                                                value={postData.shipping_address}
                                                // onChange={(e) => setPostData({ ...postData, shipping_address: e.target.value })}
                                                onChange={(e) => {
                                                    const newAddress = e.target.value;
                                                    setPostData({ ...postData, shipping_address: e.target.value })
                                                    handleInputChange('billing_data', { address: newAddress });
                                                    handleInputChange('shipping_data', { address: newAddress });
                                                }} />
                                            {/* <input type="text" className="form-control" id="street_address2" defaultValue /> */}
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="postcode">Postcode <span>*</span></label>
                                            <input type="text" className="form-control" id="postcode"
                                                value={postData.billing_data?.postcode}
                                                // onChange={(e)=>setPostData({...postData.billing_data, postcode: e.target.value})}
                                                onChange={(e) => {
                                                    const newPostcode = e.target.value;
                                                    handleInputChange('billing_data', { postcode: newPostcode })
                                                    handleInputChange('shipping_data', { postcode: newPostcode })
                                                }
                                                }
                                            />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="city">Town/City <span>*</span></label>
                                            <input type="text" className="form-control" id="city"
                                                value={postData.billing_data?.city}
                                                // onChange={(e)=>setPostData({...postData.billing_data, city:e.target.value})}
                                                onChange={(e) => {
                                                    const newCity = e.target.value;
                                                    handleInputChange('billing_data', { city: newCity })
                                                    handleInputChange('shipping_data', { city: newCity })
                                                }
                                                }
                                            />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="state">Province <span>*</span></label>
                                            <input type="text" className="form-control" id="state"
                                                value={postData.billing_data.state}
                                                onChange={(e) => {
                                                    const newState = e.target.value;
                                                    handleInputChange('billing_data', { state: newState })
                                                    handleInputChange('shipping_data', { state: newState })
                                                }
                                                }
                                            />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="phone_number">Phone No <span>*</span></label>
                                            <input type="tel" className="form-control" id="phone_number"
                                                value={postData.billing_data?.phone}
                                                // onChange={(e)=>setPostData({...postData.billing_data, phone:e.target.value})}
                                                onChange={(e) => {
                                                    const newPhone = e.target.value;
                                                    const parsedPhone = parseInt(newPhone);
                                                    if (!isNaN(parsedPhone)) {
                                                        handleInputChange('billing_data', { phone: parsedPhone });
                                                        handleInputChange('contact_data', { phone: parsedPhone });
                                                        handleInputChange('shipping_data', { phone: parsedPhone });
                                                    }
                                                }
                                                }
                                            />
                                        </div>
                                        <div className="col-12 mb-4">
                                            <label htmlFor="email_address">Email Address <span>*</span></label>
                                            <input type="email" className="form-control" id="email_address"
                                                value={postData.contact_data?.email}
                                                onChange={(e) => handleInputChange('contact_data', { email: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-5 ml-lg-auto">
                            <div className="order-details-confirmation">
                                <div className="cart-page-heading">
                                    <h5>Your Order</h5>
                                    <p>The Details</p>
                                </div>

                                <ul className="order-details-form mb-4">
                                    <li><span>Product</span> <span>Total</span></li>
                                    {cart?.cartItems.map((items) => (
                                        <li><span>{items.sub_cat_name}</span> <span>{items.price}</span></li>
                                    ))}
                                    <li><span>Subtotal</span> <span>{cart?.cartTotalAmount}</span></li>
                                    <li><span>Shipping</span> <span>{cart.shippingCharges}</span></li>
                                    <li><span>Total</span> <span>{cart.cartTotalAmount + cart.shippingCharges}</span></li>
                                </ul>
                                <div id="accordion" role="tablist" className="mb-4">
                                    <div className="card">
                                        <div className="card-header" role="tab" id="headingOne">
                                            <h6 className="mb-0">
                                                <a data-toggle="collapse" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
                                                    onClick={() => handlePaymentMethodChange('PAYFAST(Pay via Debit/Credit/Wallet/Bank Account)')}>
                                                    <i className="fa fa-circle-o mr-3" />PAYFAST(Pay via Debit/Credit/Wallet/Bank Account)</a>
                                            </h6>
                                        </div>
                                        <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>After clicking “Pay now”, you will be redirected to<br/> PAYFAST(Pay via Debit/Credit/Wallet/Bank Account) <br /> to complete your purchase securely.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" role="tab" id="headingTwo">
                                            <h6 className="mb-0">
                                                <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
                                                    onClick={() => handlePaymentMethodChange('cash on delievery')}
                                                ><i className="fa fa-circle-o mr-3" />cash on delievery</a>
                                            </h6>
                                        </div>
                                        <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Pay cash on delivery.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" role="tab" id="headingThree">
                                            <h6 className="mb-0">
                                                <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
                                                    onClick={() => handlePaymentMethodChange('credit card')}
                                                ><i className="fa fa-circle-o mr-3" />credit card</a>
                                            </h6>
                                        </div>
                                        <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Make your payment directly into our bank account. Please email a screenshot for proof of payment along with your order number at info@avantgardeoriginal.com. Your order will not be shipped until the funds have cleared in our account.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="card">
                                        <div className="card-header" role="tab" id="headingFour">
                                            <h6 className="mb-0">
                                                <a className="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour"
                                                    onClick={() => handlePaymentMethodChange('direct bank transfer')}
                                                ><i className="fa fa-circle-o mr-3" />direct bank transfer</a>
                                            </h6>
                                        </div>
                                        <div id="collapseFour" className="collapse show" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est cum autem eveniet saepe fugit, impedit magni.</p>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                <button className="btn karl-checkout-b tn" type='submit' onClick={handleSubmit} >Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemForm