interface SUGuidedPackageInstallerUninitialized<InitializedType = SUGuidedPackageInstaller> extends NSObjectUninitialized<SUGuidedPackageInstaller> {
  initWithPackagePath_installationPath_fileOperationToolPath(packagePath: NSString | string, installationPath: NSString | string, fileOperationToolPath: NSString | string): InitializedType;
}

interface SUGuidedPackageInstaller extends NSObject, ISUInstallerProtocol {
  performInitialInstallation(error: MOPointer<NSError>): boolean;
  performFinalInstallationProgressBlock_error(cb: Block | null, error: MOPointer<NSError>): boolean;
  canInstallSilently(): boolean;
  installationPath(): NSString;
}

declare const SUGuidedPackageInstaller: {
  alloc(): SUGuidedPackageInstallerUninitialized;
  class(): SUGuidedPackageInstaller;
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

