import { createSlice } from '@reduxjs/toolkit';
import { initialStateFilter } from './initialState';
import { reducersFilter } from './reducers';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilter,
  reducers: reducersFilter,
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
