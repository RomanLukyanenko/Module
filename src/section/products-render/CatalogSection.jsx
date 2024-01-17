import { useState } from 'react';
import { CurrencySwitcher } from '../../util/price/CurrencySwitcher';
import { CategorySelector } from './CategorySelector';
import { ProductsSummary } from './ProductsSummary';
import { ProductList } from '../../components/ProductList';
import { useFetchData } from '../../api/ApiData';
import { useSelector } from 'react-redux';

export const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const currentCurrency = useSelector((state) => state.currency.currentCurrency);

  useFetchData("https://654ca14b77200d6ba8591faa.mockapi.io/catalog", setProducts);
  useFetchData("https://654ca14b77200d6ba8591faa.mockapi.io/category", setCategories);

  const handleCategoryChange = (catid) => setSelectedCategory(catid.toString());
  
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.catid.toString() === selectedCategory);

  return (
    <div className="catalog" id="catalog">
      <div className="container">
        <CurrencySwitcher />
        <div className="catalog__header">
          <CategorySelector
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
          />
          <ProductsSummary count={filteredProducts.length} />
        </div>
        <ProductList products={filteredProducts} currentCurrency={currentCurrency} />
      </div>
    </div>
  );
};

