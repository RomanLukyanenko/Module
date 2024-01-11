export const CartNoResult = () => {
  return (
      // Блок для відображення інформації про порожній стан кошика
      <span className="no-result no-result--inline">
          {/* // Зображення, що ілюструє порожній стан */}
          <img src="/no-result/no-result-v2.png" alt="No results" className="no-result__img" />
          {/* // Текстове повідомлення про порожній стан кошика */}
          <span className="no-result__title">Ваша корзина порожня</span>
      </span>
  );
};
