import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../config";
const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 max-w-screen-xl mx-auto my-8">
      {items.map((item, index) => {
        return (
          <div
            key={item.id}
            className=" bg-emerald-50 p-3 rounded-lg"
          >
            <div>
              <img
                src={IMG_CDN_URL + item?.imageId}
                alt="item image"
                className="w-44 rounded-lg"
              />
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-xl"> {item.name}</p>
              <p>₹{item.price / 100}</p>
              <p>{item.category}</p>
              <button
                className="bg-emerald-500 px-2 py-1 rounded-lg text-white font-semibold"
                onClick={() => {
                  dispatch();
                }}
              >
                remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
