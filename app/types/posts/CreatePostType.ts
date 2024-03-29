import {Location} from 'types/Location';

export interface CreatePostType {
  title: string;
  description: string;
  price: number;
  condition: string;
  location: Location;
  category: any;
  subCategory: string;
  brand: string;
  make: string;
  year: string;
  type: string;
  areaUnit: string;
  area: number;
  isFurnished: boolean;
  rooms: number;
  bathrooms: number;
  kitchens: number;
  landType: string;
  images: string[];
}
