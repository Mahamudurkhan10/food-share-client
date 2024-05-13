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
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import Auth from './AuthProvider/Auth';
import FoodCardDetails from './Pages/FoodCardDetails';
import Update from './Pages/Update';
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
      },{
        path:'/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },{
        path:'/food/:id',
        element:<FoodCardDetails></FoodCardDetails>,
        loader:({params})=> fetch(`http://localhost:5000/food/${params.id}`)  
      },
      {
        path:'/update/:id',
        element: <Update></Update>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth><RouterProvider router={router} /></Auth>
  </React.StrictMode>,
)
