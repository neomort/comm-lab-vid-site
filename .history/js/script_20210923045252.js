let makeLineAppear = document.getElementById("findLine");

let animationWatch = document.getElementById("animationWatch");

var displaySetting = animationWatch.style.display;

makeLineAppear.addEventListener('click', () => {
  if(displaySetting == none){
    animationWatch.style.display  = block;
  }else{
    animationWatch = none;
  }
})


let makeButtonstAppear = () => {
  document.getElementById("big-button").style.opacity = 100;
}

let makeButtonsDisappear = () => {
  setTimeout(() => {
    document.getElementById("big-button").style.opacity = 0;
  }, 500)
}


let greetingElement = document.getElementById("greeting");

// greetingElement.addEventListener('mouseenter', makeButtonsAppear)
// greetingElement.addEventListener('mouseleave', makeButtonsDisappear)