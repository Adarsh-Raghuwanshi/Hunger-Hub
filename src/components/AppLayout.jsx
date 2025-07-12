import useCityRestaurants from "../utils/useCityRestaurants";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import { UserProvider } from "../context/User";
import { Provider } from "react-redux";
import store from "../store/store";

const AppLayout = () => {
    const restaurants = useCityRestaurants();
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
    
    useEffect(() => {
      setFilteredRestaurants(restaurants)
    }, [restaurants])

    return(
      <Provider store={store}>
        <UserProvider>
          <Header restaurants={restaurants} filterRestaurant={setFilteredRestaurants} />
          <div className="min-h-auto">
            <Outlet context={filteredRestaurants}/>
          </div>
          <Footer/>
        </UserProvider>
      </Provider>
    )
}

export default AppLayout;