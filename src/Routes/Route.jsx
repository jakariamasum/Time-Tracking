import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Layout/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import TimeTracking from "../Pages/TimeTracking/TimeTracking";
import DashboardPage from "../Pages/DashboardPage/DashboardPage";
import Project from "../Pages/Projects/Projects";
import { ProjectProvider } from "../Pages/Projects/ProjectContext";
import Calendar from "../Pages/Calendar/Calendar";
import Main from "../Layout/Main/Main";
import Contact from "../Pages/Contact/Contact";
import Features from "../components/Features/Features";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/contact',
                element: <Contact/>
            },
            {
                path: '/features',
                element: <div className="md:my-28"><Features /></div>
            },
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
            },
            {
                path: '/dashboard/dashboard',
                element: <DashboardPage/>
            },
            {
                path: '/dashboard/project',
                element: <ProjectProvider><Project/></ProjectProvider>
            },
            {
                path: '/dashboard/calendar',
                element: <Calendar/>
            }
        ]
    }
]);
