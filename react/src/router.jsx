import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import ProductDetail from "./views/ProductDetail";
import Navbar from "./components/Nav/Navbar";
import Products from "./views/Products";
import ShoppingCart from "./views/ShoppingCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: '/home',
        element: <Navigate to="/" />
      },
      {
        path: "/",
        element: <Products />,
      },
      {
        path:'/product/:id',
        element: <ProductDetail/>
      },
    ],
  },
  {
    path:'/shopingcart',
    element:<ShoppingCart/>
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;