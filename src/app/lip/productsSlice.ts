import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "@/utils/libraries/index";

interface Products {
    allProducts: any[];
    isLoading: boolean;
    isError: boolean | string | null | any;
}

let initialState: Products = {
    allProducts: [],
    isLoading: false,
    isError: null,
}

export let getAllProducts = createAsyncThunk('productsSlice/products', async () => {
    try {
        let { data } = await axios.get('https://fakestoreapi.com/products');
        return data;
    } catch (error: any) {
        return Toast.fire({
            title: error.message || "Failed to fetch products",
            icon: 'error'
        })
    }
})

let productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.allProducts = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message;
            });
    },
})

export let { } = productsSlice.actions
export let productsReducers = productsSlice.reducer
