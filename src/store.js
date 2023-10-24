import { configureStore } from "@reduxjs/toolkit";
import fruits from "./features/fruity";
import fruitsCart from "./features/fruitsCart";

export const store = configureStore({
    reducer: {
        fruits,
        fruitsCart
    }
});