import useCityRestaurants from "../utils/useCityRestaurants";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import { UserProvider } from "../context/User";

const AppLayout = () => {
    const restaurants = useCityRestaurants();
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
    
    useEffect(() => {
      setFilteredRestaurants(restaurants)
    }, [restaurants])

    return(
        <UserProvider>
          <Header restaurants={restaurants} filterRestaurant={setFilteredRestaurants} />
          <div className="min-h-auto">
            <Outlet context={filteredRestaurants}/>
          </div>
          <Footer/>
        </UserProvider>
    )
}

export default AppLayout;