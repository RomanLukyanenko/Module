// Імпортування необхідних інструментів з Redux Toolkit та Redux Persist
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // Використання локального сховища як місця зберігання

import cartReducer from "./CartSlice"; // Імпорт reducer'а для кошика

// Конфігурація для Redux Persist, щоб зберегти конкретні частини стану
const persistConfig = {
  key: "root", // Ключ на рівні кореня держави
  storage, // Вказуємо, що використовувати локальне сховище
  whitelist: ["cart"], // Частини стану, які потрібно зберігати
  blacklist: ["catalog"], // Частини стану, які не потрібно зберігати
};

// Комбінування редюсерів в один кореневий редюсер
const rootReducer = combineReducers({
  cart: cartReducer, // Додаємо cartReducer до кореневого редюсера
});

// Створюємо постійний редюсер, який обгортає кореневий редюсер
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Конфігурація самого магазину Redux
const store = configureStore({
  reducer: persistedReducer, // Використання постійного редюсера
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ігнорування певних дій для перевірки серіалізації
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store); // Створення персистора, щоб забезпечити постійність даних

export default store; // Експорт конфігурованого магазину
