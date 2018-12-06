(function( w ){
  // if the class is already set, we're good.
  if( w.document.documentElement.className.indexOf( "fonts-loaded" ) > -1 ){
    return;
  }
  var font = new w.FontFaceObserver( "Eina01-SemiBold-webfont");
  font.load().then(function () {
    w.document.documentElement.className += " fonts-loaded";
  });
}( this ));

var tempScrollTop;

// Main navigation logic
$('.main-nav .nav-toggle').click(function(){
  //iOS only workaround to prevent scrolling when we have the modal open, as overflow doesn't work on iOS. Scrolling position is saved in a JS variable, then restored when we remove the class so we can keep the scroll position
  if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
    if ($(this).hasClass('active')) {
      $(window).scrollTop(tempScrollTop);
    } else {
      //Saving the current scroll value so we can recover it later
      tempScrollTop = $(window).scrollTop();
    }
    $('body').toggleClass('ios');
  }
  $('body').toggleClass('stop-scrolling');
  $('.overlay').toggleClass('active');
  $(this).toggleClass('active');
  $('.main-nav ul').toggleClass('active');
});

// TOC navigation logic
$('.toc-nav .nav-toggle').click(function(){
  if (window.innerWidth > 767) { return }
  $(this).toggleClass('active');
  $('.toc-nav nav').toggleClass('active');
  $('.toc-nav ol').toggle();
});

// Overlay logic (dismiss everything when you click it)
$('.overlay').click(function(){
  //iOS only workaround to prevent scrolling when we have the modal open, as overflow doesn't work on iOS. Scrolling position is saved in a JS variable, then restored when we remove the class so we can keep the scroll position
  if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
    $('body').removeClass('ios');
    $(window).scrollTop(tempScrollTop);
  }
  $('body').removeClass('stop-scrolling');
  $('.overlay').removeClass('active cover-all');
  $('.main-nav .nav-toggle').removeClass('active');
  $('.main-nav ul').removeClass('active');
  $('.search-form').hide();
});

// Window resize changes needed
$(window).resize(function(){
  if(window.innerWidth > 767) {
    //iOS only workaround to prevent scrolling when we have the modal open, as overflow doesn't work on iOS. Scrolling position is saved in a JS variable, then restored when we remove the class so we can keep the scroll position
    if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
      $('body').removeClass('ios');
      $(window).scrollTop(tempScrollTop);
    }
    $('body').removeClass('stop-scrolling');
    $('.overlay[class="active"]').removeClass('active');
    $('.main-nav ul').removeClass('active');
    $('.toc-nav ol').removeAttr('style');
    $('.toc-nav nav').removeClass('active');
    $('.nav-toggle').removeClass('active');
  }
});
