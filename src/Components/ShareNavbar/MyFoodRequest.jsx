import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/Auth";
import axios from "axios";


const MyFoodRequest = () => {
     const {user}=useContext(AuthContext)
     const [ foods, setFoods]=useState([])
     useEffect(() => {
          axios(`https://food-sharing-server-ten.vercel.app/myFoods/${user?.email}`,{withCredentials: true})
               .then(res => {
                    setFoods(res.data)
               })
                               
             
     }, [user])
     return (
          <div className="mt-7 mb-7">
               <div className="overflow-x-auto bg-slate-50 rounded-lg">
                    
                    <table className="table">
                         {/* head */}
                         <thead className="text-xl font-bold">
                              <tr> 
                                 <th>  </th>
                                   <th> Donator Name </th>
                                   <th> Food Name</th>
                                   <th > Expired Date </th>
                                   <th> Pickup Location </th>
                                   <th> requestDate </th>
                                   <th> </th>
                                
                              </tr>
                         </thead>
                         <tbody>
                              {/* row 1 */}
                            { 
                              foods.map(food => <tr key={food._id}>
                                 
                                   <th className="text-2xl font-bold"> . </th>
                                   <td> {food.donator_name} </td>
                                   <td> {food.food_name} </td>
                                   <td> {food.expired_date} </td>
                                   <td> {food. pickup_location} </td>
                                   <td> {food.requestDate} </td>
                                 
                                  
                                   
                              </tr>)
                            }
                          
                              
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default MyFoodRequest;