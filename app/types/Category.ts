export type Category = {
  _id: string;
  title: string;
  subCategories: SubCategory[];
};

export type SubCategory = {
  title: string;
  subCategories?: string[] | SubCategory[];
};
