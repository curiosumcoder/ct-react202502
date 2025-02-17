import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import logger from "redux-logger";
import productSlice from "./productSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products: productSlice.reducer
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    middleware: (getDefaultMiddleware:any) => getDefaultMiddleware().concat(logger),
})

export default store

