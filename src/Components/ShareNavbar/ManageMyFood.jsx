import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/Auth";
import { NavLink } from "react-router-dom";

import Swal from "sweetalert2";


const ManageMyFood = () => {
     const { user } = useContext(AuthContext)

     const [foods, setFoods] = useState([])
     console.log(foods);
     useEffect(() => {
          fetch(`http://localhost:5000/myfood/${user?.email}`)
               .then(res => res.json())
               .then(data => {
                    setFoods(data)

               })
     }, [user])
     const  handleDelete = (_id) => {
          console.log(_id)
          Swal.fire({
               title: "Are you sure?",
               text: "You won't be able to revert this!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, delete it!"
          }).then((result) => {
               if (result.isConfirmed) {

                    fetch(`http://localhost:5000/foods/${_id}`, {
                         method: 'DELETE'
                    }
                    )
                         .then(res => res.json())
                         .then(data => {
                              if (data.deletedCount > 0) {
                                   Swal.fire({
                                        title: "Deleted!",
                                        text: "Your Craft has been deleted.",
                                        icon: "success"

                                   });
                                   const remaining = foods.filter(food => food._id !== _id)
                                   setFoods(remaining)
                                
                              }
                         })
               }
          });
     }
     return (
          <div>
               
               <div className="overflow-x-auto bg-slate-50 rounded-lg">
                    
                    <table className="table">
                         {/* head */}
                         <thead className="text-xl font-bold">
                              <tr> <th></th>
                                 <th> Food Name </th>
                                   <th> Donator Email </th>
                                   <th > Food Quantity </th>
                                   <th> Location </th>
                                   <th> Expired Date </th>
                                   <th> </th>
                                
                              </tr>
                         </thead>
                         <tbody>
                              {/* row 1 */}
                            { 
                              foods.map(food => <tr key={food._id}>
                                   <td onClick={()=>handleDelete(food._id)} className="btn btn-success "> Delete  </td>
                                   <th> {food.food_name} </th>
                                   <td> {food.email} </td>
                                   <td> {food.food_quantity} </td>
                                   <td> {food. pickup_location} </td>
                                   <td> {food.  expired_date} </td>
                                   <td className="flex  mt-4 items-center">  </td>
                                   <td> <NavLink to={`/food/${food._id}`}><button className="btn btn-info  "> View Details  </button></NavLink> </td>
                                   <td> <NavLink to={`/update/${food._id}`}><button className="btn btn-error  "> Update </button></NavLink> </td>
                              </tr>)
                            }
                          
                              
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default ManageMyFood;