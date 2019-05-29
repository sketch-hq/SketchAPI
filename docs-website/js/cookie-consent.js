(function(){

  let $banner = null;
  const CONTENT = "<span>By using this website, you agree to our <a href=\"https://www.sketch.com/privacy/\" target=\"_blank\">Privacy Statement</a>.</span>";
  const PROPS = {
    seen: true,
  }

  const shouldDisplay = function() {
    if (!window.localStorage) return true;
    const storedData = window.localStorage.getItem('cookieConsent');
    const storedDataJSON = storedData ? JSON.parse(storedData) : {};
    return storedDataJSON && storedDataJSON.seen != true;
  }

  //save local storage props
  const setStorageProps = function() {
    // update local storage
    if (window.localStorage) {
        window.localStorage.setItem('cookieConsent', JSON.stringify(PROPS));
    }
  }

  //init banner
  const init = function() {
    //create DOM node
    if (shouldDisplay()) {
        $banner = document.createElement('div');
        $banner.id = 'CookieConsent';
        $banner.className = 'hide-banner';
        $banner.innerHTML = CONTENT;
        $banner.addEventListener('click', function(e) {
           if (e.target == e.currentTarget) {
              setStorageProps()
              $banner.classList.add('hide-banner');
            }
        });
        document.querySelector('body').appendChild($banner);
        
        //show banner
        setTimeout(function() {
            $banner.classList.remove('hide-banner');
        }, 1000)
    }
  }
  
  //on DOM Content ready
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading'){
      init();
  } else {
      document.addEventListener('DOMContentLoaded', init);
  }

})()