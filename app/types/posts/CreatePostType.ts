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
  images: string[];
}
