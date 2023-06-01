import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurentInfo = () => {
  const { resId } = useParams();
  console.log(resId);
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
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards?.map(
        (item) => item.card.info
      )
    );
  };

  if (!restaurentMenu) {
    return <Shimmer />;
  }

  return (
    <div className="restaurent-info">
      <div className="info">
        <h1>{restaurent.name}</h1>
        <img
          src={IMG_CDN_URL + restaurent?.cloudinaryImageId}
          alt="hotel image"
          className="restaurent-img"
        />
        <h3>{restaurent?.cuisines?.join(", ")}</h3>
        <h3>Location: {restaurent.areaName}</h3>
        <h3>Rating: {restaurent.avgRating}</h3>
      </div>
      <div className="menu">
        {restaurentMenu.map((item) => {
          return (
            <div key={item.id} className="menu-items">
              <div className="menu-right">
                <p className="item-title"> {item.name}</p>
                <p>₹ {item.price / 100}</p>
                <p>{item.category}</p>
              </div>
              <div className="menu-left">
                <img
                  src={IMG_CDN_URL + item.imageId}
                  alt="item image"
                  className="item-img"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurentInfo;
