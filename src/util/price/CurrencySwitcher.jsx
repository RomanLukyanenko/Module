export const CurrencySwitcher = ({ onCurrencyChange, currentCurrency }) => {
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

