interface BITCrashManagerUninitialized<InitializedType = BITCrashManager> extends BITHockeyBaseManagerUninitialized<BITCrashManager> {}

interface BITCrashManager extends BITHockeyBaseManager {
  setCrashCallbacks(callbacks: BITCrashManagerCallbacks): void;
  handleUserInput_withUserProvidedMetaData(userInput: BITCrashManagerUserInput, userProvidedMetaData: BITCrashMetaData): boolean;
  setCrashReportUIHandler(crashReportUIHandler: BITCustomCrashReportUIHandler): void;
  generateTestCrash(): void;

  askUserDetails(): boolean;
  setAskUserDetails(askUserDetails: boolean): void;
  disableMachExceptionHandler(): boolean;
  setDisableMachExceptionHandler(disableMachExceptionHandler: boolean): void;
  autoSubmitCrashReport(): boolean;
  setAutoSubmitCrashReport(autoSubmitCrashReport: boolean): void;
  didCrashInLastSession(): boolean;
  lastSessionCrashDetails(): BITCrashDetails;
  timeintervalCrashInLastSessionOccured(): NSTimeInterval;
}

declare const BITCrashManager: {
  alloc(): BITCrashManagerUninitialized;
  class(): BITCrashManager;
}

