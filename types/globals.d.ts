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

declare const console: Console
declare const process: Process

type NodeRequireFunction = (id: string) => any

interface NodeRequire extends NodeRequireFunction {
  resolve: RequireResolve
  cache: any
  /**
   * @deprecated
   */
  extensions: NodeExtensions
  main: NodeModule | undefined
}

interface RequireResolve {
  (id: string, options?: { paths?: string[] }): string
  paths(request: string): string[] | null
}

interface NodeExtensions {
  '.js': (m: NodeModule, filename: string) => any
  '.json': (m: NodeModule, filename: string) => any
  '.node': (m: NodeModule, filename: string) => any
  [ext: string]: (m: NodeModule, filename: string) => any
}

declare var require: NodeRequire

interface NodeModule {
  exports: any
  require: NodeRequireFunction
  id: string
  filename: string
  loaded: boolean
  parent: NodeModule | null
  children: NodeModule[]
  paths: string[]
}

declare var module: NodeModule

// Same as module.exports
declare var exports: any
