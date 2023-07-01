import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = `https://connections-api.herokuapp.com`;
axios.defaults.baseURL = BASE_URL;

export const fetchUserNewContact = createAsyncThunk(
  'users/newUser',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserLogin = createAsyncThunk(
  'users/login',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserLoginOut = createAsyncThunk(
  'users/logout',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/logout');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserCurrent = createAsyncThunk(
  'users/current',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
