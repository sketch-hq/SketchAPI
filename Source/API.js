// ********************************
// ## Sketch API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Application } from './Application.js'


/**
    Return a function that captures the context.
    When called, this function will initialise the API
    and return an Application object that provides access
    to all API functions.

    We do it like this to defer having to perform a lot
    of setup until context.api() is actually called -- thus
    scripts which don't call it at all suffer minimal overhead.
 */

function SketchAPIWithCapturedContext(context) {
    return (function() {

      // The Application object effectively *is* the api -- all other
      // functions and objects can be accessed via it.

      return new Application(context)
    });
}

// HACK: expose the SketchAPIWithCapturedContext function globally
// I suspect that there's a better way to do this, but I've
// not yet figured it out.

__globals.SketchAPIWithCapturedContext = SketchAPIWithCapturedContext
