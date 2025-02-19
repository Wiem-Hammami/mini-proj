import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import CategoryProducts from "../pages/CategoryProducts";
import FicheProduit from "../pages/FicheProduit";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "categories/:categoryName", element: <CategoryProducts /> },
      { path: "categories/:categoryName/ProductDetails/:productId", element: <FicheProduit /> },
    ],
  },
]);

export default router;
