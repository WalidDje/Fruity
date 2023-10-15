import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counter";
import fruits from "./features/fruity";
import fruitsCart from "./features/fruitsCart";

export const store = configureStore({
    reducer: {
        counter,
        fruits,
        fruitsCart
    }
});