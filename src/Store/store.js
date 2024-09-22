import { configureStore } from "@reduxjs/toolkit";
import lanreduce from "./slices/language"
import counterreduce from "./slices/counter"
import namereduce from './slices/name'
import bgreduce from './slices/background'
import fontreduce from './slices/font'
import loadreduce from './slices/loader'
import productreduce from'./slices/products'


const store = configureStore({
    reducer: {
        language: lanreduce,
        counter: counterreduce,
        name: namereduce,
        bg: bgreduce,
        fontcol: fontreduce,
        load:loadreduce,
        products:productreduce

    }
})
export default store;