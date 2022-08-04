import {User} from 'types/auth/LoginResponse';
import {Location} from 'types/Location';

export interface SinglePostType {
  _id: any;
  title: string;
  description: string;
  price: number;
  location: Location;
  category: {_id: string; title: string; subCategories: any};
  subCategory: string;
  condition: string;
  brand: string;
  isVisible: string;
  isActive: string;
  images: string[];
  user: User;
}
