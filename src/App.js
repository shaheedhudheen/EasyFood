import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
// import InstaMart from "./components/InstaMart";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurentInfo from "./components/RestaurentInfo";
import { StrictMode, Suspense, lazy } from "react";

const InstaMart = lazy(() => import("./components/InstaMart"));

// App LayOut component
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
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
