import { createSlice } from "@reduxjs/toolkit";
import IProduct from "../models/IProduct";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: Array<IProduct>()
    },
    reducers: {
        addToCart : (state, action) => { 
            //console.log('addToCart: ', action.type, action.payload)           
            // Si el producto no está en el carrito se agrega
            if (state.items.findIndex(p=> p.id === action.payload.id) === -1)
            {
                state.items = [action.payload, ...state.items]
            }
        },
        removeFromCart : (state, action) => {
            state.items = state.items.filter(p => p.id !== action.payload.id)
        },
        clearCart : (state) => {
            state.items = []
        }
    }
})

export default cartSlice