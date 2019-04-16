interface INSUserNotificationCenterDelegate {
  userNotificationCenter_didDeliverNotification(center: NSUserNotificationCenter, notification: NSUserNotification): void;
  userNotificationCenter_didActivateNotification(center: NSUserNotificationCenter, notification: NSUserNotification): void;
  userNotificationCenter_shouldPresentNotification(center: NSUserNotificationCenter, notification: NSUserNotification): boolean;
}

