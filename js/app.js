// Global Variables
let toTopBtn = document.querySelector("#scroll-to-top");

// Functions
/**
 * This function defines whether or not to display the scroll to top button
 */
function scrollToTopButton() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    toTopBtn.style =
      "display: flex; justify-content: center; align-items: center;";
  } else {
    toTopBtn.style.display = "none";
  }
}

// Events
// Display scroll up to top button
document.addEventListener("scroll", function () {
  scrollToTopButton();
});

/**
 * // Add event listener to the scroll to top button
 * When clicking on it, the page is scrolled to the top.
 */
toTopBtn.addEventListener("click", function () {
  // Scroll to the top of the page
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
