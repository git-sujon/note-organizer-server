import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import { NotesService } from './notes.services';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createNoteController = catchAsync(async (req: Request, res: Response) => {
  const { ...NotesData } = req.body;

  const result = await NotesService.createNote(NotesData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Note created successfully',
    data: result,
  });
});
const getAllNotesController = catchAsync(
  async (req: Request, res: Response) => {
    const result = await NotesService.getAllNotes();

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Notes retrieved successfully',
      data: result,
    });
  },
);
const getSingleNoteController = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await NotesService.getSingleNote(id);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Note retrieved successfully',
      data: result,
    });
  },
);
const updateNoteController = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ...payload } = req.body;

  const result = await NotesService.updateNote(id, payload);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Note update successfully',
    data: result,
  });
});
const deleteNoteController = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await NotesService.deleteNote(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Note Delete successfully',
    data: result,
  });
});

export const NotesController = {
  createNoteController,
  getAllNotesController,
  getSingleNoteController,
  updateNoteController,
  deleteNoteController,
};
