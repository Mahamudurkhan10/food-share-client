
import { useContext } from "react";
import { NavLink, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Auth";
import Swal from "sweetalert2";
import axios from "axios";


const FoodCardDetails = () => {
     const location = useLocation()
     const navigate = useNavigate()
     const { user } = useContext(AuthContext)
     const food = useLoaderData();


     const { food_name,
          food_image,
          food_quantity,
          pickup_location,
          expired_date,
          additional_notes,
          donator_image,
          donator_name,
          donator_email, _id } = food;
     const handleRequest = (e) => {
          e.preventDefault()
          const form = e.target;
          const email = e.target.email.value;
          const donator_name = e.target.name.value;
          const donator_image = e.target.photo.value;
          const food_image = e.target.foodPhoto.value;
          const food_name = e.target.foodName.value;
          const additional_notes = e.target.additionalNotes.value;
          const expired_date = e.target.expiredDate.value;
          const pickup_location = e.target.pickupLocation.value;
          const food_quantity = e.target.foodQuantity.value;
          const foodStatus = e.target.foodStatus.value;
          const requestDate = e.target.requestDate.value;
          const donatedFoods = { email, donator_name, donator_image, requestDate, food_image, food_name, additional_notes, expired_date, pickup_location, food_quantity, foodStatus }
          console.log(donatedFoods);
          axios.post('https://food-sharing-server-ten.vercel.app/newFoods', donatedFoods)
               .then(res => {
                    if (res.data.insertedId) {
                         Swal.fire({
                              title: "requested!",
                              text: "Your food has been requested Successfully.",
                              icon: "success"

                         });

                    }
                    navigate(location?.state ? location.state : '/')
               })
     }
     return (
          <div>
               <section className="dark:bg-gray-100 dark:text-gray-800">
                    <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                         <div className="text-lg w-1/2 font-medium mt-12 text-center">
                              <div className="mb-4">
                                   <h1 className="text-blue-700 mb-4"> Donar Name : <span className="text-xl font-bold text-green-600"> {donator_name}</span>  </h1>
                                   <h1 className="text-sm w-3/5 mx-auto text-pink-400 "> Food Pickup Location : <span className="font-bold text-sm"> {pickup_location} </span> </h1>
                              </div>
                              <div>
                                   <h1 className="text-lg font-bold text-green-600"> Food Name : <span className="text-xl font-bold text-blue-600">{food_name} </span></h1>
                              </div>

                              <div className=" m-7 font-bold text-yellow-600 w-3/5 mx-auto">
                                   <h1 className="mb-4"> Food Quantity : <span className="text-orange-500 font-bold"> {food_quantity}</span> </h1>
                                   <h1> Expired Date : <span className="text-amber-800 font-bold"> {expired_date}</span> </h1>
                              </div>
                              <div>

                                   <button className="btn btn-success w-1/2" onClick={() => document.getElementById('my_modal_5').showModal()}  > Request  </button>
                                   <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                             <h1 className="text-xl font-bold text-blue-600"> Request Box  </h1>
                                             <form onSubmit={handleRequest}>
                                                  <div className="lg:flex flex-col gap-6">
                                                       <div className='form-control '>
                                                            <label htmlFor="" className='label'>
                                                                 <span className='label-text text-lg '> Donator Email</span>
                                                            </label>
                                                            <div className="join">

                                                                 <input className="input input-bordered text-sm w-full join-item" type="email" name="email" placeholder='Email Please' defaultValue={user?.email} disabled required />

                                                            </div>

                                                       </div>
                                                       <div className='form-control '>
                                                            <label htmlFor="" className='label'>
                                                                 <span className='label-text  text-lg'> Donator Name
                                                                 </span>
                                                            </label>
                                                            <div className="join">

                                                                 <input type="text" name="name" className="input input-bordered text-sm w-full join-item" placeholder=" Your Name" defaultValue={user?.displayName} disabled />

                                                            </div>

                                                       </div>
                                                  </div>
                                                  <div className="lg:flex flex-col gap-6">

                                                       <div className='form-control   '>

                                                            <label htmlFor="" className='label'>
                                                                 <span className='label-text text-lg '> Donator Photo </span>
                                                            </label>
                                                            <div className="join">

                                                                 <input type="text" name="photo" className="input input-bordered text-sm w-full join-item" defaultValue={user?.photoURL} disabled placeholder=" Donator Photo URL" />

                                                            </div>

                                                       </div>
                                                       <div className='form-control '>
                                                            <label htmlFor="" className='label'>
                                                                 <span className='label-text text-lg '> Food Image
                                                                 </span>
                                                            </label>
                                                            <div className="join">

                                                                 <input type="text" name="foodPhoto" className="input input-bordered text-sm w-full join-item" defaultValue={food_image} disabled placeholder=" Food Photo URL" />

                                                            </div>

                                                       </div>
                                                  </div>
                                                  <div className="lg:flex flex-col gap-6">
                                                       <div className='form-control '>
                                                            <label htmlFor="" className='label'>
                                                                 <span className='label-text text-lg '> Food Name
                                                                 </span>
                                                            </label>
                                                            <div className="join">

                                                                 <input type="text" name="foodName" className="input input-bordered text-sm w-full join-item" defaultValue={food_name} disabled placeholder="Food Name" />

                                                            </div>

                                                       </div>
                                                       <div className='form-control '>
                                                            <label htmlFor="" className='label'>
                                                                 <span className='label-text  text-lg'> Additional Notes </span>
                                                            </label>
                                                            <div className="join">

                                                                 <input type="text" name="additionalNotes" className="input input-bordered text-sm w-full join-item" defaultValue={additional_notes} placeholder=" Additional notes " />

                                                            </div>

                                                       </div>
                                                  </div>
                                                  <div className="lg:flex flex-col gap-6">
                                                       <div className='form-control'>
                                                            <label htmlFor="" className='label'>
                                                                 <span className='label-text text-lg '>Food Quantity</span>
                                                            </label>
                                                            <div className="join">

                                                                 <input type="text" name="foodQuantity" className="input input-bordered text-sm w-full join-item" defaultValue={food_quantity} disabled placeholder="Food Quantity" />

                                                            </div>

                                                       </div>
                                                       <div className='form-control'>
                                                            <label htmlFor="" className='label'>
                                                                 <span className='label-text  text-lg'> Pickup Location

                                                                 </span>
                                                            </label>
                                                            <div className="join">

                                                                 <input type="text" name="pickupLocation" className="input input-bordered text-sm w-full join-item" defaultValue={pickup_location} disabled placeholder=" Pickup Location" />

                                                            </div>

                                                       </div>
                                                  </div>
                                                  <div className="lg:flex flex-col gap-6">
                                                       <div className='form-control '>
                                                            <label htmlFor="" className='label'>
                                                                 <span className='label-text text-lg '>Expired Date</span>
                                                            </label>
                                                            <div className="join">

                                                                 <input type="date" name="expiredDate" className="input input-bordered text-sm w-full join-item" defaultValue={expired_date} disabled placeholder="Expired Date" />

                                                            </div>

                                                       </div>
                                                       <div className='form-control '>
                                                            <label htmlFor="" className='label'>
                                                                 <span className='label-text text-lg '>Food Status</span>
                                                            </label>
                                                            <div className="join">

                                                                 <input type="text" name="foodStatus" className="input input-bordered text-sm w-full join-item" disabled defaultValue={'available'} />

                                                            </div>

                                                       </div>

                                                  </div>
                                                  <div className="lg:flex flex-col gap-6">
                                                       <div className='form-control '>
                                                            <label htmlFor="" className='label'>
                                                                 <span className='label-text text-lg '> Food ID </span>
                                                            </label>
                                                            <div className="join">

                                                                 <input type="text" name="foodId" className="input input-bordered text-sm w-full join-item" defaultValue={_id} disabled placeholder="Expired Date" />

                                                            </div>

                                                       </div>
                                                       <div className='form-control '>
                                                            <label htmlFor="" className='label'>
                                                                 <span className='label-text text-lg '> Request Date</span>
                                                            </label>
                                                            <div className="join">

                                                                 <input type="date" name="requestDate" className="input input-bordered text-sm w-full join-item" />

                                                            </div>

                                                       </div>

                                                  </div>

                                                  <div className="text-center mt-9 ">  <input className=" btn text-white btn-success mt-2 w-full text-xl" type="submit" value="Request" /> </div>
                                             </form>

                                             <div className="modal-action">
                                                  <form method="dialog">

                                                       <button className="btn  btn-info">Close</button>
                                                  </form>
                                             </div>
                                        </div>
                                   </dialog>
                              </div>
                              <div className="mt-5">
                                   <NavLink to={'/'}><button className="btn w-1/2 btn-info"> Go Back</button></NavLink>
                              </div>
                         </div>
                         <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
                              <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                                   <img src={food_image} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default FoodCardDetails;