import { useDispatch, useSelector } from 'react-redux';
import { memo } from 'react';
import { PriceConverter } from '../util/price/PriceConverter';
import { addToCart } from '../store/CartSlice';

const ProductCardComponent = ({ title, price, oldprice, img, id }) => {
  const dispatch = useDispatch();
  const currentCurrency = useSelector((state) => state.currency.currentCurrency);

  const handleAddToCart = () => {
    const product = { id, title, price, img };
    dispatch(addToCart(product));
  };

  return (
    <div className="card-product">
      <div className="card-product__img-hold">
        <img src={`/catalog/${img}`} alt={title} className="card-product__img" />
      </div>
      <div className="card-product__text-hold">
      <a href="#" className="card-product__title-link">{title}</a>
        <span className="card-product__price js-currency-num">
          <PriceConverter price={price} currency={currentCurrency} />
          <small><PriceConverter price={oldprice} currency={currentCurrency} /></small>
        </span>
        <button className="card-product__add-to-cart" onClick={handleAddToCart}>
          Додати до кошика
        </button>
      </div>
    </div>
  );
};

export const ProductCard = memo(ProductCardComponent);
