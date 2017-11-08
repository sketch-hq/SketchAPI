// ********************************
// # Tester.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Document } from './Document'

/**
 * Very simple unit testing utility.
 *
 *
 * At some point we may switch to using Mocha or some other test framework, but for
 * now we want to be able to invoke the tests from the Sketch side or from a plugin
 * command, so it's simpler to use a simple test framework of our own devising.
 */
export class Tester {
    /**
     * Make a new tester.
     *
     */
    constructor(application) {
        /** @type {array} List of failures in the currently running test. */
        this._testFailures = []
        
        /** @type {Application} The application that is running these tests. */
        this._application = application
        
        /** @type {number} The number of tests we've run. */
        this._ran = 0
        
        /** @type {array} The names of the tests that have passed. */
        this._passes = []
        
        /** @type {array} Failure information for each test that has failed. */
        this._failures = []
        
    }
    
    /**
     * Assert that a condition is true.
     * If the assertion fails, the failure is recorded for later reporting by the tester.
     *
     * @param {boolean} condition The condition we're asserting.
     * @param {string} description A description of the test.
     */
    assert(condition, description) {
        if (!condition) {
            if (!description) description = ""
            this._testFailures.push(description)
        }
    }
    
    /**
     * Assert that two values are equal.
     * If the assertion fails, the failure is recorded for later reporting by the tester.
     *
     * @param v1 The first value to compare.
     * @param v2 The second value to compare.
     */
    assertEqual(v1, v2) {
        var different = v1 != v2
        
        // if we're comparing two objects, try matching them as strings
        // (crude, and not guaranteed, but it will cover some basic cases)
        if (different && (typeof v1 === 'object') && (typeof v2 === 'object')) {
            if (v1.compare) {
                different = v1.compare(v2)
            } else {
                different = v1.toString() != v2.toString()
            }
        }
        
        if (different) {
            this._testFailures.push(v1 + " != " + v2)
        }
    }
    
    
    /**
     * Assert that a value is true.
     * If the assertion fails, the failure is recorded for later reporting by the tester.
     *
     * @param v The value to check.
     */
    assertTrue(v) {
        if (!v) {
            this._testFailures.push("expected true, got: " + v)
        }
    }
    
    
    
    /**
     * Assert that a value is false.
     * If the assertion fails, the failure is recorded for later reporting by the tester.
     *
     * @param v The value to check.
     */
    assertFalse(v) {
        if (v) {
            this._testFailures.push("expected false, got: " + v)
        }
    }
    
    
    /**
     * The application instance that we're running the tests for.
     * This is the instance associated with the script context that launched the tests.
     *
     * @return {Application} The application object.
     */
    get application() {
        return this._application
    }
    
    
    /**
     * Returns a new document to use in tests.
     *
     * @return {Document} Test document.
     */
    newTestDocument() {
        var document = new Document(MSDocumentData.new(), this._application)
        return document
    }
    
    
    /**
     * Run a collection of tests.
     *
     * The method takes a dictionary describing the tests to run.
     * The dictionary can contain two keys:
     * - suites: this is a dictionary of sub-collections, each of which is recursively run by calling this method again.
     * - tests: this is a dictionary of test functions, each of which is executed.
     *
     * The test functions are passed this tester object when they are executed, and should use the assertion methods on it
     * to perform tests.
     *
     * @param {dictionary} specification A dictionary describing the tests to run. See discussion.
     * @param {string} suiteName The name of the suite, if we're running a sub-collection. This will be null for the top level tests.
     * @return {dictionary} Returns a dictionary indicating how many tests ran, and a list of the passed, failed, and crashed tests.
     */
    runUnitTests(specification, suiteName?) {
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
