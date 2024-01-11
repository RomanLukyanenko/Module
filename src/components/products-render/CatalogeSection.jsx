import { useState } from 'react';
import { CurrencySwitcher } from '../../util/price/CurrencySwitcher';
import { CategorySelector } from './CategorySelector';
import { ProductsSummary } from './ProductsSummary';
import { ProductList } from './ProductList';
import { useFetchData } from '../../api/ApiData';
import { FormatPrice as formatPriceUtil } from '../../util/price/FormatPrice';
import { useCurrencyRates } from '../../api/CustomHookExchangerate';

export const Cataloge = () => {
  // Використання useState для створення станів компоненту
  const [selectedCategory, setSelectedCategory] = useState('all'); // Вибрана категорія
  const [currentCurrency, setCurrentCurrency] = useState('UAH'); // Поточна валюта
  const [products, setProducts] = useState([]); // Масив продуктів
  const [categories, setCategories] = useState([]); // Масив категорій
  const currencyData = useCurrencyRates(); // Використання кастомного хука для отримання курсів валют

  // Використання кастомного хука для завантаження даних продуктів та категорій
  useFetchData("https://654ca14b77200d6ba8591faa.mockapi.io/catalog", setProducts);
  useFetchData("https://654ca14b77200d6ba8591faa.mockapi.io/category", setCategories);

  // Функція для зміни вибраної категорії
  const handleCategoryChange = (catid) => setSelectedCategory(catid.toString());

  // Функція для форматування ціни з урахуванням поточної валюти
  const formatPrice = (price) => {
    let formattedPrice = price;
    switch (currentCurrency) {
      case 'EUR':
        formattedPrice = price * (currencyData.EUR || 1);
        break;
      case 'USD':
        formattedPrice = price * (currencyData.USD || 1);
        break;
      default:
        formattedPrice = price;
    }
    return formatPriceUtil(formattedPrice, currentCurrency);
  };

  // Фільтрація продуктів відповідно до вибраної категорії
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.catid.toString() === selectedCategory);

  return (
    <div className="catalog" id="catalog">
      <div className="container">
        <CurrencySwitcher onCurrencyChange={setCurrentCurrency} />
        <div className="catalog__header">
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />
        <ProductsSummary count={filteredProducts.length} />
        </div>
        <ProductList products={filteredProducts} formatPrice={formatPrice} />
      </div>
    </div>
  );
};
