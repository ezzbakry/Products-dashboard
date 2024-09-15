import { configureStore } from "@reduxjs/toolkit";
import lanreduce from "./slices/language"
import counterreduce from "./slices/counter"
import namereduce from './slices/name'
import bgreduce from './slices/background'
import fontreduce from './slices/font'
import loadreduce from './slices/loader'


const store = configureStore({
    reducer: {
        language: lanreduce,
        counter: counterreduce,
        name: namereduce,
        bg: bgreduce,
        fontcol: fontreduce,
        load:loadreduce

    }
})

export default store;