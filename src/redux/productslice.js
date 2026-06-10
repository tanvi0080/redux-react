import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/fetchProducts',
    async()=>{
    const resp =await fetch('https://dummyjson.com/products');
    const jsonresp=await resp.json();
    return jsonresp.products
});
const initialState={
    items:[],
    status:undefined,
    error:null
}
const productslice=createSlice({
    name:'productslice',
    initialState,
    reducers: {},
  extraReducers: (builder) => {
    builder
      
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload; // ✅ FIXED
      })
     
    }
})

export default productslice.reducer