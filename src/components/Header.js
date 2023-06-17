import { useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

// Title Component
const Title = () => {
  return (
    <Link to="/" className="flex items-center">
      <img src={logo} alt="logo" className="w-16" data-testid="logo"/>
      <p className="font-semibold text-2xl text-gray-800">Easy Food</p>
    </Link>
  );
};

// Header Component
const Header = () => {
  const [isLogged, setIsLogged] = useState(false);

  const items = useSelector((state) => state.cart.items);

  return (
    <header className="bg-white sticky top-0 z-10 px-8">
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
        <Title />
        <ul className="flex items-center gap-4 text-lg font-semibold text-gray-800">
          <li className="hover:text-emerald-500">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-emerald-500">
            <NavLink to="about">About</NavLink>
          </li>
          <li className="hover:text-emerald-500">
            <NavLink to="contact">Contact</NavLink>
          </li>
          <li className="">
            <NavLink to="cart" className="w-7 hover:text-emerald-500">
              Cart({items.length})
            </NavLink>
          </li>
          <li className="hover:text-emerald-500">
            <NavLink to="instamart">Instamart</NavLink>
          </li>
          <li>
            {isLogged ? (
              <button
                className=" bg-red-500 px-4 py-2 rounded-xl text-white"
                onClick={() => {
                  setIsLogged(false);
                }}
              >
                Log Out
              </button>
            ) : (
              <button
                className="bg-emerald-500 px-4 py-2 rounded-xl text-white"
                onClick={() => {
                  setIsLogged(true);
                }}
              >
                Log In
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
