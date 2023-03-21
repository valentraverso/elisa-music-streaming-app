// Config 
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import {LayoutMain, LayoutSearch, LayoutLibrary} from '../UI/layouts/Users/';

// Pages
import { Login, Main, Profile, Settings, Connections, Library} from "../UI/pages/users";
import { Playlist } from "../UI/pages/users/Playlist/Playlist";
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
                element:<PrivateRoutes><Library /></PrivateRoutes>
            },
            {
                path:'/playlist',
                element:<Playlist img="https://i.scdn.co/image/ab67616d0000b27396384c98ac4f3e7c2440f5b5" playlistName="Sad Playlist" info="50 Songs" likes="50 Likes" btnLike={true}/>
            },
            {
                path:'/album',
                element:<Playlist img="https://i.scdn.co/image/ab67616d0000b27396384c98ac4f3e7c2440f5b5" playlistName="My Album" info="10 Songs" likes="50 Likes" btnLike={false}/>
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