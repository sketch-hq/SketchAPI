interface NSNotificationQueueUninitialized<InitializedType = NSNotificationQueue> extends NSObjectUninitialized<NSNotificationQueue> {
  initWithNotificationCenter(notificationCenter: NSNotificationCenter): InitializedType;
}
interface NSNotificationQueue extends NSObject {
  enqueueNotification_postingStyle(notification: NSNotification, postingStyle: NSPostingStyle): void;
  enqueueNotification_postingStyle_coalesceMask_forModes(notification: NSNotification, postingStyle: NSPostingStyle, coalesceMask: NSNotificationCoalescing, modes: NSArray<any> | any[] | null): void;
  dequeueNotificationsMatching_coalesceMask(notification: NSNotification, coalesceMask: NSUInteger): void;
}
declare const NSNotificationQueue: {
  alloc(): NSNotificationQueueUninitialized;
  class(): NSNotificationQueue;
  defaultQueue(): NSNotificationQueue;

}

