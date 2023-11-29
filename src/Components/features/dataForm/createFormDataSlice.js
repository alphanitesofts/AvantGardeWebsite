import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const base_url = "https://avantgarde.alphanitesofts.net/api";

// export const api = createApi({
//  reducerPath: 'formData',
//  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
//  endpoints: (builder) => ({
//     PostOrder: builder.mutation({
//         query: (data) => ({
//             url: '/post_order',
//             method: 'POST',
//             body: data
//         }),

//     })

//  }),
// });

// export const { usePostOrderMutation } = api;
// api.js

export const api = createApi({
  reducerPath: "formData",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/post_order",
        method: "POST",
        body: data,
      }),
      onError: (error, variables, build) => {
        console.error("Error:", error);
      },
    }),
  }),
});

export const { useCreateOrderMutation } = api;
