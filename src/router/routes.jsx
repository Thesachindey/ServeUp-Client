import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import UpcomingEvents from "../pages/UpcomingEvents/UpcomingEvents";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import AuthLayouts from "../layout/AuthLayouts";
import NotFoundPage from "../pages/NotFoundPage";
import PrivateRoute from "../provider/PrivateRoute";
import MyProfilePage from "../pages/profile/MyProfilePage";
import UpdateInfo from "../pages/profile/UpdateInfo";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
import LoadingPage from "../pages/LoadingPage/LoadingPage";
import EventDetails from "../pages/EventDetails/EventDetails";
import JoinedEvent from "../pages/JoinedEventPage/JoinedEvent";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/upcoming-event',
                element: <UpcomingEvents />,
                loader: () => fetch('http://localhost:3000/events'),
                hydrateFallbackElement: <LoadingPage />
            },
            {
                path: '/joined-events',
                element: <JoinedEvent />,
                loader: () => fetch('http://localhost:3000/joined-events'),
                hydrateFallbackElement: <LoadingPage />
            },
            {
                path: '/event-details/:id',
                element: <EventDetails />,
                loader: ({ params }) => fetch(`http://localhost:3000/events/${params.id}`),
                hydrateFallbackElement: <LoadingPage />
            },

            {
                path: '/my-profile',
                element:
                    <PrivateRoute>
                        <MyProfilePage />
                    </PrivateRoute>,

            },
            {
                path: '/create-event',
                element:
                    <PrivateRoute>
                        <CreateEvent />
                    </PrivateRoute>,

            },

            {
                path: "/*",
                element: <NotFoundPage />,

            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayouts />,
        children: [
            {
                path: '/auth/login',
                element: <LoginPage />
            },
            {
                path: '/auth/register',
                element: <RegisterPage />
            },
            {
                path: '/auth/update-profile',
                element: <UpdateInfo />
            }
        ]

    },
]);