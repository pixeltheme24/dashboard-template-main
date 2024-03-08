import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Signin from './components/authentication/Signin';
// import Register from './components/authentication/Register';
import Dashboard from './components/dashboard/dashboard';
import Overview from './components/dashboard-page/Overview';
import Profile from './components/dashboard-page/Profile';

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Signin></Signin>,
  // },
  // {
  //   path: "/register",
  //   element: <Register></Register>,
  // },
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "overview",
        element: <Overview></Overview>
      },
      {
        path: "profile",
        element: <Profile></Profile>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
