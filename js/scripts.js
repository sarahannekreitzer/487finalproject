$(function () {
  console.log('scripts loaded');

  var $hamburger = $(".hamburger");
   $hamburger.on("click", function(e) {
     $hamburger.toggleClass("is-active");

 });
 $('#button').click(function(){
   console.log('button clicked');
   $('#sidebar_show').animate({width: 'toggle'});
 });

});
