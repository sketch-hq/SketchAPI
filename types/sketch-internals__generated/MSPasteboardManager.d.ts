interface MSPasteboardManagerUninitialized<InitializedType = MSPasteboardManager> extends NSObjectUninitialized<MSPasteboardManager> {}

interface MSPasteboardManager extends NSObject {
  registerDefaultReadersAndWriters(): void;
}

declare const MSPasteboardManager: {
  alloc(): MSPasteboardManagerUninitialized;
  class(): MSPasteboardManager;
  readPasteboardLayersFromPasteboard_colorSpace_options(pasteboard: NSPasteboard, colorSpace: NSColorSpace, options: MSPasteboardReaderOptions): MSPasteboardLayers;
  readPasteboardLayersFromDrag_colorSpace(dragInfo: any, colorSpace: NSColorSpace): MSPasteboardLayers;
  writePasteboardLayers_toPasteboard(layers: MSPasteboardLayers, pasteboard: NSPasteboard): void;
  registerReader(reader: any): void;
  registerWriter(writer: any): void;
  registerViewForSupportedDraggedTypes(view: NSView): void;
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

