import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/Auth";
import Swal from "sweetalert2";


const Register = () => {
     const {register, updatePP}= useContext(AuthContext)
     // const  [ showPassword,setShowPassword]=useState(false)
      const navigate = useNavigate();
      const location = useLocation()
     const [success,setSuccess]= useState('')
     const [error, setError] = useState('') 
     const handleRegister = (e) => {
          e.preventDefault()
          const email = e.target.email.value
          const password = e.target.password.value
          const name = e.target.name.value
          const photo = e.target.photo.value
        
          if (/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
            
               register(email, password)
               .then(() => {
                  updatePP(name,photo)
                  setSuccess(
                  
                    Swal.fire({
                         title: "Register done!",
                         text: " success fully register.",
                         icon: "success"
     
                    })
                  
                  )
                
               })
               navigate(location?.state ? location.state : '/') 
          }
          else{
               setError(
                    Swal.fire({
                         icon: "error",
                         title: " Give me valid pass",
                         text: "valid password"
                      
                       }))
               return
          }
           
            setError('') 
     }
     return (
          <div>
               <div className="mt-7 mb-9">
                    <div className=" mb-4 p-4 text-center bg-gray-50">
                         <h1 className="text-5xl font-extrabold text-green-700"> Register Here  </h1>
                    </div>
                    <div className="hero h-[800px] bg-green-50">

                         <div className="hero-content flex-row w-full">
                              <div className="text-center  lg:text-left">

                                   <img src="https://i.ibb.co/bXbb8XZ/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cl.jpg" alt="" className="size-[700px] opacity-90" />
                              </div>
                              <div>
                                   <div className="flex flex-col h-[600px] p-6 rounded-md sm:p-10 dark:bg-gray-100 dark:text-gray-800">
                                        <div className="mb-8 text-center">
                                             <h1 className="my-3 text-4xl font-bold text-yellow-400"> Register</h1>
                                             <p className="text-sm dark:text-gray-600"> Register to create your account</p>
                                        </div>
                                        <form onSubmit={handleRegister} noValidate="" action="" className="space-y-12">
                                             <div className="space-y-4">
                                                  <div>
                                                       <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                                                       <input type="text" name="name" id="name" placeholder="enter your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                                  </div>
                                                  <div>
                                                       <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                                                       <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                                  </div>
                                                  <div>
                                                       <div className="flex justify-between mb-2">
                                                            <label htmlFor="password" className="text-sm">Password</label>
                                                          
                                                       </div>
                                                       <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                                  </div>
                                                  <div>
                                                       <div className="flex justify-between mb-2">
                                                            <label htmlFor="photo" className="text-sm"> Photo Url</label>
                                                          
                                                       </div>
                                                       <input type="text" name="photo" id="photo" placeholder="photo Url" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                                  </div>
                                             </div>
                                             <div className="space-y-2">
                                                  <input type="submit" className="btn btn-success w-full" value="Register" />
                                                 
                                             </div>
                                        </form>
                                        <p className="px-6 text-sm text-center dark:text-gray-600"> Already have an account yet?
                                                       <NavLink to={'/login'}><a rel="noopener noreferrer"  className="hover:underline text-xl font-bold dark:text-green-600"> Login. </a></NavLink>
                                                  </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </div>
     );
};

export default Register;