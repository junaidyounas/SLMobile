import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Location} from 'types/Location';
import {AppState} from './AppState';

export const appSlice = createSlice({
  name: 'app',
  initialState: AppState,
  reducers: {
    addLocationInHistory: (state, action: PayloadAction<Location>) => {
      state.locationHistory.push(action.payload);
    },
    removeLocationFromHistory: (state, action: PayloadAction<number>) => {
      state.locationHistory.splice(action.payload, 1);
    },
    addPostLocation: (state, action: PayloadAction<Location>) => {
      state.addPostLocation = action.payload;
    },
    addSearchLocation: (state, action: PayloadAction<Location>) => {
      state.searchLocation = action.payload;
    },
    addSearchCategory: (
      state,
      action: PayloadAction<{title: string; id: string; subCategory: string}>,
    ) => {
      state.searchCategory = action.payload;
    },
  },
});

export const {
  addLocationInHistory,
  removeLocationFromHistory,
  addPostLocation,
  addSearchLocation,
  addSearchCategory,
} = appSlice.actions;

export default appSlice.reducer;
