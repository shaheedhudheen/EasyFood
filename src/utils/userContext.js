import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Demo Name",
    email: "demomail@gmail.com"
  },
});

export default UserContext;
