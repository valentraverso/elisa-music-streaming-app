// Config 
import {RouterProvider , createBrowserRouter} from 'react-router-dom';


const router = createBrowserRouter([
    {
        element:<LayoutUser/>,
        children:[
            {
                path:'/',
                element:<Main/>
            }
        ]
    }
])

export default function Router(){
    return(
        <RouterProvider router = {router} />
    )
}