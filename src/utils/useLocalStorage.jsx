import { useEffect, useState } from "react";

const useLocalStorage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  },[data])

  function addData(search){
    setData([...data, search]);
  }

  function getData(){
    const searchData = localStorage.getItem("data");
    return searchData ? JSON.parse(searchData) : [];
  }

  return({addData, getData});
}

export default useLocalStorage