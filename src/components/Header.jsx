import { NavLink } from "react-router";
import { IMG_URL } from "../constants";
import { useState } from "react";
import useLocalStorage from "../utils/useLocalStorage";

const Header = ({restaurants, filterRestaurant}) => {
  const [text, setText] = useState("");
  const {addData} = useLocalStorage();

  function handleSearch(){
    if(text.length > 0 && text.trim() === ""){
      setText("");
      return;
    } 

    if(!(text.trim() === "")){
      addData(text);
    }
    const filteredRest = restaurants.filter((rest) => rest.name.toLowerCase().includes(text.trim().toLowerCase()));

    filterRestaurant(filteredRest);
  }
  
  return (
    <div className="header-container shadow-fancy ">
      <img className="" src={IMG_URL} alt="logo image" />

      <ul className="nav-item">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/cart">
          <li>Cart</li>
        </NavLink>
        <NavLink to="instamart">
          <li>Instamart</li>
        </NavLink>
        <NavLink to="search-history">
          <li>Search History</li>
        </NavLink>
      </ul>

      <div className="flex items-center">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="search-field"
          placeholder="Search a restaurant..."
        />
        <button onClick={handleSearch} className="search-btn">
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
