declare const __command: MSPluginCommand
declare const coscript: COScript
declare const context:
  | {
      document?: MSDocument
      actionContext?: {
        document?: MSDocument
      }
    }
  | undefined
declare const console: {
  log: (...args: any[]) => void
  warn: (...args: any[]) => void
  error: (...args: any[]) => void
}
