import { Link } from "react-router";
import { CLOUD_URL } from "../constants";

const RestaurantCard = ({
  id,
  name,
  cloudinaryImageId,
  areaName,
  cuisines,
  avgRating,
  deliveryTime,
  distance,
  costForTwo,
}) => {

  return (
    <Link to={`/restaurant/${name}/${id}`}>
      <div className="restaurant-card">
        <img
          src={CLOUD_URL + cloudinaryImageId}
          className="card-shadow restaurant-img"
        />

        <div className="restaurant-details card-shadow">
          <p className="text-[17px] font-bold">{name}</p>
          <p>
            ⭐ {avgRating}
            <span className="font-medium">
              {" "}
              &#x2022; {deliveryTime} &#x2022; {distance}
            </span>
          </p>
          <p>{cuisines.slice(0, 3).join(", ")}</p>
          <p>{areaName}</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
