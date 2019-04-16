interface NSUserActivityUninitialized<InitializedType = NSUserActivity> extends NSObjectUninitialized<NSUserActivity> {
  initWithActivityType(activityType: NSString | string): InitializedType;
  init(): InitializedType;
}
interface NSUserActivity extends NSObject {
  addUserInfoEntriesFromDictionary(otherDictionary: NSDictionary<any, any> | {[key: string]: any}): void;
  becomeCurrent(): void;
  resignCurrent(): void;
  invalidate(): void;
  getContinuationStreamsWithCompletionHandler(completionHandler: Block): void;

  activityType(): NSString;
  title(): NSString;
  setTitle(title: NSString | string): void;
  userInfo(): NSDictionary<any, any>;
  setUserInfo(userInfo: NSDictionary<any, any> | {[key: string]: any}): void;
  requiredUserInfoKeys(): NSSet<any>;
  setRequiredUserInfoKeys(requiredUserInfoKeys: NSSet<any>): void;
  needsSave(): boolean;
  setNeedsSave(needsSave: boolean): void;
  webpageURL(): NSURL;
  setWebpageURL(webpageURL: NSURL): void;
  referrerURL(): NSURL;
  setReferrerURL(referrerURL: NSURL): void;
  expirationDate(): NSDate;
  setExpirationDate(expirationDate: NSDate): void;
  keywords(): NSSet<any>;
  setKeywords(keywords: NSSet<any>): void;
  supportsContinuationStreams(): boolean;
  setSupportsContinuationStreams(supportsContinuationStreams: boolean): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  eligibleForHandoff(): boolean;
  setEligibleForHandoff(eligibleForHandoff: boolean): void;
  eligibleForSearch(): boolean;
  setEligibleForSearch(eligibleForSearch: boolean): void;
  eligibleForPublicIndexing(): boolean;
  setEligibleForPublicIndexing(eligibleForPublicIndexing: boolean): void;
  eligibleForPrediction(): boolean;
  setEligibleForPrediction(eligibleForPrediction: boolean): void;
  persistentIdentifier(): NSUserActivityPersistentIdentifier;
  setPersistentIdentifier(persistentIdentifier: NSUserActivityPersistentIdentifier): void;
}
declare const NSUserActivity: {
  alloc(): NSUserActivityUninitialized;
  class(): NSUserActivity;
}

