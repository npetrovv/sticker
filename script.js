$(function() {

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 5,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
    },
    direction: 'horizontal',
    spaceBetween: 40,
  });



});

$(function(){
  $(document).mousedown(function(e) {
    //при клике вне кнопки меню, самого меню и его потомков
    if (!$('.header-menu').is(e.target) && $('.header-menu').has(e.target).length === 0) {
      $('.header-menu, .header-menu-open').removeClass('active');
      $('.menu').hide();
    }
    });
  
    $('.header-menu').click(function(event){
      $('.header-menu, .header-menu-open').toggleClass('active');
      $('body').toggleClass('lock');
    });
  
});



