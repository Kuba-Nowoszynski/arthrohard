import Navigation from "../../components/navigation/Navigation";
import Banner from "../../components/banner/Banner";
import Features from "../../components/features/Features";
import Ingredients from "../../components/ingredients/Ingredients";
import Products from "../../components/products/Products";

import "./home-styles.scss";

const Home = () => {
  return (
    <div
      className="home container-fluid p-0 g-0"
      data-bs-spy="scroll"
      // data-bs-target="#navbarNav"
    >
      <Navigation />
      <div className=" mx-auto">
        <div className="content mx-auto">
          <Banner />
          <Features />
        </div>
        <Ingredients />
        <div className="content mx-auto">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;
