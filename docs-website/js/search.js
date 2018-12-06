// Search logic
$(document).ready(function(){
  var documentCollection,
      lunrIndex = lunr(function () {
        this.field('title', {boost: 10})
        this.field('body')
        this.field('url')
        this.ref('id')
      }),
      url = '/js/lunr.json'

  $.ajax({
    url: url,
    crossDomain: true,
    success: function(data,status,xhr){
      documentCollection = data
      $.each(data,function(index, value){
        lunrIndex.add(value)
      })
      search_enable()
    },
    error: function(xhr, type){
      console.log('Error type: ' + type)
      console.log(xhr)
    }
  })

  function search_enable() {
    $('.search-form .search-field').on('keyup', function(e){
      var searchTerm = $(this).val()
      if (searchTerm.length > 2) {
        search(searchTerm)
      } else {
        //If we hit Esc, we close the search
        if (e.keyCode == 27) {
          search_close();
        }
        $('.search-results').html('');
      }
    })
  }

  function search(text){
    var results = lunrIndex.search(text),
        htmlOutput = '<ul>'
    $.each(results, function(index, result){
      var searchResult = documentCollection[result.ref]
      htmlOutput += "<li><a href='" + searchResult.url + "'>" + searchResult.title + '</a></li>'
    })
    htmlOutput += '</ul>'
    $('.search-results').html(htmlOutput)
  }

  function search_close() {
    //iOS only workaround to prevent scrolling when we have the modal open, as overflow doesn't work on iOS. Scrolling position is saved in a JS variable, then restored when we remove the class so we can keep the scroll position
    if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
      $('body').removeClass('ios');
      $(window).scrollTop(tempScrollTop);
    }
    $('body').removeClass('stop-scrolling');
    $('.overlay').removeClass('active cover-all');
    $('.search-form').hide();
  }

  $('.search-close').click(function(){
    search_close();
  });

  $('.search-toggle').click(function(){
    //iOS only workaround to prevent scrolling when we have the modal open, as overflow doesn't work on iOS. Scrolling position is saved in a JS variable, then restored when we remove the class so we can keep the scroll position
    if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
      //Adds position:fixed to the element
      $('body').toggleClass('ios');
      //Return scroll position broken by position:fixed (value comes from main.js)
      $(window).scrollTop(tempScrollTop);
      //Preventing losing tap focus
      $('.search-results').on('tap', 'a',function (e) {
        var href = this.getAttribute('href');
        if (e.defaultPrevented || !href) { return; }
        e.preventDefault();
        location.href= href;
      })
    }
    $('body').toggleClass('stop-scrolling');
    $('.overlay').addClass('active cover-all');
    //Resetting form value to 0 on each reload
    $('.search-field').val('');
    //Preventing submit on hitting enter
    $('#search-form').submit(function(e){
        return false;
    });
    //Removing the search results contents
    $('.search-results').html('');
    $('.search-form').show().removeClass('hide');
    $('.search-field').focus();
  });
});
