// Config 
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import {LayoutMain, LayoutSearch, LayoutLibrary} from '../UI/layouts/Users/';
import { LayoutOnlySidebar } from "../UI/layouts/Users/LayoutOnlySidebar/LayoutOnlySidebar";

// Pages
import { Login, Main, Profile, Settings, Connections } from "../UI/pages/users";

import PrivateRoutes from "./RouteTypes";

const router = createBrowserRouter([
    {
        element:<LayoutMain/>,
        children:[
            {
                path:'/',
                element:<PrivateRoutes><Main /></PrivateRoutes>
            },
            {
                path: '/connections/:typeConnection',
                element: <PrivateRoutes><Connections /></PrivateRoutes>
            }
        ]
    },
    {
        element:<LayoutSearch/>,
        children:[
            {
                path:'/search',
                element:<PrivateRoutes><p>Hola</p></PrivateRoutes>
            }
        ]
    },
    {
        element: <PrivateRoutes><LayoutOnlySidebar /></PrivateRoutes>,
        children: [
            {
                path: '/user/profile',
                element: <Profile />
            },
            {
                path: '/user/settings',
                element: <PrivateRoutes><Settings /></PrivateRoutes>
            }
        ]
    },
    {
        element:<LayoutLibrary/>,
        children:[
            {
                path:'/library',
                element:<PrivateRoutes></PrivateRoutes>
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
])

export default function Router(){
    return(
        <RouterProvider router={router} />
    )
}