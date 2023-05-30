import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwoString,
}) => {
  return (
    <div className="grid">
      <div className="card">
        <div className="header">
          <img
            src={IMG_CDN_URL + cloudinaryImageId}
            alt="hotel pic"
            className="header-img"
          />
          <div>
            <h3>{name}</h3>
          </div>
        </div>
        <div className="card-detail">
          <h4>{cuisines.join(", ")}</h4>
          <div className="rating-rate">
            <h5>{avgRating === "--" ? "No Rating" : avgRating}</h5>
            <h5>{costForTwoString}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

<div className="card"></div>;
