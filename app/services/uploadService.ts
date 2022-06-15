import {api} from './apiService';
import {urls} from './constants';

const uploadImages = (formData: any) => {
  return new Promise<any>((resolve, reject) => {
    api
      .post(urls.upload_images, formData, {
        headers: {
          'Content-Type': 'multipart/form-data; ',
          Accept: 'multipart/form-data',
        },
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const uploadSingleImages = (formData: any) => {
  return new Promise<any>((resolve, reject) => {
    api
      .post(urls.upload_single_image, formData, {
        headers: {
          'Content-Type': 'multipart/form-data; ',
          Accept: 'multipart/form-data',
        },
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const uploadService = {
  uploadImages,
  uploadSingleImages,
};
