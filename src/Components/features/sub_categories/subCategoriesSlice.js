import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const base_url = "https://avantgarde.alphanitesofts.net/api";

export const subCategoriesApi = createApi({
    reducerPath:"sub_categories",
    baseQuery:fetchBaseQuery({baseUrl: base_url}),
    endpoints:(builder)=>({
        getSubCategories:builder.query({
            query:(subCategoryId)=>({
                url:`get_articles_by_sub_category_id/${subCategoryId}`,
                method:"POST"
            }),
            transformResponse:(response) => {
                console.log(response,"response");
                return response;
            }
        })
    })
})
export const {useGetSubCategoriesQuery}=subCategoriesApi