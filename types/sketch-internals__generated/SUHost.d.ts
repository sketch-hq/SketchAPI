interface SUHostUninitialized<InitializedType = SUHost> extends NSObjectUninitialized<SUHost> {
  initWithBundle(aBundle: NSBundle): InitializedType;
}
interface SUHost extends NSObject {
  objectForInfoDictionaryKey(key: NSString | string): any;
  boolForInfoDictionaryKey(key: NSString | string): boolean;
  objectForUserDefaultsKey(defaultName: NSString | string): any;
  setObject_forUserDefaultsKey(value: any, defaultName: NSString | string): void;
  boolForUserDefaultsKey(defaultName: NSString | string): boolean;
  setBool_forUserDefaultsKey(value: boolean, defaultName: NSString | string): void;
  objectForKey(key: NSString | string): any;
  boolForKey(key: NSString | string): boolean;

  bundle(): NSBundle;
  bundlePath(): NSString;
  name(): NSString;
  version(): NSString;
  displayVersion(): NSString;
  publicKeys(): SUPublicKeys;
  runningOnReadOnlyVolume(): boolean;
  publicDSAKeyFileKey(): NSString;
}
declare const SUHost: {
  alloc(): SUHostUninitialized;
  class(): SUHost;
}

