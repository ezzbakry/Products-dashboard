import { createSlice } from "@reduxjs/toolkit";

const load = createSlice({
    name: "load",
    initialState: { load: false },
    reducers: {
        changeloader: (state, action) => {
            state.load = action.payload
        }
    }

})

export default load.reducer
export const { changeloader } = load.actions