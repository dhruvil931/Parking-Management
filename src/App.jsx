import React from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Mybookings from "./components/Mybookings";
import Favourite from "./components/Favourite";
import HelpCenter from "./components/HelpCenter";
import AboutUs from "./components/AboutUs";
import BookNow from "./components/bookNow";
import Payment from "./components/Payment";
import PaymentSuccess from "./components/PaymentSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/my-bookings",
    element: <Mybookings />,
  },
  {
    path: "/favourite",
    element: <Favourite />,
  },
  {
    path: "/help-center",
    element: <HelpCenter />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "bookNow",
    element: <BookNow />,
  },
  {
    path: "/bookNow/payment",
    element: <Payment />,
  },
  {
    path: "/bookNow/payment-success",
    element: <PaymentSuccess />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
