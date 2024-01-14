import { useSelector } from 'react-redux';

export const CartButton = ({ toggleCart }) => {
    const totalItemCount = useSelector((state) =>
        state.cart.cart.reduce((total, item) => total + item.count, 0)
    );

    return (
        <button className="cart-added-list__btn" onClick={toggleCart}>
            <span className={`cart-added-summ js-cart-added-summ ${totalItemCount > 0 ? "show-num" : ""}`}>
                {totalItemCount}
            </span>
            <svg className="icon icon-cart-bag"><use href="#icon-cart-bag"></use></svg>
        </button>
    );
};

