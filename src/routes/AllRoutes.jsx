import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";

import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import CheckOut from "../pages/CheckOut";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import MyOrders from "../pages/MyOrders";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoutes>
            <Register />
          </PublicRoutes>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRoutes>
            <MyOrders />
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoutes>
            <CheckOut />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
