import AdminPanel from "./components/AdminPanel/AdminPanel"
import Auth from "./pages/Auth"
import Store from "./pages/Store"
import HomePage from "./pages/HomePage"
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE,HOMEPAGE_ROUTE, PROFILE_ROUTE, HISTORY_ROUTE, ENGINE_ROUTE, TRANS_ROUTE, USERLIST_ROUTE, PRODUCTPAGE_ROUTE } from "./utils/consts"
import { Component } from "react"
import ProfilePage from "./pages/ProfilePage"
import HistoryList from "./components/HistoryList/HistoryList"
import EngineTune from "./components/EngineTune/EngineTune"
import TransTune from "./components/TransTune/TransTune"
import UsersList from "./components/UserList/UserList"
import ProductPage from "./pages/ProductPage/ProductPage"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPanel
    },
    {
        path: HISTORY_ROUTE,
        Component: HistoryList
    },
    {
        path: PROFILE_ROUTE,
        Component: ProfilePage
    },
  
]
export const publicRoutes = [
    {
        path: USERLIST_ROUTE,
        Component: UsersList
    },
    {
        path: SHOP_ROUTE,
        Component: Store
    },
    {
        path: PRODUCTPAGE_ROUTE,
        Component: ProductPage
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
    path: HOMEPAGE_ROUTE,
    Component: HomePage
    },
    {
    path: ENGINE_ROUTE,
    Component: EngineTune
    },
    {
    path: TRANS_ROUTE,
    Component: TransTune
    },
]