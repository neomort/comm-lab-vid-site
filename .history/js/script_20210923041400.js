let makeLineAppear = () => {
  document.getElementById("findLine");
}

makeLineAppear.addEventListener('click', () => {
  if(orangeParagraph.style.color == "orange"){
    orangeParagraph.style.color = "black";
  }else{
    orangeParagraph.style.color = "orange";
  }
})

let makeButtonstAppear = () => {
  document.getElementById("big-button").innerText = "I am a ghost!";
}

let makeButtonsDisappear = () => {
  setTimeout(() => {
    document.getElementById("big-button").innerText = "";
  }, 500)
}


let greetingElement = document.getElementById("greeting-text");

greetingElement.addEventListener('mouseenter', makeButtonsAppear)
greetingElement.addEventListener('mouseleave', makeButtonsDisappear)