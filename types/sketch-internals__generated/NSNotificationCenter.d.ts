interface NSNotificationCenterUninitialized<InitializedType = NSNotificationCenter> extends NSObjectUninitialized<NSNotificationCenter> {}
interface NSNotificationCenter extends NSObject {
  addObserver_selector_name_object(observer: any, aSelector: string, aName: NSNotificationName | null, anObject: any | null): void;
  postNotification(notification: NSNotification): void;
  postNotificationName_object(aName: NSNotificationName, anObject: any | null): void;
  postNotificationName_object_userInfo(aName: NSNotificationName, anObject: any | null, aUserInfo: NSDictionary<any, any> | {[key: string]: any} | null): void;
  removeObserver(observer: any): void;
  removeObserver_name_object(observer: any, aName: NSNotificationName | null, anObject: any | null): void;
  addObserverForName_object_queue_usingBlock(name: NSNotificationName | null, obj: any | null, queue: NSOperationQueue | null, block: Block): any;
}
declare const NSNotificationCenter: {
  alloc(): NSNotificationCenterUninitialized;
  class(): NSNotificationCenter;
  defaultCenter(): NSNotificationCenter;

}

