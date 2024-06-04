import "./Card.css"
import { Link } from "react-router-dom"
import { IRecipe } from "../../types/interfaces";

function Card({ recipe }: { recipe: IRecipe }) {
  
  return (
    <>
      <div className="card">
        <Link className="link" key={recipe.idMeal} to={`/recipes/${recipe.idMeal}`}>
          <img className="card__image" src={recipe.strMealThumb} alt="" />
          <div className="card__title">{recipe.strMeal}</div>
        </Link>
      </div>
    </>
  );
}

export default Card;