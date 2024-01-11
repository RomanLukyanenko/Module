import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/CartSlice'; // Імпорт функції додавання товару в кошик зі slice кошика

// Компонент ProductCard для відображення інформації про продукт
export const ProductCard = ({ title, price, oldprice, img, formatPrice, id }) => {
  
  const dispatch = useDispatch(); // Використання хука useDispatch для доступу до dispatch функції Redux

  // Функція обробки натискання на кнопку "Додати до кошика"
  const handleAddToCart = () => {
    const product = { id, title, price, img }; // Формування об'єкта продукту
    dispatch(addToCart(product)); // Відправлення дії addToCart з продуктом до Redux store
  };

  return (
    <div className="card-product">
      {/* Блок з зображенням продукту */}
      <div className="card-product__img-hold">
        <img src={`/catalog/${img}`} alt={title} className="card-product__img" />
      </div>

      {/* Блок з текстовою інформацією про продукт */}
      <div className="card-product__text-hold">
        {/* Посилання на сторінку продукту */}
        <a href="#" className="card-product__title-link">{title}</a>

        {/* Відображення ціни та старої ціни */}
        <span className="card-product__price js-currency-num">
          <span>{formatPrice(price)}</span>
          <small>{formatPrice(oldprice)}</small>
        </span>

        {/* Кнопка для додавання продукту до кошика */}
        <button className="card-product__add-to-cart" onClick={handleAddToCart}>
          Додати до кошика
        </button>
      </div>
    </div>
  );
};
