// Error Component: Renders a simple 404 error message.
import { NavLink } from "react-router-dom";
import "./error-styles.scss";

const Error = () => {
  return (
    <div className="container-fluid bg-body-secondary d-flex flex-column justify-content-center">
      <h1>ERROR 404</h1>
      <h2>
        Navigate to{" "}
        <NavLink to="/">
          <span className="text-secondary">home page</span>
        </NavLink>
      </h2>
    </div>
  );
};

export default Error;
