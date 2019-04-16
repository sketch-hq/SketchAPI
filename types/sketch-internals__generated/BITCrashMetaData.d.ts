interface BITCrashMetaDataUninitialized<InitializedType = BITCrashMetaData> extends NSObjectUninitialized<BITCrashMetaData> {}
interface BITCrashMetaData extends NSObject {

  userDescription(): NSString;
  setUserDescription(userDescription: NSString | string): void;
  userName(): NSString;
  setUserName(userName: NSString | string): void;
  userEmail(): NSString;
  setUserEmail(userEmail: NSString | string): void;
  userID(): NSString;
  setUserID(userID: NSString | string): void;
}
declare const BITCrashMetaData: {
  alloc(): BITCrashMetaDataUninitialized;
  class(): BITCrashMetaData;
}

