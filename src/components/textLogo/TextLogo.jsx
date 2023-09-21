/* eslint-disable react/prop-types */
import "./text-logo-styles.scss";

const TextLogo = ({ className }) => {
  return (
    <div className={`text-logo d-flex justify-content-center ${className}`}>
      <span>ARTHRO</span>
      <span className="red">HARD</span>
    </div>
  );
};

export default TextLogo;
