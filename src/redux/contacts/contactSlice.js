import { createSlice } from '@reduxjs/toolkit';
import { initialStateContacts } from './initialState';
import { extraReducersContacts } from './reducers';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,
  extraReducers: extraReducersContacts,
});

export default contactsSlice.reducer;
