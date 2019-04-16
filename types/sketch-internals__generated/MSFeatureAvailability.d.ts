interface MSFeatureAvailabilityUninitialized<InitializedType = MSFeatureAvailability> extends NSObjectUninitialized<MSFeatureAvailability> {}

interface MSFeatureAvailability extends NSObject {
}

declare const MSFeatureAvailability: {
  alloc(): MSFeatureAvailabilityUninitialized;
  class(): MSFeatureAvailability;
  enableFeatureAvailability(): void;
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
  libraryStylesEnabled(): boolean;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setLibraryStylesEnabled(libraryStylesEnabled: boolean): void;
  feature14414Enabled(): boolean;
  isComponentsPanelEnabled(): boolean;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setIsComponentsPanelEnabled(isComponentsPanelEnabled: boolean): void;
  builtInRemoteLibrariesEnabled(): boolean;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setBuiltInRemoteLibrariesEnabled(builtInRemoteLibrariesEnabled: boolean): void;
  cloudDocumentsEnabled(): boolean;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCloudDocumentsEnabled(cloudDocumentsEnabled: boolean): void;
  inferredLayoutEnabled(): boolean;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setInferredLayoutEnabled(inferredLayoutEnabled: boolean): void;
  accessInstanceVariablesDirectly(): boolean;

}

