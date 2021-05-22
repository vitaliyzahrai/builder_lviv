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

  



});