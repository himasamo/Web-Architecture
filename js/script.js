$(function(){
  menuNav();
  slide();
  clientslide();
  navdots();
});

// ****************************
  // :: 1.0 Preloader
// ****************************
$(window).on('load', function(){
  var body = $('body'),
      pages = $('.preloader .preloader__loader');
  body.css("overflow-y","auto");
  pages.fadeOut(2000, function(){
      $(this).parent().fadeOut(2000, function(){
          $(this).remove();
      });
  });
});
  
// ****************************
  // :: Navbar Menu
// ****************************
function menuNav(){
  var menuOpen = $('.navbar__open'),
      menuClose = $('.navbar__close, .navbar__item'),
      nav = $('.navbar__nav');
  menuOpen.on('click',function(){
    nav.addClass('is-open');
  });
  menuClose.on('click', function(){
    nav.removeClass('is-open');
  });
}

// ****************************
  // :: Header Slide 
// ****************************
function slide(){
  $('.showslider').slick({
    dots: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    slickGoTo: 3, 
  });
}

function navdots(){
  $('.showslider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('#ctrl__dots li.is-active').removeClass('is-active');
    $('#ctrl__dots li').eq(nextSlide).addClass('is-active');
  });

  $('#ctrl__dots li').on('click', function(e){
    e.preventDefault();
    $('#ctrl__dots li.is-active').removeClass('is-active');
    $(this).addClass('is-active');
    var targetSlide = $(this).data('slide');
    $('.showslider').slick('slickGoTo', targetSlide - 1);
  });
}

// ****************************
  // :: Client Slide 
// ****************************
function clientslide(){
  $('.clientslider').slick({
    dots: false,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 6,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
}

// ****************************
  // :: Animation
// ****************************
const services = document.querySelectorAll('.animate');
observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if(entry.intersectionRatio > 0) {
          entry.target.style.animation = `anim1 1s ${entry.target.dataset.delay} forwards ease-out`;
      }
      else {
          entry.target.style.animation = 'none';
      }
  })
})

services.forEach(service => {
    observer.observe(service);
})


const works = document.querySelectorAll('.motions');
observer = new IntersectionObserver((entr) => {
  entr.forEach(entrs => {
      if(entrs.intersectionRatio > 0) {
          entrs.target.style.animation = `motion 1s ${entrs.target.dataset.delays} forwards ease-out`;
      }
      else {
          entrs.target.style.animation = 'none';
      }
  })
})

works.forEach(work => {
    observer.observe(work);
})