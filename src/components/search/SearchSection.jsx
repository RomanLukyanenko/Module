import { useState, useEffect } from 'react';
import { apiCatalog, apiSearch } from '../../api/ApiData';
import { FormatPrice } from '../../util/price/FormatPrice';
import { SearchInput } from './SearchInput';
import { ProductSummary } from './ProductSummary';
import { ProductCard } from '../products-render/ProductCard';

export const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchData(searchTerm === '' ? apiCatalog : apiSearch + searchTerm);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  const fetchData = (url) => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Помилка при завантаженні:', error);
        setIsLoading(false);
      });
  };

  const renderContent = () => {
    if (isLoading) {
      return <p>Завантаження...</p>;
    } else if (products.length === 0) {
      return <h3 className="no-result">Товарів не знайдено</h3>
    } else {
      return products.map(product => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          oldprice={product.oldprice}
          img={product.img}
          formatPrice={(price) => FormatPrice(price)}
        />
      ));
    }
  };

  return (
    <div className="catalog" id="catalog">
      <div className="container">
        <div className="catalog__header">
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <ProductSummary count={products.length} />
        </div>
        <div className="catalog__content" id="catalog-products">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};
