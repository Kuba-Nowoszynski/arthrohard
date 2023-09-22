import { useContext, useEffect, useState, useRef } from "react";
import { TextContext } from "../../contexts/TextContext";
import TextLogo from "../textLogo/TextLogo";
import "./navigation-styles.scss";

const Navigation = () => {
  // Import navigation text from context
  const {
    text: { navigation: navlinks },
  } = useContext(TextContext);

  // State for currently active navigation section
  const [activeSection, setActiveSection] = useState(null);

  // State for storing the heights of sections being navigated to
  const [sectionHeights, setSectionHeights] = useState([]);

  // Ref to the navigation container for section height calculation
  const navContainerRef = useRef(null);

  // Handle scroll events to set active navigation section
  const handleScroll = () => {
    const currentScroll = window.scrollY;
    let newActiveSection = null;
    let cumulativeHeight = 0;

    for (let i = 0; i < sectionHeights.length; i++) {
      cumulativeHeight += sectionHeights[i];
      if (currentScroll < cumulativeHeight) {
        newActiveSection = i;
        break;
      }
    }

    // Special case: No active section at top of the page
    if (currentScroll === 0) {
      newActiveSection = null;
    }

    // Only set the state if it has changed
    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  };

  // Define a function to calculate section heights
  const calculateSectionHeights = () => {
    // Create an array to store section heights
    const sectionHeightsArray = navlinks.map((_, index) => {
      // Select the section with an ID matching the index
      const section = document.querySelector(`#section${index + 1}`);
      // Return the height of the section if it exists, or 0 if not found
      return section ? section.getBoundingClientRect().height : 0;
    });
    // Update the state variable 'SectionHeights' with the calculated heights of if it the state has changed
    if (
      JSON.stringify(sectionHeightsArray) !== JSON.stringify(sectionHeights)
    ) {
      setSectionHeights(sectionHeightsArray);
    }
  };

  useEffect(() => {
    // Calculate heights of all sections and store them

    // Attach scroll listener and calculate initial section heights
    window.addEventListener("scroll", handleScroll);
    calculateSectionHeights();
    handleScroll();

    // Cleanup: Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navlinks, sectionHeights]);

  // Scroll to the section when navigation link is clicked
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      const offset = 150;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionTop - offset, behavior: "smooth" });
    }
  };

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
                      activeSection === index ? "active" : ""
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
