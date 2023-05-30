import RestaurantCard from "./RestaurentCard";
import { restaurantList } from "../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchInput, restaurants) {
  return restaurants.filter((restaurant) => {
    return restaurant.data?.name
      ?.toLowerCase()
      .includes(searchInput.toLowerCase());
  });
}

// Body Component
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  //useEffect
  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      setAllRestaurants(json.data.cards[2].data.data.cards);
      setFilteredRestaurants(json.data.cards[2].data.data.cards);
    } catch (error) {
      console.error(error);
    }
  };

  //early Return
  if (!allRestaurants) return null;

  return (
    <>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            // filter the data
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      {allRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants?.length === 0 ? (
            <h1>No Restaurent Found</h1>
          ) : (
            filteredRestaurants?.map((restaurant) => {
              return (
                <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
              );
            })
          )}
        </div>
      )}
    </>
  );
};

export default Body;
