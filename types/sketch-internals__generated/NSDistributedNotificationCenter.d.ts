interface NSDistributedNotificationCenterUninitialized<InitializedType = NSDistributedNotificationCenter> extends NSNotificationCenterUninitialized<NSDistributedNotificationCenter> {}

interface NSDistributedNotificationCenter extends NSNotificationCenter {
  addObserver_selector_name_object_suspensionBehavior(observer: any, selector: string, name: NSNotificationName | null, object: NSString | string | null, suspensionBehavior: NSNotificationSuspensionBehavior): void;
  postNotificationName_object_userInfo_deliverImmediately(name: NSNotificationName, object: NSString | string | null, userInfo: NSDictionary<any, any> | {[key: string]: any} | null, deliverImmediately: boolean): void;
  postNotificationName_object_userInfo_options(name: NSNotificationName, object: NSString | string | null, userInfo: NSDictionary<any, any> | {[key: string]: any} | null, options: NSDistributedNotificationOptions): void;
  addObserver_selector_name_object(observer: any, aSelector: string, aName: NSNotificationName | null, anObject: NSString | string | null): void;
  postNotificationName_object(aName: NSNotificationName, anObject: NSString | string | null): void;
  postNotificationName_object_userInfo(aName: NSNotificationName, anObject: NSString | string | null, aUserInfo: NSDictionary<any, any> | {[key: string]: any} | null): void;
  removeObserver_name_object(observer: any, aName: NSNotificationName | null, anObject: NSString | string | null): void;

  suspended(): boolean;
  setSuspended(suspended: boolean): void;
}

declare const NSDistributedNotificationCenter: {
  alloc(): NSDistributedNotificationCenterUninitialized;
  class(): NSDistributedNotificationCenter;
  notificationCenterForType(notificationCenterType: NSDistributedNotificationCenterType): NSDistributedNotificationCenter;
  defaultCenter(): NSDistributedNotificationCenter;
  defaultCenter(): NSNotificationCenter;

}

