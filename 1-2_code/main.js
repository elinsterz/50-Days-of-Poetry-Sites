$(document).ready(function() {
    /** Splits the text and assignes them tags **/
    var str = $('.title').text().split("");
    $('.title').empty();
    str.forEach(function(a) {
      $('.title').append('&nbsp;<span class = "hoverEffect">' + a.slice(0, 1) +           '</span>' +   a.slice(1))
    })
   
   /** Allows hover effect to play even after user mouse is out of range**/
    $(".hoverEffect").hover(function(){
      $(this).closest('span').addClass("animated");        
    })
    $(".hoverEffect").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function()   {
      $(this).closest('span').removeClass("animated")  
    })
  });
  
  