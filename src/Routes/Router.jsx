// Config 
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {LayoutMain} from '../UI/layouts/Users/';


const router = createBrowserRouter([
    {
        element:<LayoutMain/>,
        children:[
            {
                path:'/',
                element:<p>Hola</p>
            }
        ]
    }
])

export default function Router(){
    return(
        <RouterProvider router={router} />
    )
}