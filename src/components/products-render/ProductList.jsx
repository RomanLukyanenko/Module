import { ProductCard } from "./ProductCard";

export const ProductList = ({ products, formatPrice }) => {
  return (
    <div className="catalog__content" id="catalog-products">
      {products.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            formatPrice={formatPrice}
          />
        ))
      )}
    </div>
  );
};
