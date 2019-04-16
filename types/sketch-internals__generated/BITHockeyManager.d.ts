interface BITHockeyManagerUninitialized<InitializedType = BITHockeyManager> extends NSObjectUninitialized<BITHockeyManager> {}
interface BITHockeyManager extends NSObject {
  configureWithIdentifier(appIdentifier: NSString | string): void;
  configureWithIdentifier_delegate(appIdentifier: NSString | string, delegate: any): void;
  startManager(): void;
  setUserID(userID: NSString | string): void;
  setUserName(userName: NSString | string): void;
  setUserEmail(userEmail: NSString | string): void;
  setLogHandler(logHandler: BITLogHandler): void;
  testIdentifier(): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  serverURL(): NSString;
  setServerURL(serverURL: NSString | string): void;
  crashManager(): BITCrashManager;
  disableCrashManager(): boolean;
  setDisableCrashManager(disableCrashManager: boolean): void;
  feedbackManager(): BITFeedbackManager;
  disableFeedbackManager(): boolean;
  setDisableFeedbackManager(disableFeedbackManager: boolean): void;
  metricsManager(): BITMetricsManager;
  disableMetricsManager(): boolean;
  setDisableMetricsManager(disableMetricsManager: boolean): void;
  logLevel(): BITLogLevel;
  setLogLevel(logLevel: BITLogLevel): void;
}
declare const BITHockeyManager: {
  alloc(): BITHockeyManagerUninitialized;
  class(): BITHockeyManager;  sharedHockeyManager(): BITHockeyManager;

}

