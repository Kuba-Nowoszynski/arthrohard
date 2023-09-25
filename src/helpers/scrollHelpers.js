// Function to handle scrolling and update active tab
export const handleScroll = (setActiveNavLink) => {
  // Get references to the HTML sections
  const featuresSection = document.getElementById("section1");
  const ingredientsSection = document.getElementById("section2");
  const productsSection = document.getElementById("section3");

  // Get the current vertical scroll position
  const scrollY = window.scrollY;

  // Check if the scroll position is in the Products section
  if (scrollY > productsSection.offsetTop - 200) {
    setActiveNavLink("section3"); // Set the active link to Products section
  } else if (scrollY > ingredientsSection.offsetTop - 200) {
    // Check if the scroll position is in the Ingredients section
    setActiveNavLink("section2"); // Set the active link to Ingredients section
  } else if (scrollY > featuresSection.offsetTop - 200) {
    // Check if the scroll position is above the Features section
    setActiveNavLink("section1"); // Set the active link to Features section
  } else {
    setActiveNavLink(""); // Scroll position is above all sections, no active link
  }
};

// Scroll to the section when a navigation link is clicked
export const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId);
  if (section) {
    const offset = 150; // Offset for fine-tuning the scroll position
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    // Scroll smoothly to the selected section with a specified offset
    window.scrollTo({ top: sectionTop - offset, behavior: "smooth" });
  }
};
