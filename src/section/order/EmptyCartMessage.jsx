import { Link, useNavigate,  } from "react-router-dom";

export const EmptyCartMessage = () => {
  const navigate = useNavigate();
  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="form-empty">
      <h1>Ваша корзина порожня</h1>
      <Link
        to="/"
        className="nav-link menu__link link-hover"
        onClick={() => handleLinkClick("/")}
      >
        <button className="back-to-buy"> Повернутись до покупок </button>
      </Link>
    </div>
  );
};