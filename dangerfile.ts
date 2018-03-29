import * as path from 'path'
import { danger, warn } from 'danger'

const touchedFiles = danger.git.modified_files.concat(danger.git.created_files)

const LIB_REGEX = /^Source\/.*\.js$/
const TEST_REGEX = /^Source\/.*\/__tests__\/.*\.test\.js?$/
const DOCS_REGEX = /^docs\/api\/.*\.md$/

const libraryChanges = touchedFiles.filter(
  path => LIB_REGEX.test(path) && path.indexOf('__tests__') === -1
)

function matchingTest(dir: string, name: string) {
  const testPath = path.join(dir, '__tests__', name + '.js')
  return touchedFiles.find(f => f === testPath)
}

function matchingDoc(dir: string, name: string) {
  const docPath = path.join(dir.split('Source')[0], 'docs', 'api', name + '.md')
  return touchedFiles.find(f => f === docPath)
}

/**
 * CHECK FOR CHANGELOG UPDATE
 */

const hasCHANGELOGChanges = touchedFiles.some(path => path === 'CHANGELOG.json')
const hasLibraryChanges = libraryChanges.length > 0

if (hasLibraryChanges && !hasCHANGELOGChanges) {
  warn('This pull request may need a CHANGELOG entry.')
}

/**
 * CHECK FOR PACKAGE.JSON UPDATE
 */
const packageChanged = touchedFiles.some(path => path === 'package.json')
const lockfileChanged = touchedFiles.some(path => path === 'package-lock.json')

if (packageChanged && !lockfileChanged) {
  const message =
    'Changes were made to package.json, but not to package-lock.json'
  const idea = 'Perhaps you need to run `npm run install`?'
  warn(`${message} - <i>${idea}</i>`)
}

const corePackageChanged = touchedFiles.some(
  path => path === 'core-modules/package.json'
)
const coreLockfileChanged = touchedFiles.some(
  path => path === 'core-modules/package-lock.json'
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
  'async/index.js',
  'data-supplier/index.js',
  'dom/index.js',
  'settings/index.js',
  'ui/index.js',
]

// Warn if there are library changes, but not tests
libraryChanges.forEach(change => {
  const fileName = change.split('Source')[1]
  if (ignoredFilesForTests.indexOf(fileName) >= 0) {
    return
  }
  const { dir, name } = path.parse(change)
  if (!matchingTest(dir, name)) {
    warn(
      `\`${fileName}\` changed, but not its tests. That's OK as long as you're refactoring.`
    )
  }
})

/**
 * CHECK FOR DOCS
 */

const ignoredFilesForDocs = [
  'async/index.js',
  'data-supplier/index.js',
  'dom/enums.js',
  'dom/Factory.js',
  'dom/index.js',
  'dom/utils.js',
  'dom/wrapNativeObject.js',
  'dom/WrappedObject.js',
  'settings/index.js',
  'ui/index.js',
]

// Warn if there are library changes, but not docs
libraryChanges.forEach(change => {
  const fileName = change.split('Source')[1]
  if (ignoredFilesForDocs.indexOf(fileName) >= 0) {
    return
  }
  const { dir, name } = path.parse(change)
  if (!matchingDoc(dir, name)) {
    warn(
      `\`${fileName}\` changed, but not its doc. That's OK as long as you're refactoring.`
    )
  }
})
