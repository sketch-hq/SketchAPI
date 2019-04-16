interface MSTextureAtlasUninitialized<InitializedType = MSTextureAtlas> extends NSObjectUninitialized<MSTextureAtlas> {
  initWithTextures_colorSpace(textures: NSDictionary<any, any> | {[key: string]: any}, colorSpace: CGColorSpaceRef): InitializedType;
}

interface MSTextureAtlas extends NSObject {
  relativeRectForTextureNamed(name: NSString | string): CGRect;
  absoluteRectForTextureNamed(name: NSString | string): CGRect;
  textureForRenderer(renderer: any): any;
  relativeRectForResizeableTextureNamed_withEdgePaddings(name: NSString | string, paddings: BCEdgePaddings): CGRect;

  textures(): NSDictionary<any, any>;
  absoluteRects(): NSDictionary<any, any>;
  relativeRects(): NSDictionary<any, any>;
  atlasImage(): CGImageRef;
}

declare const MSTextureAtlas: {
  alloc(): MSTextureAtlasUninitialized;
  class(): MSTextureAtlas;
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

