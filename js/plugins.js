//interval carousel
$(document).ready(function(){
  "use strict";
  //nicescroll
    $("html").niceScroll();
  $('.carousel').carousel({
    interval:500
    });
  //show color option when ckick on the gear
  $(".gear-check").click(function(){
  $('.color-option').fadeToggle();
  });
  //change theme color on click
  var colorLi= $(".color-option ul li");
  colorLi
  .eq(0).css("backgroundColor","#E41B17").end()
  .eq(1).css("backgroundColor","#009AFF").end()
  .eq(2).css("backgroundColor","#E426D5").end()
  .eq(3).css("backgroundColor","#ffb700");
  colorLi.click(function(){
    $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    });
});
$(window).load(function(){
  //show scroll
      $("body").css("overflow","auto");
  $(".loading-overlay .spinner").fadeOut(2000,
  function(){
    $(this).parent().fadeOut(2000,
    function(){
      $(this).remove();
      });
    });
  //caching thescroll top elment
  var scrollButton = $("#scroll-top");
  $(window).scroll(function(){
   if($(this).scrollTop()>=700){
    //code
    scrollButton.show();
    }
    else{
      scrollButton.hide();
    }
    //click on Button to scroll top
    scrollButton.click(function(){
      $("html,body").animate({scrollTop:0},600);
    });
      
  });
  
  });