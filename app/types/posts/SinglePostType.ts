import {User} from 'types/auth/LoginResponse';

export interface SinglePostType {
  _id: any;
  title: string;
  description: string;
  price: number;
  location: string;
  category: {_id: string; title: string; subCategories: any};
  subCategory: string;
  condition: string;
  isVisible: string;
  isActive: string;
  images: string[];
  user: User;
}
