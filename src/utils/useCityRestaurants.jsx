import { useEffect, useState } from "react"
import { BASE_API } from "../constants";

const useCityRestaurants = () => {
    const [restaurants, setRestaurants] = useState(null);

    useEffect(() => {
        getRestaurantsData();
    }, [])

    const getRestaurantsData = async() => {
        const resp = await fetch(BASE_API);
        const data = await resp.json();

        const restaurantsData = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((item) => item?.info);

        setRestaurants(restaurantsData);
    }

    return restaurants;
}

export default useCityRestaurants;