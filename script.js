let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0; // current is image we are on

// each time change a slide we want to clear out images
// set them all to display 'none'
function reset() {
  // Clear all images
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none"; // taking display and setting to none
  }
}

// Initialiser
function startSlide() {
  reset();
  // querySelectorAll basically stores item in array
  // so can basically access them using bracket notation []
  sliderImages[0].style.display = "block"; // set to block display to see image
}

// show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  // make sure we are on first image
  if (current === 0) {
    // Here the arrow slides to last item in array
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  // if we are on last image go back to first
  if (current === sliderImages.length - 1) {
    current--;
  }
  slideRight();
});

// show
startSlide();
