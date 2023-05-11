// Config 
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import { LayoutMain, LayoutSearch, LayoutLibrary, LayoutOnlyMenu } from '../UI/layouts/Users';
import { LayoutOnlySidebar } from "../UI/layouts/Users/LayoutOnlySidebar/LayoutOnlySidebar";

// Pages
import { Login, Profile, Settings, Connections, HomePage, PlayerPage, AlbumDetail, Library, Upload, LibraryAlbums, Search, SearchResults, Register } from "../UI/pages/users";
import { Playlist } from "../UI/pages/users/Playlist/Playlist";
import PrivateRoutes from "./RouteTypes";
import { useSelector } from "react-redux";
import { Player } from "../UI/components/Player/Player";

const router = createBrowserRouter([
    {
        element: <PrivateRoutes><LayoutMain /></PrivateRoutes>,
        children: [
            {
                path: '/',
                element: <HomePage />
            }
        ]
    },
    {
        element: <PrivateRoutes><LayoutSearch /></PrivateRoutes>,
        children: [
            {
                path: '/search',
                element: <Search />
            },
            {
                path: '/search/:type/:query',
                element: <SearchResults />
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
            }, {
                path: '/user/upload',
                element: <Upload />
            },
        ]
    },
    {
        element: <PrivateRoutes><LayoutLibrary /></PrivateRoutes>,
        children: [
            {
                path: '/user/library/:type',
                element: <Library />
            },
            {
                path: '/playlist',
                element: <Playlist img="https://i.scdn.co/image/ab67616d0000b27396384c98ac4f3e7c2440f5b5" playlistName="Sad Playlist" info="50 Songs" likes="50 Likes" btnLike={true} />
            },
            {
                path: '/album',
                element: <Playlist img="https://i.scdn.co/image/ab67616d0000b27396384c98ac4f3e7c2440f5b5" playlistName="My Album" info="10 Songs" likes="50 Likes" btnLike={false} />
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
    },
    {
        path: '/AlbumDetail/:id',
        element: <LayoutMain><AlbumDetail /></LayoutMain>
    },
    {
        element: <PrivateRoutes><LayoutOnlyMenu /></PrivateRoutes>,
        children: [
            {
                path: '/register',
                element: <Register />
            },
        ]
    }
])

export default function Router() {
    const {withSong} = useSelector(state => state.player)
    return (
        <>
            <RouterProvider router={router} />
            {
                withSong &&
                <Player />
            }
        </>
    )
}