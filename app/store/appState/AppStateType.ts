import {Location} from 'types/Location';

export interface AppStateType {
  locationHistory: Location[];
  addPostLocation: Location;
  searchLocation: Location;
  searchCategory: {title: string; id: string; subCategory: string};
  pricegt: number | undefined;
  pricelt: number | undefined;
  searchBrand: string;
}
