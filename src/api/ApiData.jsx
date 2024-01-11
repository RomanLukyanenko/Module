import { useEffect } from "react";

const urlPart = 'https://654ca14b77200d6ba8591faa.mockapi.io/';

export const apiCatalog = urlPart + 'catalog';
export const apiCatalogByCategory = apiCatalog + '?catid=';
export const apiSearch = apiCatalog + '?search=';
export const apiCategory = urlPart + 'category';
export const apiHotOffer = apiCatalog + '?hotoffer=yes';

export const useFetchData = (url, setData) => {
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, [url, setData]);
};
