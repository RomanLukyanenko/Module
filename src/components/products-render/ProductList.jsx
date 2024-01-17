import { memo } from "react";
import { ProductCard } from "./ProductCard";

const ProductListComponent = ({ products, currentCurrency }) => {
  return (
    <div className="catalog__content" id="catalog-products">
      {products.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            currentCurrency={currentCurrency} 
          />
        ))
      )}
    </div>
  );
};

export const ProductList = memo(ProductListComponent);
