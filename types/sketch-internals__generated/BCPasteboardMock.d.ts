interface BCPasteboardMockUninitialized<InitializedType = BCPasteboardMock> extends NSObjectUninitialized<BCPasteboardMock> {}

interface BCPasteboardMock extends NSObject {
  declareTypes_owner(types: NSArray<any> | any[], owner: any): void;
  addTypes_owner(types: NSArray<any> | any[], owner: any): void;
  setData_forType(data: NSData, dataType: NSString | string): void;
  dataForType(type: NSString | string): NSData;
  setString_forType(string: NSString | string, dataType: NSString | string): boolean;
  stringForType(dataType: NSString | string): NSString;
  setPropertyList_forType(plist: any, dataType: NSString | string): boolean;
  propertyListForType(dataType: NSString | string): any;
  availableTypeFromArray(types: NSArray<any> | any[]): NSString;
  types(): NSArray<any>;
  writeObjects(objects: NSArray<any> | any[]): boolean;
  clearContents(): void;

  name(): NSString;
  changeCount(): NSInteger;
}

declare const BCPasteboardMock: {
  alloc(): BCPasteboardMockUninitialized;
  class(): BCPasteboardMock;
  generalPasteboard(): NSPasteboard;
  pasteboardWithName(name: NSString | string): NSPasteboard;
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

