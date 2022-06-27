import {addUser, login} from 'store/auth/authSlice';
import {store} from 'store/store';
import {LoginResponse} from 'types/auth/LoginResponse';
import {Category} from 'types/Category';
import {CreatePostType} from 'types/posts/CreatePostType';
import {api} from './apiService';
import {urls} from './constants';

const createNewPost = (post: CreatePostType) => {
  return new Promise((resolve, reject) => {
    api
      .post(urls.posts, post)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const postService = {
  createNewPost,
};
