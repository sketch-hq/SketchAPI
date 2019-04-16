interface NSSharingServiceUninitialized<InitializedType = NSSharingService> extends NSObjectUninitialized<NSSharingService> {
  initWithTitle_image_alternateImage_handler(title: NSString | string, image: NSImage, alternateImage: NSImage | null, block: Block): InitializedType;
}

interface NSSharingService extends NSObject {
  canPerformWithItems(items: NSArray<any> | any[] | null): boolean;
  performWithItems(items: NSArray<any> | any[]): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  title(): NSString;
  image(): NSImage;
  alternateImage(): NSImage;
  menuItemTitle(): NSString;
  setMenuItemTitle(menuItemTitle: NSString | string): void;
  recipients(): NSArray<any>;
  setRecipients(recipients: NSArray<any> | any[]): void;
  subject(): NSString;
  setSubject(subject: NSString | string): void;
  messageBody(): NSString;
  permanentLink(): NSURL;
  accountName(): NSString;
  attachmentFileURLs(): NSArray<any>;
}

declare const NSSharingService: {
  alloc(): NSSharingServiceUninitialized;
  class(): NSSharingService;
  sharingServicesForItems(items: NSArray<any> | any[]): NSArray<any>;
  sharingServiceNamed(serviceName: NSSharingServiceName): NSSharingService;
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

