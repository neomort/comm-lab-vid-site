



function toggleAnimation(){

  var animation = document.getElementById("animation");
  var displaySetting = animation.style.display;
  var video = document.getElementById("video");
  var space = document.getElementById("space");

  if(displaySetting == 'inline'){
    animation.style.display  = 'none';
    video.style.display  = 'none';
    space.style.display  = 'none';
    console.log("animation doesn't show");
  }else {
    animation.style.display = 'inline';
    video.style.display = 'block';
    space.style.display = 'block';
    setTimeout(function() {
      video.play();
    }, 5000);
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

