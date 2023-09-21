import loader from "../../assets/other/loader.gif";

import "./loader-styles.scss";

const Loader = () => {
  return (
    <div className="loading-container d-flex flex-column justify-content-center align-items-center">
      <img src={loader} alt="Loader" className="loading-logo" />
    </div>
  );
};

export default Loader;
