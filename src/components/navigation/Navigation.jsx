import { useContext } from "react";
import { TextContext } from "../../contexts/TextContext";

import TextLogo from "../textLogo/TextLogo";

import "./navigation-styles.scss";

const Navigation = () => {
  // Context for getting navigation text
  const {
    text: { navigation: navlinks },
  } = useContext(TextContext);

  return (
    <div className="navigation py-4 d-flex align-items-center ">
      <a className="navbar-brand" href="#">
        {/* Component for displaying a logo */}
        <TextLogo />
      </a>
      <nav className="navbar navbar-expand-lg ms-auto mx-lg-auto">
        <div className="container-fluid p-0 g-0 ">
          <button
            className="navbar-toggler me-3 "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse mt-5 mt-lg-0 me-3 me-lg-0"
            id="navbarNav"
          >
            <ul className="navbar-nav d-flex">
              {/* Mapping over navigation links */}
              {navlinks.map((navlink, i) => (
                <li key={navlink + i} className="nav-item rounded-pill ">
                  <a className="nav-link p-0" href="#">
                    {navlink}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
