import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IInitialState, IRecipe } from "../types/interfaces";

export const fetchRecipes = createAsyncThunk(
    'recipes/fetchRecipes',
    async function () {
      try {
        const categoryArray = ["Beef","Breakfast","Chicken","Dessert","Goat","Lamb","Miscellaneous","Pasta",
          "Pork","Seafood","Side","Starter","Vegan","Vegetarian"
        ]
        const category = categoryArray[Math.floor(Math.random() * categoryArray.length)]
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        if (!response.ok) {
          throw new Error("Something went wrong")
        }
        const data = await response.json();
        return data;
      }
      catch (error) {
      }
    }
  )

export const fetchOneRecipe = createAsyncThunk(
  'recipes/fetchOneRecipe',
  async function (id: string, { rejectWithValue }) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      if (!response.ok) {
        throw new Error("Something went wrong")
      }
      const data = await response.json();
      console.log(data)
      return data;
    }
    catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)

export const searchResult = createAsyncThunk(
  'recipes/fetchSearchResult',
  async function ({text}: {text: string}, { rejectWithValue }) {
    try {
      const responce = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${text}`);
      if (!responce.ok) {
        throw new Error("ERROR")
      }
      const data = await responce.json();
      return data;
    }
    catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)

export const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    oneRecipe: [],
    favorites: [],
    status: null,
    error: null,
    searchResultRecipes: null
  },
  reducers: {
    addToFavorite: (state: IInitialState, { payload }) => {
      const isAlreadyAdded = state.favorites.some((item: IRecipe) => item.idMeal === payload.idMeal);
      if (isAlreadyAdded) {
        alert("Recipe exist in favorites");
        return;
      }
      state.favorites = [...state.favorites, payload]
      alert("Recipe add to favorites")
    }
  },
  extraReducers: (builder) => {
    return builder.addCase(fetchRecipes.pending, (state: IInitialState) => {
      state.status = "pending";
      state.error = null;
    }),
      builder.addCase(fetchRecipes.fulfilled, (state: IInitialState, { payload }: { payload: any }) => {
        state.status = "fulfilled";
        state.recipes = payload.meals;
      }),
      builder.addCase(fetchRecipes.rejected, (state: IInitialState, { payload }: { payload: any }) => {
        state.status = "rejected";
        state.error = payload;
      }),
      builder.addCase(fetchOneRecipe.pending, (state: IInitialState) => {
        state.status = "pending";
        state.error = null;
      }),
      builder.addCase(fetchOneRecipe.fulfilled, (state: IInitialState, { payload }: { payload: any }) => {
        state.status = "fulfilled";
        state.oneRecipe = payload.meals;
      }),
      builder.addCase(fetchOneRecipe.rejected, (state: IInitialState, { payload }: { payload: any }) => {
        state.status = "rejected";
        state.error = payload;
      }),
      builder.addCase(searchResult.pending, (state: IInitialState) => {
        state.status = "pending";
        state.error = null;
      }),
      builder.addCase(searchResult.fulfilled, (state: IInitialState, { payload }: { payload: any }) => {
        state.status = "fulfilled";
        state.searchResultRecipes = payload.meals;
      }),
      builder.addCase(searchResult.rejected, (state: IInitialState, { payload }: { payload: any }) => {
        state.status = "rejected";
        state.error = payload;
      })
  },
})

export const { addToFavorite } = recipesSlice.actions;


export default recipesSlice.reducer;