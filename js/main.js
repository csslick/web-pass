$(function(){
  $('#gnb .depth2').hide();

  $('#gnb > ul > li').hover(
    function(){
      $(this).find('.depth2').stop().slideDown();
  },
    function(){
      $(this).find('.depth2').stop().slideUp();
  });

  // slider
  var slider_num = 0;

  function go_slider(){
    (slider_num == 2)? slider_num = 0:slider_num++;
    $('.sliders').animate({
      marginLeft: -(slider_num*1000)+'px'
    });
  }
  
  setInterval(function(){
    go_slider();
  }, 2000);

  // popup
  $('#banner img').click(function(){
      $('.popup_bg').addClass('on');
  });

  $('.popup .btn_close').click(function(){
      $('.popup_bg').removeClass('on');
  });


});
