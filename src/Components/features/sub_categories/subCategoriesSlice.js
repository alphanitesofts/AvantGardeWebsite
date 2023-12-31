import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const base_url = "https://avantgarde.alphanitesofts.net/api";

export const subCategoriesApi = createApi({
    reducerPath:"sub_categories",
    baseQuery:fetchBaseQuery({baseUrl: base_url}),
    endpoints:(builder)=>({
        getSubCategories:builder.query({
            query:()=>({
                url:`fetch_all_sub_categorys`,
                method:"POST"
            }),
            transformResponse:(response) => {
                console.log(response,"response sub category");
                return response;
            }
        })
    })
})
export const {useGetSubCategoriesQuery}=subCategoriesApi