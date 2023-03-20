// Config 
import {RouterProvider , createBrowserRouter} from 'react-router-dom';

import {LayoutMain, LayoutSearch} from '../UI/layouts/Users/';


const router = createBrowserRouter([
    {
        element:<LayoutMain/>,
        children:[
            {
                path:'/',
                element:<p>Hola</p>
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
])

export default function Router(){
    return(
        <RouterProvider router = {router} />
    )
}