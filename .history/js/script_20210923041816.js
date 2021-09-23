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
  document.getElementById("big-button");
}

let makeButtonsDisappear = () => {
  setTimeout(() => {
    document.getElementById("big-button");
  }, 500)
}


let greetingElement = document.getElementById("greeting");

greetingElement.addEventListener('mouseenter', makeButtonsAppear)
greetingElement.addEventListener('mouseleave', makeButtonsDisappear)