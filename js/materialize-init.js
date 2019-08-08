$(document).ready(function () {
  // Init Scrollspy
  $('.scrollspy').scrollSpy()
  // Init slider
  $('.slider').slider({
    indicators: false,
    interval: 5000
  })
  // Init Sidenav
  $('.sidenav').sidenav({
    edge: 'right',
    preventScrolling: false
  });
  // Init Parallax
  $('.parallax').parallax()
  // Init carousel slider
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  })
  // Int floating action button
  $('.fixed-action-btn').floatingActionButton({
    toolbarEnabled: true
  })
});