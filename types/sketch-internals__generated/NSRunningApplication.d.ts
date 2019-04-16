interface NSRunningApplicationUninitialized<InitializedType = NSRunningApplication> extends NSObjectUninitialized<NSRunningApplication> {}
interface NSRunningApplication extends NSObject {
  hide(): boolean;
  unhide(): boolean;
  activateWithOptions(options: NSApplicationActivationOptions): boolean;
  terminate(): boolean;
  forceTerminate(): boolean;

  terminated(): boolean;
  finishedLaunching(): boolean;
  hidden(): boolean;
  active(): boolean;
  ownsMenuBar(): boolean;
  activationPolicy(): NSApplicationActivationPolicy;
  localizedName(): NSString;
  bundleIdentifier(): NSString;
  bundleURL(): NSURL;
  executableURL(): NSURL;
  processIdentifier(): pid_t;
  launchDate(): NSDate;
  icon(): NSImage;
  executableArchitecture(): NSInteger;
}
declare const NSRunningApplication: {
  alloc(): NSRunningApplicationUninitialized;
  class(): NSRunningApplication;  runningApplicationsWithBundleIdentifier(bundleIdentifier: NSString | string): NSArray<any>;
  runningApplicationWithProcessIdentifier(pid: pid_t): NSRunningApplication;
  terminateAutomaticallyTerminableApplications(): void;

  currentApplication(): NSRunningApplication;

}

