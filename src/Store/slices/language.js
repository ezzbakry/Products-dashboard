import { createSlice } from "@reduxjs/toolkit";




const lanslice=createSlice({
    name:"language",
    initialState:{language:"en"},
    reducers:{
        changeLanguage:(state,action)=>{
            state.language=action.payload
        }
    }
})
 export const {changeLanguage}=lanslice.actions

export default lanslice.reducer