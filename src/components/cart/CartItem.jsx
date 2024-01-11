import { memo } from 'react';

export const CartItem = memo(({ product, delCartProduct, setItemCountPlus, setItemCountMinus }) => {
    const { id, title, img, price, count } = product;
    
    return (
        // Блок для відображення окремого товару в кошику
        <div className="cart-added-list__item">
            {/* // Кнопка для видалення товару з кошика */}
            <button className="cart-added-list__item-btn-delete btn-light" onClick={() => delCartProduct(id)}>
                {/* // Іконка для кнопки видалення */}
                <svg className="icon icon-close"><use href="#icon-close"></use></svg>
            </button>
            {/* // Зображення товару */}
            <img src={`/catalog/${img}`} alt="" className="cart-added-list__item-img" />
            {/* // Контейнер для текстової інформації про товар */}
            <p className="cart-added-list__item-text-hold">
                {/* // Назва товару */}
                <span className="cart-added-list__item-title-link">{title}</span>
                {/* // Ціна товару */}
                <span className="cart-added-list__item-meta-list">
                    <span className="cart-added-list__item-meta">Ціна: {price} грн</span>
                </span>
            </p>
            {/* // Інпут для відображення кількості товару, доступний тільки для читання */}
            <input type="text" className="cart-added-list__item-count" value={count} readOnly/>
            {/* // Кнопки для зміни кількості товару в кошику */}
            <button className="cart-added-list__item-btn-plus btn-light" onClick={() => setItemCountPlus(id)}></button>
            <button className="cart-added-list__item-btn-minus btn-light" onClick={() => setItemCountMinus(id)}></button>
        </div>
    )
});

CartItem.displayName = 'CartItem'; // Встановлення назви для компонента для зручності відладки
