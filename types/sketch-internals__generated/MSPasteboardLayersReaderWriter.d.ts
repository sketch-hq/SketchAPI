interface MSPasteboardLayersReaderWriterUninitialized<InitializedType = MSPasteboardLayersReaderWriter> extends NSObjectUninitialized<MSPasteboardLayersReaderWriter> {}

interface MSPasteboardLayersReaderWriter extends NSObject, IMSPasteboardReader, IMSPasteboardWriter {
  supportedPasteboardTypes(): NSArray<any>;
  pasteboardDataFromPasteboard_colorSpace_options_sender(pasteboard: NSPasteboard, colorSpace: NSColorSpace, options: MSPasteboardReaderOptions, sender: any | null): MSPasteboardLayers;
  canWriteDataToPasteboard(pasteboard: NSPasteboard): boolean;
  supportedPasteboardTypes(): NSArray<any>;
  writeData_toPasteboard(data: MSPasteboardLayers, pasteboard: NSPasteboard): void;
}

declare const MSPasteboardLayersReaderWriter: {
  alloc(): MSPasteboardLayersReaderWriterUninitialized;
  class(): MSPasteboardLayersReaderWriter;
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

