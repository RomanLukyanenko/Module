import { ProductCard } from "./ProductCard";

export const ProductList = ({ products, formatPrice }) => {
  return (
    // Контейнер для відображення списку продуктів
    <div className="catalog__content" id="catalog-products">
      {products.length === 0 ? (
        // Якщо список продуктів порожній, відображається повідомлення про завантаження
        <h1>Loading...</h1>
      ) : (
        // Інакше, для кожного продукту в масиві products створюється компонент ProductCard
        products.map((product) => (
          <ProductCard
            key={product.id} // Використання унікального ідентифікатора продукту як ключа
            {...product} // Передача всіх властивостей продукту в компонент ProductCard
            formatPrice={formatPrice} // Передача функції для форматування ціни
          />
        ))
      )}
    </div>
  );
};
