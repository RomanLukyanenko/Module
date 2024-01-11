export const CurrencySwitcher = ({ onCurrencyChange, currentCurrency }) => {
  return (
    // Блок для перемикання валют
    <div>
      {/* // Кнопка для вибору долара США (USD) як поточної валюти */}
      <button
        className={`currency-switcher-button ${
          currentCurrency === "USD" ? "selected" : ""
        }`}
        onClick={() => onCurrencyChange("USD")}
      >
        USD
      </button>
      {/* // Кнопка для вибору євро (EUR) як поточної валюти */}
      <button
        className={`currency-switcher-button ${
          currentCurrency === "EUR" ? "selected" : ""
        }`}
        onClick={() => onCurrencyChange("EUR")}
      >
        EUR
      </button>
      {/* // Кнопка для вибору української гривні (UAH) як поточної валюти */}
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
