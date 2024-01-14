import { useEffect, useState } from "react";

export const useCurrencyRates = () => {
    const [currencyData, setCurrencyData] = useState({ EUR: 1, USD: 1 });
  
    useEffect(() => {
      fetch("https://v6.exchangerate-api.com/v6/0f73d0db1739d63dc957fb6e/latest/UAH")
        .then(response => response.json())
        .then(data => {
          const { conversion_rates } = data;
          setCurrencyData({ EUR: conversion_rates.EUR, USD: conversion_rates.USD });
        });
    }, []);
  
    return currencyData;
  };