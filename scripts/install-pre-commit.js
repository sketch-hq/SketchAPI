//
// Compatibility with older node.js as path.exists got moved to `fs`.
//
const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')

//
// Gather the location of the possible hidden .git directory, the hooks
// directory which contains all git hooks and the absolute location of the
// `pre-commit` file. The path needs to be absolute in order for the symlinking
// to work correctly.
//

let git = path.join(__dirname, '../.git')

//
// Resolve git directory for submodules
//
if (fs.existsSync(git) && fs.lstatSync(git).isFile()) {
  const gitinfo = fs.readFileSync(git).toString()
  const gitdirmatch = /gitdir: (.+)/.exec(gitinfo)
  const gitdir = gitdirmatch.length == 2 ? gitdirmatch[1] : null

  if (gitdir !== null) {
    git = path.resolve(root, gitdir)
  }
}

//
// Bail out if we don't have an `.git` directory as the hooks will not get
// triggered. If we do have directory create a hooks folder if it doesn't exist.
//
if (!git) {
  console.log('')
  console.log(
    'pre-commit: Not found any .git folder for installing pre-commit hook'
  )
  console.log('')
  return
}

const hooks = path.resolve(git, 'hooks')
const precommit = path.resolve(hooks, 'pre-commit')

if (!fs.existsSync(hooks)) fs.mkdirSync(hooks)

//
// If there's an existing `pre-commit` hook we want to back it up instead of
// overriding it and losing it completely as it might contain something
// important.
//
if (fs.existsSync(precommit) && !fs.lstatSync(precommit).isSymbolicLink()) {
  console.log('')
  console.log('pre-commit: Detected an existing git pre-commit hook')
  fs.writeFileSync(`${precommit}.old`, fs.readFileSync(precommit))
  console.log('pre-commit: Old pre-commit hook backed up to pre-commit.old')
  console.log('')
}

//
// We cannot create a symlink over an existing file so make sure it's gone and
// finish the installation process.
//
try {
  fs.unlinkSync(precommit)
} catch (e) {
  // it's fine
}

// Create generic precommit hook that launches this modules hook (as well
// as stashing - unstashing the unstaged changes)
// TODO: we could keep launching the old pre-commit scripts
const precommitContent = `#!/usr/bin/env bash
node "$(node -e "console.log(require.resolve('pre-commit'))")"
RESULT=$?
[ $RESULT -ne 0 ] && exit 1
exit 0
`

//
// It could be that we do not have rights to this folder which could cause the
// installation of this module to completely fail. We should just output the
// error instead destroying the whole npm install process.
//
try {
  fs.writeFileSync(precommit, precommitContent)
} catch (e) {
  console.error('')
  console.error(
    'pre-commit: Failed to create the hook file in your .git/hooks folder because:'
  )
  console.error(`pre-commit: ${e.message}`)
  console.error('pre-commit: The hook was not installed.')
  console.error('')
}

try {
  fs.chmodSync(precommit, '777')
} catch (e) {
  console.error('')
  console.error(
    'pre-commit: chmod 0777 the pre-commit file in your .git/hooks folder because:'
  )
  console.error(`pre-commit: ${e.message}`)
  console.error('')
}
