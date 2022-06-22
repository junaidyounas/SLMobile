import {Category, SubCategory} from 'types/Category';
import {api} from './apiService';
import {urls} from './constants';

const getAll = () => {
  return new Promise<Array<Category>>((resolve, reject) => {
    api
      .get(urls.categories)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const getSubCategories = (id: string) => {
  return new Promise<Array<SubCategory>>((resolve, reject) => {
    api
      .get(`${urls.categories}/${id}`)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const categoryService = {
  getAll,
  getSubCategories,
};
