



function toggleAnimation(){

  var animation = document.getElementById("animation");
  var displaySetting = animation.style.display;
  var video = document.getElementById("video");
  var space = document.getElementById("space");
  var spaceHeight = document.getElementById("video").style.width = "100%";
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
    // setTimeout(function() {
    //   animation.setSpeed(-1);
    // }, 10000);
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

element.addEventListener('onComplete', anim.setSpeed(-1));
}



