// import { createSlice } from "@reduxjs/toolkit";

// const addToCartSlice = createSlice({
//   name: "addToCart",
//   initialState: {
//     cart: [],
//   },
//   reducers: {
//     addItem: (state, action) => {
//       const newItem = action.payload;
//       state.cart.push(newItem);
//     },
//     // You can add more reducers for removing items, updating quantities, etc.
//   },
// });

// export const { addItem } = addToCartSlice.actions;

// export default addToCartSlice.reducer;

// // add to cart logic
// function addToCart(product) {
//   let cart = JSON.parse(localStorage.getItem("cart"));
//   if (cart == null) {
//     cart = [];
//   }
//   const productInCartIndex = cart.findIndex((item) => item._id === product._id);
//   if (productInCartIndex > -1) {
//     cart[productInCartIndex].quantity += 1;
//   } else {
//     product.quantity = 1;
//     cart.push(product);
//   }
//   localStorage.setItem("cart", JSON.stringify(cart));
// }
// // remove from cart logic
// // function removeFromCart(productId){
// //     let cart = JSON.parse(localStorage.getItem('cart')) || [];
// //     console.log(cart);
// //     const indexOfProduct = cart.indexOf(productId);
// //     if (indexOfProduct !== -1) {
// //         cart.splice(indexOfProduct, 1);
// //         }
// //         localStorage.setItem("cart", JSON.stringify(cart));
// //         renderCart();
// //         }
// //         // clear cart logic
