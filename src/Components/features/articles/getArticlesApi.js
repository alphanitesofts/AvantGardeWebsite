import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const base_url = "https://avantgarde.alphanitesofts.net/api";

export const articlesApi = createApi({
    reducerPath:"articles",
    baseQuery:fetchBaseQuery({baseUrl: base_url}),
    endpoints:(builder)=>({
        getArticles:builder.query({
            query:(subCategoryId)=>({
                url:`/get_articles_by_sub_category_id/${subCategoryId}`,
                method:"POST"
            }),
            transformResponse:(response) => {
                console.log(response.articles,"response articles");
                return response;
            }
        })
    })
})
export const {useGetArticlesQuery}=articlesApi