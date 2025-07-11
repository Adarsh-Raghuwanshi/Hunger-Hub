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

    const detail =
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((item) => {
        const name = item?.card?.info?.name;
        const imgId = item?.card?.info?.imageId;
        const price = (item?.card?.info?.price) ? parseInt(item?.card?.info?.price.toString().replace(/0+$/, '')) : parseInt(item?.card?.info?.defaultPrice.toString().replace(/0+$/, ''));
        return {name, price, imgId};
      });
    
    setRestDetail(detail);
  }

  return restDetail;
};

export default useRestaurantDetail;
