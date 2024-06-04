import "./Search.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchResult } from "../../slice/recipesSlice";

function Search({ isDisabled }: { isDisabled: boolean }) {

  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch()<any>;
  const navigate = useNavigate();

  const changeSearchText = (event: any) => {
    setSearchText(event.target.value);
  }

  const enter = (event: any) => {
    if (event.key === "Enter") {
      if (searchText.trim() !== "") {
        navigate("/search");
        dispatch(searchResult({ text: searchText}));
        setSearchText("");
      } else {
        alert("Search input is empty");
      }
    }
  }

  return (
    <>
      <input className="search__input" type="text" value={searchText} onChange={(e) => changeSearchText(e)} onKeyDown={(e) => enter(e)} placeholder="Search..." disabled={isDisabled} />
    </>
  );
}

export default Search;