// Config 
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import {LayoutMain, LayoutSearch, LayoutLibrary} from '../UI/layouts/Users';
import { LayoutOnlySidebar } from "../UI/layouts/Users/LayoutOnlySidebar/LayoutOnlySidebar";

// Pages
import { Login, Main, Profile, Settings, Connections,HomePage, PlayerPage, Library, Upload, LibraryAlbums, Search} from "../UI/pages/users";
import { Playlist } from "../UI/pages/users/Playlist/Playlist";
import PrivateRoutes from "./RouteTypes";

const router = createBrowserRouter([
    {
        element:<LayoutMain/>,
        children:[
            {
                path:'/',
                element:<PrivateRoutes><HomePage /></PrivateRoutes>
            }
        ]
    },
    {
        element:<PrivateRoutes><LayoutSearch/></PrivateRoutes>,
        children:[
            {
                path:'/search',
                element:<Search/>
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
                element: <Settings />
            },
            {
                path: '/connections/:typeConnection',
                element: <Connections />
            },{
                path: '/user/upload',
                element: <Upload />
            },
        ]
    },
    {
        element:<PrivateRoutes><LayoutLibrary/></PrivateRoutes>,
        children:[
            {
                path:'/user/library/:type',
                element:<Library />
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
    },
    {
        path: '/PlayerPage/:id',
        element: <PrivateRoutes><PlayerPage /></PrivateRoutes>
    }
])

export default function Router(){
    return(
        <RouterProvider router={router} />
    )
}