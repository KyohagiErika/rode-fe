import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import ErrorPage from '../Pages/404Page';
import Admin from '../Pages/Admin';
import AdminRoom from '../Pages/AdminManagement/AdminRoom';
import ArenaCSS from '../Pages/CssBattle';
import Home from '../Pages/Home';
import HomeChild from '../Pages/HomeChild/HomeChild';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Loading from '../components/Loading';
import TestAlert from '../components/TestAlert';
import TestModal from '../components/TestModal';
import AdminRoute from './AdminRoute';
import PublicRoute from './PublicRoute';

const RouterComponent = () => {
    const router = createBrowserRouter([
        { exact: true, path: '/', element: <Navigate to="home" /> },
        { exact: true, path: '/login', loader: Loading, element: <Login /> },
        { exact: true, path: '/register', element: <Register /> },
        { exact: true, path: '/modal', loader: Loading, element: <TestModal /> },
        { exact: true, path: '/alert', loader: Loading, element: <TestAlert /> },
        { exact: true, path: '/arena_css', loader: Loading, element: <ArenaCSS /> },
        { exact: true, path: '/admin_room', loader: Loading, element: <AdminRoom /> },
        {
            path: '/',
            exact: true,
            element: <PublicRoute />,
            children: [
                {
                    exact: true,
                    path: 'home',
                    loader: Loading,
                    element: <Home />,
                    children: [{ path: 'homeChild', loader: Loading, element: <HomeChild /> }],
                },
            ],
        },
        {
            exact: true,
            element: <AdminRoute />,
            children: [
                {
                    exact: true,
                    path: 'admin',
                    loader: Loading,
                    element: <Admin />,
                },
            ],
        },
        { path: '*', element: <ErrorPage /> },
    ]);

    return <RouterProvider fallbackElement={<Loading />} router={router} />;
};

export default RouterComponent;
