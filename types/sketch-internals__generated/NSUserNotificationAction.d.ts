interface NSUserNotificationActionUninitialized<InitializedType = NSUserNotificationAction> extends NSObjectUninitialized<NSUserNotificationAction> {}
interface NSUserNotificationAction extends NSObject, INSCopying {

  identifier(): NSString;
  title(): NSString;
}
declare const NSUserNotificationAction: {
  alloc(): NSUserNotificationActionUninitialized;
  class(): NSUserNotificationAction;  actionWithIdentifier_title(identifier: NSString | string | null, title: NSString | string | null): NSUserNotificationAction;

}

