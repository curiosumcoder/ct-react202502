import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./Error";
import ProductMain from "./components/product/ProductMain";
import CartMain from "./components/cart/CartMain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: (<><h1>Welcome ...</h1></>)},
      {
        path: "product",
        element: <ProductMain />,
      },
      {
        path: "cart",
        element: <CartMain />,
      },
    ],
  },
]);

export default router;
