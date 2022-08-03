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
  pricegt: 0,
  pricelt: 999999999,
};
