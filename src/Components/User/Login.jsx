import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/Auth";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

const Login = () => {
     const { googleLogin, loginPass, githubLogin } = useContext(AuthContext)
     const [success, setSuccess] = useState('')
     const [error, setError] = useState('')

     const location = useLocation()
     const navigate = useNavigate()
     const handleLoginForm = (e) => {
         
          e.preventDefault()
          const email = e.target.email.value;
          const password = e.target.password.value;

          if (/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {

               loginPass(email, password)
                    .then(() => {
                      
                         setSuccess(

                              Swal.fire({
                                   title: "Login done!",
                                   text: " success fully Login.",
                                   icon: "success"

                              })

                         )

                    })
               navigate(location?.state ? location.state : '/')
          }
          else {
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
     const handleGoogle = () => {

          googleLogin()
          navigate(location?.state ? location.state : '/')
     }
     const handleGithub = () => {
          githubLogin()
          navigate(location?.state ? location.state : '/')
     }
     return (
          <div>
               <div className="mt-7 mb-9" data-aos="fade-down" data-aos-delay="200">
                    <div className=" mb-4 p-3 text-center bg-gray-50">
                         <h1 className="text-5xl font-extrabold text-green-700"> Login Here  </h1>
                    </div>
                    <div className="hero h-[800] bg-green-50">

                         <div className="hero-content lg:flex-row flex-col w-full">
                              <div className="text-center  lg:text-left">

                                   <img src="https://i.ibb.co/bXbb8XZ/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cl.jpg" alt="" className="size-[700px] opacity-90" />
                              </div>
                              <div className="w-1/2 max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
                                   <h2 className="mb-3 text-3xl font-bold text-yellow-400 text-center">Login to your account</h2>
                                   <p className="text-sm text-center dark:text-gray-600">Dont have account?
                                        <NavLink to={'/register'}><a rel="noopener noreferrer" className="focus:underline hover:underline text-green-500 text-xl font-bold"> Register here </a></NavLink>
                                   </p>
                                   <div className="my-6 space-y-4">
                                        <button onClick={handleGoogle} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                             </svg>
                                             <p>Login with Google</p>
                                        </button>
                                        <button onClick={handleGithub} aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                                  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                             </svg>
                                             <p>Login with GitHub</p>
                                        </button>

                                   </div>
                                   <div className="flex items-center w-full my-4">
                                        <hr className="w-full dark:text-gray-600" />
                                        <p className="px-3 dark:text-gray-600">OR</p>
                                        <hr className="w-full dark:text-gray-600" />
                                   </div>
                                   <form onSubmit={handleLoginForm} className="space-y-8">
                                        <div className="space-y-4">
                                             <div className="space-y-2">
                                                  <label htmlFor="email" className=" text-sm">Email address</label>
                                                  <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-yellow-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                                             </div>
                                             <div className="space-y-2">
                                                  <div className="flex justify-between">
                                                       <label htmlFor="password" className="text-sm">Password</label>

                                                  </div>
                                                  <input type="text" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />


                                             </div>
                                        </div>
                                        <div>
                                             <input type="submit" className="btn btn-success w-full" value="Login" />
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>

          </div>
     );
};

export default Login;