import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // [{product: {_id: "231321321", title: "azerty", price: 40, ...}, qty: 3}, {_id: "654654654654654", product: {title: "qwerty", price: 30, ...}, qty: 3}]
};

// [{type: "addItem", payload: {_id: "23132145646", title: "azerty", price: 40 } }]

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.items.find(item => item.product._id === newProduct._id);
      if (existingProduct) {
        // existingProduct.qty++
        state.items = state.items.map(item => item.product._id === existingProduct.product._id ? { ...item, qty: item.qty + 1 } : item)
      } else {
        state.items = [...state.items, { product: newProduct, qty: 1 }]
      }
    },
    removeOneItem: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.items.find(item => item.product._id === newProduct._id);
      if (existingProduct) {
        // existingProduct.qty++
        state.items = state.items.map(item => item.product._id === existingProduct.product._id ? { ...item, qty: item.qty - 1 } : item)
      } else {
        state.items = [...state.items, { product: newProduct, qty: 1 }]
      }
    },
    deleteItem: (state, action) => {
      const productToDelete = action.payload;
      state.items = state.items.filter(item => item.product._id !== productToDelete._id)
    },
  }
});



export const { addItem, removeOneItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;