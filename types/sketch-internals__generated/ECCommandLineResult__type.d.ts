declare enum ECCommandLineResult {
  ECCommandLineResultOKButTerminate = -2,
  ECCommandLineResultStayRunning = -1,
  ECCommandLineResultOK = 0,
  ECCommandLineResultUnknownCommand,
  ECCommandLineResultMissingCommandClass,
  ECCommandLineResultNotImplemented,
  ECCommandLineResultMissingArguments,
  ECCommandLineResultImplementationReturnedError,
  ECCommandLineResultMissingBundle,
  ECCommandLineResultJSONConversionFailed,
  ECCommandLineResultJSONOutputFailed,
}

