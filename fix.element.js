
// Check Offset to fix and release Chapter titles
function checkOffset() {
  // Fix Chapter 1
    if($(document).scrollTop() + 120 >= $('#chapter-1').offset().top || $(document).scrollTop() <= $('#content-1').outerHeight(true)) {
        $('#chapter-1').css('position', 'fixed');
        $('#chapter-1').css('top', '120px');
      }
  // Release Chapter 1 once it reaches the end of Content 1
    if($(document).scrollTop() >= $('#content-1').outerHeight(true)) {
        $('#chapter-1').css('position', 'absolute');
        $('#chapter-1').css('top', $('#content-1').outerHeight(true) + 120);
      }
  // Release Chapter 1 if scrolled above
    if($(document).scrollTop() + 120 <= $('#page-1').offset().top) {
        $('#chapter-1').css('position', 'absolute');
        $('#chapter-1').css('top', '');
      }
  // Fix Chapter 2
    if($(document).scrollTop() + 120 >= $('#chapter-2').offset().top || $(document).scrollTop() <= $('#content-1').outerHeight(true) + $('#content-2').outerHeight(true)) {
        $('#chapter-2').css('position', 'fixed');
        $('#chapter-2').css('top', '120px');
      }
  // Release Chapter 2 once it reaches the end of Content 1
    if($(document).scrollTop() >= $('#content-1').outerHeight(true) + $('#content-2').outerHeight(true)) {
        $('#chapter-2').css('position', 'absolute');
        $('#chapter-2').css('top', $('#content-1').outerHeight(true) + $('#content-2').outerHeight(true) + 120);
      }
  // Release Chapter 2 if scrolled above
    if($(document).scrollTop() + 120 <= $('#page-2').offset().top) {
        $('#chapter-2').css('position', 'absolute');
        $('#chapter-2').css('top', '');
      }
  // Fix Chapter 3
    if($(document).scrollTop() + 120 >= $('#chapter-3').offset().top || $(document).scrollTop() <= $('#content-1').outerHeight(true) + $('#content-2').outerHeight(true) + $('#content-3').outerHeight(true)) {
        $('#chapter-3').css('position', 'fixed');
        $('#chapter-3').css('top', '120px');
      }
  // Release Chapter 3 once it reaches the end of Content 1
    if($(document).scrollTop() >= $('#content-1').outerHeight(true) + $('#content-2').outerHeight(true) + $('#content-3').outerHeight(true)) {
        $('#chapter-3').css('position', 'absolute');
        $('#chapter-3').css('top', $('#content-1').outerHeight(true) + $('#content-2').outerHeight(true) + $('#content-3').outerHeight(true) + 120);
      }
  // Release Chapter 3 if scrolled above
    if($(document).scrollTop() + 120 <= $('#page-3').offset().top) {
        $('#chapter-3').css('position', 'absolute');
        $('#chapter-3').css('top', '');
      }
};

$(document).scroll(function() {
    checkOffset();
});
