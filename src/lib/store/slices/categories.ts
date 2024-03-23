import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DEFAULT_CATEGORIES, StorageKeys } from "constant";
import { DataStorageService } from "services";
import type { Category } from "types";

interface CategoriesState {
  categories: Category[];
}

const initialState: CategoriesState = {
  categories:
    DataStorageService.retrieveData(StorageKeys.CATEGORIES) ||
    DEFAULT_CATEGORIES,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload);
      DataStorageService.saveData(state.categories, StorageKeys.CATEGORIES);
    },

    deleteCategory: (state, action: PayloadAction<Category>) => {
      state.categories = state.categories.filter(
        (category) => category.name !== action.payload.name
      );
      DataStorageService.saveData(state.categories, StorageKeys.CATEGORIES);
    },
  },
});

export const categoriesReducer = categoriesSlice.reducer;
export const { addCategory, deleteCategory } = categoriesSlice.actions;
