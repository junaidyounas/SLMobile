import {Location} from 'types/Location';
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

const showAllPosts = (
  page?: number,
  query?: string,
  category?: string,
  subCategory?: string,
  location?: Location,
  pricegt?: number,
  pricelt?: number,
  searchBrand?: string,
  year?: string,
) => {
  const url = new URL(urls.posts);
  if (query) {
    url.searchParams.append('search', query);
  }
  if (page) {
    url.searchParams.append('page', page.toString());
  }
  if (category) {
    url.searchParams.append('category', category);
  }
  if (subCategory) {
    url.searchParams.append('subCategory', subCategory);
  }
  if (location?.coordinates) {
    url.searchParams.append('longitude', location?.coordinates[0]?.toString());
    url.searchParams.append('latitude', location?.coordinates[1]?.toString());
  }
  if (pricegt) {
    url.searchParams.append('pricegt', pricegt.toString());
  }
  if (pricelt) {
    url.searchParams.append('pricelt', pricelt.toString());
  }
  if (searchBrand) {
    url.searchParams.append('searchBrand', searchBrand);
  }
  if (year) {
    url.searchParams.append('year', year);
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

const getAllMyPosts = () => {
  return new Promise<Array<SinglePostType>>((resolve, reject) => {
    api
      .get(urls.my_posts)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const getSinglePostById = (id: string) => {
  return new Promise<SinglePostType>((resolve, reject) => {
    api
      .get(`${urls.posts}/${id}`)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const patchExistingPost = (post: CreatePostType, id: string) => {
  return new Promise((resolve, reject) => {
    api
      .patch(`${urls.posts}/${id}`, post)
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
  getAllMyPosts,
  getSinglePostById,
  patchExistingPost,
};
