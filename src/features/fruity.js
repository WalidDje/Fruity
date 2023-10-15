import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        {
            name: "Mango",
            url: "/images/mango.jpg",
            price: 5,
            id: 123456789
        },
        {
            name: "Watermelon",
            url: "/images/watermelon.jpg",
            price: 7,
            id: 789456123
        }
    ]
}

export const fruits = createSlice({
    name: "fruits",
    initialState
})

export default fruits.reducer