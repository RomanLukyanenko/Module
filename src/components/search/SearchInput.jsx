export const SearchInput = ({ searchTerm, setSearchTerm }) => (
    <div className="catalog__form">
      <input 
        type="text" 
        className="catalog__form-search" 
        placeholder="Що хочете знайти?"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="catalog__form-btn">
        <svg className='icon icon-search'><use xlinkHref='#icon-search'></use></svg>
      </button>
    </div>
  );
  