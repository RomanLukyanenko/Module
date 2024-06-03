import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCartVisibility } from "../../store/CartSlice";
import { CartNoResult } from "./CartNoResult"; 
import { CartItem } from "./CartItem"; 
import { CartButton } from "./CartButton"; 

import { changeCartVisibility } from "../../store/CartSlice";
import { CartNoResult } from "./CartNoResult";
import { CartItem } from "./CartItem";
import { CartButton } from "./CartButton";
export const Cart = () => {
  const dispatch = useDispatch();

  const { cart, cartVisibility } = useSelector((state) => state.cart);
  const cartCount = cart.length;

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
          cart.map((product) => <CartItem key={product.id} product={product} />)
        )}
      </div>
    </div>
  );
};
