import "./OneRecipePage.css"
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { IInitialState, IRecipe } from "../../types/interfaces";
import { useEffect } from "react";
import { fetchOneRecipe } from "../../slice/recipesSlice";

function SelectedMoviePage() {

  const { idMeal } = useParams<string>();
  console.log("1")
  const dispatch = useDispatch()<any>;
  const selectedRecipe: IRecipe[] | any = useSelector((state: IInitialState) => state.oneRecipe);
  const status = useSelector((state: IInitialState) => state.status);
  
  useEffect(() => {
    if (typeof idMeal === "string") {
      dispatch(fetchOneRecipe(idMeal));
    }
  }, [idMeal]);
  
  return (
    <>
      <div className="selected-container">
        {status === "pending" ? <h1>Load...</h1>: null}
        {status === "fulfilled" && selectedRecipe.length > 0 ?
          <>
            <div className="recipe">
              <div className="recipe-container">
                <div className="recipe-title-wrapper">
                  <div className="recipe__title">{selectedRecipe[0].strMeal} | </div>
                  <div className="recipe__genre">{selectedRecipe[0].strCategory}</div>
                </div>                
                <div className="recipe-block">
                  <img className="recipe__image" src={selectedRecipe[0].strMealThumb} alt="Movie Poster" />
                  <div className="recipe-ingredients">
                    <div className="recipe-ingredients__title">↓ Ingredients ↓</div>
                    <ul className="recipe-ingredients-list">
                      {selectedRecipe[0].strIngredient1 && selectedRecipe[0].strMeasure1 ? <li className="recipe-ingredients-list-ingredient">{selectedRecipe[0].strIngredient1}<span className="recipe-ingredients-list-amount">{selectedRecipe[0].strMeasure1}</span></li> : null}
                      {selectedRecipe[0].strIngredient2 && selectedRecipe[0].strMeasure2 ? <li className="recipe-ingredients-list-ingredient">{selectedRecipe[0].strIngredient2}<span className="recipe-ingredients-list-amount">{selectedRecipe[0].strMeasure2}</span></li> : null}
                      {selectedRecipe[0].strIngredient3 && selectedRecipe[0].strMeasure3 ? <li className="recipe-ingredients-list-ingredient">{selectedRecipe[0].strIngredient3}<span className="recipe-ingredients-list-amount">{selectedRecipe[0].strMeasure3}</span></li> : null}
                      {selectedRecipe[0].strIngredient4 && selectedRecipe[0].strMeasure4 ? <li className="recipe-ingredients-list-ingredient">{selectedRecipe[0].strIngredient4}<span className="recipe-ingredients-list-amount">{selectedRecipe[0].strMeasure4}</span></li> : null}
                      {selectedRecipe[0].strIngredient5 && selectedRecipe[0].strMeasure5 ? <li className="recipe-ingredients-list-ingredient">{selectedRecipe[0].strIngredient5}<span className="recipe-ingredients-list-amount">{selectedRecipe[0].strMeasure5}</span></li> : null}
                      {selectedRecipe[0].strIngredient6 && selectedRecipe[0].strMeasure6 ? <li className="recipe-ingredients-list-ingredient">{selectedRecipe[0].strIngredient6}<span className="recipe-ingredients-list-amount">{selectedRecipe[0].strMeasure6}</span></li> : null}
                      {selectedRecipe[0].strIngredient7 && selectedRecipe[0].strMeasure7 ? <li className="recipe-ingredients-list-ingredient">{selectedRecipe[0].strIngredient7}<span className="recipe-ingredients-list-amount">{selectedRecipe[0].strMeasure7}</span></li> : null}
                      {selectedRecipe[0].strIngredient8 && selectedRecipe[0].strMeasure8 ? <li className="recipe-ingredients-list-ingredient">{selectedRecipe[0].strIngredient8}<span className="recipe-ingredients-list-amount">{selectedRecipe[0].strMeasure8}</span></li> : null}
                      {selectedRecipe[0].strIngredient9 && selectedRecipe[0].strMeasure9 ? <li className="recipe-ingredients-list-ingredient">{selectedRecipe[0].strIngredient9}<span className="recipe-ingredients-list-amount">{selectedRecipe[0].strMeasure9}</span></li> : null}
                    </ul>
                  </div>
                </div>
                <p className="recipe__instruction"><span className="word">Instruction</span>{selectedRecipe[0].strInstructions}</p>
              </div>
            </div>        
          </> : null}
      </div>
    </>
  );
}

export default SelectedMoviePage;