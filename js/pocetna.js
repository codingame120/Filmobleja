



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




// mobilni menu js start //

$(document).ready(function(){
  // menu click event
  $('.menuBtn').click(function() {
    $(this).toggleClass('act');
      if($(this).hasClass('act')) {
        $('.mainMenu').addClass('act');
      }
      else {
       $('.mainMenu').removeClass('act');
       }
  });
});

// mobilni menu js end //

