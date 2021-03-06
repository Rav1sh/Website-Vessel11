// Hero Section
gsap.from('header', {opacity: 0, duration: 1, delay:1.8, y: 30})
gsap.from('.container img', {opacity: 0, duration: 1, delay:1.3, y: 30})
gsap.from('.hero-cta', {opacity: 0, duration: 1, delay:1, y: 30})
gsap.from('.left-col p', {opacity: 0, duration: 1, delay:0.7, y: 30})
gsap.from('.left-col h1', {opacity: 0, duration: 1, delay:0.5, y: 30})

// Works section
gsap.from('.game-section', {opacity: 0, duration: 1, delay:0.7, y: 30})
gsap.from('.yt-template', {opacity: 0, duration: 1, delay:0.7, y: 30})
gsap.from('.card-container', {opacity: 0, duration: 1, delay:1.7, y: 30})

// Scroll-To-Top Button
const backToTopButton = document.querySelector("#back-to-top-btn");

// When scroll is being used, scrollFunction will be executed
window.addEventListener("scroll", scrollFunction);
backToTopButton.addEventListener("click", smoothScrollBackToTop);

function scrollFunction() {
  // Checks when scrolling the vertial(Y) is above 300 of pixels
  if (window.pageYOffset > 250) {
    // If the Scroll-To-Top button doesn't have the classlist, add the new classes
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  // If the Y is 250 or below it will check if it contains the btnEntrance classlist
  else if (backToTopButton.classList.contains("btnEntrance")){ 
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");

      // This gives a delay to the display none, so the exit animation can take place
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }


function smoothScrollBackToTop() {
  // Beginning of the document
  const targetPosition = 0;
  // Our current position, the number of pixels the document is currently scrolled to
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  // Duration of the animation
  const duration = 750;
  let start;
  
  // Tells the browser that you want to perform an animation
  window.requestAnimationFrame(step);

    // Takes the timestamp as the parameter
    function step(timestamp) {
      // Only execute once at the first repitition. Start will be the starting point of the animation
      if (start === undefined)
        start = timestamp;
      // Progress will be the elapsed time of the animation. 
      // It will be the different between the timestamp and the starting point.
      const progress = timestamp - start;
    // This will be the animation
    // First cordinate is X, that will always be 0
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    // This checks if it needs to continue when it's caller than duration, else stop the animation
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

// www.gizma.com/easing/

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};