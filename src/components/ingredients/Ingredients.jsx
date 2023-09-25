import { useContext } from "react";
import { TextContext } from "../../contexts/TextContext";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

import BuyButton from "../buyButton/BuyButton";

import bottleImg from "@/assets/images/lek.png";
import dogImg from "@/assets/images/buldog.png";
import "./ingredients-styles.scss";

const Ingredients = () => {
  // Get text content from context
  const {
    text: { ingredients: text },
  } = useContext(TextContext);
  return (
    <section className="ingredients" id="section2">
      <motion.div
        className="content mx-auto"
        initial={{ opacity: 0, x: -100 }} // Initial state (hidden and shifted to the left)
        whileInView={{ opacity: 1, x: 0 }} // Animation state (fully visible and in its original position)
        transition={{ duration: 0.3 }}
      >
        {" "}
        <h2 className="py-5 mx-auto">{text.header}</h2>
        <h4 className="my-5">{text.subheader}</h4>
        <div className="row g-0 p-0 mb-3 d-flex justify-content-center  gap-3 ">
          <div className="col-11 col-lg-4 d-flex flex-column justify-content-between">
            {text.ingredientsList
              .slice(0, 3)
              .map(({ title, amount, description }, index) => (
                <article className="mt-auto" key={amount + index}>
                  <div className="mx-auto rounded-circle"></div>
                  <h4>{title}</h4>
                  <h6>{amount}</h6>
                  <p>{description}</p>
                </article>
              ))}
          </div>
          <div className="img-wrapper  col-11 col-lg-3 d-flex flex-column justify-content-center align-items-center ">
            <img
              className="img-fluid mb-lg-4"
              src={bottleImg}
              alt="Zdjęcie preparatu"
            />
            <BuyButton className="my-3 my-lg-5 red" />
          </div>
          <div className="col-11 col-lg-4 d-flex flex-column justify-content-between">
            {text.ingredientsList
              .slice(3)
              .map(({ title, amount, description }, index) => (
                <article className="mt-auto" key={amount + index}>
                  <div className="mx-auto rounded-circle"></div>
                  <h4 className="">{title}</h4>
                  <h6>{amount}</h6>
                  <p>{description}</p>
                </article>
              ))}
          </div>
        </div>
        <div className="parallax-container img-fluid px-5 mx-auto img-fluid px-5 d-flex flex-column d-none d-lg-block">
          <Parallax
            blur={{ min: -10, max: 15 }}
            bgImage={dogImg}
            bgImageAlt="Buldog"
            className="parallax mx-auto  "
            bgClassName="px-5"
            strength={-20}
          ></Parallax>
        </div>
      </motion.div>
    </section>
  );
};

export default Ingredients;
