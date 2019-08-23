$(document).ready(function() {
  $('#content h1').addClass('h2')
  $('#content h2').addClass('h3')
  $('#content h3').addClass('h4')

  generateToc($('#content'))
  loadToc($('#toc'), '.toc-link', '.toc-list-h2', 65)
  setupLanguages($('#content').data('languages'))
  $('.content').imagesLoaded(function() {
    window.recacheHeights()
    window.refreshToc()
  })

  window.onpopstate = function() {
    activateLanguage(getLanguageFromQueryString())
  }

  $('.toc-wrapper .nav-toggle').click(function() {
    if (window.innerWidth > 767) {
      return
    }
    $('.toc-wrapper').toggleClass('open')
  })

  $(window).on('hashchange', function(e) {
    if (window.location.hash) {
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop:
              $(window.location.hash).offset().top -
              (window.innerWidth > 767 ? 100 : 140),
          },
          400
        )
    }
  })
})
