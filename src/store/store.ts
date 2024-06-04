import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "../slice/recipesSlice";


const store = configureStore({
  reducer: recipesReducer
});

export default store;