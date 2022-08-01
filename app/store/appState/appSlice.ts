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
  },
});

export const {addLocationInHistory, removeLocationFromHistory} =
  appSlice.actions;

export default appSlice.reducer;
