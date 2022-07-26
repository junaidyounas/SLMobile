import {addUser, login} from 'store/auth/authSlice';
import {store} from 'store/store';
import {LoginResponse} from 'types/auth/LoginResponse';
import {Category} from 'types/Category';
import {Message} from 'types/chat/Message';
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

const getAllCurrentUserChatSessions = () => {
  return new Promise<Array<ChatSession>>((resolve, reject) => {
    api
      .get(`${urls.chat_sessions}`)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const getSingleChatSession = (id: string) => {
  return new Promise<Array<ChatSession>>((resolve, reject) => {
    api
      .get(`${urls.chat_session}/${id}`)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const getChatMessages = (id: string) => {
  return new Promise<Array<ChatSession>>((resolve, reject) => {
    api
      .get(`${urls.chat_messages}/${id}`)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const sendMessage = (obj: Message, id: string) => {
  return new Promise<Array<ChatSession>>((resolve, reject) => {
    api
      .post(`${urls.send_message}/${id}`, obj)
      .then((res: any) => {
        console.log(res.data);
        resolve(res.data);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};

export const chatService = {
  createSession,
  getAllCurrentUserChatSessions,
  getSingleChatSession,
  getChatMessages,
  sendMessage,
};
