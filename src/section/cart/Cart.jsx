import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< Updated upstream
import { changeCartVisibility } from "../../store/CartSlice"; // Імпорт функцій Redux для управління станом кошика
import { CartNoResult } from "./CartNoResult"; // Компонент для відображення повідомлення про порожній кошик
import { CartItem } from "./CartItem"; // Компонент для відображення товару у кошику
import { CartButton } from "./CartButton"; // Кнопка кошика
=======
import { changeCartVisibility } from "../../store/CartSlice";
import { CartNoResult } from "./CartNoResult";
import { CartItem } from "./CartItem";
import { CartButton } from "./CartButton";
>>>>>>> Stashed changes
export const Cart = () => {
  const dispatch = useDispatch();

  const { cart, cartVisibility } = useSelector((state) => state.cart);
  const cartCount = cart.length;

<<<<<<< Updated upstream
  // Перемикання видимості кошика
=======
>>>>>>> Stashed changes
  const toggleCart = useCallback(() => {
    dispatch(changeCartVisibility());
  }, [dispatch]);

  return (
    <div className="cart-added-list">
      <CartButton cartCount={cartCount} toggleCart={toggleCart} />
      <div
        className={`cart-added-list__item-list ${cartVisibility ? "show" : ""}`}
      >
        {cart.length === 0 ? (
          <CartNoResult />
        ) : (
<<<<<<< Updated upstream
          // Відображення списку товарів у кошику
=======
>>>>>>> Stashed changes
          cart.map((product) => <CartItem key={product.id} product={product} />)
        )}
      </div>
    </div>
  );
};
