import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    cartVisibility: false,
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;

      const productExistKey = state.cart.findIndex(
        (item) => item.id === product.id,
      );

      if (productExistKey !== -1) {
        state.cart[productExistKey].count++;
      } else {
        state.cart.push({ ...product, count: 1 });
      }
    },

    removeFromCart(state, action) {
      const productId = action.payload.id;
      const productIndex = state.cart.findIndex(
        (item) => item.id === productId,
      );

      if (productIndex !== -1) {
        state.cart.splice(productIndex, 1);
      }
    },

    increaseItemCount(state, action) {
      state.cart.forEach((item) => {
        if (item.id === action.payload.id) item.count++;
      });
    },

    decreaseItemCount(state, action) {
      const productIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (productIndex !== -1) {
        if (state.cart[productIndex].count > 1) {
          state.cart[productIndex].count--;
        } else {
          state.cart.splice(productIndex, 1);
        }
      }
    },

    cleanCart(state) {
      state.cart = [];
    },

    changeCartVisibility(state) {
      state.cartVisibility = !state.cartVisibility;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItemCount,
  decreaseItemCount,
  cleanCart,
  changeCartVisibility,
} = cartSlice.actions;

export default cartSlice.reducer;
