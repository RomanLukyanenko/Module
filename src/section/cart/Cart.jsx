import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCartVisibility } from "../../store/CartSlice"; // Імпорт функцій Redux для управління станом кошика
import { CartNoResult } from "./CartNoResult"; // Компонент для відображення повідомлення про порожній кошик
import { CartItem } from "./CartItem"; // Компонент для відображення товару у кошику
import { CartButton } from "./CartButton"; // Кнопка кошика
export const Cart = () => {
  const dispatch = useDispatch(); // Використання хука для диспетчеризації дій Redux

  // Отримання даних кошика з Redux store
  const { cart, cartVisibility } = useSelector((state) => state.cart);
  const cartCount = cart.length; // Визначення кількості товарів у кошику

  // Перемикання видимості кошика
  const toggleCart = useCallback(() => {
    dispatch(changeCartVisibility());
  }, [dispatch]);

  return (
    <div className="cart-added-list">
      {/* // Кнопка для управління видимістю кошика */}
      <CartButton cartCount={cartCount} toggleCart={toggleCart} />
      <div
        className={`cart-added-list__item-list ${cartVisibility ? "show" : ""}`}
      >
        {cart.length === 0 ? (
          // Відображення повідомлення, якщо кошик порожній
          <CartNoResult />
        ) : (
          // Відображення списку товарів у кошику
          cart.map((product) => <CartItem key={product.id} product={product} />)
        )}
      </div>
    </div>
  );
};
