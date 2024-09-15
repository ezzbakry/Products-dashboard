import { createSlice } from "@reduxjs/toolkit";
const counterslice=createSlice({
    name:"counter",
    initialState:{counter:0},
    reducers:{
        increaseCounter:(state)=>{
            state.counter+=1

        },reduceCounter:(state)=>{
            state.counter-=1
        }
    }
})
export const {increaseCounter,reduceCounter}=counterslice.actions

export default counterslice.reducer