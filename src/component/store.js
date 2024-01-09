import { configureStore } from "@reduxjs/toolkit";
import { Main } from "./Reducer";

const store=configureStore({
    reducer:{
        custom:Main
    }
})

export default store;
