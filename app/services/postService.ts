import {addUser, login} from 'store/auth/authSlice';
import {store} from 'store/store';
import {LoginResponse} from 'types/auth/LoginResponse';
import {Category} from 'types/Category';
import {CreatePostType} from 'types/posts/CreatePostType';
import {SinglePostType} from 'types/posts/SinglePostType';
import {logMe} from 'utils/functions/logBinder';
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

const showAllPosts = (page?: number, query?: string) => {
  const url = new URL(urls.posts);
  if (query) {
    url.searchParams.append('search', query);
  }
  if (page) {
    url.searchParams.append('page', page.toString());
  }
  logMe(url);
  return new Promise<Array<SinglePostType>>((resolve, reject) => {
    api
      .get(url.toString())
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
  showAllPosts,
};
