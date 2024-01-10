export const CurrencySwitcher = ({ onCurrencyChange }) => {
  return (
    <div>
      <button onClick={() => onCurrencyChange('USD')}>USD</button>
      <button onClick={() => onCurrencyChange('EUR')}>EUR</button>
      <button onClick={() => onCurrencyChange('UAH')}>UAH</button>
    </div>
  );
};


