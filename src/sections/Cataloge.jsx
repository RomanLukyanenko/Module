import { useState } from 'react';
import { CurrencySwitcher } from '../util/CurrencySwitcher';
import { CategorySelector } from '../components/products/CategorySelector';
import { ProductsSummary } from '../components/products/ProductsSummary';
import { ProductList } from '../components/products/ProductList';
import { useFetchData } from '../api/Api';
import { useCurrencyRates } from '../util/CustomHook';
import { FormatPrice as formatPriceUtil } from '../util/FormatPrice';

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
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />
        <ProductsSummary count={filteredProducts.length} />
        <ProductList products={filteredProducts} formatPrice={formatPrice} />
      </div>
    </div>
  );
};