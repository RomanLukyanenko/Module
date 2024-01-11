import { createSlice } from "@reduxjs/toolkit";

// Створення slice для кошика з використанням Redux Toolkit
const cartSlice = createSlice({
  name: "cart", // Назва slice, яка буде використовуватися в Redux store
  initialState: {
    cart: [], // Початковий стан кошика, який є пустим масивом
    cartVisibility: false, // Початковий стан видимості кошика, спочатку він не видимий
  },
  reducers: {
    // Дія для додавання товару в кошик
    addToCart(state, action) {
      const product = action.payload; // Отримання товару з action

      // Перевірка, чи товар вже існує у кошику
      const productExistKey = state.cart.findIndex(
        (item) => item.id === product.id,
      );

      // Якщо товар існує, збільшити його кількість, інакше додати новий товар
      if (productExistKey !== -1) {
        state.cart[productExistKey].count++;
      } else {
        state.cart.push({ ...product, count: 1 });
      }
    },

    // Дія для видалення товару з кошика
    removeFromCart(state, action) {
      const productId = action.payload.id; // Отримання ID товару
      const productIndex = state.cart.findIndex(
        (item) => item.id === productId,
      );

      // Якщо товар знайдено, зменшити його кількість або видалити з кошика
      if (productIndex !== -1) {
        if (state.cart[productIndex].count > 1) {
          state.cart[productIndex].count--;
        } else {
          state.cart.splice(productIndex, 1);
        }
      }
    },

    // Дія для збільшення кількості товару
    increaseItemCount(state, action) {
      state.cart.forEach((item) => {
        if (item.id === action.payload.id) item.count++;
      });
    },

    // Дія для зменшення кількості товару
    decreaseItemCount(state, action) {
      const productIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id,
      );

      // Зменшити кількість або видалити товар з кошика
      if (productIndex !== -1) {
        if (state.cart[productIndex].count > 1) {
          state.cart[productIndex].count--;
        } else {
          state.cart.splice(productIndex, 1);
        }
      }
    },

    // Дія для очищення кошика
    cleanCart(state) {
      state.cart = [];
    },

    // Дія для зміни видимості кошика
    changeCartVisibility(state) {
      state.cartVisibility = !state.cartVisibility;
    },
  },
});

// Експорт дій з slice для їх використання в компонентах та інших частинах додатку
export const {
  addToCart,
  removeFromCart,
  increaseItemCount,
  decreaseItemCount,
  cleanCart,
  changeCartVisibility,
} = cartSlice.actions;

export default cartSlice.reducer; // Експорт редюсера для включення його в основний store

