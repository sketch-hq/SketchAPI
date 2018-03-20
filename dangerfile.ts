import { danger, fail, warn } from 'danger'

/**
 * CHECK FOR CHANGELOG UPDATE
 */
const LIB_REGEX = /^Source\/.*\.js$/

const hasCHANGELOGChanges = danger.git.modified_files.some(
  path => path === 'CHANGELOG.json'
)
const hasLibraryChanges = danger.git.modified_files.some(path =>
  LIB_REGEX.test(path)
)

if (hasLibraryChanges && !hasCHANGELOGChanges) {
  warn('This pull request may need a CHANGELOG entry.')
}

/**
 * CHECK FOR PACKAGE.JSON UPDATE
 */
const packageChanged = danger.git.modified_files.some(
  path => path === 'package.json'
)
const lockfileChanged = danger.git.modified_files.some(
  path => path === 'package-lock.json'
)

if (packageChanged && !lockfileChanged) {
  const message =
    'Changes were made to package.json, but not to package-lock.json'
  const idea = 'Perhaps you need to run `npm run install`?'
  warn(`${message} - <i>${idea}</i>`)
}

const corePackageChanged = danger.git.modified_files.some(
  path => path === 'core-modules/package.json'
)
const coreLockfileChanged = danger.git.modified_files.some(
  path => path === 'core-modules/package-lock.json'
)

if (corePackageChanged && !coreLockfileChanged) {
  const message =
    'Changes were made to core-modules/package.json, but not to core-modules/package-lock.json'
  const idea = 'Perhaps you need to run `cd core-modules && npm run install`?'
  warn(`${message} - <i>${idea}</i>`)
}
