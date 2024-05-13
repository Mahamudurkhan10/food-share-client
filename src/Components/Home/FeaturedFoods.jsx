import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import FoodCard from "../../Pages/FoodCard";


const FeaturedFoods = () => {
      const [foods , setFoods]= useState([])
      useEffect(()=>{
          axios('http://localhost:5000/foods')
          .then(res => setFoods(res.data))
      },[])
      
      
     return (
          <div className="mb-4">
               <div className="text-center ">
                    <h1 className="text-4xl font-bold text"> Featured Foods </h1>
                    <p className="w-1/2 mx-auto"> Featured foods can vary depending on various factors such as cultural preferences, seasonal availability, and culinary trends.</p>
               </div>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
                    {
                         foods.slice(0,6).map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                    }
                </div>
          </div>
     );
};

export default FeaturedFoods;
