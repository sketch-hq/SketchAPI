import { danger, fail, warn } from 'danger'

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
