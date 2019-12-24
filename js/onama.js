
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




var coll = document.getElementsByClassName("collapsiblee");
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