interface MSCrashLogManagerUninitialized<InitializedType = MSCrashLogManager> extends NSObjectUninitialized<MSCrashLogManager> {}
interface MSCrashLogManager extends NSObject, IMSActionObserver, IBITHockeyManagerDelegate, IBITCrashManagerDelegate {
  clearEnvironment(): void;
  setEnvironmentValue_forKey(value: NSString | string, key: NSString | string): void;
  log(text: NSString | string): void;
  setup(): boolean;

  text(): NSString;
}
declare const MSCrashLogManager: {
  alloc(): MSCrashLogManagerUninitialized;
  class(): MSCrashLogManager;
}

