import { Model, Types } from 'mongoose';

export type ICategory = {
  title: string;
  userInfo: {
    userEmail: string;
  };
};

export type CatagoriesModel = Model<ICategory, Record<string, unknown>>;
