import { Schema, model } from 'mongoose';
import { CatagoriesModel, ICategory } from './category.interface';


const categorySchema = new Schema(
  {
    title: { type: String, required: true, unique:true },
    userInfo: {
        userEmail: { type: String, required: true },
      },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const Catagories = model<ICategory, CatagoriesModel>('Catagories', categorySchema);
