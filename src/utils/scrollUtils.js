/**
 * Smoothly scrolls to an element by ID.
 * @param {string} elementId - The ID of the element to scroll to.
 */
export const scrollToSection = (elementId) => {
  document.getElementById(elementId)?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};
