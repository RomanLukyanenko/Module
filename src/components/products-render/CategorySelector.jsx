export const CategorySelector = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    // Контейнер для вибору категорій
    <div className="catalog__select-category dropdown">
      {/* // Кнопка для розгортання списку категорій */}
      <h3 className="dropdown-btn">Вибрати категорію</h3>
      {/* // Контент випадаючого списку */}
      <div className="dropdown-content" id="category-list">
        {/* // Посилання для вибору всіх категорій */}
        <a href="#" onClick={(e) => { 
            e.preventDefault(); // Запобігання перезавантаження сторінки
            onSelectCategory('all'); // Виклик функції для вибору категорії 'all'
          }}
          className={selectedCategory === 'all' ? 'dropdown-item selected' : 'dropdown-item'}>
          Всі
        </a>
        {/* // Перебір і відображення кожної категорії з масиву categories */}
        {categories.map((category) => (
          <a key={category.id} href="#" onClick={(e) => {
            e.preventDefault(); // Запобігання перезавантаження сторінки
            onSelectCategory(category.id); // Виклик функції для вибору даної категорії
          }}
          className={selectedCategory === category.id ? 'dropdown-item selected' : 'dropdown-item'}>
            {category.title}
          </a>
        ))}
      </div>
    </div>
  );
}
