interface NSUserNotificationUninitialized<InitializedType = NSUserNotification> extends NSObjectUninitialized<NSUserNotification> {
  init(): InitializedType;
}
interface NSUserNotification extends NSObject, INSCopying {

  title(): NSString;
  setTitle(title: NSString | string): void;
  subtitle(): NSString;
  setSubtitle(subtitle: NSString | string): void;
  informativeText(): NSString;
  setInformativeText(informativeText: NSString | string): void;
  actionButtonTitle(): NSString;
  setActionButtonTitle(actionButtonTitle: NSString | string): void;
  userInfo(): NSDictionary<any, any>;
  setUserInfo(userInfo: NSDictionary<any, any> | {[key: string]: any}): void;
  deliveryDate(): NSDate;
  setDeliveryDate(deliveryDate: NSDate): void;
  deliveryTimeZone(): NSTimeZone;
  setDeliveryTimeZone(deliveryTimeZone: NSTimeZone): void;
  deliveryRepeatInterval(): NSDateComponents;
  setDeliveryRepeatInterval(deliveryRepeatInterval: NSDateComponents): void;
  actualDeliveryDate(): NSDate;
  presented(): boolean;
  remote(): boolean;
  soundName(): NSString;
  setSoundName(soundName: NSString | string): void;
  hasActionButton(): boolean;
  setHasActionButton(hasActionButton: boolean): void;
  activationType(): NSUserNotificationActivationType;
  otherButtonTitle(): NSString;
  setOtherButtonTitle(otherButtonTitle: NSString | string): void;
  identifier(): NSString;
  setIdentifier(identifier: NSString | string): void;
  contentImage(): NSImage;
  setContentImage(contentImage: NSImage): void;
  hasReplyButton(): boolean;
  setHasReplyButton(hasReplyButton: boolean): void;
  responsePlaceholder(): NSString;
  setResponsePlaceholder(responsePlaceholder: NSString | string): void;
  response(): NSAttributedString;
  additionalActions(): NSArray<any>;
  setAdditionalActions(additionalActions: NSArray<any> | any[]): void;
  additionalActivationAction(): NSUserNotificationAction;
}
declare const NSUserNotification: {
  alloc(): NSUserNotificationUninitialized;
  class(): NSUserNotification;
}

