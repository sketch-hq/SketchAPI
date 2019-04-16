workflow "Lint on push" {
  on = "push"
  resolves = ["Lint", "Danger"]
}

action "npm install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "Danger" {
  uses = "sh"
  needs = ["npm install"]
  args = "./node_modules/.bin/danger ci"
}

action "Lint" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["npm install"]
  args = "run lint"
}
