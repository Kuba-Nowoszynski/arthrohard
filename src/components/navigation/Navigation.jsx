import { useContext } from "react";
import { TextContext } from "../../contexts/TextContext";

import "./navigation-styles.scss";

const Navigation = () => {
  const {
    text: { navigation: text },
  } = useContext(TextContext);

  return (
    <div className="navigation d-flex justify-content-center gap-5">
      {text.map((navlink, i) => (
        <span key={navlink + i}>{navlink}</span>
      ))}
    </div>
  );
};

export default Navigation;
