import {User} from 'types/auth/LoginResponse';
import {SinglePostType} from 'types/posts/SinglePostType';

export type ChatSession = {
  _id: string;
  lastMessage: string;
  postId?: SinglePostType;
  senderId?: User;
  receiverId?: User;
  isDeleted: boolean;
  isSelling: boolean;
  createdAt: Date;
  updatedAt: Date;
};
