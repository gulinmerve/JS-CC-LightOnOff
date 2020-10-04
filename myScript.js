const buttonElement = document.querySelector("#turnOnOff");
const imgElement = document.querySelector("#bulb");


// buttonElement.addEventListener('click', turnOnOff);

function turnOnOff() {
    
  if (imgElement.src.includes("ONbulb")) {

    imgElement.src = "./images/OFFbulb.png";
    document.querySelector("body").bgColor = "whitesmoke";
    buttonElement.innerHTML = "Turn On";

  } else {

    imgElement.src = "./images/ONbulb.png";
    document.querySelector("body").bgColor = "black";
    buttonElement.innerHTML = "Turn Off";

  }
}


