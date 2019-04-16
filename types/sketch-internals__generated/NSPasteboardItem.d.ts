interface NSPasteboardItemUninitialized<InitializedType = NSPasteboardItem> extends NSObjectUninitialized<NSPasteboardItem> {
  initWithPasteboardPropertyList_ofType(propertyList: any, type: NSPasteboardType): InitializedType;
}

interface NSPasteboardItem extends NSObject, INSPasteboardWriting, INSPasteboardReading {
  availableTypeFromArray(types: NSArray<any> | any[]): NSPasteboardType;
  setDataProvider_forTypes(dataProvider: any, types: NSArray<any> | any[]): boolean;
  setData_forType(data: NSData, type: NSPasteboardType): boolean;
  setString_forType(string: NSString | string, type: NSPasteboardType): boolean;
  setPropertyList_forType(propertyList: any, type: NSPasteboardType): boolean;
  dataForType(type: NSPasteboardType): NSData;
  stringForType(type: NSPasteboardType): NSString;
  propertyListForType(type: NSPasteboardType): any;
  writableTypesForPasteboard(pasteboard: NSPasteboard): NSArray<any>;
  writingOptionsForType_pasteboard(type: NSPasteboardType, pasteboard: NSPasteboard): NSPasteboardWritingOptions;
  pasteboardPropertyListForType(type: NSPasteboardType): any;

  types(): NSArray<any>;
}

declare const NSPasteboardItem: {
  alloc(): NSPasteboardItemUninitialized;
  class(): NSPasteboardItem;
  readableTypesForPasteboard(pasteboard: NSPasteboard): NSArray<any>;
  readingOptionsForType_pasteboard(type: NSPasteboardType, pasteboard: NSPasteboard): NSPasteboardReadingOptions;
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

