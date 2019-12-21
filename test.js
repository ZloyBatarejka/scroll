const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTIon
const section = document.querySelector("section");
const end = section.querySelector("h1");
//Scenes
const controller = new ScrollMagic.Controller();
const controller2 = new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
  duration: 30000,
  triggerElemt: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

let scene2 = new ScrollMagic.Scene({
  duration: 5000,
  triggerElemt: section,
  triggerHook: 0
})
  .setPin(section)
  .addTo(controller2);
//Video anima

let accelAmount = 0.2;
let scrollpos = 0;
let delay = 0;
scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});
setInterval(() => {
  delay += (scrollpos - delay) * accelAmount;
  video.currentTime = delay;
}, 24.3);

scene2.on("update", e => {
  end.style.left = 500 + e.scrollPos / 130 + "px";
  console.log(end.style.opacity);
});
