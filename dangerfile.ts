import * as path from 'path'
import { danger, warn, markdown } from 'danger'

const touchedFiles = danger.git.modified_files.concat(danger.git.created_files)

const LIB_REGEX = /^Source\/.*\.js$/

const libraryChanges = touchedFiles.filter(
  filePath => LIB_REGEX.test(filePath) && filePath.indexOf('__tests__') === -1
)

function matchingTest(dir: string, name: string) {
  const testPath = path.join(dir, '__tests__', `${name}.js`)
  return touchedFiles.find(f => f === testPath)
}

function matchingDoc(dir: string, name: string) {
  const docPath = path.join('docs', 'api', `${name}.md`)
  return touchedFiles.find(f => f === docPath)
}

/**
 * CHECK FOR CHANGELOG UPDATE
 */

const hasCHANGELOGChanges = touchedFiles.some(
  filePath => filePath === 'CHANGELOG.json'
)
const hasLibraryChanges = libraryChanges.length > 0

if (hasLibraryChanges && !hasCHANGELOGChanges) {
  warn('This pull request may need a CHANGELOG entry.')
}

/**
 * CHECK FOR PACKAGE.JSON UPDATE
 */
const packageChanged = touchedFiles.some(
  filePath => filePath === 'package.json'
)
const lockfileChanged = touchedFiles.some(
  filePath => filePath === 'package-lock.json'
)

if (packageChanged && !lockfileChanged) {
  const message =
    'Changes were made to package.json, but not to package-lock.json'
  const idea = 'Perhaps you need to run `npm run install`?'
  warn(`${message} - <i>${idea}</i>`)
}

const corePackageChanged = touchedFiles.some(
  filePath => filePath === 'core-modules/package.json'
)
const coreLockfileChanged = touchedFiles.some(
  filePath => filePath === 'core-modules/package-lock.json'
)

if (corePackageChanged && !coreLockfileChanged) {
  const message =
    'Changes were made to core-modules/package.json, but not to core-modules/package-lock.json'
  const idea = 'Perhaps you need to run `cd core-modules && npm run install`?'
  warn(`${message} - <i>${idea}</i>`)
}

/**
 * CHECK FOR TESTS
 */

const ignoredFilesForTests = [
  'Source/async/index.js',
  'Source/data-supplier/index.js',
  'Source/dom/index.js',
  'Source/settings/index.js',
  'Source/ui/index.js',
]

// Warn if there are library changes, but not tests
libraryChanges.forEach(change => {
  if (ignoredFilesForTests.indexOf(change) >= 0) {
    return
  }
  const { dir, name } = path.parse(change)
  if (!matchingTest(dir, name)) {
    warn(
      `\`${change}\` changed, but not its tests. That's OK as long as you're refactoring.`
    )
  }
})

/**
 * CHECK FOR DOCS
 */

const ignoredFilesForDocs = [
  'Source/async/index.js',
  'Source/data-supplier/index.js',
  'Source/dom/enums.js',
  'Source/dom/Factory.js',
  'Source/dom/index.js',
  'Source/dom/utils.js',
  'Source/dom/wrapNativeObject.js',
  'Source/dom/WrappedObject.js',
  'Source/settings/index.js',
  'Source/ui/index.js',
]

// Warn if there are library changes, but not docs
libraryChanges.forEach(change => {
  if (ignoredFilesForDocs.indexOf(change) >= 0) {
    return
  }
  const { dir, name } = path.parse(change)
  if (!matchingDoc(dir, name)) {
    warn(
      `\`${change}\` changed, but not its doc. That's OK as long as you're refactoring.`
    )
  }
})

markdown(
  `__To test the changes from the PR, replace \`require('sketch')\` by \`require('__pr-${
    process.env.CIRCLE_PR_NUMBER
  }')\`__`
)
