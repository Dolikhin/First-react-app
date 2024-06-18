import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPages from "../pages/PostIdPages";
import { privateRoutes, publicRoutes } from "../router/routes";
import { AuthContext } from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext)

  if(isLoading) {
    return <Loader/>
  }

  return (

    isAuth
      ? <Routes>
        {privateRoutes.map(route =>
          <Route
            element={route.element}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        )}
        <Route path='*' element={<Navigate to='/posts' replace />} />
      </Routes>
      : <Routes>
        {publicRoutes.map(route =>
          <Route
            element={route.element}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        )}
        <Route path='*' element={<Navigate to='/login' replace />} />
      </Routes>
  );
}


export default AppRouter;