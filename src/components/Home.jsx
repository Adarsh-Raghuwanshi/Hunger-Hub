import { useUser } from "../context/User";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useOutletContext } from "react-router";

const Home = () => {
    const filteredRestaurants = useOutletContext();
    const {user, setUserName, setUserEmail} = useUser();

    return(
        <div>
        <input value={user.name} onChange={(e) => setUserName(e.target.value)} className="border ml-[160px] px-2" type="text" placeholder="Enter name...."/>
        <input value={user.email} onChange={(e) => setUserEmail(e.target.value)} className="border ml-[40px] px-2" type="text" placeholder="Enter email...."/>
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
        </div>
    );
}

export default Home;