import PostIdPages from "../pages/PostIdPages";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Login from "../pages/Login";



export const privateRoutes = [
  {path: '/about', element: <About/>, exact: true},
  { path: '/posts', element: <Posts/>, exact: true},
  { path: '/posts/:id', element: <PostIdPages/>, exact: true},
]


export const publicRoutes = [
  { path: '/login', element: <Login/>, exact: true },
]