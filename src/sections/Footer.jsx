import { Link, useNavigate  } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="footer">
      <div className="container">
        <Link to="/" className="logo" onClick={() => handleLinkClick("/")}>
          I-happy
        </Link>

        <ul className="navbar-nav menu">
          <li className="nav-item menu__li">
            <Link
              to="/"
              className="nav-link menu__link link-hover"
              onClick={() => handleLinkClick("/")}
            >
              Каталог
            </Link>
          </li>
          <li className="nav-item menu__li">
            <Link
              to="/about-us"
              className="nav-link menu__link link-hover"
              onClick={() => handleLinkClick("/about-us")}
            >
              Про нас
            </Link>
          </li>
          <li className="nav-item menu__li">
            <Link
              to="/delivery"
              className="nav-link menu__link link-hover"
              onClick={() => handleLinkClick("/delivery")}
            >
              Доставка і оплата
            </Link>
          </li>
          <li className="nav-item menu__li">
            <Link
              to="/contacts"
              className="nav-link menu__link link-hover"
              onClick={() => handleLinkClick("/contacts")}
            >
              Контакти
            </Link>
          </li>
        </ul>

        <div className="footer__social">
          <div className="social">
            <a
              href="#"
              rel="nofollow"
              target="_blank"
              className="social__item facebook"
            >
              <svg className="icon icon-facebook">
                <use xlinkHref="#icon-facebook"></use>
              </svg>
            </a>
            <a
              href="#"
              rel="nofollow"
              target="_blank"
              className="social__item instagram"
            >
              <svg className="icon icon-instagram">
                <use xlinkHref="#icon-instagram"></use>
              </svg>
            </a>
            <a
              href="#"
              rel="nofollow"
              target="_blank"
              className="social__item youtube"
            >
              <svg className="icon icon-youtube">
                <use xlinkHref="#icon-youtube"></use>
              </svg>
            </a>
          </div>
        </div>

        <p className="footer__copyright">
          <span>
            Всі права на статті, ілюстрації, інші матеріали належать site.com та
            охороняються законом України &laquo;Про авторське право і суміжні
            права&raquo;.
            <br />
            При використанні матеріалів посилання на сайт обов&apos;язкове!
          </span>
          <span className="footer__developer">
            Розробник сайту:{" "}
            <a href="#" target="_blank">
              Роман
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};