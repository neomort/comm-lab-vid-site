let makeLineAppear = document.getElementById("findLine");

let animationWatch = document.getElementById("animationWatch");



function toggleAnimation(){

  var animation = document.getElementById("animation");
  var displaySetting = animation.style.display;

  animation.style.display  = 'none';
  
  if(displaySetting == 'inline'){
    animation.style.display  = 'none';
    console.log("animation doesn't show");
  }else {
    animation.style.display = 'inline';
    console.log("animation shows");
  }
}

// makeLineAppear.addEventListener('click', () => {
//   console.log("you clicked me"); // test if event listener is called
//   if(displaySetting == 'none'){
//     animationWatch.style.display  = 'inline';
//     console.log("animation shows");
//   }else if (displaySetting == 'inline'){
//     animationWatch.style.display = 'none';
//     console.log("animation doesn't show");
//   }
// })


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