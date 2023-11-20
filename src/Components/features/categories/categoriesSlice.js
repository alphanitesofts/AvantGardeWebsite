
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const base_url = "https://avantgarde.alphanitesofts.net/api";

export const categoriesApi = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({baseUrl: base_url}),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url:"/get_categorys_name_and_id",
        method:'POST'
      }),
      transformResponse: (response) => {
        console.log('Raw Response:', response);
        return response?.Categorys;
      },
      })
      })
})
export const {useGetCategoriesQuery,} = categoriesApi;

// const categoriesSlice = createSlice({
//   name: "categories",
//   // initialState: {
//   //   isLoading: false,
//   //   data: [],
//   //   isError: false,
//   // },
//   // reducers: {},
//   // extraReducers: (builder) => {
//   //   builder.addCase(fetchCategories.pending, (state) => {
//   //     state.isLoading = true;
//   //     state.isError = false;
//   //   })
//   //   .addCase(fetchCategories.fulfilled, (state, action) => {
//   //     state.isLoading = false;
//   //     state.data = action.payload;
//   //     state.isError = false;
//   //   })
//   //   .addCase(fetchCategories.rejected, (state) => {
//   //     state.isLoading = false;
//   //     state.isError = true;
//   //   });
//   // },
// });

// export const fetchCategories = createAsyncThunk("fetch/categories", 
// async () => {
//     console.log("Sending request...");
//     const response = await axios.post(
//       `${base_url}fetch_all_categorys`)
//       .then((res) => res.response);
//       return response;
//       });
     

// export default categoriesSlice.reducer;
