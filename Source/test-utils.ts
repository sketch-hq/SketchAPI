export function isRunningOnJenkins() {
  return !__command.pluginBundle()
}
