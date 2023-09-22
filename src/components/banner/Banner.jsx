import { useContext } from "react";
import { TextContext } from "../../contexts/TextContext";

import TextLogo from "../textLogo/TextLogo";
import BuyButton from "../buyButton/BuyButton";

import bannerImg from "@/assets/images/banner.png";
import "./banner-styles.scss";

const Banner = () => {
  // Get text content from context
  const {
    text: { banner: text },
  } = useContext(TextContext);
  return (
    <section className="banner row g-0 p-3   justify-content-center align-items-center align-items-lg-start flex-column-reverse flex-md-row ">
      <div className="col-8 col-md-5  ">
        <img src={bannerImg} alt="Zestaw preparatów" className="img-fluid" />
      </div>
      <div className="col-12 col-md-7 px-lg-5 pt-lg-5 d-flex flex-column align-items-start">
        <TextLogo className="big pt-xl-5 mx-auto mx-md-0" />
        <div className="description text-md-start">
          {/* Split header text and add line breaks after 'Preparat' */}
          {text.header.split("\n").map((line, index) => (
            <h2 key={index}>{line}</h2>
          ))}
          <p className="">{text.subheader}</p>
        </div>
        <BuyButton className="mx-auto mx-md-0" />
      </div>
    </section>
  );
};

export default Banner;
