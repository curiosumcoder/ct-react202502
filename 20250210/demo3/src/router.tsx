import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./Error";
import ProductMain from "./components/product/ProductMain";
import ProductIndex from "./components/product/ProductIndex";
import ProductCreate from "./components/product/ProductCreate";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: 'product',
                element: <ProductMain />,
                children: [
                    {index: true, element: <ProductIndex />},
                    {path: 'create', element: <ProductCreate /> }
                ]                    
            }
        ]
    }    
])

export default router;