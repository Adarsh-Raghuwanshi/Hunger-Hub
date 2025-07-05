import RestaurantDetail from "./components/RestaurantDetail";
import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import AppLayout from "./components/AppLayout";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";
import Home from "./components/Home";
import SearchHistory from "./components/SearchHistory";
import Shimmer from "./components/Shimmer";

const About = lazy(() => import("./components/About"));

const App = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <Suspense fallback={<Shimmer/>} ><About/></Suspense> 
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/search-history",
                element: <SearchHistory/>
            },
            {
                path: "/restaurant/:name/:id",
                element: <RestaurantDetail/>
            },
        ],
        errorElement: <ErrorPage/>
    }
])

export default App;