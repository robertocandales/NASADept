import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getPhotoList} from './thunks';

export interface IPhotoList {
  identifier: string;
  caption: string;
  image: string;
  version: string;
  centroid_coordinates: {
    lat: number;
    lon: number;
  };
  dscovr_j2000_position: {
    x: number;
    y: number;
    z: number;
  };
  lunar_j2000_position: {
    x: number;
    y: number;
    z: number;
  };
  sun_j2000_position: {
    x: number;
    y: number;
    z: number;
  };
  attitude_quaternions: {
    q0: number;
    q1: number;
    q2: number;
    q3: number;
  };
  date: string;
  coords: {
    centroid_coordinates: {
      lat: number;
      lon: number;
    };
    dscovr_j2000_position: {
      x: number;
      y: number;
      z: number;
    };
    lunar_j2000_position: {
      x: number;
      y: number;
      z: number;
    };
    sun_j2000_position: {
      x: number;
      y: number;
      z: number;
    };
    attitude_quaternions: {
      q0: number;
      q1: number;
      q2: number;
      q3: number;
    };
  };
}

interface IInitialState {
  photoList: IPhotoList[];
  isLoadingPhotoList: boolean;
}

const initialState: IInitialState = {
  photoList: [],
  isLoadingPhotoList: false,
};

const PhotoListSlice = createSlice({
  name: 'dateList',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(getPhotoList.pending, state => {
        state.isLoadingPhotoList = true;
      })
      .addCase(getPhotoList.fulfilled, (state, action: PayloadAction<any>) => {
        state.photoList = action.payload;
        state.isLoadingPhotoList = false;
      })
      .addCase(getPhotoList.rejected, state => {
        state.isLoadingPhotoList = false;
      });
  },
});

export const {} = PhotoListSlice.actions;
export default PhotoListSlice;
