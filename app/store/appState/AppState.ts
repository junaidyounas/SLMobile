import {AppStateType} from './AppStateType';

export const AppState: AppStateType = {
  locationHistory: [],
  addPostLocation: {
    title: '',
    longitude: 0,
    latitude: 0,
  },
  searchLocation: {
    title: '',
    longitude: 0,
    latitude: 0,
  },
};
