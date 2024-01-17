import { useSelector } from 'react-redux';
import { useCurrencyRates } from '../../api/CustomHookExchangerate';
import { FormatPrice as formatPriceUtil } from './FormatPrice';

export const PriceConverter = ({ price }) => {
  const currentCurrency = useSelector((state) => state.currency.currentCurrency);
  const currencyData = useCurrencyRates();

  const convertPrice = (price) => {
    switch (currentCurrency) {
      case 'EUR':
        return price * (currencyData.EUR || 1);
      case 'USD':
        return price * (currencyData.USD || 1);
      default:
        return price;
    }
  };

  const convertedPrice = convertPrice(price);
  const formattedPrice = formatPriceUtil(convertedPrice, currentCurrency);

  return <span>{formattedPrice}</span>;
};

