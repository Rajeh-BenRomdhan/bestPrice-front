import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { alertError, alertSucces, extractErrorMessage } from "../utilities/feedback";

export const requestLogin = createAsyncThunk("user/requestLogin",
 async({email, password, navigate}, {rejectWithValue}) =>{
  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/user/login`, {email, password})
    navigate('/')
    return res.data
  } catch (error) {
    const errorMessage = extractErrorMessage(error)
    return rejectWithValue(errorMessage)
  }  
})
export const requestRegister = createAsyncThunk("user/requestRegister", 
async({firstName, lastName, address, phone, email, password, navigate}, {rejectWithValue}) =>{
try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/user/register`,
    {firstName, lastName, address, phone, email, password})
    navigate("/SignIn")
    return res.data
} catch (error) {
    const errorMessage = extractErrorMessage(error)
    return rejectWithValue(errorMessage)
}
})
export const userSlice = createSlice({
    name: "user",
    initialState:{
    isAuthenticated: false,
    token: null,
    details: null,
    isloading: false,
    error: null
    },
    reducers:{
        login:(state, action) => {
            state.isAuthenticated = true
            state.token = action.payload.token
            state.details = action.payload.details
        } ,
        logout: (state) => {
            localStorage.removeItem("token")
            localStorage.removeItem("userDetails")
            state.isAuthenticated= false
            state.token = null
            state.details = null
        } 
    },
    extraReducers:(builder) =>{
        builder
        .addCase(requestLogin.pending, (state) =>{
         state.isloading = true
         state.error = null
        })
        .addCase(requestLogin.fulfilled, (state, action) => {
            state.isAuthenticated = true

            const token = action.payload.token
            const userDetails = action.payload.user

            localStorage.setItem("token", token)
            localStorage.setItem('userDetails', JSON.stringify(userDetails))
            alertSucces(action.payload.message)
        })
        .addCase(requestLogin.rejected, (state, action) => {
            state.isloading = false
            const errorMessage = action.payload
            alertError(errorMessage)
            state.error = errorMessage
        })
    }
})
export const {login, logout} = userSlice.actions
export default userSlice.reducer