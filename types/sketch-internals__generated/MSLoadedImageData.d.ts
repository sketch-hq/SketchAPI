interface MSLoadedImageDataUninitialized<InitializedType = MSLoadedImageData> extends NSObjectUninitialized<MSLoadedImageData> {}

interface MSLoadedImageData extends NSObject {

  image(): MSImageData;
  setImage(image: MSImageData): void;
  size(): NSSize;
  setSize(size: NSSize): void;
  intendedDPI(): NSInteger;
  setIntendedDPI(intendedDPI: NSInteger): void;
}

declare const MSLoadedImageData: {
  alloc(): MSLoadedImageDataUninitialized;
  class(): MSLoadedImageData;
  imageFromPasteboard(pasteboard: NSPasteboard): MSLoadedImageData;
  imageFromFileURL(fileURL: NSURL): MSLoadedImageData;
  scalingFactorForFilename(filename: NSString | string): NSUInteger;
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

