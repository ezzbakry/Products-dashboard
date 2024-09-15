import { createSlice } from "@reduxjs/toolkit";

const BGslice=createSlice({
    name:"BGslice",
    initialState:{bg:"white"},
    reducers:{
        changebg:(state,action)=>{
            state.bg=action.payload
        }
    }
})

export default BGslice.reducer
export const {changebg}=BGslice.actions