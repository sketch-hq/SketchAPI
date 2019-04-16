interface NSBundleUninitialized<InitializedType = NSBundle> extends NSObjectUninitialized<NSBundle> {
  initWithPath(path: NSString | string): InitializedType;
  initWithURL(url: NSURL): InitializedType;
  initializeAppResourceBundle(bundle: NSBundle): InitializedType;
  initializeAppResourceBundleFromClass(klass: any): InitializedType;
}

interface NSBundle extends NSObject {
  load(): boolean;
  unload(): boolean;
  preflightAndReturnError(error: MOPointer<NSError>): boolean;
  loadAndReturnError(error: MOPointer<NSError>): boolean;
  URLForAuxiliaryExecutable(executableName: NSString | string): NSURL;
  pathForAuxiliaryExecutable(executableName: NSString | string): NSString;
  URLForResource_withExtension(name: NSString | string | null, ext: NSString | string | null): NSURL;
  URLForResource_withExtension_subdirectory(name: NSString | string | null, ext: NSString | string | null, subpath: NSString | string | null): NSURL;
  URLForResource_withExtension_subdirectory_localization(name: NSString | string | null, ext: NSString | string | null, subpath: NSString | string | null, localizationName: NSString | string | null): NSURL;
  URLsForResourcesWithExtension_subdirectory(ext: NSString | string | null, subpath: NSString | string | null): NSArray<any>;
  URLsForResourcesWithExtension_subdirectory_localization(ext: NSString | string | null, subpath: NSString | string | null, localizationName: NSString | string | null): NSArray<any>;
  pathForResource_ofType_inDirectory(name: NSString | string | null, ext: NSString | string | null, subpath: NSString | string | null): NSString;
  pathsForResourcesOfType_inDirectory(ext: NSString | string | null, subpath: NSString | string | null): NSArray<any>;
  pathForResource_ofType(name: NSString | string | null, ext: NSString | string | null): NSString;
  pathForResource_ofType_inDirectory_forLocalization(name: NSString | string | null, ext: NSString | string | null, subpath: NSString | string | null, localizationName: NSString | string | null): NSString;
  pathsForResourcesOfType_inDirectory_forLocalization(ext: NSString | string | null, subpath: NSString | string | null, localizationName: NSString | string | null): NSArray<any>;
  objectForInfoDictionaryKey(key: NSString | string): any;
  classNamed(className: NSString | string): any;
  setPreservationPriority_forTags(priority: number, tags: NSSet<any>): void;
  preservationPriorityForTag(tag: NSString | string): number;
  contextHelpForKey(key: NSHelpManagerContextHelpKey): NSAttributedString;
  imageForResource(name: NSImageName): NSImage;
  pathForImageResource(name: NSImageName): NSString;
  URLForImageResource(name: NSImageName): NSURL;
  loadNibNamed_owner_topLevelObjects(nibName: NSNibName, owner: any | null, topLevelObjects: NSArray<any> | any[]): boolean;
  loadNibFile_externalNameTable_withZone(fileName: NSString | string, context: NSDictionary<any, any> | {[key: string]: any}, zone: NSZone): boolean;
  pathForSoundResource(name: NSSoundName): NSString;
  bundleName(): NSString;
  bundleVersion(): NSString;
  bundleBuild(): NSString;
  bundleFullVersion(): NSString;
  bundleCopyright(): NSString;

  loaded(): boolean;
  bundleURL(): NSURL;
  resourceURL(): NSURL;
  executableURL(): NSURL;
  privateFrameworksURL(): NSURL;
  sharedFrameworksURL(): NSURL;
  sharedSupportURL(): NSURL;
  builtInPlugInsURL(): NSURL;
  appStoreReceiptURL(): NSURL;
  bundlePath(): NSString;
  resourcePath(): NSString;
  executablePath(): NSString;
  privateFrameworksPath(): NSString;
  sharedFrameworksPath(): NSString;
  sharedSupportPath(): NSString;
  builtInPlugInsPath(): NSString;
  bundleIdentifier(): NSString;
  infoDictionary(): NSDictionary<any, any>;
  localizedInfoDictionary(): NSDictionary<any, any>;
  principalClass(): any;
  preferredLocalizations(): NSArray<any>;
  localizations(): NSArray<any>;
  developmentLocalization(): NSString;
  executableArchitectures(): NSArray<any>;
}

declare const NSBundle: {
  alloc(): NSBundleUninitialized;
  class(): NSBundle;
  bundleWithPath(path: NSString | string): NSBundle;
  bundleWithURL(url: NSURL): NSBundle;
  bundleForClass(aClass: any): NSBundle;
  bundleWithIdentifier(identifier: NSString | string): NSBundle;
  URLForResource_withExtension_subdirectory_inBundleWithURL(name: NSString | string | null, ext: NSString | string | null, subpath: NSString | string | null, bundleURL: NSURL): NSURL;
  URLsForResourcesWithExtension_subdirectory_inBundleWithURL(ext: NSString | string | null, subpath: NSString | string | null, bundleURL: NSURL): NSArray<any>;
  preferredLocalizationsFromArray(localizationsArray: NSArray<any> | any[]): NSArray<any>;
  preferredLocalizationsFromArray_forPreferences(localizationsArray: NSArray<any> | any[], preferencesArray: NSArray<any> | any[] | null): NSArray<any>;
  loadNibNamed_owner(nibName: NSString | string, owner: any): boolean;
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
  mainBundle(): NSBundle;
  allBundles(): NSArray<any>;
  allFrameworks(): NSArray<any>;
  appResourceBundle(): NSBundle;
  accessInstanceVariablesDirectly(): boolean;

}

