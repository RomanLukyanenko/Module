import { useState, useEffect } from 'react';
import { apiCatalog, apiSearch } from '../../api/ApiData';
import { FormatPrice } from '../../util/price/FormatPrice';
import { SearchInput } from './SearchInput';
import { ProductSummary } from './ProductSummary';
import { ProductCard } from '../products-render/ProductCard';

export const SearchPage = () => {
  // Використання хуків стану для відстеження різних аспектів сторінки пошуку
  const [searchTerm, setSearchTerm] = useState(''); // Стан для зберігання поточного пошукового запиту
  const [products, setProducts] = useState([]); // Стан для зберігання списку продуктів
  const [isLoading, setIsLoading] = useState(true); // Стан для відстеження статусу завантаження

  // Використання useEffect для обробки пошукових запитів
  useEffect(() => {
    // Таймер для відкладеного виконання запиту (debounce)
    const debounceTimer = setTimeout(() => {
      fetchData(searchTerm === '' ? apiCatalog : apiSearch + searchTerm);
    }, 500);

    // Очищення таймера при зміні компоненту
    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  // Функція для завантаження даних
  const fetchData = (url) => {
    setIsLoading(true); // Встановлення стану завантаження на true
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []); // Оновлення стану продуктів
        setIsLoading(false); // Встановлення стану завантаження на false
      })
      .catch((error) => {
        console.error('Помилка при завантаженні:', error);
        setIsLoading(false); // Встановлення стану завантаження на false у разі помилки
      });
  };

  // Функція для визначення відображення контенту
  const renderContent = () => {
    if (isLoading) {
      return <p>Завантаження...</p>;
    } else if (products.length === 0) {
      return <h3 className="no-result">Товарів не знайдено</h3>
    } else {
      return products.map(product => (
        <ProductCard
        key={product.id} // Використання унікального ідентифікатора продукту як ключа
        {...product} // Передача всіх властивостей продукту в компонент ProductCard
        formatPrice={FormatPrice} // Передача функції для форматування ціни
      />
      ));
    }
  };

  // Рендер компоненту
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
