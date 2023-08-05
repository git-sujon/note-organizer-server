import express from 'express';
import { NotesController } from './notes.controller';
import validationRequest from '../../middleware/validationRequest';
import { NoteValidation } from './notes.validation';

const router = express.Router();

// all routes

router.post(
  '/',
  validationRequest(NoteValidation.createNoteZodSchema),
  NotesController.createNoteController,
);
router.get('/:id', NotesController.getSingleNoteController);
router.get('/', NotesController.getAllNotesController);
router.patch(
  '/:id',
  validationRequest(NoteValidation.updateNoteZodSchema),
  NotesController.updateNoteController,
);
router.delete('/:id', NotesController.deleteNoteController);

export const NotesRoute = router;
