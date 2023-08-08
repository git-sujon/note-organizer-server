import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { CategoryServices } from './category.services';


const createCategoryController = catchAsync(async (req: Request, res: Response) => {
  const { ...CategoryData } = req.body;
 
  
  const result = await CategoryServices.createCategory(CategoryData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category created successfully',
    data: result,
  });
});



const getAllCatagoriesController = catchAsync(
  async (req: Request, res: Response) => {


    const result = await CategoryServices.getAllCatagories()

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Catagories retrieved successfully',
      data: result,
    });
  },
);
const getSingleCategoryController = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await CategoryServices.getSingleCategory(id);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Category retrieved successfully',
      data: result,
    });
  },
);

const deleteCategoryController = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await CategoryServices.deleteCategory(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category Delete successfully',
    data: result,
  });
});

export const CatagoriesController = {
createCategoryController,
getAllCatagoriesController,
getSingleCategoryController,
deleteCategoryController
};
