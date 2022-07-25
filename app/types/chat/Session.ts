export type ChatSession = {
  _id: string;
  lastMessage: string;
  postId: string;
  senderId: string;
  receiverId: string;
  isDeleted: boolean;
  isSelling: boolean;
  createdAt: Date;
  updatedAt: Date;
};
