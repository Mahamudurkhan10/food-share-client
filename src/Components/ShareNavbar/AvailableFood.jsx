import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const AvailableFood = () => {
    const [oldFoods, setOldFoods] = useState([]);
    const [value, setValue] = useState("");
    
    useEffect(() => {
        axios('https://food-sharing-server-ten.vercel.app/foods')
            .then(res => setOldFoods(res.data))
    }, []);
    
    const handleSearch = (e) => {
        e.preventDefault();
        setValue(e.target.food.value);
    };
    
    const handleFilterForm = (e) => {
        e.preventDefault();
        setValue(e.target.date.value);
    };
    
    const foods = value ? oldFoods.filter(f => f.food_name === value || f.expired_date === value) : oldFoods;
    
    return (
        <div data-aos="fade-down" data-aos-delay="200">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-green-600">Available Food</h1>
            </div>
            <div className="lg:flex lg:justify-between mt-7 lg:items-center">
                <div>
                    <form onSubmit={handleSearch}>
                        <div className="flex justify-start items-center">
                            <h1 className="text-xl font-bold text-blue-400 mr-3">Search:</h1>
                            <label className="input input-bordered border-l-0 bg-gray-200 flex items-center gap-2">
                                <input type="text" name="food" className="text-black font-medium" placeholder="Food name please" />
                            </label>
                            <input type="submit" className="btn btn-success border-r-0 text-white" value="Search" />
                        </div>
                    </form>
                </div>
                <div className="flex lg:justify-end justify-center lg:mb-10">
                    <form onSubmit={handleFilterForm} action="" className="flex flex-col space-y-4">
                        <label htmlFor="date" className="text-lg font-semibold text-gray-700">Expired Date</label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            className="bg-gray-200 border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                        <input
                            type="submit"
                            className="btn btn-success text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                            value="Filter"
                        />
                    </form>
                </div>
            </div>
            <div className="grid mb-8 gap-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
                {foods.length > 0 ? (
                    foods.map(food => (
                        <div key={food._id}>
                            <div className="mt-7">
                                <div className="flex h-[750px] flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                                    <div className="flex space-x-4">
                                        <img alt="" src={food.donator_image} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                                        <div className="flex flex-col text-xl font-bold text-green-400 space-y-1">
                                            <h1>{food.donator_name}</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={food.food_image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                                        <h2 className="mb-1 text-lg font-bold">Food Name: <span className="text-xl text-pink-400 font-bold">{food.food_name}</span></h2>
                                    </div>
                                    <div className="flex gap-2">
                                        <h1 className="text-sm font-semibold text-green-500">Food Quantity: <span className="text-yellow-500 font-semibold">{food.food_quantity}</span></h1>
                                        <h1 className="text-sm font-semibold text-green-500">Expired Date: <span className="text-yellow-500 font-bold">{food.expired_date}</span></h1>
                                    </div>
                                    <div>
                                        <h1 className="text-sm font-semibold text-blue-500">Pickup Location: {food.pickup_location}</h1>
                                        <p className="text-sm font-medium text-gray-600">Description: {food.additional_notes}</p>
                                    </div>
                                    <NavLink to={`/food/${food._id}`}>
                                        <button className="btn btn-success text-white w-full">View Details</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>
                        <h1>Data not found</h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AvailableFood;
