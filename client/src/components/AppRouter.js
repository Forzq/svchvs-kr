import React, { useContext } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { HOMEPAGE_ROUTE, SHOP_ROUTE } from '../utils/consts';
import {Context} from '../index'


const AppRouter = () => {
    const {user} = useContext(Context)
    function RequireAuth({ children }) {
      let location = useLocation();
      const token = localStorage.getItem('token')
      if (!token) {
        return <Navigate to="/registration" state={{ from: location }} replace />;
      }
      return children;
    }
    return (
      <Routes>
         {authRoutes.map(({ path, Component }) =>
            
            <Route key={path} path={path} element={
               <RequireAuth>
                  <Component/>
               </RequireAuth>
         }/>
         )} 
         
        {publicRoutes.map(({ path, Component }) =>
           <Route key={path} path={path} element={<Component/>} />
        )}
        <Route path="*" element={<Navigate to={HOMEPAGE_ROUTE} />}/>
     </Routes>

    );
};

export default AppRouter;