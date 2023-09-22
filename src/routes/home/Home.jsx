import Navigation from "../../components/navigation/Navigation";
import Banner from "../../components/banner/Banner";
import Features from "../../components/features/Features";
import Ingredients from "../../components/ingredients/Ingredients";

import "./home-styles.scss";

const Home = () => {
  return (
    <div className="home container-fluid p-0 g-0">
      <Navigation />
      <div className="content d-flex flex-column justify-content-center mx-auto">
        <Banner />
        <Features />
        <Ingredients />
      </div>
    </div>
  );
};

export default Home;
