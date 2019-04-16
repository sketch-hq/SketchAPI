interface NSNotificationUninitialized<InitializedType = NSNotification> extends NSObjectUninitialized<NSNotification> {
  initWithName_object_userInfo(name: NSNotificationName, object: any | null, userInfo: NSDictionary<any, any> | {[key: string]: any} | null): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
  init(): InitializedType;
}
interface NSNotification extends NSObject, INSCopying, INSCoding {

  name(): NSNotificationName;
  object(): any;
  userInfo(): NSDictionary<any, any>;
}
declare const NSNotification: {
  alloc(): NSNotificationUninitialized;
  class(): NSNotification;  notificationWithName_object(aName: NSNotificationName, anObject: any | null): NSNotification;
  notificationWithName_object_userInfo(aName: NSNotificationName, anObject: any | null, aUserInfo: NSDictionary<any, any> | {[key: string]: any} | null): NSNotification;

}

