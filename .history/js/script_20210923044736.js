let makeLineAppear = document.getElementById("findLine");

let animationWatch = document.getElementById("animationWatch");

makeLineAppear.addEventListener('click', () => {
  if(animationWatch == false){
    animationWatch = true;
  }else{
    animationWatch = false;
  }
})


let makeButtonstAppear = () => {
  document.getElementById("big-button").style.opacity = 100%;
}

let makeButtonsDisappear = () => {
  setTimeout(() => {
    document.getElementById("big-button").style.opacity = 0%;
  }, 500)
}


let greetingElement = document.getElementById("greeting");

greetingElement.addEventListener('mouseenter', makeButtonsAppear)
greetingElement.addEventListener('mouseleave', makeButtonsDisappear)