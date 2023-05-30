import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurentInfo = () => {
  const { resId } = useParams();
  console.log(resId);
  const [restaurent, setRestaurent] = useState({});

  useEffect(() => {
    getRestaurentInfo();
  }, []);

  const getRestaurentInfo = async () => {
    const info = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.9312328&lng=76.26730409999999&restaurantId=" +
        resId
    );
    const json = await info.json();
    console.log(json?.data?.cards[0].card.card.info);
    console.log(resId);
    setRestaurent();
  };

  if (!restaurent) {
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
      <div className="menu"></div>
    </div>
  );
};

export default RestaurentInfo;
