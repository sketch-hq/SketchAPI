// ********************************
// ## Sketch API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Application } from './Application'

/**
 * Return a function that captures the context.
 * When called, this function will initialise the API
 * and return an Application object that provides access
 * to all API functions.
 *
 * We do it like this to defer having to perform a lot
 * of setup until context.api() is actually called -- thus
 * scripts which don't call it at all suffer minimal overhead.
 */

// The Application object effectively *is* the api -- all other
// functions and objects can be accessed via it.
module.exports = context => () => new Application(context)
