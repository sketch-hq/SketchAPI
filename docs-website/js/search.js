// Search logic
var lunrSearch

$(document).ready(function() {
  var documentCollection
  var url = '/js/lunr.json'

  if (window.location.pathname.indexOf('reference/api/') != -1) {
    lunrSearch = lunr(function() {
      idx = this
      idx.field('title', { boost: 10 })
      idx.field('body')
      idx.field('url')
      idx.ref('id')

      //add to index

      $('h1, h2').each(function() {
        var title = $(this)
        var body = title.nextUntil('h1, h2')
        idx.add({
          id: title.prop('id'),
          title: title.text(),
          body: body.text(),
        })
        search_enable()
      })
    })
  } else {
    $.ajax({
      url: url,
      crossDomain: true,
      success: function(data, status, xhr) {
        documentCollection = data
        lunrSearch = lunr(function() {
          idx = this
          idx.field('title', { boost: 10 })
          idx.field('body')
          idx.field('url')
          idx.ref('id')

          //add to index
          $.each(data, function(index, value) {
            idx.add(value)
          })

          search_enable()
        })
      },
      error: function(xhr, type) {
        console.log('Error type: ' + type)
        console.log(xhr)
      },
    })
  }

  function search_enable() {
    $('.search-form .search-field').on('keyup', function(e) {
      var searchTerm = $(this).val()
      if (searchTerm.length >= 2) {
        search(searchTerm + '*')
      } else {
        //If we hit Esc, we close the search
        if (e.keyCode == 27) {
          search_close()
        }
        $('.search-results').html('')
      }
    })
  }

  function search(text) {
    var results = lunrSearch.search(text)
    console.log(results)
    var htmlOutput = '<ul>'
    $.each(results, function(index, result) {
      if (documentCollection) {
        var searchResult = documentCollection[result.ref]
        htmlOutput +=
          "<li><a href='" +
          searchResult.url +
          "'>" +
          searchResult.title +
          '</a></li>'
      } else {
        var elem = document.getElementById(result.ref)
        htmlOutput +=
          "<li><a href='#" + result.ref + "'>" + $(elem).text() + '</a></li>'
      }
    })
    htmlOutput += '</ul>'
    if (results.length) {
      $('.search-results').html(htmlOutput)
      $('.search-results')
        .find('a')
        .click(function() {
          search_close()
        })
    } else {
      $('.search-results').html('<li><span class="no-results"></span></li>')
      $('.search-results li span').text(
        'No Results Found for "' + text.substring(0, text.length - 1) + '"'
      )
    }
  }

  function search_close() {
    //iOS only workaround to prevent scrolling when we have the modal open, as overflow doesn't work on iOS. Scrolling position is saved in a JS variable, then restored when we remove the class so we can keep the scroll position
    if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
      $('body').removeClass('ios')
      $(window).scrollTop(tempScrollTop)
    }
    $('body').removeClass('stop-scrolling')
    $('.overlay').removeClass('active cover-all')
    $('.search-form').removeClass('show')
  }

  $('.search-close').click(function() {
    search_close()
  })

  $('.search-toggle').click(function() {
    //iOS only workaround to prevent scrolling when we have the modal open, as overflow doesn't work on iOS. Scrolling position is saved in a JS variable, then restored when we remove the class so we can keep the scroll position
    if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
      //Adds position:fixed to the element
      $('body').toggleClass('ios')
      //Return scroll position broken by position:fixed (value comes from main.js)
      $(window).scrollTop(tempScrollTop)
      //Preventing losing tap focus
      $('.search-results').on('tap', 'a', function(e) {
        var href = this.getAttribute('href')
        if (e.defaultPrevented || !href) {
          return
        }
        e.preventDefault()
        location.href = href
      })
    }

    $('body').toggleClass('stop-scrolling')
    $('.overlay').addClass('active cover-all')

    //Resetting form value to 0 on each reload
    $('.search-field').val('')

    //Preventing submit on hitting enter
    $('.search-form').submit(function(e) {
      return false
    })
    //Removing the search results contents
    $('.search-results').html('')

    //show and focus
    $('.search-form').addClass('show')
    setTimeout(function() {
      $('.search-field')[0].focus()
    }, 250)
  })
})
