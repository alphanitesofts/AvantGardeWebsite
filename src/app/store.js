import { configureStore,} from "@reduxjs/toolkit";
import {categoriesApi} from "../Components/features/categories/categoriesSlice"
import { setupListeners } from "@reduxjs/toolkit/query";
import { subCategoriesApi } from "../Components/features/sub_categories/subCategoriesSlice";
export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]:categoriesApi.reducer,
    [subCategoriesApi.reducerPath]:subCategoriesApi.reducer
  },
  middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware().concat(
    categoriesApi.middleware,
    subCategoriesApi.middleware
    )
});

setupListeners(store.dispatch);