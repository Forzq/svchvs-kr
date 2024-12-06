import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Store from "./pages/Store"
import HomePage from "./pages/HomePage"
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE,HOMEPAGE_ROUTE } from "./utils/consts"
import { Component } from "react"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        //profile page is absent
    }
]
export const publicRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: SHOP_ROUTE,
        Component: Store
    },
    {
    path: HOMEPAGE_ROUTE,
    Component: HomePage
    }
]