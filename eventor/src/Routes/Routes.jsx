import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Layout/Home";
import ErrorPage from "../Layout/ErrorPage";
import Login from "../Layout/Login";
import Register from "../Layout/Register";
import Contact from "../Layout/Contact";
import ServiceDetails from "../Layout/ServiceDetails";
import EventProgress from "../Layout/EventProgress";
import Profile from "../Layout/Profile";
import PrivateRoute from "../Context/PrivateRoute";
import About from "../Layout/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/eventprogress",
          element: <PrivateRoute><EventProgress></EventProgress></PrivateRoute>,
          loader: () => fetch('/services.json')
        },
        {
          path: "/profile",
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
          path: "/servicedetails/:id",
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          loader: () => fetch('/services.json')
        }
      ]
    }
  ]);

export default router;