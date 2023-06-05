import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurent from "../utils/useRestaurent";

const RestaurentInfo = () => {

  //useParams is a React Router Hook that allows you to access dynamic parameters in the URL. useParams returns an object of key:value pairs of URL parameters. - object destructuring used here
  
  const { resId } = useParams();
  console.log(resId);

  //custom hook for restaurent info and menu
  const [restaurent, restaurentMenu] = useRestaurent(resId);

  //load shimmer if restaurent menu is not loaded
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
