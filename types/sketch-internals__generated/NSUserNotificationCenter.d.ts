interface NSUserNotificationCenterUninitialized<InitializedType = NSUserNotificationCenter> extends NSObjectUninitialized<NSUserNotificationCenter> {}
interface NSUserNotificationCenter extends NSObject {
  scheduleNotification(notification: NSUserNotification): void;
  removeScheduledNotification(notification: NSUserNotification): void;
  deliverNotification(notification: NSUserNotification): void;
  removeDeliveredNotification(notification: NSUserNotification): void;
  removeAllDeliveredNotifications(): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  scheduledNotifications(): NSArray<any>;
  setScheduledNotifications(scheduledNotifications: NSArray<any> | any[]): void;
  deliveredNotifications(): NSArray<any>;
}
declare const NSUserNotificationCenter: {
  alloc(): NSUserNotificationCenterUninitialized;
  class(): NSUserNotificationCenter;
  defaultUserNotificationCenter(): NSUserNotificationCenter;

}

