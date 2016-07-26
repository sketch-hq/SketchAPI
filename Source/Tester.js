// ********************************
// # Tester.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************


/**
    Very simple unit testing utility.


    At some point we may switch to using Mocha or some other test framework, but for
    now we want to be able to invoke the tests from the Sketch side or from a plugin
    command, so it's simpler to use a simple test framework of our own devising.
*/

export class Tester {

    /**
     Make a new tester.

     */

    constructor(application) {
        /** @type {array} List of failures in the currently running test. */
        this._testFailures = []
        this._application = application
        this._ran = 0
        this._passes = []
        this._failures = []

    }

    /**
     Assert that a condition is true.
     If the assertion fails, the failure is recorded for later reporting by the tester.
     
     @param {bool} condition The condition we're asserting.
     @param {string} description A description of the test.
     */

    assert(condition, description) {
        if (!condition) {
            if (!description) description = ""
            this._testFailures.push(description)
        }
    }

    /**
     Assert that two values are equal.
     If the assertion fails, the failure is recorded for later reporting by the tester.

     @param v1 The first value to compare.
     @param v2 The second value to compare.
    */

    assertEqual(v1, v2) {
        if (v1 != v2) {
            this._testFailures.push(v1 + " != " + v2)
        }
    }

    get application() {
        return this._application
    }
    
    /**
     Run a collection of tests.
     
     The method takes a dictionary describing the tests to run.
     The dictionary can contain two keys:
     - suites: this is a dictionary of sub-collections, each of which is recursively run by calling this method again.
     - tests: this is a dictionary of test functions, each of which is executed.
     
     The test functions are passed this tester object when they are executed, and should use the assertion methods on it
     to perform tests.

     @param {dictionary} specification A dictionary describing the tests to run. See discussion.
     @return {dictionary} Returns a dictionary indicating how many tests ran, and a list of the passed, failed, and crashed tests.
     */

    runUnitTests(specification, suiteName) {
        var suites = specification.suites
        for (var suite in suites) {
            this.runUnitTests(suites[suite], suite)
        }

        var tests = specification.tests
        for (var name in tests) {
            var test = tests[name]
            this._ran++;
            this._testFailures = [];
            var result = test(this);
            var fullName = suiteName ? suiteName + " : " + name : name
            if (this._testFailures.length > 0) {
              this._failures.push({"name" : fullName, "reasons" : this._testFailures})
            } else {
              this._passes.push(fullName)
            }
        }

      return {
        "ran" : this._ran,
        "crashes" : [],
        "failures" : this._failures,
        "passes" : this._passes
      };
    }

}
