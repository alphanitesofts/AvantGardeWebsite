import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  shippingCharges : localStorage.getItem("shippingCharges")
  ? JSON.parse(localStorage.getItem("shippingCharges"))
  : 0
  // shippingCharges:0
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    // addItem(state, action) {
    //   const existingIndex = state.cartItems.findIndex(
    //     (item) => item.id === action.payload.id
    //   );

    //   if (existingIndex >= 0) {
    //     state.cartItems[existingIndex] = {
    //       ...state.cartItems[existingIndex],
    //       cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
    //     };
    //   } else {
    //     let tempProductItem = { ...action.payload, cartQuantity: 1 };
    //     state.cartItems.push(tempProductItem);
    //   }
    //   localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    // },
    addItem(state, action) {
      const existingIndex = Array.isArray(state.cartItems)
        ? state.cartItems.findIndex((item) => item.id === action.payload.id)
        : -1;
    
      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems = Array.isArray(state.cartItems)
          ? [...state.cartItems, tempProductItem]
          : [tempProductItem];
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    setShippingCharges: (state, action) => {
      state.shippingCharges = action.payload;
      console.log(action.payload,'action payload');
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("shippingCharges", JSON.stringify(action.payload));
    },
    // getTotals(state, action) {
    //   let { total, quantity } = state.cartItems.reduce(
    //     (cartTotal, cartItem) => {
    //       const { price, cartQuantity } = cartItem;
    //       const itemTotal = price * cartQuantity;

    //       cartTotal.total += itemTotal;
    //       cartTotal.quantity += cartQuantity;

    //       return cartTotal;
    //     },
    //     {
    //       total: 0,
    //       quantity: 0,
    //     }
    //   );
    //   total = parseFloat(total.toFixed(2));
    //   state.cartTotalQuantity = quantity;
    //   state.cartTotalAmount = total;
    // },
    getTotals(state, action) {
      if (Array.isArray(state.cartItems)) {
        let { total, quantity } = state.cartItems.reduce(
          (cartTotal, cartItem) => {
            const { price, cartQuantity } = cartItem;
            const itemTotal = price * cartQuantity;
    
            cartTotal.total += itemTotal;
            cartTotal.quantity += cartQuantity;
    
            return cartTotal;
          },
          {
            total: 0,
            quantity: 0,
          }
        );
        total = parseFloat(total.toFixed(2));
        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total;
      } else {
        // Handle the case where cartItems is not an array
        // This could be logging an error or setting default values, for example.
        console.error("cartItems is not an array");
      }
    },    
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addItem, decreaseCart, removeFromCart, getTotals, clearCart,setShippingCharges } =
  addToCartSlice.actions;

export default addToCartSlice.reducer;
