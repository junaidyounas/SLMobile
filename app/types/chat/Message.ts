export type Message = {
  message: string;
  type?: 'text' | 'image';
  images?: string[];
  isRead?: false;
  isDeleted?: false;
  createdAt?: Date;
  senderId: string;
  receiverId: string;
};
