import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getDateList} from './thunks';

export const IS_ONBOARDING_COMPLETED = '@isOnboardingCompleted';

export interface IDateList {
  date: string;
}

interface IInitialState {
  dateList: IDateList[];
  isLoadingDateList: boolean;
}

const initialState: IInitialState = {
  dateList: [],
  isLoadingDateList: false,
};

const dateListSlice = createSlice({
  name: 'dateList',
  initialState,
  reducers: {
    dateListAction: (state, action) => {
      state.dateList = action?.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getDateList.pending, state => {
        state.isLoadingDateList = true;
      })
      .addCase(getDateList.fulfilled, (state, action: PayloadAction<any>) => {
        state.dateList = action.payload;
        state.isLoadingDateList = false;
      })
      .addCase(getDateList.rejected, state => {
        state.isLoadingDateList = false;
      });
  },
});

export const {dateListAction} = dateListSlice.actions;
export default dateListSlice;
