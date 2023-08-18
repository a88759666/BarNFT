import type { RouteObject } from "react-router-dom"
import Explore from "./pages/explore"
import Home from "./pages/home"
import Profile from "./pages/profile"




const routes: RouteObject[] = [
    {
        path: "*",
        element: <Home />,
        children: []
    },
    {
        path: "/explore",
        element: <Explore />,
        children: []
    },
    {
        path: "/profile",
        element: <Profile />,
        children: []
    },
    

   
]

export default routes

