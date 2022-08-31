import {configureStore} from '@reduxjs/toolkit';
import dateListSlice from '../slices/DateList';
import PhotoListSlice from '../slices/PhotoList';

export const store = configureStore({
  reducer: {
    date_list: dateListSlice.reducer,
    photo_list: PhotoListSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
