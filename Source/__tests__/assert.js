/**
 * Assert that a condition is true.
 * If the assertion fails, the failure is recorded for later reporting by the tester.
 *
 * @param {bool} condition The condition we're asserting.
 * @param {string} description A description of the test.
 */
export function assert(condition, description) {
  if (!condition) {
    throw new Error(description || '')
  }
}

/**
 * Assert that two values are equal.
 * If the assertion fails, the failure is recorded for later reporting by the tester.
 *
 * @param v1 The first value to compare.
 * @param v2 The second value to compare.
 */
export function assertEqual(v1, v2) {
  let different = v1 != v2

  // if we're comparing two objects, try matching them as strings
  // (crude, and not guaranteed, but it will cover some basic cases)
  if (different && typeof v1 === 'object' && typeof v2 === 'object') {
    if (v1.compare) {
      different = v1.compare(v2)
    } else {
      different = v1.toString() !== v2.toString()
    }
  }

  if (different) {
    throw new Error(`${v1} != ${v2}`)
  }
}

/**
 * Assert that a value is true.
 * If the assertion fails, the failure is recorded for later reporting by the tester.
 *
 * @param v The value to check.
 */
export function assertTrue(v) {
  if (!v) {
    throw new Error(`expected true, got: ${v}`)
  }
}

/**
 * Assert that a value is false.
 * If the assertion fails, the failure is recorded for later reporting by the tester.
 *
 * @param v The value to check.
 */
export function assertFalse(v) {
  if (v) {
    throw new Error(`expected false, got: ${v}`)
  }
}
