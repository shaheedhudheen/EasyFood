import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwoString,
}) => {
  return (
    <div className="p-4 bg-emerald-50 h-full drop-shadow-sm rounded-xl">
      <div className="card">
        <div className="header">
          <img
            src={IMG_CDN_URL + cloudinaryImageId}
            alt="hotel pic"
            className="rounded-2xl"
          />
          <div>
            <p className="text-lg font-bold my-2">{name}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-base font-semibold">{cuisines.join(", ")}</p>
          <div className="rating-rate">
            <h5>{avgRating === "--" ? "No Rating" : `Rating: ${avgRating}`}</h5>
            <h5>{costForTwoString}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;


