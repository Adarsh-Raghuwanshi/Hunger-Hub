import useRestaurantDetail from "../utils/useRestaurantDetail";
import { useParams } from "react-router";
import { CLOUD_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantDetail = () => {
  const { name, id } = useParams();
  const restaurantMenu = useRestaurantDetail(id);

  return restaurantMenu ? (
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold text-4xl border-b-4 mb-10">{name} Menu</p>

      {restaurantMenu.map((item, indx) => {
        return (
          <div className="flex w-2xl ml-52 mb-5" key={indx}>
            <img className="w-[25%] border-2" src={CLOUD_URL + item.imgId} />
            <div className="menu-list">
              {item.name}
            </div>
            <div className="menu-list">
              &#8377; {item.price}
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="flex flex-wrap gap-14 justify-center mt-10">
      <Shimmer />
    </div>
  );
};

export default RestaurantDetail;
