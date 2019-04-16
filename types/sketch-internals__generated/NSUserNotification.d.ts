interface NSUserNotificationUninitialized<InitializedType = NSUserNotification> extends NSObjectUninitialized<NSUserNotification> {}

interface NSUserNotification extends NSObject, INSCopying {
  copyWithZone(zone: NSZone | null): any;

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
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  accessInstanceVariablesDirectly(): boolean;

}

