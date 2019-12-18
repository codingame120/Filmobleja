
$(document).ready(function() {
   $('#videos a').each(function() {
      var data = $(this).attr('data');
      $(this).append('<img src="http://img.youtube.com/vi/'+data+'/maxresdefault.jpg" />');
   });

   $('#videos a').click(function() {
      var data = $(this).attr('data');
      $('#loader').append('<iframe src="https://www.youtube.com/embed/'+data+'" frameborder="0" allowfullscreen></iframe>');
      $('#overlay').fadeIn(250);
   });

   $('#close').click(function() {
      $('#overlay').fadeOut(250,function() {
         $('#loader').html('');
      });
   });
});



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}




jQuery(document).ready(function() {
      jQuery('.toggle-nav').click(function(e) {
         jQuery(this).toggleClass('active');
         jQuery('.menu ul').toggleClass('active');
   
         e.preventDefault();
      });
   });