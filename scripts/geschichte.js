




// Image Slider Navigation

var htmlElement = document.querySelector("html");
var imageNumber = 1;

function nextSlide() {
  if (imageNumber === 3) {
    imageNumber = 1;
  } else {
    imageNumber += 1;
  }
  htmlElement.style.backgroundImage = `url(./images/slide${imageNumber}.jpg)`;
};

function backSlide() {
  if (imageNumber === 1) {
    imageNumber = 3;
  } else {
    imageNumber -= 1;
  }
  htmlElement.style.backgroundImage = `url(./images/slide${imageNumber}.jpg)`;
};

function showBackSlideText() {
  document.querySelector(".backSlideText").style.visibility = "visible";
};
function hideBackSlideText() {
  document.querySelector(".backSlideText").style.visibility = "hidden";
};

function showNextSlideText() {
  document.querySelector(".nextSlideText").style.visibility = "visible";
};
function hideNextSlideText() {
  document.querySelector(".nextSlideText").style.visibility = "hidden";
};


document.addEventListener("keydown", function(event) {
  let key = event.key;
  switch (key) {
    case "ArrowRight":
      backSlide();
      break;
    case "ArrowLeft":
      nextSlide();
      break;
  }
})
