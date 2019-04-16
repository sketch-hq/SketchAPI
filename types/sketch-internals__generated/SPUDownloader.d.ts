interface SPUDownloaderUninitialized<InitializedType = SPUDownloader> extends NSObjectUninitialized<SPUDownloader> {
  initWithDelegate(delegate: any): InitializedType;
}

interface SPUDownloader extends NSObject, ISPUDownloaderProtocol {
  startPersistentDownloadWithRequest_bundleIdentifier_desiredFilename(request: SPUURLRequest, bundleIdentifier: NSString | string, desiredFilename: NSString | string): void;
  startTemporaryDownloadWithRequest(request: SPUURLRequest): void;
  downloadDidFinish(): void;
  cleanup(): void;
  cancel(): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  bundleIdentifier(): NSString;
  setBundleIdentifier(bundleIdentifier: NSString | string): void;
  desiredFilename(): NSString;
  setDesiredFilename(desiredFilename: NSString | string): void;
  downloadFilename(): NSString;
  setDownloadFilename(downloadFilename: NSString | string): void;
  disabledAutomaticTermination(): boolean;
  setDisabledAutomaticTermination(disabledAutomaticTermination: boolean): void;
  mode(): SPUDownloadMode;
  setMode(mode: SPUDownloadMode): void;
  receivedExpectedBytes(): boolean;
  setReceivedExpectedBytes(receivedExpectedBytes: boolean): void;
}

declare const SPUDownloader: {
  alloc(): SPUDownloaderUninitialized;
  class(): SPUDownloader;
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

