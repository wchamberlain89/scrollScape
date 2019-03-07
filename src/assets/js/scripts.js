$(function() {

  var $test = $(".lever");
  var $lever = $(".lever-test");

  var controller = new ScrollMagic.Controller();
  var tlRightSwipe = new TimelineMax()
    .fromTo("#gray-container", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
    .to(".television", 3, {"backgroundPositionY": "-750px"})
    .to(".stone-tv", 2, {left: '-30%'})
    .fromTo("#yellow-container", 2, {x: "100%"}, {x:"0%", ease: Linear.easeNone, delay: "2"})
    .fromTo(".square-dude", 12, {left: '5%'}, {left:'80%', ease: Linear.easeNone}, '-=8')
    .to(".grass-background", 12, {backgroundPositionX : "-30%"}, 0)
    .to(".grass-foreground", 12, {backgroundPositionX : "-80%"}, 0)
    .to(".trees-background", 12, {backgroundPositionX : "-2%"}, 0)
    .to(".trees-foreground", 12, {backgroundPositionX : "-10%"}, 0)

  var scene = new ScrollMagic.Scene({
    triggerElement: "#container",
    triggerHook: "onLeave",
    duration: '600%'
  })
  .setPin('#container')
  .setTween(tlRightSwipe)
  .addIndicators()
  .addTo(controller);

  //lever puzzle TweenMax



  $test.on("click", function(){
    $(".lever").toggleClass('active');
    var tween = TweenMax.to(".television", 1, {
      backgroundPositionX: '-750px'
    });
  });
});
