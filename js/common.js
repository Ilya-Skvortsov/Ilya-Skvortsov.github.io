$(document).ready(function () {
   $(".owl-carousel").owlCarousel({
      items: 1,
      dots: true,
   });
})


$(window).scroll(function () {
   if ($(this).scrollTop() > $('.trading h1').offset().top - $(window).height()) {
      $('.trading h1').addClass('animated');
   }
});

$(window).scroll(function () {
   if ($(this).scrollTop() > $('.trading p').offset().top - $(window).height()) {
      $('.trading p').addClass('animated');
   }
});

$(window).scroll(function () {
   if ($(this).scrollTop() > $('.trading h2').offset().top - $(window).height()) {
      $('.trading h2').addClass('animated');
   }
});

$(window).scroll(function () {
   if ($(this).scrollTop() > $('.benefits h1').offset().top - $(window).height()) {
      $('.benefits h1').addClass('animated');
   }
});
$(window).scroll(function () {
   if ($(this).scrollTop() > $('.benefits p').offset().top - $(window).height()) {
      $('.benefits p').addClass('bottom_float');
   }
});

$(window).scroll(function () {
   if ($(this).scrollTop() > $('.start h1').offset().top - $(window).height()) {
      $('.start h1').addClass('animated');
   }
});

$(window).scroll(function () {
   if ($(this).scrollTop() > $('.start p').offset().top - $(window).height()) {
      $('.start p').addClass('animated');
   }
});

$(window).scroll(function () {
   if ($(this).scrollTop() > $('.start h2').offset().top - $(window).height()) {
      $('.start h2').addClass('animated');
   }
});

$('.button').click(function () {
   $('.button').not(this).removeClass('active');
   $(this).addClass('active');
});
