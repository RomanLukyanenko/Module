import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useCurrencyRates } from '../../api/CustomHookExchangerate';
import { FormatPrice as formatPriceUtil } from './FormatPrice';

export const PriceConverter = ({ price }) => {
  const currentCurrency = useSelector((state) => state.currency.currentCurrency);
  const currencyData = useCurrencyRates();

  const convertedPrice = useMemo(() => {
    switch (currentCurrency) {
      case 'EUR':
        return price * (currencyData.EUR || 1);
      case 'USD':
        return price * (currencyData.USD || 1);
      default:
        return price;
    }
  }, [price, currentCurrency, currencyData]);

  const formattedPrice = formatPriceUtil(convertedPrice, currentCurrency);

  return <span>{formattedPrice}</span>;
};


