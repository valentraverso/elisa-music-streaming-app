// Config 
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import { LayoutMain, LayoutSearch, LayoutLibrary, LayoutOnlyMenu } from '../UI/layouts/Users';
import { LayoutOnlySidebar } from "../UI/layouts/Users/LayoutOnlySidebar/LayoutOnlySidebar";

// Pages
import { Login, Profile, Settings, Connections, HomePage, PlayerPage, Album, Library, Upload, LibraryAlbums, Search, SearchResults, Register, UserEdit } from "../UI/pages/users";
import { Login, Profile, Settings, Connections, HomePage, PlayerPage, Album, Library, Upload, Search, SearchResults, Register } from "../UI/pages/users";
import { Playlist } from "../UI/pages/users/Playlist/Playlist";
import PrivateRoutes from "./RouteTypes";
import { useSelector } from "react-redux";
import { Player } from "../UI/components/Player/Player";
import { VisitProfiles } from "../UI/pages/users/VisitProfiles/VisitProfiles";

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
            {
                path: '/user/visit/:username',
                element: <VisitProfiles />
            },
            {
                path: '/user/edit',
                element: <UserEdit />
            }
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
                path: '/playlist/:id',
                element: <Playlist />
            },
            {
                path: '/album/:id',
                element: <Album />
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