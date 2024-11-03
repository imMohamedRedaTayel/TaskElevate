import { configureStore } from "@reduxjs/toolkit";
import { productsReducers } from "./productsSlice";

export  let store = configureStore({
    reducer:{
        productsSlice: productsReducers
    }
})