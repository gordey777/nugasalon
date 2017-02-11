// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
if (typeof jQuery === 'undefined') {
  console.warn('jQuery hasn\'t loaded');
} else {
  console.log('jQuery has loaded');
}
// Place any jQuery/helper plugins in here.
jQuery(document).ready(function() {

  //MAIN SLIDER
  jQuery("#owl-slider-main").owlCarousel({
    items: 1,
    loop: true,
    margin: 20,
    smartSpeed: 400,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: false,
    center: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
  });


  // MOBILE MENU


  if ($(window).width() <= '992') {

    $("#menu__mob").mmenu({
      clone: true,
      "extensions": [
        "pagedim-black"
      ],
      "offCanvas": {
        "position": "right"
      },
      navbar: {
        title: 'Menu'
      },
    });
  }
});
