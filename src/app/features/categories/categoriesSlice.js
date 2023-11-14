import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk(
    'categories/fetch',
    async()=>{
        const response = await fetch('https://avantgarde.alphanitesofts.net/api/fetch_all_categorys');
        return response.json();
    }
)
const categoriesSlice = createSlice({
    name: 'categories',
    initialState:{
        isLoading:false,
        data:null,
        isError: false
    },

    extraReducers:(builder)=>{
        builder.addCase(fetchCategories.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(fetchCategories.fulfilled,(state,action) =>{
            state.isLoading=false;
            state.data=action.payload;
        });
        builder.addCase(fetchCategories.rejected,(state,action)=>{
            console.log("Error", action.payload);
            state.isError=true;
        });
    }
});
export default categoriesSlice.reducer;



