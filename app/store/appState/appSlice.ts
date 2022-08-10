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
    addGTPrice: (state, action: PayloadAction<number>) => {
      state.pricegt = action.payload;
    },
    addLTPrice: (state, action: PayloadAction<number>) => {
      state.pricelt = action.payload;
    },
    addSearchBrand: (state, action: PayloadAction<string>) => {
      state.searchBrand = action.payload;
    },
    addFilterMake: (state, action: PayloadAction<string>) => {
      state.make = action.payload;
    },
    addFilterYear: (state, action: PayloadAction<string>) => {
      state.year = action.payload;
    },
    addFilterLandType: (state, action: PayloadAction<string>) => {
      state.landType = action.payload;
    },
    addFilterAreaUnit: (state, action: PayloadAction<string>) => {
      state.areaUnit = action.payload;
    },
    addFilterArea: (state, action: PayloadAction<number>) => {
      state.area = action.payload;
    },
    addFilterIsFurnished: (state, action: PayloadAction<boolean>) => {
      state.isFurnished = action.payload;
    },
    addFilterRooms: (state, action: PayloadAction<number>) => {
      state.rooms = action.payload;
    },
    addFilterBathRooms: (state, action: PayloadAction<number>) => {
      state.bathrooms = action.payload;
    },
    addFilterKitchens: (state, action: PayloadAction<number>) => {
      state.kitchens = action.payload;
    },
    removeAllInCategory: state => {
      state.year = '';
      state.make = '';
      state.searchBrand = '';
      state.searchCategory = {} as any;
      (state.landType = ''), (state.areaUnit = '');
      state.isFurnished = undefined as any;
      state.rooms = undefined as any;
      state.bathrooms = undefined as any;
      state.kitchens = undefined as any;
    },
  },
});

export const {
  addLocationInHistory,
  removeLocationFromHistory,
  addPostLocation,
  addSearchLocation,
  addSearchCategory,
  addGTPrice,
  addLTPrice,
  addSearchBrand,
  addFilterMake,
  addFilterYear,
  removeAllInCategory,
  addFilterLandType,
  addFilterAreaUnit,
  addFilterArea,
  addFilterIsFurnished,
  addFilterRooms,
  addFilterBathRooms,
  addFilterKitchens,
} = appSlice.actions;

export default appSlice.reducer;
