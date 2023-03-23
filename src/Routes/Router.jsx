// Config 
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import {LayoutMain, SearchBarPage, LayoutLibrary, LayoutSearch} from '../UI/layouts/Users/';

// Pages
import { Login, Main, Profile, Settings, Connections,HomePage, PlayerPage } from "../UI/pages/users";

import { Playlist } from "../UI/pages/users/Playlist/Playlist";
import { MenuPlaylists } from "../UI/pages/users/MenuPaylists/MenuPlaylists";
import PrivateRoutes from "./RouteTypes";

const router = createBrowserRouter([
    {
        element:<LayoutMain/>,
        children:[
            {
                path:'/',
                element:<PrivateRoutes><HomePage /></PrivateRoutes>
            },
            {
                path: '/profile',
                element: <PrivateRoutes><Profile /></PrivateRoutes>
            },
            {
                path: '/user/settings',
                element: <PrivateRoutes><Settings /></PrivateRoutes>
            },
            {
                path: '/connections/:typeConnection',
                element: <PrivateRoutes><Connections /></PrivateRoutes>
            },
            {
                path: '/PlayerPage/:id',
                element: <PrivateRoutes><PlayerPage /></PrivateRoutes>
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