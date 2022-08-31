import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_BASE} from '../../../config/API';

export const getPhotoList = createAsyncThunk(
  'photoList/getPhotoList',
  async (date: string) => {
    try {
      const res = await axios.get(`${URL_BASE}/enhanced/date/${date}`);
      return res.data;
    } catch (error) {
      console.log(error, 'error getPhotoList');
    }
  },
);
