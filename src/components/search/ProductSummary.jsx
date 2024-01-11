export const ProductSummary = ({ count }) => {
  return (
    // Відображення загальної кількості знайдених товарів
    <h3 className="catalog__products-summ">Знайдено товарів: {count}</h3>
  );
};
