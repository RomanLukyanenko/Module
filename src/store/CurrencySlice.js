import { createSlice } from '@reduxjs/toolkit';

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currentCurrency: 'UAH',
  },
  reducers: {
    changeCurrency: (state, action) => {
      state.currentCurrency = action.payload;
    },
  },
});

export const { changeCurrency } = currencySlice.actions;
export default currencySlice.reducer;
