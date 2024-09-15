import { createSlice } from "@reduxjs/toolkit";


const fontslice=createSlice({
    name:"font",
    initialState:{fontcol:"black"},
    reducers:{
        changecol:(state,action)=>{
            state.fontcol=action.payload
        }
    }
})

export const{changecol}=fontslice.actions

export default fontslice.reducer