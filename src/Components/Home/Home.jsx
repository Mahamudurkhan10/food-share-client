import { NavLink } from "react-router-dom";
import AskQuestion from "./AskQuestion";
import Banner from "./Banner";
import FeaturedFoods from "./FeaturedFoods";
import Price from "./Price";


const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <FeaturedFoods></FeaturedFoods>
                <div className="w-1/2 text-center  mx-auto">
                  <NavLink>   <button className="btn btn-success text-yellow-300 font-bold"> Show ALL Foods </button></NavLink>
                </div>
               <Price></Price>
               <AskQuestion></AskQuestion>
          </div>
     );
};

export default Home;