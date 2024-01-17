import { useEffect, useState } from "react";

export const useCurrencyRates = () => {
    const [currencyData, setCurrencyData] = useState({ EUR: 1, USD: 1 });
  
    useEffect(() => {
      fetch("https://v6.exchangerate-api.com/v6/9703652e9e7fecda921aeacf/latest/UAH")
        .then(response => response.json())
        .then(data => {
          const { conversion_rates } = data;
          setCurrencyData({ EUR: conversion_rates.EUR, USD: conversion_rates.USD });
        });
    }, []);
  
    return currencyData;
  };