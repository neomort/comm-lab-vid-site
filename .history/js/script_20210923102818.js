let makeLineAppear = document.getElementById("findLine");

let animationWatch = document.getElementById("animationWatch");

let displaySetting = animationWatch.style.display;

makeLineAppear.addEventListener('click', () => {
  if(displaySetting == 'none'){
    animationWatch.style.display  = 'inline';
  }else if (displaySetting == 'inline'){
    animationWatch.style.display = 'none';
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