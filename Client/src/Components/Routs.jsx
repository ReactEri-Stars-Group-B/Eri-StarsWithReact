import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Search from "./Search/Search";
import Container from "./Container";
import ArtistDitel from "./Search/ArtistDitel";
import About from "./About/About"

const router = createBrowserRouter([
    {
        path:'/',
        element:<Container/>,
        children:[
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/Search',
                element: <Search />
            },
            {
                path: 'Search/:id',
                element: <ArtistDitel />
            },
            {
                path: 'About',
                element: <About/>
            },
        ]
    },
   
  
])

export default router