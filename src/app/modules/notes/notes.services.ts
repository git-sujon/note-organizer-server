import { paginationHelpers } from '../../../helpers/paginationHelper';
import { ISortCondition } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { Catagories } from '../category/category.model';
import { notesSearchableFields } from './notes.contents';
import { INotes, INotesFilter } from './notes.interface';
import { Notes } from './notes.model';

const createNote = async (payload: INotes) => {
  let categoryOptions = {};

  const isExist = await Catagories.findOne({ title: payload?.category });

  if (isExist) {
    payload.category = isExist?._id;
  } else {
    categoryOptions = {
      title: payload.category,
      userInfo: {
        userEmail: payload.userinfo.userEmail,
      },
    };

    const categoryResult = await Catagories.create(categoryOptions);
    payload.category = categoryResult?._id;
  }

  const result = await Notes.create(payload);
  return result;
};

const getAllNotes = async (
  filters: INotesFilter,
  paginationOptions: IPaginationOptions,
) => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: notesSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  // if (filtersData?.category) {
  //   andConditions.push({
  //     category: filtersData?.category,
  //   });
  // }
 

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: ISortCondition = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Notes.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
  const total = await Notes.countDocuments(whereConditions);
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleNote = async (id: string) => {
  const result = await Notes.findById(id);
  return result;
};

const updateNote = async (id: string, payload: Partial<INotes>) => {
  const result = await Notes.findByIdAndUpdate(id, payload);
  return result;
};
const deleteNote = async (id: string) => {
  const result = await Notes.findByIdAndDelete(id);
  return result;
};

// GET ALL CATAGORIES

export const NotesService = {
  createNote,
  getAllNotes,
  getSingleNote,
  updateNote,
  deleteNote,
};
