import { useContext } from "react";
import { TextContext } from "../../contexts/TextContext";

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
    <section className="ingredients ">
      <div className="content mx-auto">
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
        <img className="img-fluid px-5 mx-auto" src={dogImg} alt="Buldog" />
      </div>
    </section>
  );
};

export default Ingredients;
