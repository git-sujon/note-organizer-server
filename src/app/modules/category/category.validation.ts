import { z } from 'zod';

const createCategoryZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    userInfo: z.object({
      userEmail: z.string({
        required_error: 'User email is required',
      }),
    }),
  }),
});

export const CategoryValidation = {
  createCategoryZodSchema,
};
