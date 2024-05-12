import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import AddFood from './Components/ShareNavbar/AddFood';
import AvailableFood from './Components/ShareNavbar/AvailableFood';
import ManageMyFood from './Components/ShareNavbar/ManageMyFood';
import MyFoodRequest from './Components/ShareNavbar/MyFoodRequest';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/availableFoods',
        element:<AvailableFood></AvailableFood>
      },
      {
        path:'/addFood',
        element:<AddFood></AddFood>

      },
     
      {
        path:'/manageFoods',
        element: <ManageMyFood></ManageMyFood>
      },
      {
        path:'/myFoodRequest',
        element: <MyFoodRequest></MyFoodRequest>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
