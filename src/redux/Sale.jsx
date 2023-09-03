import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    productData:[],
    userInfo:null,
}

export const Sale=createSlice({
    name:'bazzar',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item = state.productData.find((item)=>item._id===action.payload._id)
            if(item){
                item.quantity+=action.payload.quantity
            }else{

                state.productData.push(action.payload);
            }
        },
                deleteItem:(state,action)=>{
                    state.productData=state.productData.filter(
                        (item)=>item._id !== action.payload
                        )
                },
                resetCart:(state)=>{
                    state.productData=[];
                },
                incrementQuantity:(state,action)=>{
                    const item=state.productData.find(
                        (item)=>item._id===action.payload._id
                    )
                    if(item){
                        item.quantity++;
                    }
                },
                decrementQuantity:(state,action)=>{
                    const item=state.productData.find(
                        (item)=>item._id===action.payload._id
                    )
                    if(item){
                        item.quantity--;
                    }
                },
                //user start here

                addUser:(state,action)=>{
                    state.userInfo=action.payload
                },
                removeUser:(state)=>{
                    state.userInfo=null
                },
           //user end here
        
    },
    
})

export const {
    addToCart,
    addUser,
    removeUser,
    deleteItem,
    resetCart,
    incrementQuantity,
    decrementQuantity,

} = Sale.actions
export default Sale.reducer;
