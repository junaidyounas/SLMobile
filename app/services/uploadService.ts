import {api} from './apiService';
import {urls} from './constants';

const uploadImages = () => {
  return new Promise<any>((resolve, reject) => {
    api
      .post(
        urls.upload_images,
        {},
        {headers: {'Content-Type': 'multipart/form-data; '}},
      )
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const uploadService = {
  uploadImages,
};
