import { Model, Types } from 'mongoose';

export type INotes = {
  title: string;
  notesDetails: string;
  category: string;
  imgUrl: string;
  tags:[
    {
        tagName:string
    }
  ]
  userinfo: {
    userEmail: string;
    userImgUrl:string;
  };
  privacy:'Public' | 'private'
};

export type NotesModel = Model<INotes, Record<string, unknown>>;
