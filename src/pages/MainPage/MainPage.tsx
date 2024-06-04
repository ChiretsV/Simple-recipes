import "./MainPage.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchRecipes } from "../../slice/recipesSlice"
import Card from "../../components/Card/Card"
import { IInitialState, IRecipe } from "../../types/interfaces"
import Search from "../../components/Search/Search"

function MainPage() {

  const dispatch = useDispatch<any>();

  const recipes = useSelector((state: IInitialState) => state.recipes);
  const status = useSelector((state: IInitialState) => state.status)

  useEffect(() => {
    dispatch(fetchRecipes())
  },[]);

  return (
    <>
      {status === "fulfilled" ?
        <>          
          <div className="recipes-block">
            <Search isDisabled={false}></Search>
            <div className="container">
              {recipes && recipes.slice(0, 15).map((recipe: IRecipe) => (
              <Card key={recipe.idMeal} recipe={recipe} ></Card>
            ))}
            </div>            
          </div>
        </> : null}
    </>
  );
}

export default MainPage;