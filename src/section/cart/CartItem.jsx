import { memo } from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseItemCount,
  decreaseItemCount,
} from "../../store/CartSlice";
import { PriceConverter } from "../../util/price/PriceConverter";
import { useSelector } from "react-redux";

export const CartItem = memo(({ product }) => {
  const dispatch = useDispatch();
  const currentCurrency = useSelector(
    (state) => state.currency.currentCurrency,
  );
  const { id, title, img, price, count } = product;

  const handleRemoveFromCart = () => dispatch(removeFromCart({ id }));
  const handleIncrementItemCount = () => dispatch(increaseItemCount({ id }));
  const handleDecrementItemCount = () => dispatch(decreaseItemCount({ id }));

  return (
    <div className="cart-added-list__item">
      <button
        className="cart-added-list__item-btn-delete btn-light"
        onClick={handleRemoveFromCart}
      >
        <svg className="icon icon-close">
          <use href="#icon-close"></use>
        </svg>
      </button>
      <img
        src={`/catalog/${img}`}
        alt=""
        className="cart-added-list__item-img"
      />
      <p className="cart-added-list__item-text-hold">
        <span className="cart-added-list__item-title-link">{title}</span>
        <span className="cart-added-list__item-meta-list">
          <span className="cart-added-list__item-meta">
            <PriceConverter price={price * count} currency={currentCurrency} />
          </span>
        </span>
      </p>
      <input
        type="text"
        className="cart-added-list__item-count"
        value={count}
        readOnly
      />
      <button
        className="cart-added-list__item-btn-plus btn-light"
        onClick={handleIncrementItemCount}
      ></button>
      <button
        className="cart-added-list__item-btn-minus btn-light"
        onClick={handleDecrementItemCount}
      ></button>
    </div>
  );
});

CartItem.displayName = "CartItem";
