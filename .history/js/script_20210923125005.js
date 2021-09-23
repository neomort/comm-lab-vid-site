



function toggleAnimation(){

  var animation = document.getElementById("animation");
  var displaySetting = animation.style.display;
  var video = document.getElementById("video");
  var space = document.getElementById("space");

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

