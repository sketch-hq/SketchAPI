// This needs to be global to avoid TS2403 in case lib.dom.d.ts is present in the same build
interface Console {
  /**
   * When `stdout` is a TTY, calling `console.clear()` will attempt to clear the TTY.
   * When `stdout` is not a TTY, this method does nothing.
   */
  clear(): void
  /**
   * Maintains an internal counter specific to `label` and outputs to `stdout` the number of times `console.count()` has been called with the given `label`.
   */
  count(label?: string): void
  /**
   * Resets the internal counter specific to `label`.
   */
  countReset(label?: string): void
  /**
   * The `console.debug()` function is an alias for {@link console.log()}.
   */
  debug(message?: any, ...optionalParams: any[]): void
  /**
   * Prints to `stderr` with newline.
   */
  error(message?: any, ...optionalParams: any[]): void
  /**
   * Increases indentation of subsequent lines by two spaces.
   * If one or more `label`s are provided, those are printed first without the additional indentation.
   */
  group(...label: any[]): void
  /**
   * The `console.groupCollapsed()` function is an alias for {@link console.group()}.
   */
  groupCollapsed(): void
  /**
   * Decreases indentation of subsequent lines by two spaces.
   */
  groupEnd(): void
  /**
   * The {@link console.info()} function is an alias for {@link console.log()}.
   */
  info(message?: any, ...optionalParams: any[]): void
  /**
   * Prints to `stdout` with newline.
   */
  log(message?: any, ...optionalParams: any[]): void
  /**
   * Starts a timer that can be used to compute the duration of an operation. Timers are identified by a unique `label`.
   */
  time(label?: string): void
  /**
   * Stops a timer that was previously started by calling {@link console.time()} and prints the result to `stdout`.
   */
  timeEnd(label?: string): void
  /**
   * The {@link console.warn()} function is an alias for {@link console.error()}.
   */
  warn(message?: any, ...optionalParams: any[]): void
}
