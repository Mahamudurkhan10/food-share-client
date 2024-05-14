import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/Auth";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const AddFood = () => {
     const { user } = useContext(AuthContext)
    
 const handleAdd = (e)=>{
     e.preventDefault()
     const form = e.target;
     const email = e.target.email.value;
     const donator_name = e.target.name.value;
     const donator_image = e.target.photo.value;
     const food_image = e.target.foodPhoto.value;
     const food_name = e.target.foodName.value;
     const additional_notes = e.target.additionalNotes.value;
     const   expired_date = e.target.expiredDate.value;
     const  pickup_location = e.target.pickupLocation.value;
     const food_quantity = e.target.foodQuantity.value;
     const foodStatus = e.target.foodStatus.value;
     const donatedFoods = {email,donator_name,donator_image,food_image,food_name,additional_notes,expired_date,pickup_location,food_quantity,foodStatus}
     console.log(donatedFoods);
     axios.post('https://food-sharing-server-ten.vercel.app/foods', donatedFoods)
     .then(res =>{
          if(res.data.insertedId){
               Swal.fire({
                    title: "Added!",
                    text: "Your food has been Add Successfully.",
                    icon: "success"

               });
              
               form.reset()
          }
      } )
 }
     return (
          <div className="px-24 py-8 bg-gray-500 font-bold lg:bg-gray-300">
               <div>
                    <h1 className="text-3xl mb-4 font-extrabold text-green-600 text-center"> Add Donated Food  </h1>
               </div>
               <form onSubmit={handleAdd} action="">
                    <div className="lg:flex gap-6">
                         <div className='form-control lg:w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text text-lg '> Donator Email</span>
                              </label>
                              <div className="join">

                                   <input className="input input-bordered text-sm w-full join-item" type="email" name="email" placeholder='Email Please' defaultValue={user?.email} disabled required />

                              </div>

                         </div>
                         <div className='form-control lg:w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text  text-lg'> Donator Name
                                   </span>
                              </label>
                              <div className="join">

                                   <input type="text" name="name" className="input input-bordered text-sm w-full join-item" placeholder=" Your Name" defaultValue={user?.displayName} disabled />

                              </div>

                         </div>
                    </div>
                    <div className="lg:flex gap-6">

                         <div className='form-control lg:w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text text-lg '> Donator Photo </span>
                              </label>
                              <div className="join">

                                   <input type="text" name="photo" className="input input-bordered text-sm w-full join-item" defaultValue={user?.photoURL} disabled placeholder=" Donator Photo URL" />

                              </div>

                         </div>
                         <div className='form-control lg:w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text text-lg '> Food Image
                                   </span>
                              </label>
                              <div className="join">

                                   <input type="text" name="foodPhoto" className="input input-bordered text-sm w-full join-item" placeholder=" Food Photo URL" />

                              </div>

                         </div>
                    </div>
                    <div className="lg:flex gap-6">
                         <div className='form-control lg:w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text text-lg '> Food Name
                                   </span>
                              </label>
                              <div className="join">

                                   <input type="text" name="foodName" className="input input-bordered text-sm w-full join-item" placeholder="Food Name" />

                              </div>

                         </div>
                         <div className='form-control lg:w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text  text-lg'> Additional Notes </span>
                              </label>
                              <div className="join">

                                   <input type="text" name="additionalNotes" className="input input-bordered text-sm w-full join-item" placeholder=" Additional notes " />

                              </div>

                         </div>
                    </div>
                    <div className="lg:flex gap-6">
                         <div className='form-control lg:w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text text-lg '>Food Quantity</span>
                              </label>
                              <div className="join">

                                   <input type="text" name="foodQuantity" className="input input-bordered text-sm w-full join-item" placeholder="Food Quantity" />

                              </div>

                         </div>
                         <div className='form-control lg:w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text  text-lg'> Pickup Location

                                   </span>
                              </label>
                              <div className="join">

                                   <input type="text" name="pickupLocation" className="input input-bordered text-sm w-full join-item" placeholder=" Pickup Location" />

                              </div>

                         </div>
                    </div>
                    <div className="lg:flex gap-6">
                         <div className='form-control lg:w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text text-lg '>Expired Date</span>
                              </label>
                              <div className="join">

                                   <input type="date" name="expiredDate" className="input input-bordered text-sm w-full join-item" placeholder="Expired Date" />

                              </div>

                         </div>
                         <div className='form-control lg:w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text text-lg '>Food Status</span>
                              </label>
                              <div className="join">

                                   <input type="text" name="foodStatus" className="input input-bordered text-sm w-full join-item"  disabled defaultValue={'available'} />

                              </div>

                         </div>
                       
                    </div>
                    
                    <div className="text-center mt-9 ">  <input className=" btn text-white btn-success mt-2 w-full text-xl" type="submit" value="Add" /> </div>
               </form>
          </div>
     );
};

export default AddFood;