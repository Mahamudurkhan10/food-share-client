
import FoodCard from "../../Pages/FoodCard";
import { useQuery } from "@tanstack/react-query";


const FeaturedFoods = () => {
     const{ isPending,isError,error, data: foods}=useQuery({
          queryKey:['foods'],
          queryFn: async ()=>{
               const res = await fetch('https://food-sharing-server-ten.vercel.app/foods');
               return res.json()
          }
     })
  
      if(isPending){
          return <span className="loading loading-spinner text-primary"></span>
      }
     if(isError){
          return <p> {error.message} </p>
     }
      
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
