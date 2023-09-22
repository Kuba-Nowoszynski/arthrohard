import { useContext } from "react";
import { TextContext } from "../../contexts/TextContext";

import img1 from "@/assets/images/czarci-pazur.png";
import img2 from "@/assets/images/strzykawka.png";
import dogImg1 from "@/assets/images/pies1.png";
import dogImg2 from "@/assets/images/pies2.png";
import "./features-styles.scss";

const Features = () => {
  // Get text content from context
  const {
    text: { features: text },
  } = useContext(TextContext);
  return (
    <section className="features mb-5">
      <h2 className="mx-auto">{text.header}</h2>
      <div className="features-list d-flex flex-column flex-md-row justify-content-between ">
        {text.descriptionFeatures.map(({ title, description }, index) => (
          <article
            key={title + index}
            className={`${
              index > 0 ? "order-last" : ""
            }  mx-auto mb-3  d-flex flex-column `}
          >
            {title.split("\n").map((line, index) => (
              <h4 key={index}>{line}</h4>
            ))}
            <p className="">{description}</p>
            <div className="image-wrapper  mt-auto mx-auto   ">
              <img
                className=" "
                alt={index === 0 ? "Czarci pazur" : "Strzykawka"}
                src={index === 0 ? img1 : img2}
              />
            </div>
          </article>
        ))}
        <article className=" mx-auto mb-3  d-flex flex-column ">
          {text.stepFeature.title.split("\n").map((line, index) => (
            <h4 key={index}>{line}</h4>
          ))}
          <ul className="steps">
            {text.stepFeature.steps.map((step, index) => (
              <li
                className="d-flex ms-2 mx-md-0 align-items-center justify-content-start"
                key={step + index}
              >
                <span className="number rounded-circle me-2 d-flex flex-column justify-content-center">
                  {index + 1}
                </span>
                <span className="">{step}</span>
              </li>
            ))}
          </ul>
          <div className="double-image-wrapper mt-auto mx-auto d-flex justify-content-ce gap-3 ">
            <img
              className=" "
              src={dogImg1}
              alt={"Piesek z główką na kolanie"}
            />
            <img className="" src={dogImg2} alt={"Jedzący piesek"} />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Features;
