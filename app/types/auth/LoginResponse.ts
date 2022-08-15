export type LoginResponse = {
  _id: string;
  token: string;
  name: string;
  email: string;
  phone: string;
  favourites: Map<string, boolean>[];
};

export type User = {
  _id: string;
  token: string;
  name: string;
  email: string;
  phone: string;
  favourites: Map<string, boolean>[];
};
