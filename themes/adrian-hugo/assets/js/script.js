(function ($) {
  'use strict';

  // Preloader js    
/* This code is attaching an event listener to the window's load event. When the window finishes
loading, the function inside the event listener is executed. In this case, the function is fading
out an element with the class "preloader" over a duration of 100 milliseconds. This is commonly used
to hide a preloader or loading screen once the page has finished loading. */
$(window).on('load', function () {
  $('.preloader').fadeOut(100);
});

/* The code is initializing a slider using the Slick library on an element with the class
"main-slider". The slider is set to show 1 slide at a time and scroll 1 slide at a time. It has
infinite looping enabled, meaning it will continuously loop through the slides. The dots
navigation is disabled, but the arrows navigation is enabled. The slider will autoplay with a
speed of 6000 milliseconds (6 seconds). The previous arrow is customized with a specific HTML
structure and icon, and the next arrow is also customized with a specific HTML structure and icon. */
  $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: '<div class="slick-control-prev"><i class="ti-arrow-left"></i></div>',
    nextArrow: '<div class="slick-control-next"><i class="ti-arrow-right"></i></div>'
  });


  // Count Down JS
  var Year = $('#simple-timer').attr('data-year');
  var Month = $('#simple-timer').attr('data-month');
  var Day = $('#simple-timer').attr('data-day');
  var Hour = $('#simple-timer').attr('data-hour');
  $('#simple-timer').syotimer({
    year: Year,
    month: Month,
    day: Day,
    hour: Hour,
    minute: 0
  });

  // overlay search
  $('.search_toggle').on('click', function (e) {
    e.preventDefault();
    $('.search_toggle').toggleClass('active');
    $('.overlay').toggleClass('open');
    setTimeout(function () {
      $('.search-form .form-control').focus();
    }, 400);
  });

  // product Slider
  /* The code is initializing a slider using the Slick library on an element with the class
  "single-product-slider". */
  $('.single-product-slider').slick({
    autoplay: false,
    infinite: true,
    arrows: false,
    dots: true,
    customPaging: function (slider, i) {
      var image = $(slider.$slides[i]).data('image');
      return '<img class="img-fluid" src="' + image + '" alt="product-img">';
    }
  });


  // instafeed
  if (($('#instafeed').length) !== 0) {
    var accessToken = $('#instafeed').attr('data-accessToken');
    var userFeed = new Instafeed({
      get: 'user',
      resolution: 'low_resolution',
      accessToken: accessToken,
      limit: 6,
      template: '<div class="col-lg-2 col-md-3 col-sm-4 col-6 px-0 mb-4"><div class="instagram-post mx-2"><img class="img-fluid w-100" src="{{image}}" alt="instagram-image"><ul class="list-inline text-center"><li class="list-inline-item"><a href="{{link}}" target="_blank" class="text-white"><i class="ti-heart mr-2"></i>{{likes}}</a></li><li class="list-inline-item"><a href="{{link}}" target="_blank" class="text-white"><i class="ti-comments mr-2"></i>{{comments}}</a></li></ul></div></div>'
    });
    userFeed.run();
  }


})(jQuery);