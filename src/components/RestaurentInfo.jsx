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
    <div className="grid grid-cols-2 max-w-screen-xl mx-auto my-4 ">
      <div>
        <h1 className="text-2xl py-4 font-bold">{restaurent.name}</h1>
        <img
          src={IMG_CDN_URL + restaurent?.cloudinaryImageId}
          alt="hotel image"
          className="rounded-lg"
        />
        <h3 className="text-xl py-2 font-semibold text-[#1f2937]">
          {restaurent?.cuisines?.join(", ")}
        </h3>
        <h3 className="text-xl py-2 font-semibold text-[#1f2937]">
          Location: {restaurent.areaName}
        </h3>
        <h3 className="text-xl py-2 font-semibold text-[#1f2937]">
          Rating: {restaurent.avgRating}
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {restaurentMenu.map((item) => {
          return (
            <div
              key={item.id}
              className="flex gap-4 bg-emerald-50 p-3 rounded-lg"
            >
              <div>
                <img
                  src={IMG_CDN_URL + item.imageId}
                  alt="item image"
                  className="w-44 rounded-lg"
                />
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-xl"> {item.name}</p>
                <p >₹{item.price / 100}</p>
                <p >{item.category}</p>
                <button className="bg-emerald-500 px-2 py-1 rounded-lg text-white font-semibold">
                  Add
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurentInfo;
