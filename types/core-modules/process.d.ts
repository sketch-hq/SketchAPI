interface Process {
  execPath: string
  env: { [key: string]: any }
  version: string
  versions: {
    plugin: string
    sketch: string
  }
  pid: number
  title: string
  arch: string
  platform: 'darwin'
  nextTick(callback: Function, ...args: any[]): void
  type: 'sketch'
}
