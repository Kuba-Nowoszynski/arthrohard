import { useContext, useEffect, useState } from "react";
import { TextContext } from "../../contexts/TextContext";
import TextLogo from "../textLogo/TextLogo";
import "./navigation-styles.scss";

import { handleScroll, scrollToSection } from "../../helpers/scrollHelpers";
const Navigation = () => {
  // Import navigation text from context
  const {
    text: { navigation: navlinks },
  } = useContext(TextContext);
  // setState for currently active navigation section and tate for currently active navigation section
  const [activeNavLink, setActiveNavLink] = useState("");

  // Use the useEffect hook to add and remove a scroll event listener
  useEffect(() => {
    // Add a scroll event listener when the component is mounted
    window.addEventListener("scroll", () => handleScroll(setActiveNavLink));

    // Return a cleanup function to remove the scroll event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", () =>
        handleScroll(setActiveNavLink)
      );
    };
  }, [setActiveNavLink]);

  return (
    <div className="navigation">
      {/* Navigation bar starts here */}
      <div className="navigation-content mx-auto d-flex align-items-center">
        <a className="navbar-brand" href="#">
          {/* TextLogo is a separate component for displaying the brand logo */}
          <TextLogo />
        </a>
        <nav className="navbar navbar-expand-lg ms-auto mx-lg-auto">
          <div className="container-fluid p-0 g-0">
            {/* Button for toggling navigation menu */}
            <button
              className="navbar-toggler me-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Navigation links */}
            <div
              className="collapse navbar-collapse mt-5 mt-lg-0 me-3 me-lg-0"
              id="navbarNav"
            >
              <ul className="navbar-nav d-flex">
                {navlinks.map((navlink, index) => (
                  <li
                    key={navlink + index}
                    className={`nav-item rounded-pill ${
                      activeNavLink === `section${index + 1}` ? "active" : ""
                    }`}
                  >
                    <a
                      className="nav-link p-0"
                      onClick={() => scrollToSection(`#section${index + 1}`)}
                    >
                      {navlink}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
