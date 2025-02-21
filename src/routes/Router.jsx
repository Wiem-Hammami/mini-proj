import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import CategoryProducts from "../pages/CategoryProducts";
import FicheProduit from "../pages/FicheProduit";
import Cart from "../pages/Cart.jsx";
import Checkout from "../pages/Checkout.jsx";
import SearchProducts from "../pages/SearchProducts.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "categories/:categoryName", element: <CategoryProducts /> },
      { path: "categories/:categoryName/ProductDetails/:productId", element: <FicheProduit /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/search", element: <SearchProducts /> },
 
    ],
  },
]);

export default router;
   