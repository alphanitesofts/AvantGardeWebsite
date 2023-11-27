import { configureStore,} from "@reduxjs/toolkit";
import {categoriesApi} from "../Components/features/categories/categoriesSlice"
import { setupListeners } from "@reduxjs/toolkit/query";
import { subCategoriesApi } from "../Components/features/sub_categories/subCategoriesSlice";
import { articlesApi } from "../Components/features/articles/getArticlesApi";
import cartReducer from '../Components/features/addToCart/addToCartSlice'
import {api} from '../Components/features/dataForm/createFormDataSlice'

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]:categoriesApi.reducer,
    [subCategoriesApi.reducerPath]:subCategoriesApi.reducer,
    [articlesApi.reducerPath]:articlesApi.reducer,
    [api.reducerPath]: api.reducer,
    addToCart:cartReducer,
  },
  middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware().concat(
    categoriesApi.middleware,
    subCategoriesApi.middleware,
    articlesApi.middleware,
    api.middleware,
    )
});

setupListeners(store.dispatch);
