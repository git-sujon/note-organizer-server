import express from 'express';
import { NotesController } from './notes.controller';

const router = express.Router();

// all routes 

router.post('/', NotesController.createNoteController);
router.get('/:id', NotesController.getSingleNoteController);
router.get('/', NotesController.getAllNotesController);
router.patch('/:id', NotesController.updateNoteController);
router.delete('/:id', NotesController.deleteNoteController);

export const NotesRoute = router;
