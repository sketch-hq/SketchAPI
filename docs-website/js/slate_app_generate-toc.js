;(function() {
  'use strict'

  function generateToc($content) {
    var sections = JSON.parse($content.attr('data-sections'))
    var htmlContent = ''
    var previousSection = null
    var h1AndH2 = $content.find('h1,h2')
    h1AndH2.each(function(i, h1OrH2) {
      var isH1 = h1OrH2.tagName === 'H1'
      if (isH1) {
        if (i !== 0) {
          if (h1AndH2[i - 1].tagName === 'H2') {
            // previous tag was an h2
            htmlContent += '</ul>' // we need to close the h2's ul
          }
          htmlContent += '</li>' // close the previous h1
        }
        if (sections[h1OrH2.id] !== previousSection) {
          if (previousSection) {
            $('#section-' + previousSection).html(htmlContent)
            htmlContent = ''
          }
          previousSection = sections[h1OrH2.id]
        }
        htmlContent +=
          '<li><a href="#' +
          h1OrH2.id +
          '" class="toc-h1 toc-link" data-title="' +
          h1OrH2.textContent +
          '">' +
          h1OrH2.textContent +
          '</a>'
      } else {
        if (h1AndH2[i - 1].tagName === 'H1') {
          // previous tag was an h1
          htmlContent += '<ul class="toc-list-h2">' // we need to open an ul for the h2
        }
        htmlContent +=
          '<li><a href="#' +
          h1OrH2.id +
          '" class="toc-h2 toc-link" data-title="' +
          h1OrH2.textContent +
          '">' +
          h1OrH2.textContent +
          '</a></li>'
      }
    })
    if (h1AndH2[h1AndH2.length - 1].tagName === 'H2') {
      // latest tag was an h2
      htmlContent += '</ul>' // we need to close the h2's ul
    }
    htmlContent += '</li>' // close the last h1
    htmlContent += '</ul>' // close the last section
    $('#section-' + previousSection).html(htmlContent)
  }

  window.generateToc = generateToc
})()
