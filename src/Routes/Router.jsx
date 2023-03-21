// Config 
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import {LayoutMain, LayoutSearch, LayoutLibrary} from '../UI/layouts/Users/';

// Pages
import { Login, Main } from "../UI/pages/users";
import { Playlist } from "../UI/pages/users/Playlist/Playlist";
import { MenuPlaylists } from "../UI/pages/users/MenuPaylists/MenuPlaylists";
import PrivateRoutes from "./RouteTypes";

const router = createBrowserRouter([
    {
        element:<LayoutMain/>,
        children:[
            {
                path:'/',
                element:<PrivateRoutes><Main /></PrivateRoutes>
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
            },
            {
                path: '/playlist',
                element: <Playlist img = "https://i.scdn.co/image/ab67616d0000b27396384c98ac4f3e7c2440f5b5"  playlistName="Sad Playlist" info="40 Songs" likes= "100 Likes" btnLike={true}/>
            },
            {
                path: '/album',
                element: <Playlist img = "https://i.scdn.co/image/ab67616d0000b27396384c98ac4f3e7c2440f5b5"  playlistName="My Album" info="40 Songs" likes= "100 Likes" btnLike={false}/>
            },
            {
                path: '/playlists',
                element: <MenuPlaylists />
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