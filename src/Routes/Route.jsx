import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Layout/Home";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children:[
            {
                path:'/login',
                element: <Login/>
            }
        ]
    },
]);
