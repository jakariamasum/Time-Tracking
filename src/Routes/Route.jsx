import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Layout/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import TimeTracking from "../Pages/TimeTracking/TimeTracking";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children:[
            {
                path:'/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <SignUp/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard/>,
        children:[
            {
                path:'/dashboard/time-tracking',
                element: <TimeTracking/>
            }
        ]
    }
]);
