import { Schema, model } from 'mongoose';
import { INotes, NotesModel } from './notes.interface';
import { privacyContent } from './notes.contents';

const notesSchema = new Schema(
  {
    title: { type: String, required: true },
    notesDetails: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    imgUrl: { type: String },
    tags: [
      {
        tagName: { type: String },
      },
    ],
    userinfo: {
      userEmail: { type: String, required: true },
      userName: { type: String},
      userImgUrl: { type: String },
    },
    privacy: { type: String, enum: privacyContent, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const Notes = model<INotes, NotesModel>('Notes', notesSchema);
