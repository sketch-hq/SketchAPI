interface NSNibUninitialized<InitializedType = NSNib> extends NSObjectUninitialized<NSNib> {
  initWithNibNamed_bundle(nibName: NSNibName, bundle: NSBundle | null): InitializedType;
  initWithNibData_bundle(nibData: NSData, bundle: NSBundle | null): InitializedType;
  initWithContentsOfURL(nibFileURL: NSURL): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSNib extends NSObject, INSCoding {
  instantiateWithOwner_topLevelObjects(owner: any | null, topLevelObjects: MOPointer<NSArray<any>>): boolean;
  instantiateNibWithExternalNameTable(externalNameTable: NSDictionary<any, any> | {[key: string]: any}): boolean;
  instantiateNibWithOwner_topLevelObjects(owner: any, topLevelObjects: MOPointer<NSArray<any>>): boolean;
  encodeWithCoder(aCoder: NSCoder): void;
}

declare const NSNib: {
  alloc(): NSNibUninitialized;
  class(): NSNib;
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

