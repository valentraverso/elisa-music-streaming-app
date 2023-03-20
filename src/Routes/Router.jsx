// Config 
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {LayoutMain, LayoutSearch, LayoutLibrary} from '../UI/layouts/Users/';
import { Main } from "../UI/pages/users";


const router = createBrowserRouter([
    {
        element:<LayoutMain/>,
        children:[
            {
                path:'/',
                element:<Main />
            }
        ]
    },
    {
        element:<LayoutSearch/>,
        children:[
            {
                path:'/search',
                element:<p>Resultados</p>
            }
        ]
    },
    {
        element:<LayoutLibrary/>,
        children:[
            {
                path:'/library',
                element:<p>Libreria</p>
            }
        ]
    }
])

export default function Router(){
    return(
        <RouterProvider router={router} />
    )
}