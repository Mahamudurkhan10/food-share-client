import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/Auth";


const MyFoodRequest = () => {
     const {user}=useContext(AuthContext)
     const [ foods, setFoods]=useState([])
     useEffect(() => {
          fetch(`http://localhost:5000/myFoods/${user?.email}`)
               .then(res => res.json())
               .then(data => {
                    setFoods(data)

               })
     }, [user])
     return (
          <div>
               
          </div>
     );
};

export default MyFoodRequest;