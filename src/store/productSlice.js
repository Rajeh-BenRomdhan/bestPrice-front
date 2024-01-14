import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { alertError, alertSucces, extractErrorMessage } from "../utilities/feedback";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async() =>{
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/product`)
    return res.data
})

export const fetchProductById = createAsyncThunk("products/fetchProductById", async(id)=>{
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/products/{id}`)
    return res.data
})
export const requestCreateProduct = createAsyncThunk(
    "products/requestCreateProduct",
    async ({ FormData, navigate}, { rejectWithValue} ) => {
        try {
            const token = localStorage.getItem("token")
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/products`, FormData,
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
        "products/requestUpdateProduct",
        async ({id, data, navigate}, {rejectWithValue}) =>{
            try {
                const token = localStorage.getItem("token")
                const res = await axios.put(`${import.meta.env.VITE_API_URL}/products/${id}`,data,{
                    headers: {
                        Authorization: token
                    }
                })
                navigate(`/products/${id}`)
                return res.data
            } catch (error) {
                const errorMessage = extractErrorMessaage(error)
                return rejectWithValue(errorMessage)
            }
        } )
        export const requestDeleteProduct = createAsyncThunk(
            "products/requestDeleteProduct",
            async ({id , closeModel}, {rejectWithValue}) => {
                try {
                    const token = localStorage.getItem("token")
                    const res = await axios.delete (
                        `${import.meta.env.VITE_API_URL}/products/${id}`,
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
    name: "products",
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
        state.list = state.list.map(element => element._id === action.payload.item._id ? action.payload.product : element)
        alertSuccess(action.payload.message)
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
        alertSuccess(action.payload.message)
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