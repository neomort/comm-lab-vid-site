let makeLineAppear = () => {
  document.getElementById("findLine");
}

let animationWatch = document.getElementById("animationWatch");

makeLineAppear.addEventListener('click', () => {
  if(animationWatch == false){
    orangeParagraph.style.color = true;
  }else{
    orangeParagraph.style.color = false;
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