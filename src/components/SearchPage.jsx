import { useState, useEffect } from 'react';
import { apiCatalog, apiSearch } from '../api/Api'
import { ProductCard } from './products-render/ProductCard';
import { FormatPrice } from '../util/price/FormatPrice';

export const SearchPage = () => {
  // Видалено setCurrentCurrency, якщо він не використовується
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchTerm === '') {
        fetchData(apiCatalog);
      } else {
        fetchData(apiSearch + searchTerm);
      }
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  const fetchData = (url) => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Помилка при завантаженні:', error);
        setIsLoading(false);
      });
  };

  return (
    <div className="catalog" id="catalog">
      <div className="container">
        <div className="catalog__header">
          <div className="catalog__form">
            <input 
              type="text" 
              className="catalog__form-search" 
              placeholder="Що хочете знайти?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="catalog__form-btn">
            <svg className='icon icon-search'><use xlinkHref='#icon-search'></use></svg>
            </button>
          </div>
          <h3 className="catalog__products-summ">
            Знайдено товарів: {products.length}
          </h3>
        </div>
        <div className="catalog__content" id="catalog-products">
        {isLoading ? <p>Завантаження...</p> : renderProducts(products)}
        </div>
      </div>
    </div>
  );
};

const renderProducts = (products, currentCurrency, ) => {
  console.log(products)
  if (products.length === 0) {
    return <h3 className="no-result">Товарів не знайдено</h3>;
  }

  return (
    <>
    {products.map((product) => (
      <ProductCard
          key={product.id} 
          title={product.title}
          price={product.price} 
          oldprice={product.oldprice} 
          img={product.img} 
          formatPrice={(price) => FormatPrice(price, currentCurrency)} 
        />
      ))}
      </>
  );
};