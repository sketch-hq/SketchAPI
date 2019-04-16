interface NSProcessInfoUninitialized<InitializedType = NSProcessInfo> extends NSObjectUninitialized<NSProcessInfo> {}
interface NSProcessInfo extends NSObject {
  operatingSystem(): NSUInteger;
  operatingSystemName(): NSString;
  isOperatingSystemAtLeastVersion(version: NSOperatingSystemVersion): boolean;
  disableSuddenTermination(): void;
  enableSuddenTermination(): void;
  disableAutomaticTermination(reason: NSString | string): void;
  enableAutomaticTermination(reason: NSString | string): void;
  beginActivityWithOptions_reason(options: NSActivityOptions, reason: NSString | string): any;
  endActivity(activity: any): void;
  performActivityWithOptions_reason_usingBlock(options: NSActivityOptions, reason: NSString | string, block: Block): void;
  performExpiringActivityWithReason_usingBlock(reason: NSString | string, block: Block): void;

  environment(): NSDictionary<any, any>;
  arguments(): NSArray<any>;
  hostName(): NSString;
  processName(): NSString;
  setProcessName(processName: NSString | string): void;
  processIdentifier(): number;
  globallyUniqueString(): NSString;
  operatingSystemVersionString(): NSString;
  operatingSystemVersion(): NSOperatingSystemVersion;
  processorCount(): NSUInteger;
  activeProcessorCount(): NSUInteger;
  physicalMemory(): number;
  systemUptime(): NSTimeInterval;
  automaticTerminationSupportEnabled(): boolean;
  setAutomaticTerminationSupportEnabled(automaticTerminationSupportEnabled: boolean): void;
  userName(): NSString;
  fullUserName(): NSString;
  thermalState(): NSProcessInfoThermalState;
  lowPowerModeEnabled(): boolean;
}
declare const NSProcessInfo: {
  alloc(): NSProcessInfoUninitialized;
  class(): NSProcessInfo;
  processInfo(): NSProcessInfo;
  runningTests(): boolean;

}

