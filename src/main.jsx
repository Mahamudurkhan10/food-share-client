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
import Error from './Components/Home/Error';
import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Private from './Layout/Private';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error> ,
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
        element:<Private><AddFood></AddFood></Private>

      },
     
      {
        path:'/manageFoods',
        element: <Private> <ManageMyFood></ManageMyFood></Private>
      },
      {
        path:'/myFoodRequest',
        element:<Private> <MyFoodRequest></MyFoodRequest></Private>
      },{
        path:'/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },{
        path:'/food/:id',
        element:<Private><FoodCardDetails></FoodCardDetails></Private>,
        loader:({params})=> fetch(`https://food-sharing-server-ten.vercel.app/food/${params.id}`)  
      },
      {
        path:'/update/:id',
        element: <Update></Update>,
        loader:({params})=> fetch(`https://food-sharing-server-ten.vercel.app/foods/${params.id}`)  
      }
    ]
  },
]);

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Auth><RouterProvider router={router} /></Auth>
    </QueryClientProvider>
  
  </React.StrictMode>,
)
