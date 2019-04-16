interface NSColorListUninitialized<InitializedType = NSColorList> extends NSObjectUninitialized<NSColorList> {
  initWithName(name: NSColorListName): InitializedType;
  initWithName_fromFile(name: NSColorListName, path: NSString | string | null): InitializedType;
}

interface NSColorList extends NSObject, INSSecureCoding {
  setColor_forKey(color: NSColor, key: NSColorName): void;
  insertColor_key_atIndex(color: NSColor, key: NSColorName, loc: NSUInteger): void;
  removeColorWithKey(key: NSColorName): void;
  colorWithKey(key: NSColorName): NSColor;
  writeToURL_error(url: NSURL | null, errPtr: MOPointer<NSError>): boolean;
  writeToFile(path: NSString | string | null): boolean;
  removeFile(): void;

  name(): NSColorListName;
  allKeys(): NSArray<any>;
  editable(): boolean;
}

declare const NSColorList: {
  alloc(): NSColorListUninitialized;
  class(): NSColorList;
  colorListNamed(name: NSColorListName): NSColorList;
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
  availableColorLists(): NSArray<any>;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

