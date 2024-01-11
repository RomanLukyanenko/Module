export const CategorySelector = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="catalog__select-category dropdown">
      <h3 className="dropdown-btn">Вибрати категорію</h3>
      <div className="dropdown-content" id="category-list">
        <a href="#" onClick={(e) => { e.preventDefault(); onSelectCategory('all'); }}
           className={selectedCategory === 'all' ? 'dropdown-item selected' : 'dropdown-item'}>
          Всі
        </a>
        {categories.map((category) => (
          <a key={category.id} href="#" onClick={(e) => {
            e.preventDefault();
            onSelectCategory(category.id);
          }}
          className={selectedCategory === category.id ? 'dropdown-item selected' : 'dropdown-item'}>
            {category.title}
          </a>
        ))}
      </div>
    </div>
    );
}