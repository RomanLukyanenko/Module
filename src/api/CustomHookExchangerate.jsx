import { useEffect, useState } from "react";

export const useCurrencyRates = () => {
  const [currencyData, setCurrencyData] = useState({ EUR: 1, USD: 1 });

  useEffect(() => {
    const data = localStorage.getItem("currencyRates");
    const lastFetchTime = localStorage.getItem("lastFetchTime");

    const now = new Date();
    const lastFetchDate = new Date(lastFetchTime);
    const nextUpdateTime = new Date(lastFetchDate);
    nextUpdateTime.setUTCHours(22, 0, 0, 0);
    nextUpdateTime.setDate(lastFetchDate.getUTCDate() + 1);

    const shouldUpdate = !data || now >= nextUpdateTime;

    if (shouldUpdate) {
      fetch(
        "https://v6.exchangerate-api.com/v6/49107cb6b4bd5d052a47345c/latest/UAH",
      )
        .then((response) => response.json())
        .then((data) => {
          const { conversion_rates } = data;
          const rates = {
            EUR: conversion_rates.EUR,
            USD: conversion_rates.USD,
          };
          setCurrencyData(rates);
          localStorage.setItem("currencyRates", JSON.stringify(rates));
          localStorage.setItem("lastFetchTime", now.toISOString());
        });
    } else if (data) {
      setCurrencyData(JSON.parse(data));
    }
  }, []);

  return currencyData;
};
