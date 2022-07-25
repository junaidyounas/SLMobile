import {addUser, login} from 'store/auth/authSlice';
import {store} from 'store/store';
import {LoginResponse} from 'types/auth/LoginResponse';
import {Category} from 'types/Category';
import {ChatSession} from 'types/chat/Session';
import {api} from './apiService';
import {urls} from './constants';

const createSession = (obj: {
  lastMessage: string;
  receiverId: string;
  postId: string;
}) => {
  return new Promise<ChatSession>((resolve, reject) => {
    console.log(obj);
    api
      .post(urls.create_chat_session, obj)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const chatService = {
  createSession,
};
