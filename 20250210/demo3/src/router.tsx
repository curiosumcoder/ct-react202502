import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./Error";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />
    }    
])

export default router;