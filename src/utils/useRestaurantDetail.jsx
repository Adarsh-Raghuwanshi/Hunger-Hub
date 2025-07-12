import { useEffect, useState } from "react";
import { REST_API } from "../constants";

const useRestaurantDetail = (id) => {
  const [restDetail, setRestDetail] = useState(null);

  useEffect(() => {
    getRestDetail();
  }, []);

  async function getRestDetail() {
    const resp = await fetch(REST_API + id);
    const data = await resp.json();
    console.log(data)
    const detail =
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((item) => {
        const name = item?.card?.info?.name;
        const id = item?.card?.info?.id;
        const imgId = item?.card?.info?.imageId;
        const price = (item?.card?.info?.price) ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100;
        return {name, price, imgId, id};
      });
    
    setRestDetail(detail);
  }

  return restDetail;
};

export default useRestaurantDetail;
