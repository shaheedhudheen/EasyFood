import RestaurantCard from "./RestaurentCard";
import { restaurantList } from "../config";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import filterData from "../utils/filterData";
import search from "../assets/search.png";
import UserContext from "../utils/UserContext";

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

  const { user, setUser } = useContext(UserContext);

  //early Return
  if (!allRestaurants) return null;

  return (
    <>
      <div className="flex justify-center gap-4 max-w-screen-xl mx-auto py-4">
        {/* <p className="text-red-600 font-semibold">
          {user.name} - <span className="text-blue-600">{user.email}</span>{" "}
        </p> */}
        {/* <input
          type="text"
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        /> */}
        <input
          type="text"
          className="p-2 border-2 rounded-xl  focus:outline-emerald-400"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="bg-emerald-500 px-4 py-2 rounded-xl text-white"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            // filter the data
            setFilteredRestaurants(data);
          }}
        >
          <img src={search} alt="search" className="w-5 " />
        </button>
      </div>

      {allRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 max-w-screen-xl mx-auto">
          {filteredRestaurants?.length === 0 ? (
            <div>
              <h1>No Restaurant Found</h1>
            </div>
          ) : (
            filteredRestaurants?.map((restaurant) => {
              return (
                <Link
                  to={"/restaurent/" + restaurant.data.id}
                  key={restaurant.data.id}
                >
                  <RestaurantCard {...restaurant.data} />
                </Link>
              );
            })
          )}
        </div>
      )}
    </>
  );
};

export default Body;
