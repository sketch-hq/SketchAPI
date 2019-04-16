interface IBITCrashManagerDelegate {
  crashManagerWillSendCrashReport(crashManager: BITCrashManager): void;
  crashManager_didFailWithError(crashManager: BITCrashManager, error: NSError): void;
  crashManagerDidFinishSendingCrashReport(crashManager: BITCrashManager): void;
}

