const aboutButton = document.getElementById("about");
const contentSpot = document.getElementById("contentSpot");
console.log(contentSpot);

let aboutToggle = false;

about.addEventListener("click",   (event) => {
  console.log("about button!")
  // highlight the mouseenter target
  aboutToggle = !aboutToggle;
  if (aboutToggle){
    contentSpot.style.color="white";
    contentSpot.innerText= "The Retiina web app uses python, OpenCV and the Retina.js library to lift dark areas of a photo. Retina.js is a new processing algorithm that is able to do this better than simply increasing the exposure or the usual 'lifting the shadows'.";
  } else {
    contentSpot.innerHTML= "<img class = 'blurredImage' src='/static/splash/candle.jpeg' />";
  }

},
false,);
