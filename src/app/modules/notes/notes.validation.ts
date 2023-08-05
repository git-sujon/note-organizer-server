import { z } from 'zod';
import { privacyContent } from './notes.contents';

const createNoteZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    notesDetails: z.string({
      required_error: 'Notes details are required',
    }),
    category: z.string({
      required_error: 'Category is required',
    }),
    imgUrl: z.string().optional(),
    tags: z.array(
      z.object({
        tagName: z.string(),
      }),
    ),
    userinfo: z.object({
      userEmail: z.string({
        required_error: 'User email is required',
      }),
      userImgUrl: z.string().optional(),
    }),
    privacy: z.enum([...privacyContent] as [string, ...string[]], {
      required_error: 'Privacy is required',
    }),
  }),
});

const updateNoteZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    notesDetails: z.string().optional(),
    category: z.string().optional(),
    imgUrl: z.string().optional(),
    tags: z
      .array(
        z.object({
          tagName: z.string(),
        }),
      )
      .optional(),
    userinfo: z
      .object({
        userEmail: z.string().optional(),
        userImgUrl: z.string().optional(),
      })
      .optional(),
    privacy: z.enum([...privacyContent] as [string, ...string[]]).optional(),
  }),
});

export const NoteValidation = {
  createNoteZodSchema,
  updateNoteZodSchema,
};
