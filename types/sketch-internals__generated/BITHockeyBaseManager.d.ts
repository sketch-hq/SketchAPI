interface BITHockeyBaseManagerUninitialized<InitializedType = BITHockeyBaseManager> extends NSObjectUninitialized<BITHockeyBaseManager> {}
interface BITHockeyBaseManager extends NSObject {

  serverURL(): NSString;
  setServerURL(serverURL: NSString | string): void;
}
declare const BITHockeyBaseManager: {
  alloc(): BITHockeyBaseManagerUninitialized;
  class(): BITHockeyBaseManager;
}

