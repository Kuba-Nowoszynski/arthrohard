/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TextContext } from "../../contexts/TextContext";

import "./buy-button-styles.scss";

const BuyButton = ({ className }) => {
  // Get text content from context
  const {
    text: { button: text },
  } = useContext(TextContext);

  const handleClick = (e) => e.preventDefault();
  return (
    <button className={`buy-button ${className}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default BuyButton;
