import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/Auth";


const AddFood = () => {
     const { user } = useContext(AuthContext)
     console.log(user)
     return (
          <div className="px-24 py-8 bg-gray-500 font-bold lg:bg-gray-300">
               <div>
                    <h1 className="text-3xl mb-4 font-extrabold text-green-600 text-center"> Add Donated Food  </h1>
               </div>
               <form action="">
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

                                   <input type="text" name="photo" className="input input-bordered text-sm w-full join-item" defaultValue={user?.photoURL} disabled placeholder="Photo URL" />

                              </div>

                         </div>
                         <div className='form-control lg:w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text text-lg '> Food Image
                                   </span>
                              </label>
                              <div className="join">

                                   <input type="text" name="foodPhoto" className="input input-bordered text-sm w-full join-item" placeholder="Photo URL" />

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

                                   <input type="text" name="foodName" className="input input-bordered text-sm w-full join-item" placeholder="subcategory_Name" />

                              </div>

                         </div>
                         <div className='form-control lg:w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text  text-lg'> Additional Notes </span>
                              </label>
                              <div className="join">

                                   <input type="text" name="additionalNotes" className="input input-bordered text-sm w-full join-item" placeholder="short description" />

                              </div>

                         </div>
                    </div>
                    <div className="lg:flex gap-6">
                         <div className='form-control lg:w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text text-lg '>Food Quantity</span>
                              </label>
                              <div className="join">

                                   <input type="text" name="foodQuantity" className="input input-bordered text-sm w-full join-item" placeholder="Price" />

                              </div>

                         </div>
                         <div className='form-control lg:w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text  text-lg'> Pickup Location

                                   </span>
                              </label>
                              <div className="join">

                                   <input type="text" name="pickupLocation" className="input input-bordered text-sm w-full join-item" placeholder=" ratining" />

                              </div>

                         </div>
                    </div>
                    <div className="lg:flex gap-6">
                         <div className='form-control lg:w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text text-lg '>Expired Date</span>
                              </label>
                              <div className="join">

                                   <input type="text" name="expiredDate" className="input input-bordered text-sm w-full join-item" placeholder="Processing time" />

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