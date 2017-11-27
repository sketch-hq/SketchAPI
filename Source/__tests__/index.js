// ********************************
// # Tester.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************
import { Document } from '../Document'

import { ApplicationTests } from './Application.test'
import { ArtboardTests } from './Artboard.test'
import { DocumentTests } from './Document.test'
import { GroupTests } from './Group.test'
import { ImageTests } from './Image.test'
import { LayerTests } from './Layer.test'
import { PageTests } from './Page.test'
import { RectangleTests } from './Rectangle.test'
import { SelectionTests } from './Selection.test'
import { ShapeTests } from './Shape.test'
import { StyleTests } from './Style.test'
import { TextTests } from './Text.test'
import { WrappedObjectTests } from './WrappedObject.test'

/**
 * Very simple unit testing utility.
 *
 *
 * At some point we may switch to using Mocha or some other test framework, but for
 * now we want to be able to invoke the tests from the Sketch side or from a plugin
 * command, so it's simpler to use a simple test framework of our own devising.
 */
export function runTests(context) {
  /** @type {number} The number of tests we've run. */
  let _ran = 0

  /** @type {array} The names of the tests that have passed. */
  const _passes = []

  /** @type {array} Failure information for each test that has failed. */
  const _failures = []

  const testSuites = {
    suites: {
      Application: ApplicationTests,
      Artboard: ArtboardTests,
      Document: DocumentTests,
      Group: GroupTests,
      Image: ImageTests,
      Layer: LayerTests,
      Page: PageTests,
      Rectangle: RectangleTests,
      Selection: SelectionTests,
      Shape: ShapeTests,
      Text: TextTests,
      WrappedObject: WrappedObjectTests,
      Style: StyleTests,
    },
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
  function runUnitTests(specification = {}, suiteName) {
    const { suites = {}, tests = {} } = specification

    Object.keys(suites).forEach(suite => {
      runUnitTests(suites[suite], suite)
    })

    Object.keys(tests).forEach(name => {
      const test = tests[name]
      _ran += 1
      /** @type {array} List of failures in the currently running test. */
      const _testFailures = []
      try {
        test(context, Document.fromNative(MSDocumentData.new()))
      } catch (err) {
        _testFailures.push(err.message)
      }

      const fullName = suiteName ? `${suiteName} : ${name}` : name
      if (_testFailures.length > 0) {
        _failures.push({ name: fullName, reasons: _testFailures })
      } else {
        _passes.push(fullName)
      }
    })

    return {
      ran: _ran,
      crashes: [],
      failures: _failures,
      passes: _passes,
    }
  }

  return runUnitTests(testSuites)
}
