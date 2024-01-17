import { useDispatch, useSelector } from "react-redux";
import { changeCurrency } from "../../store/CurrencySlice";

export const CurrencySwitcher = () => {
  const dispatch = useDispatch();
  const currentCurrency = useSelector(
    (state) => state.currency.currentCurrency,
  );

  const onCurrencyChange = (newCurrency) => {
    dispatch(changeCurrency(newCurrency));
  };

  return (
    <div>
      <button
        className={`currency-switcher-button ${
          currentCurrency === "USD" ? "selected" : ""
        }`}
        onClick={() => onCurrencyChange("USD")}
      >
        USD
      </button>
      <button
        className={`currency-switcher-button ${
          currentCurrency === "EUR" ? "selected" : ""
        }`}
        onClick={() => onCurrencyChange("EUR")}
      >
        EUR
      </button>
      <button
        className={`currency-switcher-button ${
          currentCurrency === "UAH" ? "selected" : ""
        }`}
        onClick={() => onCurrencyChange("UAH")}
      >
        UAH
      </button>
    </div>
  );
};
