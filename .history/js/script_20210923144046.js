



function toggleAnimation(){

  var animation = document.getElementById("animation");
  var displaySetting = animation.style.display;
  var video = document.getElementById("video");
  var space = document.getElementById("space");
  var spaceHeight = '50em';
  console.log(spaceHeight);

  if(displaySetting == 'inline'){
    animation.style.display  = 'none';
    video.style.display  = 'none';
    space.style.height = '0';
    console.log("animation doesn't show");
  }else {
    
    animation.style.display = 'inline';
    video.style.display = 'inline-block';
    space.style.height = `${spaceHeight}`;
    setTimeout(function() {
      video.play();
    }, 5000);
    
    console.log("animation shows");
  }
}

function startAnimation(){
  let element = document.getElementById("Connectline1_lottie_container");
  let animationDirection = 1;

lottie.loadAnimation({
  container: element, // the dom element that will contain the animation
  renderer: 'svg',
  loop: false,
  autoplay: true,
  direction: `${animationDirection}`,
  animationData: Connectline1AnimationData // the path to the animation json
});

}









