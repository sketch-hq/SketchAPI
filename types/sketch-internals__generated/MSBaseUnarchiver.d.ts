interface MSBaseUnarchiverUninitialized<InitializedType = MSBaseUnarchiver> extends NSObjectUninitialized<MSBaseUnarchiver> {}

interface MSBaseUnarchiver extends NSObject {
  unarchiveObjectAsVersion_corruptionDetected_error(version: MSDocumentVersion, corruption: boolean | null, error: MOPointer<NSError>): any;
  decodeObjectOfClass_forKey(className: any, key: NSString | string): any;
  decodeObjectOfClasses_forKey(classes: NSSet<any> | null, key: NSString | string): any;
  instanciateObject(object: NSObject): any;
  containsValueForKey(key: NSString | string): boolean;
  decodeObjectForKey(key: NSString | string): any;
  decodeDoubleForKey_withDefault(key: NSString | string, defaultValue: number): number;
  decodeBoolForKey_withDefault(key: NSString | string, defaultValue: boolean): boolean;
  decodeRectForKey_withDefault(key: NSString | string, defaultValue: CGRect): CGRect;
  decodePointForKey_withDefault(key: NSString | string, defaultValue: CGPoint): CGPoint;
  decodeIntegerForKey_withDefault(key: NSString | string, defaultValue: NSInteger): NSInteger;
  decodeSizeForKey_withDefault(key: NSString | string, defaultValue: CGSize): CGSize;

  currentVersion(): NSInteger;
  setCurrentVersion(currentVersion: NSInteger): void;
  archiveVersion(): NSInteger;
  setArchiveVersion(archiveVersion: NSInteger): void;
  corruptionDetected(): boolean;
  setCorruptionDetected(corruptionDetected: boolean): void;
  actualSymbolIDs(): NSArray<any>;
  setActualSymbolIDs(actualSymbolIDs: NSArray<any> | any[]): void;
  decodedObjectStack(): NSPointerArray;
}

declare const MSBaseUnarchiver: {
  alloc(): MSBaseUnarchiverUninitialized;
  class(): MSBaseUnarchiver;
  unarchiveObjectWithData(data: NSData): any;
  unarchiveObjectWithData_actualVersion_error(data: NSData, actualVersion: MSDocumentVersion | null, error: MOPointer<NSError>): any;
  unarchiveObjectWithData_asVersion_corruptionDetected_error(data: NSData, version: MSDocumentVersion, corruption: boolean | null, error: MOPointer<NSError>): any;
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

