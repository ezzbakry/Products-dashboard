import { createSlice } from "@reduxjs/toolkit";


const nameslice=createSlice({
    name:"name",
    initialState:{name:"Ezz"},
    reducers:{
        changename:(state,action)=>{
            state.name=action.payload
        }
    }
})

export const {changename}=nameslice.actions

export default nameslice.reducer