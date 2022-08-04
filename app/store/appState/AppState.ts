import {AppStateType} from './AppStateType';

export const AppState: AppStateType = {
  locationHistory: [],
  addPostLocation: {
    title: '',
    type: '',
    coordinates: [],
  },
  searchLocation: {
    title: '',
    type: '',
    coordinates: [],
  },
  searchCategory: {
    title: '',
    id: '',
    subCategory: '',
  },
  pricegt: undefined,
  pricelt: undefined,
  searchBrand: '',
};
