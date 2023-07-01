import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllContacts } from './operations';

const BASE_URL = `https://connections-api.herokuapp.com`;
axios.defaults.baseURL = BASE_URL;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const getContacts = createAsyncThunk(
  'contact/fetchAllContacts',
  async () => {
    return fetchAllContacts();
  }
);
