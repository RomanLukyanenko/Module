export const CartButton = ({ cartCount, toggleCart }) => {
    return (
        // Кнопка для управління відображенням кошика
        <button className="cart-added-list__btn" onClick={toggleCart}>
            {/* // Відображення загальної кількості товарів у кошику */}
            <span className={`cart-added-summ js-cart-added-summ ${cartCount > 0 ? "show-num" : ""}`}>{cartCount}</span>
            {/* // Іконка кошика */}
            <svg className="icon icon-cart-bag"><use href="#icon-cart-bag"></use></svg>
        </button>
    );
};
