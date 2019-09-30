var time = 2;
var cc = 1;
$(window).scroll(function(){
  $('.about_stat').each(function(){
    var cPos = $(this).offset().top;
    var topWindow = $(window).scrollTop();
     if (cPos < topWindow + 250) {  
      if(cc < 2) {
          $('.about_stat__number').addClass('number_opacity');
          $('div').each(function(){
        var 
        i = 1,
        num = $(this).data('num'),
        step = 1000 * time / num,
        that = $(this),
        int = setInterval(function(){
          if (i <= num) {
            that.html(i);
          }
          else {
            cc = cc + 2;
            clearInterval(int);
          }
          i++;
        },step);
      });

       }
      }
    });
});




$('.partner_slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// MENU
$(function() {
  var link = $('.m-menu-link');
  var close = $('.close-menu');
  var menu = $('.m-menu');
  link.on('click', function(event) {
    event.preventDefault();
    menu.toggleClass('m-menu_active');
  });
  close.on('click', function(event) {
    event.preventDefault();
    menu.toggleClass('m-menu_active');
  });
});



$(function (){
    $('a[href^="#"]').click(function(){
      let target = $(this).attr('href');
      $('html, body').animate(
           {
            scrollTop:$(target).offset().top
           },
           800
      );
    });
});


// FIXED TOP
window.onscroll = function showTopSide() {
  var topSide = document.querySelector('.header_top');

    if(window.pageYOffset > 200) {
      topSide.classList.add('header_top_fixed');
    } else {
      topSide.classList.remove('header_top_fixed');
    }
}



$('.call_button').click(function() { 
  
  $('.js-overlay-campaign').fadeIn();
  $('.js-overlay-campaign').addClass('disabled');
});

$('.md_adapt').click(function() { 
  
  $('.js-overlay-campaign').fadeIn();
  $('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
  $('.js-overlay-campaign').fadeOut();
  
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign').fadeOut();
    
  }
});



$(function($){
  $('[name="phone"]').mask("+9(999) 999-9999");
});
