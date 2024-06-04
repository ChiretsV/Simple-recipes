import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IInitialState, IRecipe } from "../../types/interfaces";
import { searchResult } from "../../slice/recipesSlice";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";

function SearchPage() {

  const dispatch = useDispatch()<any>;
  const [searchTerm, setSearchTerm] = useState<string>("");
  const data: any = useSelector((state: IInitialState) => state.searchResultRecipes);
  const status = useSelector((state: IInitialState) => state.status);

  useEffect(() => {
    if (searchTerm) {
      dispatch(searchResult({text:searchTerm}));
    }
  }, [dispatch, searchTerm]);

  return (
    <>
      {status === "fulfilled" && data !== null ?
        <>
          <div className="recipes-block">
            <div className="container">
                {data.map((recipe: IRecipe) => (
              <Card key={recipe.idMeal} recipe={recipe} ></Card>
            ))}
            </div>            
          </div>
        </> : null}
    </>);
}

export default SearchPage;