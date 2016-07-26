// ********************************
// # Tester.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************


/**
    Very simple unit testing utility.

*/

export class Tester {

    runUnitTests(tests) {
      var ran = 0;
      var passes = [];
      var failures = [];
      var testFailures;
      var tester = {
        "assert" : function(value, description) {
          if (!value) {
            if (!description) description = "";
            testFailures.push(description)
          }
        },
        "assertEqual" : function(v1, v2) {
          if (v1 != v2) {
            testFailures.push(v1 + " != " + v2)
          }
        }
      }
      var test;
      for (test in tests) {
        ran++;
        testFailures = [];
        var result = tests[test](tester);
        if (testFailures.length > 0) {
          failures.push({"name" : test, "reasons" : testFailures})
        } else {
          passes.push(test)
        }
      }

      return {
        "ran" : ran,
        "crashed" : 0,
        "failures" : failures,
        "passes" : passes
      };
    }

}
