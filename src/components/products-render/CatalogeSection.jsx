import { useState } from 'react';
import { CurrencySwitcher } from '../../util/price/CurrencySwitcher';
import { CategorySelector } from './CategorySelector';
import { ProductsSummary } from './ProductsSummary';
import { ProductList } from './ProductList';
import { useFetchData } from '../../api/ApiData';
import { FormatPrice as formatPriceUtil } from '../../util/price/FormatPrice';
import { useCurrencyRates } from '../../api/CustomHookExchangerate';

export const Cataloge = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentCurrency, setCurrentCurrency] = useState('UAH');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const currencyData = useCurrencyRates();

  useFetchData("https://654ca14b77200d6ba8591faa.mockapi.io/catalog", setProducts);
  useFetchData("https://654ca14b77200d6ba8591faa.mockapi.io/category", setCategories);

  const handleCategoryChange = (catid) => setSelectedCategory(catid.toString());

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
