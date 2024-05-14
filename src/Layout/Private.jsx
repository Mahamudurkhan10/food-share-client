import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Auth";
import { Navigate, useLocation } from "react-router-dom";


const Private = ({children}) => {
     const { user,  loading} = useContext(AuthContext)
     const location = useLocation()
     if (loading) {
          return <div className="text-center">
               <span className="loading loading-spinner text-primary"></span>
               <span className="loading loading-spinner text-secondary"></span>
               <span className="loading loading-spinner text-accent"></span>
               <span className="loading loading-spinner text-neutral"></span>
               <span className="loading loading-spinner text-info"></span>
               <span className="loading loading-spinner text-success"></span>
               <span className="loading loading-spinner text-warning"></span>
               <span className="loading loading-spinner text-error"></span>

          </div>
     }
     if (user) {
          return children;
     }
     return <Navigate state={location.pathname} to={'/login'}></Navigate>

};

export default Private;