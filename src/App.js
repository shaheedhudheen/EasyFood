import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
// import Page from "./components/Page";
// import InstaMart from "./components/InstaMart";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurentInfo from "./components/RestaurentInfo";
import { StrictMode, Suspense, lazy } from "react";
import UserContext from "./utils/UserContext";
import { useState } from "react";
import Shimmer from "./components/Shimmer";
import Counter from "./components/Counter";

import { store } from "./utils/store";
import { Provider } from "react-redux";

//lazy loading/code splitting/dynamic rendering
const InstaMart = lazy(() => import("./components/InstaMart"));

// App LayOut component
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Ahammed Shaheedhudheen",
    email: "shaheedhudheenpambalath@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurent/:resId",
        element: <RestaurentInfo />,
      },
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "instamart",
        element: (
          <Suspense
            fallback={
              <div>
                <h1>Loading....</h1>
              </div>
            }
          >
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
