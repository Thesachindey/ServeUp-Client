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
import ManageEvents from "../pages/MyCreatedEventsManage/ManageEvents";
import ManageEventDetails from "../pages/EventDetails/ManageEventDetails";
import UpdateEvent from "../pages/UpdateEvent/UpdateEvent";

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
                loader: () => fetch('https://serveup-server.vercel.app/events'),
                hydrateFallbackElement: <LoadingPage />
            },
            {
                path: '/joined-events',
                element:
                    <PrivateRoute>
                        <JoinedEvent />
                    </PrivateRoute>,
                // loader: () => fetch('https://serveup-server.vercel.app/joined-events'),
                // hydrateFallbackElement: <LoadingPage />
            },
            {
                path: '/event-details/:id',
                element: <EventDetails />,
                loader: ({ params }) => fetch(`https://serveup-server.vercel.app/events/${params.id}`),
                hydrateFallbackElement: <LoadingPage />
            },
            {
                path: '/manage-event-details/:id',
                element:
                    <PrivateRoute>
                        <ManageEventDetails />
                    </PrivateRoute>,
                loader: ({ params }) => fetch(`https://serveup-server.vercel.app/events/${params.id}`),
                hydrateFallbackElement: <LoadingPage />
            },
            {
                path: '/update-event/:id',
                element:
                    <PrivateRoute>
                        <UpdateEvent />
                    </PrivateRoute>,
                loader: ({ params }) => fetch(`https://serveup-server.vercel.app/events/${params.id}`),
                hydrateFallbackElement: <LoadingPage />
            },
            {
                path: '/manage-events',
                element:
                    <PrivateRoute>
                        <ManageEvents />
                    </PrivateRoute>
                // loader: ({ params }) => fetch(`https://serveup-server.vercel.app/events/${params.id}`),
                // hydrateFallbackElement: <LoadingPage />
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