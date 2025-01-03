// import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./src/components/Navbar";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import AboutUs from "./src/components/AboutUs";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Profile from "./src/components/Profile";
import { children, lazy, Suspense, useState } from "react";
import Profile2 from "./src/components/Profile2";
import Shimmer from "./src/components/Shimmer";
// import Instamart from "./src/components/Instamart";

const Instamart = lazy(() => import("./src/components/Instamart"));
import UseContextMbd from "./src/components/Utils/UseContextMbd";

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Alok yadav",
    email: "ayadav44237@gmail.com",
    place: "Gorakhpur",
  });
  return (
    <>
      <UseContextMbd.Provider value={{ user: user }}>
        <Navbar />
        <Outlet />

        <Footer />
      </UseContextMbd.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
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
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
        children: [
          {
            path: "profile",
            element: <Profile2 />,
          },
        ],
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
