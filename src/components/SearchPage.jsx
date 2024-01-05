import { useState, useEffect } from 'react';
import { apiCatalog, apiSearch } from '../urls/Api'
import { ProductCard } from './ProductCard';
import { FormatPrice } from '../util/FormatPrice';

export const SearchPage = () => {
  const [currentCurrency, setCurrentCurrency] = useState('UAH'); // Додайте цей стан
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchTerm === '') {
        // Завантажте весь каталог, якщо пошуковий рядок порожній
        fetchData(apiCatalog);
      } else {
        // Завантажте результати пошуку
        fetchData(apiSearch + searchTerm);
      }
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, apiSearch, apiCatalog]);

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
        {isLoading ? <p>Завантаження...</p> : renderProducts(products, currentCurrency)}
        </div>
      </div>
    </div>
  );
};

const renderProducts = (products, currentCurrency) => {
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