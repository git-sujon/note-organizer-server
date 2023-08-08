import { Model, Types } from 'mongoose';

export type INotes = {
  title: string;
  notesDetails: string;
  category: Types.ObjectId;
  imgUrl: string;
  tags:[
    {
        tagName:string
    }
  ]
  userinfo: {
    userEmail: string;
    userName: string;
    userImgUrl:string;
  };
  privacy:'Public' | 'Private'
};

export type NotesModel = Model<INotes, Record<string, unknown>>;

export type INotesFilter = {
    searchTerm?: string;
  };
  