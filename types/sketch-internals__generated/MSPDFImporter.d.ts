interface MSPDFImporterUninitialized<InitializedType = MSPDFImporter> extends NSObjectUninitialized<MSPDFImporter> {}

interface MSPDFImporter extends NSObject, IMSImporter {
  prepareToImportFromURL(url: NSURL): NSUInteger;
  importAsLayer(): MSLayer;
  prepareToImportFromData(data: NSData): NSUInteger;
  prepareToImportFromURL(url: NSURL): NSUInteger;
  importIntoPage_name_progress(page: MSPage, name: NSString | string, progress: BCVoidBlock): void;
  finishImporting(): void;
  firstPhaseSubtitle(): NSString;
  secondPhaseSubtitleForValue_maximum(value: NSInteger, maximum: NSInteger): NSString;
  shouldExpandPages(): boolean;
  shouldCollapseSinglePage(): boolean;
  importAsLayer(): MSLayer;
}

declare const MSPDFImporter: {
  alloc(): MSPDFImporterUninitialized;
  class(): MSPDFImporter;
  pdfImporter(): MSPDFImporter;
  epsImporter(): MSPDFImporter;
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

