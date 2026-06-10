import { createSlice } from "@reduxjs/toolkit";
const initialState={
    items: JSON.parse(localStorage.getItem('cart'))|| [],
};

const addToCart = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,action)=>{
            // state.value+=1;
            // console.log(action.payload);
            state.items.push(action.payload);
            console.log("saving",state.items);
            localStorage.setItem('cart',JSON.stringify(state.items));
        },
        removeItem:(state,action)=>{
            const cartData= state.items.filter((item)=>item?.id!=action.payload.id);
            state.items=cartData;
            localStorage.setItem('cart',JSON.stringify(cartData))
        },
        clearallItem:(state)=>{
            state.items = [];
        }
    }
})


export const {addItem,removeItem,clearallItem} = addToCart.actions;
export default addToCart.reducer