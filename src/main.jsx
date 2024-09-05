import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home';
import Members from './pages/members/Members';
import About from './pages/about/About';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
},
{
   path: "/m",
    element: <Members/>
},
{
  path: "/a",
   element: <About/>
}

 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
