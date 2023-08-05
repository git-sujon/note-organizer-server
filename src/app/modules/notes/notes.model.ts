import { Schema, model } from 'mongoose'
import { INotes, NotesModel } from './notes.interface';

const notesSchema = new Schema({
    title: { type: String, required: true },
    notesDetails: { type: String, required: true },
    category: { type: String, required: true },
    imgUrl: { type: String},
    tags: [
      {
        tagName: { type: String }
      }
    ],
    userinfo: {
      userEmail: { type: String, required: true },
      userImgUrl: { type: String }
    },
    privacy: { type: String, enum: ['Public', 'Private'], required: true }
  });

export const Notes = model<INotes, NotesModel>('Notes', notesSchema);
