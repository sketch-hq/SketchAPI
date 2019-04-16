interface SUPlainInstallerUninitialized<InitializedType = SUPlainInstaller> extends NSObjectUninitialized<SUPlainInstaller> {
  initWithHost_bundlePath_installationPath_fileOperationToolPath(host: SUHost, bundlePath: NSString | string, installationPath: NSString | string, fileOperationToolPath: NSString | string): InitializedType;
}

interface SUPlainInstaller extends NSObject, ISUInstallerProtocol {
  performInitialInstallation(error: MOPointer<NSError>): boolean;
  performFinalInstallationProgressBlock_error(cb: Block | null, error: MOPointer<NSError>): boolean;
  canInstallSilently(): boolean;
  installationPath(): NSString;
}

declare const SUPlainInstaller: {
  alloc(): SUPlainInstallerUninitialized;
  class(): SUPlainInstaller;
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

