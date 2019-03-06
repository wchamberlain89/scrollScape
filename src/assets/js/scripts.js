$(function() {
  var controller = new ScrollMagic.Controller();
  var tlRightSwipe = new TimelineMax()
    .fromTo("#gray-container", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone, delay: "2"})
    .fromTo(".square-dude", 1, {x: '0'}, {x:'1000'})
    .fromTo("#yellow-container", 1, {x: "100%"}, {x:"0%", ease: Linear.easeNone, delay: "4"});

  var scene = new ScrollMagic.Scene({
    triggerElement: "#container",
    triggerHook: "onLeave",
    duration: '600%'
  })
  .setPin('#container')
  .setTween(tlRightSwipe)
  .addIndicators()
  .addTo(controller);


});
