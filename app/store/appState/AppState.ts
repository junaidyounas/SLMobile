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
  make: '',
  year: '',
  landType: '',
  areaUnit: '',
  area: undefined as any,
  isFurnished: undefined as any,
  rooms: undefined as any,
  bathrooms: undefined as any,
  kitchens: undefined as any,
  currentLikedPost: {} as any,
};
