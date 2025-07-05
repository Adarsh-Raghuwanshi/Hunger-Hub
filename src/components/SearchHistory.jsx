import { useEffect, useState } from "react";
import useLocalStorage from "../utils/useLocalStorage";

const SearchHistory = () => {
  const { getData } = useLocalStorage();
  const searches = getData();

  return(
    <div className="flex justify-center items-center flex-col">
        <p className="font-bold text-4xl border-b-4 mb-10">Your History</p>

        <ul>
            {
                searches.map((text, indx) => <li className="mb-5" key={indx}>{text}</li>)
            }
        </ul>
    </div>
  );
};

export default SearchHistory;
