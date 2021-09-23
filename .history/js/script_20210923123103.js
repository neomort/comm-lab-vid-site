let makeLineAppear = document.getElementById("findLine");

let animationWatch = document.getElementById("animationWatch");



function toggleAnimation(){

  var animation = document.getElementById("animation");
  var displaySetting = animation.style.display;
  

  if(displaySetting == 'inline'){
    animation.style.display  = 'none';
    console.log("animation doesn't show");
  }else {
    animation.style.display = 'inline';
    console.log("animation shows");
  }
}

function startAnimation(){
  let element = document.getElementById("Connectline1_lottie_container");
lottie.loadAnimation({
  container: element, // the dom element that will contain the animation
  renderer: 'svg',
  loop: false,
  autoplay: true,
  animationData: Connectline1AnimationData // the path to the animation json
});
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
