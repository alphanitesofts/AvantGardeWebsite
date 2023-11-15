import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk("categories/fetch", 
async () => {
  try {
    console.log("Sending request...");
    const response = await fetch(
      "https://avantgarde.alphanitesofts.net/api/fetch_all_categorys",
      {
        method: "POST", 
        headers: {
          'Content-Type': 'application/json',
          
        }
      }
    );
    console.log(response,"error")
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default categoriesSlice.reducer;
