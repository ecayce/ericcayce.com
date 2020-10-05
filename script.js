/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
};

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
//
// // Fade in effect
// $( document ).ready(function() {
//   setTimeout(function(){
//     var height = $("#intro").height();
//         var clone = $('#intro').clone()
//                     .css({'position':'absolute','visibility':'hidden','height':'auto'})
//                     .addClass('slideClone')
//                     .appendTo('body');
//         //$("#this").css({'position':'absolute','visibility':'hidden','height':'auto'});
//         //var newHeight = $("#this").height();
//         var newHeight = $(".slideClone").height();
//         $(".slideClone").remove();
//         //$("#this").css({'position':'static','visibility':'visible','height':'0'});
//         $('#intro').css('height',newHeight + 'px');
//         $('#intro').css({'animation':'fadeIn ease 1s','-webkit-animation':'fadeIn ease 1s','-moz-animation':'fadeIn ease 1s','-o-animation':'fadeIn ease 1s','-ms-animation':'fadeIn ease 1s'});
//   },400);
// });


// Smooth Scrolling

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 120
      }, 600, function(){

      });
    } // End if
  });
});



// Select all links with hashes
// $('a[href*="#"]')
//   // Remove links that don't actually link to anything
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
//       &&
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000, function() {
//           // Callback after animation
//           // Must change focus!
//           var $target = $(target);
//           $target.focus();
//           if ($target.is(":focus")) { // Checking if the target was focused
//             return false;
//           } else {
//             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//             $target.focus(); // Set focus again
//           };
//         });
//       }
//     }
//   });
