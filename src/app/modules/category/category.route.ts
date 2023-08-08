import express from 'express';
import validationRequest from '../../middleware/validationRequest';
import { CategoryValidation } from './category.validation';
import { CatagoriesController } from './category.controller';

const router = express.Router();

// all routes

router.post(
  '/',
  validationRequest(CategoryValidation.createCategoryZodSchema),
  CatagoriesController.createCategoryController,
);
router.get('/:id', CatagoriesController.getSingleCategoryController);
router.get('/', CatagoriesController.getAllCatagoriesController);

router.delete('/:id', CatagoriesController.deleteCategoryController);

export const CatagoriesRoute = router;
