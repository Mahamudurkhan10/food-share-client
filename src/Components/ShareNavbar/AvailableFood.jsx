import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const AvailableFood = () => {
     const [foods, setFoods] = useState([])
     const [oldFoods, setOldFoods] = useState([])

     useEffect(() => {
          axios('http://localhost:5000/foods')
               .then(res => setOldFoods(res.data))
     }, [])
     const handleFilterForm = (e) => {
          e.preventDefault()
          const date = e.target.date.value
          console.log(date);
       
               const result = oldFoods.filter(food => food.expired_date === date)
               setFoods(result)
     
     }
     const handleFoods = (filter)=>{
          if(filter ==='All' ){
               setFoods(oldFoods)
          }}
     const handleSearch = (e) => {
          e.preventDefault()
          console.log('click');
          const foodName = e.target.food.value.toLowerCase();
          
          const result = oldFoods.filter(food => food.food_name.toLowerCase() === foodName)
          setFoods(result)

     }

     return (
          <div>
               <div className="text-center">
                    <h1 className="text-5xl font-bold text-green-600"> Available Food </h1>
               </div>
               <div className="lg:flex lg:justify-between  mt-7 lg:items-center">
                    <div>
                         <form onSubmit={handleSearch} action="">

                          <div className="flex justify-start items-center ">
                               <h1 className="text-xl font-bold text-blue-400 mr-3">  Search :  </h1>
                          <label className="input  input-bordered border-l-0 bg-gray-200 flex  items-center gap-2">
                                   <input type="text" name="food" className="text-black font-medium" placeholder=" food name please" />
                                   
                              </label>
                              <input type="submit" className="btn btn-success border-r-0  text-white" value=" Search" />

                          </div>

                         </form>
                    </div>
                    <div className="flex justify-center  lg:mb-10">
                    <details className="dropdown  lg:dropdown-right lg:p-5 ">
                         <summary onClick={()=>handleFoods('All') } className="m-1 font-bold text-sky-600 text-2xl btn"> Show All Foods </summary>
                        
                    </details>
               </div>
                    <div className="flex lg:justify-end  justify-center lg:mb-10">
                         <details className="dropdown  lg:dropdown-left lg:p-5  ">
                              <summary className="m-1 mt-2 font-bold text-sky-600 text-2xl btn"> Sort </summary>
                              <ul className="p-2 text-emerald-500 font-bold shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">


                                   <form onSubmit={handleFilterForm} action="">
                                        <label htmlFor=" expired Date"> Expired date </label>
                                        <input type="date" name="date" id="date" />
                                        <input type="submit" value="search" />
                                   </form>

                              </ul>
                         </details>
                    </div>
               </div>
               <div className="grid mb-8 gap-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
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