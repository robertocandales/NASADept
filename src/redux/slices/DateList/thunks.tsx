import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_BASE} from '../../../config/API';

export const getDateList = createAsyncThunk('dateList/getList', async () => {
  try {
    const res = await axios.get(`${URL_BASE}/enhanced/all`);
    return res.data;
  } catch (error) {
    console.log(error, 'error getDateList');
  }
});
