interface MSCoreImageQueueUninitialized<InitializedType = MSCoreImageQueue> extends NSObjectUninitialized<MSCoreImageQueue> {}

interface MSCoreImageQueue extends NSObject {
}

declare const MSCoreImageQueue: {
  alloc(): MSCoreImageQueueUninitialized;
  class(): MSCoreImageQueue;
  drawImage_withEffect_inRect_fromObject_context_colorSpace_options(imageRef: CGImageRef, effect: MSCoreImageEffect, rect: CGRect, source: any, contextRef: CGContextRef, colorSpace: CGColorSpaceRef, options: MSRenderingRequestOptions): void;
  cachedImage_withEffect_fromObject_colorSpace(imageRef: CGImageRef, effect: MSCoreImageEffect, source: any, colorSpace: CGColorSpaceRef): MSLayerCachedImage;
  averageLuminanceOfImage(inputImage: CGImageRef): CGFloat;
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

