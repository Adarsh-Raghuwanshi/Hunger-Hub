import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useOutletContext } from "react-router";

const Home = () => {
    const filteredRestaurants = useOutletContext();

    return(
        <div className="flex flex-wrap gap-14 justify-center mt-10">
            {
                filteredRestaurants ? (
                    filteredRestaurants.length === 0 ? (
                        <h1 className="font-bold text-2xl">No Restaurant Found...</h1>
                    ) : (
                        filteredRestaurants?.map((restaurant) => (
                        <RestaurantCard
                            key={restaurant.id}
                            {...restaurant}
                            deliveryTime={restaurant.sla.slaString}
                            distance={restaurant.sla.lastMileTravelString}
                        />
                    ))
                    )
                ) : <Shimmer/>
            }
        </div>
    );
}

export default Home;