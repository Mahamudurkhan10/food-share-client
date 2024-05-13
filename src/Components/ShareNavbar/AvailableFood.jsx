import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const AvailableFood = () => {
     const [foods, setFoods] = useState([])
    
     useEffect(() => {
          axios('http://localhost:5000/foods')
               .then(res => setFoods(res.data))
     }, [])
     return (
          <div>
               <div className="grid mb-8 gap-5 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
                    {
                         foods.map(food => <div key={food._id}>

                              <div className="mt-7 ">
                                   <div className="flex h-[750px] flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                                        <div className="flex space-x-4">
                                             <img alt="" src={food.donator_image} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                                             <div className="flex flex-col text-xl font-bold text-green-400 space-y-1">
                                                  <h1> {food.donator_name} </h1>

                                             </div>
                                        </div>
                                        <div>
                                             <img src={food.food_image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                                             <h2 className="mb-1 text-lg font-bold"> Food Name : <span className="text-xl text-pink-400 font-bold">{food.food_name}</span> </h2>

                                        </div>
                                        <div className="flex gap-2">
                                             <h1 className="text-sm font-semibold text-green-500"> Food Quantity : <span className="text-yellow-500 font-semibold"> {food.food_quantity}</span> </h1>
                                             <h1 className="text-sm font-semibold text-green-500"> Expired Date :<span className="text-yellow-500 font-bold"> {food.expired_date}</span></h1>

                                        </div>
                                        <div>
                                             <h1 className="text-sm font-semibold text-blue-500"> Pickup Location : {food.pickup_location} </h1>

                                             <p className="text-sm font-medium text-gray-600"> Description : {food.additional_notes} </p>
                                        </div>
                                        <NavLink to={`/food/${food._id}`} > <button className="btn btn-success text-white w-full "> View Details </button> </NavLink>
                                   </div>
                              </div>

                         </div>)
                    }
               </div>
          </div>
     );
};

export default AvailableFood;