interface BITCrashDetailsUninitialized<InitializedType = BITCrashDetails> extends NSObjectUninitialized<BITCrashDetails> {}
interface BITCrashDetails extends NSObject {

  incidentIdentifier(): NSString;
  reporterKey(): NSString;
  signal(): NSString;
  exceptionName(): NSString;
  exceptionReason(): NSString;
  appStartTime(): NSDate;
  crashTime(): NSDate;
  osVersion(): NSString;
  osBuild(): NSString;
  appVersion(): NSString;
  appBuild(): NSString;
  appProcessIdentifier(): NSUInteger;
}
declare const BITCrashDetails: {
  alloc(): BITCrashDetailsUninitialized;
  class(): BITCrashDetails;
}

