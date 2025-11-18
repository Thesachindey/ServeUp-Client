import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import UpcomingEvents from "../pages/UpcomingEvents/UpcomingEvents";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index:true,
                element: <Home />,
            },
            {
                path:'/upcoming-event',
                element: <UpcomingEvents/>
            },
        ]
    },
]);