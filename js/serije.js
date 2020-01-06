

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


function Function() {
  var x = document.getElementById("Demo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("activee");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}




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

