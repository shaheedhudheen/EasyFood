import { useState } from "react";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";

// Title Component
const Title = () => {
  return (
    <a href="/" className="title">
      <img src={logo} alt="logo" className="" />
      <p className="titleText">Easy Food</p>
    </a>
  );
};

// Header Component
const Header = () => {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <div className="flex ">
      <Title />

      <ul className="navItems">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="cart">Cart</NavLink>
        </li>
        <li>
          <NavLink to="instamart">Instamart</NavLink>
        </li>

        {isLogged ? (
          <button
            onClick={() => {
              setIsLogged(false);
            }}
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLogged(true);
            }}
          >
            Log In
          </button>
        )}
      </ul>
    </div>
  );
};

export default Header;
