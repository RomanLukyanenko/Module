export const NavigationBar = () => {
  return (
    <div className="navigation">
      <div className="container">
        <div className="navigation__hold">
          <div className="navigation__left navigation__links js-mobile-menu">
            <ul className="menu navigation__item-list">
              <li className="menu__li navigation__item">
                <a href="index.html" className="menu__link link-hover">Головна</a>
              </li>
              <li className="menu__li navigation__item">
                <a href="delivery.html" className="menu__link link-hover">Доставка і оплата</a>
              </li>
              <li className="menu__li navigation__item">
                <a href="contacts.html" className="menu__link link-hover">Контакти</a>
              </li>
            </ul>
          </div>
          <div className="navigation__middle">
            <a href="index.html" className="logo">I-happy</a>
          </div>
          <div className="navigation__right">
            <ul className="navigation__item-list">
              <li className="navigation__item">
                <a href="search.html" className="navigation__item-link">
                <svg className="icon icon-search"><use href="#icon-search"></use></svg>
                </a>
              </li>
              <li className="navigation__item">
                <a href="order.html" className="navigation__item-link">
                  <span className="cart-added-summ js-cart-added-summ">0</span>
                  <svg className="icon icon-cart-bag"><use href="#icon-cart-bag"></use></svg>
                </a>
              </li>
              <li className="navigation__item hide-pc">
                <label className="hamburger" style={{ '--color': '#444' }}>
                  <input type="checkbox" />
                  <svg viewBox="0 0 32 32"><path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path><path className="line" d="M7 16 27 16"></path></svg>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};