import { ICategory } from "./category.interface";
import { Catagories } from "./category.model";

const createCategory = async (payload: ICategory) => {
    const result = await Catagories.create(payload);
    return result;
  };


  const getAllCatagories = async () => {
    const result = await Catagories.find();
    return result;
  };

  const getSingleCategory = async (id: string) => {
    const result = await Catagories.findById(id);
    return result;
  };

  const deleteCategory = async (id: string) => {
    const result = await Catagories.findByIdAndDelete(id);
    return result;
  };


  export const CategoryServices = {
    createCategory,
    getAllCatagories,
    getSingleCategory,
    deleteCategory
  }