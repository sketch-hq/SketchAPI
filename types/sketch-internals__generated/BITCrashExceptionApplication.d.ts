interface BITCrashExceptionApplicationUninitialized<InitializedType = BITCrashExceptionApplication> extends NSApplicationUninitialized<BITCrashExceptionApplication> {}
interface BITCrashExceptionApplication extends NSApplication {
}
declare const BITCrashExceptionApplication: {
  alloc(): BITCrashExceptionApplicationUninitialized;
  class(): BITCrashExceptionApplication;
}

