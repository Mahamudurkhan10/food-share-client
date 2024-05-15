import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Auth";
import { LuLogOut } from "react-icons/lu";
import { MdFoodBank } from "react-icons/md";

const Navbar = () => {
  const {user,logOut}= useContext(AuthContext)
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])


  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme('dark')
    }
    else {
      setTheme('light')
    }
  }
  const handleLogOut = () => {
    logOut()
  }

  const Navbar = <>
    <NavLink className={({isActive})=>isActive?'font-bold text-success':'font-semibold '} to={'/'}> <li><a> Home</a></li></NavLink>
    <NavLink className={({isActive})=>isActive?'font-bold text-success':'font-semibold'} to={'/availableFoods'}> <li><a> Available Foods</a></li></NavLink>
    <NavLink className={({isActive})=>isActive?'font-bold text-success':'font-semibold'} to={'/addFood'}> <li><a> Add Food</a></li></NavLink>
    <NavLink className={({isActive})=>isActive?'font-bold text-success':'font-semibold'} to={'/manageFoods'}> <li><a> Manage My Foods </a></li></NavLink>
    <NavLink className={({isActive})=>isActive?'font-bold text-success':'font-semibold'} to={'/myFoodRequest'}> <li><a> My Food Request</a></li></NavLink>



  </>
  return (
    <div className="navbar mb-32 lg:mb-0 mt-11 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {Navbar}
          </ul>
        </div>
        <NavLink to={'/'}>  <a className="btn btn-ghost text-2xl  text-green-500"> <MdFoodBank className="text-2xl"></MdFoodBank>  Food <span className="text-yellow-600">Sharing</span> </a></NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {Navbar}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <label className="cursor-pointer grid place-items-center">
          <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
          <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
          <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>

        {
          user ? (
            <>
              <div className="tooltip" data-tip={user?.displayName || 'not fount'}> <span> <img className="rounded-full size-10 mr-3 border-2 border-red-600" src={user?.photoURL || "https://i.ibb.co/YX7cm4v/bd886d7ccc6f8dd8db17e841233c9656.jpg"} alt="" /> </span></div>
              <a href="" onClick={handleLogOut} className="btn"> <LuLogOut></LuLogOut> LogOUt</a>
            </>
          ) : (
            <Link to={'/login'}>
              <a href="" className="btn"> <LuLogOut></LuLogOut> Log In </a>
            </Link>
          )
        }
        {/* <NavLink to={'/login'}><button className="btn btn-success   btn-outline  rounded-xl"> Login </button></NavLink> */}
      </div>
    </div>
  );
};

export default Navbar;