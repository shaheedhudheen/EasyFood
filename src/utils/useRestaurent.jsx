import { useEffect, useState } from "react";

const useRestaurent = (resId) => {
  const [restaurent, setRestaurent] = useState({});
  const [restaurentMenu, setRestaurentMenu] = useState([]);

  useEffect(() => {
    getRestaurentInfo();
  }, []);

  const getRestaurentInfo = async () => {
    const info = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.9312328&lng=76.26730409999999&restaurantId=${resId}`
    );
    const json = await info.json();
    // console.log(json?.data?.cards[0].card.card.info);
    // console.log(
    //   json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards.map(
    //     (item) => item.card.info
    //   )
    // );

    setRestaurent(json?.data?.cards[0]?.card?.card?.info);
    setRestaurentMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
        (item) => item?.card?.info
      )
    );
  };

  return [restaurent, restaurentMenu];
};

export default useRestaurent;
