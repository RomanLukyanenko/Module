export const SearchInput = ({ searchTerm, setSearchTerm }) => {
  return (
    // Блок для пошукового вводу
    <div className="catalog__form">
      {/* // Пошуковий інпут */}
      <input
        type="text" // Тип поля - текст
        className="catalog__form-search" // Клас для стилізації
        placeholder="Що хочете знайти?" // Плейсхолдер в інпуті
        value={searchTerm} // Значення поля, яке контролюється ззовні
        onChange={(e) => setSearchTerm(e.target.value)} // Оновлення стану при зміні вмісту поля
      />
      {/* // Кнопка для відправки пошукового запиту */}
      <button className="catalog__form-btn">
        {/* // Іконка пошуку */}
        <svg className="icon icon-search">
          <use xlinkHref="#icon-search"></use>
        </svg>
      </button>
    </div>
  );
};
