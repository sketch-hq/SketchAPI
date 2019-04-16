interface MSSymbolMasterReferenceDescriptorUninitialized<InitializedType = MSSymbolMasterReferenceDescriptor> extends NSObjectUninitialized<MSSymbolMasterReferenceDescriptor> {
  initWithPasteboardPropertyList_ofType(propertyList: any, type: NSPasteboardType): InitializedType;
}

interface MSSymbolMasterReferenceDescriptor extends NSObject, INSPasteboardWriting, INSPasteboardReading {
  writableTypesForPasteboard(pasteboard: NSPasteboard): NSArray<any>;
  writingOptionsForType_pasteboard(type: NSPasteboardType, pasteboard: NSPasteboard): NSPasteboardWritingOptions;
  pasteboardPropertyListForType(type: NSPasteboardType): any;

  libraryLocation(): NSURL;
  setLibraryLocation(libraryLocation: NSURL): void;
  symbolID(): NSString;
  setSymbolID(symbolID: NSString | string): void;
}

declare const MSSymbolMasterReferenceDescriptor: {
  alloc(): MSSymbolMasterReferenceDescriptorUninitialized;
  class(): MSSymbolMasterReferenceDescriptor;
  pasteboardType(): NSString;
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

