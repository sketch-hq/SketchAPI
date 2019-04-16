interface BITCrashExceptionApplicationUninitialized<InitializedType = BITCrashExceptionApplication> extends NSApplicationUninitialized<BITCrashExceptionApplication> {}

interface BITCrashExceptionApplication extends NSApplication {
}

declare const BITCrashExceptionApplication: {
  alloc(): BITCrashExceptionApplicationUninitialized;
  class(): BITCrashExceptionApplication;
  detachDrawingThread_toTarget_withObject(selector: string, target: any, argument: any | null): void;
  sharedApplication(): NSApplication;
  restorableStateKeyPaths(): NSArray<any>;

}

