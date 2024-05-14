import AskQuestion from "./AskQuestion";
import Banner from "./Banner";
import FeaturedFoods from "./FeaturedFoods";
import Price from "./Price";


const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <FeaturedFoods></FeaturedFoods>
               <Price></Price>
               <AskQuestion></AskQuestion>
          </div>
     );
};

export default Home;