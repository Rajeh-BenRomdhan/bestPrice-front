import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { alertError, alertSucces, extractErrorMessage } from "../utilities/feedback";

export const fetchProducts = createAsyncThunk("product/fetchProducts", async() =>{
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/product`)
    return res.data
})

export const fetchProductById = createAsyncThunk("product/fetchProductById", async(id)=>{
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/product/${id}`)
    return res.data
})
export const requestCreateProduct = createAsyncThunk(
    "product/requestCreateProduct",
    async ({ formData, navigate}, { rejectWithValue} ) => {
        try {
            const token = localStorage.getItem("token")
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/product`, formData,
            {headers: {
             "Content-Type": "multipart/form-data",
             Authorization: token
            }}
            )
            navigate("/")
            return res.data
        } catch (error) {
            const errorMessage = extractErrorMessage(error)
            return rejectWithValue(errorMessage)
        }
    })
    export const requestUpdateProduct = createAsyncThunk(
        "product/requestUpdateProduct",
        async ({id, data, navigate}, {rejectWithValue}) =>{
            try {
                const token = localStorage.getItem("token")
                const res = await axios.put(`${import.meta.env.VITE_API_URL}/product/${id}`,data,{
                    headers: {
                        Authorization: token
                    }
                })
                navigate(`/`)
                return res.data
            } catch (error) {
                const errorMessage = extractErrorMessage(error)
                return rejectWithValue(errorMessage)
            }
        } )
        export const requestDeleteProduct = createAsyncThunk(
            "product/requestDeleteProduct",
            async ({id , closeModel}, {rejectWithValue}) => {
                try {
                    const token = localStorage.getItem("token")
                    const res = await axios.delete (
                        `${import.meta.env.VITE_API_URL}/product/${id}`,
                        {
                            headers: {
                                Authorization: token
                            }
                        }
                    )
                    closeModel()
                    return res.data
                } catch (error) {
                    const errorMessage = extractErrorMessage(error)
                    return rejectWithValue(errorMessage)
                }
            }
        )
 export const userSlice = createSlice ({
    name: "product",
    initialState: {
        list: [],
        isLoading: false,
        error: null,
        selected: null
    },
reducers: {},
extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true
        state.error = null
    })
    .addCase(fetchProducts.fulfilled, (state, action ) => {
        state.isLoading= false
        state.list = action.payload
    })
    .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
    })
    .addCase(requestCreateProduct.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(requestCreateProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.list.push(action.payload.product)
        alertSucces(action.payload.message)
      })
      .addCase(requestCreateProduct.rejected, (state, action) => {
        state.isLoading = false
        const errorMessage = action.payload
        alertError(errorMessage)
        state.error = errorMessage
      })
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.isLoading = false
        state.selected = action.payload
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
      .addCase(requestUpdateProduct.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(requestUpdateProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.list = state.list.map(element => element._id === action.payload.product._id ? action.payload.product : element)
        alertSucces(action.payload.message)
      })
      .addCase(requestUpdateProduct.rejected, (state, action) => {
        state.isLoading = false
        const errorMessage = action.payload
        alertError(errorMessage)
        state.error = errorMessage
      })
      .addCase(requestDeleteProduct.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(requestDeleteProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.list = state.list.filter(element => element._id !== action.payload.product._id)
        alertSucces(action.payload.message)
      })
      .addCase(requestDeleteProduct.rejected, (state, action) => {
        state.isLoading = false
        const errorMessage = action.payload
        alertError(errorMessage)
        state.error = errorMessage
      })
}
 })
 export default userSlice.reducer