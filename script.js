$(document).ready(function(){
    $('.header-burger').click(function(event) {

      $(`
        .header-burger,
        .header-menu-nav-top,
        .header-menu-nav-bottom,
        .header-menu-top
      `).toggleClass('active');

      $('body, html').toggleClass('lock');

    });

  
    
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
        adaptiveHeight: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: false,
        focusOnSelect: true,
        adaptiveHeight: true,
        vertical: true,
        verticalSwiping: true,
  
        responsive: [
          {
            breakpoint: 768,
            settings: {
              vertical: false,
              verticalSwiping: false,
              centerMode: true
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              vertical: false,
              verticalSwiping: false,
              centerMode: true
            }
          }
        ]
        
      });



});