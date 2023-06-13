import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  return (
    <>
      <div className="flex justify-center gap-4">
        <button className="bg-red-500 px-2 py-1 rounded-lg text-white font-semibold" onClick={()=> dispatch(clearCart())}>
          Clear Cart
        </button>
        <button className="bg-emerald-500 px-2 py-1 rounded-lg text-white font-semibold">
          Checkout
        </button>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 max-w-screen-xl mx-auto my-8">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className=" bg-emerald-50 p-3 rounded-lg flex flex-col items-start"
            >
              <div>
                <img
                  src={IMG_CDN_URL + item?.imageId}
                  alt="item image"
                  className=" rounded-lg"
                />
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-xl"> {item.name}</p>
                <p>₹{item.price / 100}</p>
                <p>{item.category}</p>
                <button
                  className="bg-emerald-500 px-2 py-1 rounded-lg text-white font-semibold"
                  onClick={() => {
                    dispatch(removeItem(item));
                  }}
                >
                  remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
