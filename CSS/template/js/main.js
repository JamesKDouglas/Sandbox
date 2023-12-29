const aboutButton = document.getElementById("about");
const contentSpot = document.getElementById("contentSpot");
console.log(contentSpot);

let aboutToggle = false;

about.addEventListener("click",   (event) => {
  console.log("about button!")
  // highlight the mouseenter target
  aboutToggle = !aboutToggle;
  if (aboutToggle){
    contentSpot.innerText= "purple";
  } else {
    contentSpot.innerText= "";
  }

},
false,);
