import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Clothing from "./pages/Clothing.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import CartsContextProvider from "./context/CartsContextProvider.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/clothing/:type", element: <Clothing /> },
      { path: "/productdetail/:id", element: <ProductDetail /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartsContextProvider>
      <RouterProvider router={ROUTES} />
    </CartsContextProvider>
  </StrictMode>
);
