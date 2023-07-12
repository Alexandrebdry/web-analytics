import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout.jsx";
import AppLayout from "../layouts/AppLayout.jsx";
import LoginPage from "../pages/auth/LoginPage.jsx";
import RegisterPage from "../pages/auth/RegisterPage.jsx";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage.jsx";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage.jsx";
import NotFoundPage from "../pages/error/NotFoundPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import AdminPage from "../pages/admin/AdminPage.jsx";
import AdminUsersPage from "../pages/admin/AdminUsersPage.jsx";
import SecuredPage from "./SecuredPage.jsx";
import {SCOPES} from "./permissions.js";



const useRoutes = () => {
    const routes = [
        {
            name: 'home',
            path: '/',
            element:
                <SecuredPage scopes={[SCOPES.USER]}>
                    <HomePage/>
                </SecuredPage>
        }
    ];

    return routes.map((route) => {
        return <Route key={route.name} {...route}  />
    });
}

const useAdminRoute = () => {
    const routes = [
        {
            name: 'admin',
            path: '/admin',
            element:
                <SecuredPage scopes={[SCOPES.ADMIN]}>
                    <AdminPage/>
                </SecuredPage>
        },
        {
            name: 'admin-users',
            path: '/admin/users',
            element:
                <SecuredPage scopes={[SCOPES.ADMIN]}>
                    <AdminUsersPage />
                </SecuredPage>
        }
    ];

    return routes.map((route) => {
        return <Route key={route.name} {...route}  />
    });
}

const useAuthRoute = () => {
    const routes = [
        {
            name: 'login',
            path: '/login',
            element: <LoginPage/>
        },
        {
            name: 'register',
            path: '/register',
            element: <RegisterPage/>
        },
        {
            name: 'forgot-password',
            path: '/forgot-password',
            element: <ForgotPasswordPage/>
        },
        {
            name: 'reset-password',
            path: '/reset-password',
            element: <ResetPasswordPage/>
        }
    ];

    return routes.map((route) => {
        return <Route key={route.name} {...route} />
    });
}


export default function Router() {
    const routes = useRoutes();
    const adminRoutes = useAdminRoute();
    const authRoutes = useAuthRoute();
    return (
        <Suspense>
            <Routes>
                <Route path={''} element={<AppLayout/>}>
                    {
                        routes.map(route => route)
                    }
                </Route>
                <Route path={''} element={<AdminLayout/>}>
                    {
                        adminRoutes.map(route => route)
                    }
                </Route>
                <Route path={''} >
                    {
                        authRoutes.map(route => route)
                    }
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </Suspense>
    )
}