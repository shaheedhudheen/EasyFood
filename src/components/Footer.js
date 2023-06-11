import { useContext } from "react";
import UserContext from "../utils/UserContext";

// Footer Component
const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <footer className="bg-emerald-500 ">
      <h2 className="font-medium text-center py-3 text-white text-xl">
        Easy Food
      </h2>
      <p className="font-normal text-center py-2 text-white text-lg">
        Made By {user.name}
      </p>
    </footer>
  );
};

export default Footer;
